import express from "express"
import cors from "cors"
import Bytez from "bytez.js"
import dotenv from "dotenv"
import helmet from "helmet"
import rateLimit from "express-rate-limit"
import { body, validationResult } from "express-validator"

dotenv.config()

const app = express()

// Bytez Request Queuing System
let isBytezProcessing = false;
const bytezQueue = [];

const processBytezQueue = async () => {
  if (isBytezProcessing || bytezQueue.length === 0) return;
  
  isBytezProcessing = true;
  const { messages, resolve, reject } = bytezQueue.shift();
  
  try {
    const sdk = new Bytez(process.env.BYTEZ_API_KEY);
    const model = sdk.model("google/gemma-3-4b-it");
    
    if (process.env.NODE_ENV !== "production") {
      console.log("Processing Bytez request...");
    }
    
    const result = await model.run(messages);
    resolve(result);
  } catch (err) {
    reject(err);
  } finally {
    isBytezProcessing = false;
    processBytezQueue();
  }
};

const runModelQueued = (messages) => {
  return new Promise((resolve, reject) => {
    bytezQueue.push({ messages, resolve, reject });
    processBytezQueue();
  });
};

// 2. HELMET — HTTP SECURITY HEADERS
app.use(helmet())

// 7. REQUEST SIZE LIMIT
app.use(express.json({ limit: "10kb" }))

// 4. CORS LOCKDOWN
const allowedOrigins = [
  "http://localhost:5173",
  "https://smiles-clinic.vercel.app" // Optimized for Vercel deployment
]
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  }
}))

// 1. RATE LIMITING
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: { error: "Too many requests, please try again later." }
})

// Apply global rate limiter to ALL routes
app.use(limiter)

// Stricter limit on /api/chat specifically
const chatLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20, // 20 requests per 15 minutes per IP
  message: { error: "Too many chat requests, please try again in 15 minutes." }
})

if (process.env.NODE_ENV !== "production") {
  console.log("BYTEZ_API_KEY loaded:", process.env.BYTEZ_API_KEY ? "Yes" : "No")
}

// reCAPTCHA verification endpoint
app.post("/api/verify-captcha", async (req, res) => {
  try {
    const { token } = req.body
    const secret = process.env.RECAPTCHA_SECRET_KEY
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
      { method: "POST" }
    )
    const data = await response.json()
    res.json({ success: data.success })
  } catch (err) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Captcha verification error:", err)
    }
    res.status(500).json({ error: "Verification failed." })
  }
})

app.post("/api/chat", 
  chatLimiter,
  [
    body('messages').isArray({ max: 20 }).withMessage('Messages must be an array of max 20 items'),
    body('messages.*.role').isIn(['user', 'assistant', 'system']).withMessage('Invalid role'),
    body('messages.*.content').isString().isLength({ max: 2000 }).withMessage('Content too long or not a string')
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      const { messages } = req.body
      if (process.env.NODE_ENV !== "production") {
        console.log("Received messages:", JSON.stringify(messages?.length), "messages")
      }
      
      // Standardize messages with System Prompt if not present
      const SYSTEM_PROMPT = {
        role: "system",
        content: `You are a helpful dental clinic assistant for Smile's Clinic. 
Lead Doctor: Dr. Smiles
Clinic Name: Smile's Clinic
Phone: 9699766850
Address: Marine Drive, Mumbai, Maharashtra, India.
Hours: Mon-Sat 10am-9pm
Services: Multi-speciality dental care, including Root Canal, Implants, Whitening, and Orthodontics.
Appointment Booking: Via phone (9699766850), website booking form, or walk-in.
Emergency Contact: 9970352167

STRICT INSTRUCTIONS:
1. Only answer questions related to Smile's Clinic, its services, hours, location, and general dental health.
2. If the user asks about ANY unrelated topic (e.g., general knowledge, math, history, coding, sports, celebrities, etc.), you MUST politely decline. 
3. Sample rejection: "I'm sorry, I'm only trained to assist with dental-related inquiries for Smile's Clinic. How can I help you with your oral health today?"
4. Never diagnose conditions. Always suggest booking an appointment for specific concerns.
5. When a user wants to book, say: "You can book right now by calling on this number or by visiting the 'Book Now' page on the website!"`
      };

      const finalMessages = messages[0]?.role === 'system' ? messages : [SYSTEM_PROMPT, ...messages];
      
      const result = await runModelQueued(finalMessages)
      
      if (result.error) {
        throw new Error(typeof result.error === 'string' ? result.error : JSON.stringify(result.error))
      }
      
      let reply = result.output
      if (reply && typeof reply === 'object') {
        reply = reply.content || reply.message?.content || JSON.stringify(reply)
      }
      
      res.json({ reply })
    } catch (err) {
      // 6. ERROR HANDLING — NO STACK TRACES EXPOSED
      console.error("Backend error:", err)
      res.status(500).json({ error: "Something went wrong." })
    }
})

app.listen(3001, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log("Backend running on http://localhost:3001")
  }
})


import express from "express"
import cors from "cors"

import dotenv from "dotenv"
import helmet from "helmet"
import rateLimit from "express-rate-limit"
import { body, validationResult } from "express-validator"

dotenv.config()

const app = express()


// 2. HELMET — HTTP SECURITY HEADERS
app.use(helmet())

// 7. REQUEST SIZE LIMIT
app.use(express.json({ limit: "10kb" }))

// 4. CORS LOCKDOWN
const allowedOrigins = [
  "http://localhost:5173",
  "https://smileysclicnic.vercel.app"
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
  console.log("GROQ_API_KEY loaded:", process.env.GROQ_API_KEY ? "Yes" : "No")
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

app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid messages" })
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: messages,
          max_tokens: 500,
          temperature: 0.7
        })
      }
    )

    const data = await response.json()
    console.log("Groq response:", JSON.stringify(data))

    if (!response.ok) throw new Error(data.error?.message || "Groq API failed")

    const reply = data.choices?.[0]?.message?.content ||
                  "I couldn't process that. Please try again."

    res.status(200).json({ reply })
  } catch (err) {
    console.error("Chat error:", err.message)
    res.status(500).json({ error: err.message })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`))


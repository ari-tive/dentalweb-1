import Bytez from "bytez.js"

const cleanModelOutput = (raw) => {
  if (!raw || typeof raw !== 'string') return raw;
  const markers = ['assistantfinal', 'assistant final', '<|assistant|>'];
  for (const marker of markers) {
    const idx = raw.toLowerCase().indexOf(marker.toLowerCase());
    if (idx !== -1) {
      raw = raw.slice(idx + marker.length).trim();
      break;
    }
  }
  raw = raw.replace(/^<think>[\s\S]*?<\/think>/i, '').trim();
  if (/^analysis/i.test(raw)) {
    const match = raw.match(/\n([A-Z].+)/s);
    if (match) raw = match[1].trim();
  }
  return raw.trim();
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const { messages } = req.body
    
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
5. When a user wants to book, always include the phrase "book now" or "Book Now" in your reply so they can be redirected easily.
6. CRITICAL: Never show any internal reasoning, thinking, analysis, or planning in your reply. Respond directly, warmly, and concisely — like a friendly human receptionist would. Keep it natural and conversational; avoid robotic bullet-point lists.
7. CRITICAL: Keep every reply between 10–20 words maximum. Be brief and to the point.`
    };

    const finalMessages = messages[0]?.role === 'system' ? messages : [SYSTEM_PROMPT, ...messages];
    
    // Direct fetch to Bytez REST API to avoid Vercel Edge/Serverless SDK issues
    const response = await fetch(
      "https://api.bytez.com/models/v2/openai/gpt-oss-20b",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.BYTEZ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ messages: finalMessages, max_tokens: 500 })
      }
    )

    const data = await response.json()
    if (!response.ok) throw new Error(data.error || "Bytez API failed")

    let reply = data?.output ||
                data?.choices?.[0]?.message?.content ||
                data?.content ||
                "I couldn't process that. Please try again."

    if (typeof reply === 'object') {
      reply = reply.content || reply.message?.content || JSON.stringify(reply)
    }
    
    reply = cleanModelOutput(reply)
    
    res.status(200).json({ reply })
  } catch (err) {
    console.error("API error:", err.message)
    res.status(500).json({ error: err.message })
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }
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
          model: "llama-3.3-70b-versatile",
          messages: messages,
          max_tokens: 500,
          temperature: 0.7
        })
      }
    )

    const data = await response.json()
    if (!response.ok) throw new Error(data.error?.message || "Groq failed")

    const reply = data.choices?.[0]?.message?.content ||
                  "I couldn't process that. Please try again."

    res.status(200).json({ reply })
  } catch (err) {
    console.error("Chat error:", err.message)
    res.status(500).json({ error: err.message })
  }
}

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
      "https://api.bytez.com/models/v2/google/gemma-3-4b-it",
      {
        method: "POST",
        headers: {
          "Authorization": process.env.BYTEZ_API_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages,
          stream: false,
          params: {
            min_length: 10,
            max_length: 500,
            temperature: 0.7
          }
        })
      }
    )

    const data = await response.json()
    console.log("Bytez raw response:", JSON.stringify(data))

    if (data.error) throw new Error(data.error)

    const reply = data?.output?.content ||
                  "I couldn't process that. Please try again."

    res.status(200).json({ reply })
  } catch (err) {
    console.error("Chat error:", err.message)
    res.status(500).json({ error: err.message })
  }
}

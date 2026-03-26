export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" })
  }
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
    res.status(500).json({ error: "Verification failed." })
  }
}

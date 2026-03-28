async function test() {
  try {
    const key = "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";
    const messages = [
      { role: "system", content: "You are a helpful assistant." },
      { role: "assistant", content: "Hello! How can I help?" },
      { role: "user", content: "What is your name?" }
    ];
    
    console.log("Testing llama-3.3-70b-versatile...");
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: messages,
        max_tokens: 50,
        temperature: 0.7
      })
    });
    
    console.log("Status:", res.status);
    const data = await res.json();
    console.log("Data:", JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error:", err);
  }
}
test();

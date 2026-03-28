async function test() {
  try {
    const res = await fetch("https://dentalweb-1-production.up.railway.app/api/verify-captcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: "test" })
    });
    console.log("Status:", res.status);
    console.log("Headers:", JSON.stringify(Object.fromEntries(res.headers.entries()), null, 2));
    const text = await res.text();
    console.log("Body:", text);
  } catch (err) {
    console.error("Fetch failed:", err);
  }
}
test();

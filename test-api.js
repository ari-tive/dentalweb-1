

async function test() {
  try {
    const res = await fetch('https://smileysclicnic.vercel.app/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [{ role: 'user', content: 'test' }]
      })
    });
    
    if (res.headers.get('content-type')?.includes('application/json')) {
      const data = await res.json();
      console.log('JSON:', data);
    } else {
      const text = await res.text();
      console.log('TEXT Error (length ' + text.length + '):\n', text.substring(0, 500));
    }
    console.log('Status:', res.status);
  } catch (e) {
    console.error('Fetch error:', e);
  }
}
test();

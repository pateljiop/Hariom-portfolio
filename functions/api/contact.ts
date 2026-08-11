export async function onRequestPost(context) {
  const { request, env } = context;
  
  try {
    // 1. Grab the form data sent from the frontend
    const data = await request.json();
    
    // 2. Format the message for Telegram
    const messageText = `🚀 New Portfolio Message!\n\nName: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`;
    
    // 3. Securely hit the Telegram API using your Cloudflare environment variables
    const telegramUrl = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text: messageText,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send to Telegram');
    }

    // 4. Send a success response back to the frontend
    return new Response(JSON.stringify({ success: true }), { 
      status: 200, 
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Server Error' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const data = await request.json();

    const { name, email, message } = data;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ success: false, error: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    const messageText = `🚀 New Portfolio Message!\n\n👤 Name: ${name}\n📧 Email: ${email}\n💬 Message:\n${message}`;

    const telegramUrl = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: env.TELEGRAM_CHAT_ID,
        text: messageText,
      }),
    });

    const result = await response.json();

    if (!result.ok) {
      throw new Error(result.description || "Failed to send message to Telegram");
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
import { NextRequest, NextResponse } from 'next/server';
import { sendGmailMessage } from '@/lib/gmail';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const refreshToken = request.cookies.get('hariom_mailer_refresh')?.value;
  if (!refreshToken) return NextResponse.json({ error: 'Connect Gmail first.' }, { status: 401 });

  try {
    const body = await request.json();
    const to = String(body.to || '').trim();
    const subject = String(body.subject || '').trim();
    const text = String(body.text || '').trim();
    if (!to || !subject || !text) return NextResponse.json({ error: 'To, subject and message are required.' }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) return NextResponse.json({ error: 'Enter a valid recipient email.' }, { status: 400 });
    await sendGmailMessage(refreshToken, to, subject, text);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Gmail could not send this message.' }, { status: 500 });
  }
}

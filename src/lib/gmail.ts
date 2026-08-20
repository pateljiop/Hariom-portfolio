import { google } from 'googleapis';

export function getOAuthClient() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;
  if (!clientId || !clientSecret || !redirectUri) throw new Error('Missing Google OAuth environment variables.');
  return new google.auth.OAuth2(clientId, clientSecret, redirectUri);
}

export function getAuthUrl() {
  const client = getOAuthClient();
  return client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: ['https://www.googleapis.com/auth/gmail.send'],
  });
}

export function getGmail(refreshToken: string) {
  const client = getOAuthClient();
  client.setCredentials({ refresh_token: refreshToken });
  return google.gmail({ version: 'v1', auth: client });
}

function base64Url(value: string) {
  return Buffer.from(value).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export async function sendGmailMessage(refreshToken: string, to: string, subject: string, text: string) {
  const gmail = getGmail(refreshToken);
  const message = [`To: ${to}`, `Subject: ${subject}`, 'Content-Type: text/plain; charset=UTF-8', 'MIME-Version: 1.0', '', text].join('\r\n');
  return gmail.users.messages.send({ userId: 'me', requestBody: { raw: base64Url(message) } });
}

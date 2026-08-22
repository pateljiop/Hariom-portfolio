type GoogleTokens = {
  access_token?: string;
  refresh_token?: string;
  expires_in?: number;
  token_type?: string;
};

function getGoogleConfig() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const redirectUri = process.env.GOOGLE_REDIRECT_URI;
  if (!clientId || !clientSecret || !redirectUri) {
    throw new Error('Missing Google OAuth environment variables.');
  }
  return { clientId, clientSecret, redirectUri };
}

function buildAuthUrl() {
  const { clientId, redirectUri } = getGoogleConfig();
  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
    scope: 'https://www.googleapis.com/auth/gmail.send',
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}

export function getOAuthClient() {
  const { clientId, redirectUri } = getGoogleConfig();

  return {
    generateAuthUrl: () => buildAuthUrl(),
    async getToken(code: string) {
      const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          code,
          client_id: clientId,
          client_secret: process.env.GOOGLE_CLIENT_SECRET || '',
          redirect_uri: redirectUri,
          grant_type: 'authorization_code',
        }),
      });

      const tokens = (await response.json()) as GoogleTokens & { error?: string; error_description?: string };
      if (!response.ok || !tokens.access_token) {
        throw new Error(tokens.error_description || tokens.error || 'Google OAuth token exchange failed.');
      }
      return { tokens };
    },
  };
}

export function getAuthUrl() {
  return getOAuthClient().generateAuthUrl();
}

async function getAccessToken(refreshToken: string) {
  const { clientId, clientSecret } = getGoogleConfig();
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  });

  const tokens = (await response.json()) as GoogleTokens & { error?: string; error_description?: string };
  if (!response.ok || !tokens.access_token) {
    throw new Error(tokens.error_description || tokens.error || 'Google access token refresh failed.');
  }
  return tokens.access_token;
}

function base64Url(value: string) {
  return Buffer.from(value).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

export async function sendGmailMessage(refreshToken: string, to: string, subject: string, text: string) {
  const accessToken = await getAccessToken(refreshToken);
  const message = [`To: ${to}`, `Subject: ${subject}`, 'Content-Type: text/plain; charset=UTF-8', 'MIME-Version: 1.0', '', text].join('\r\n');

  const response = await fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ raw: base64Url(message) }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Gmail API send failed: ${errorBody}`);
  }

  return response.json();
}

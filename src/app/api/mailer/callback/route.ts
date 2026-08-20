import { NextRequest, NextResponse } from 'next/server';
import { getOAuthClient } from '@/lib/gmail';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code');
  if (!code) return NextResponse.redirect(new URL('/mailer?error=missing_code', request.url));

  try {
    const client = getOAuthClient();
    const { tokens } = await client.getToken(code);
    if (!tokens.refresh_token) return NextResponse.redirect(new URL('/mailer?error=no_refresh_token', request.url));
    const response = NextResponse.redirect(new URL('/mailer?connected=1', request.url));
    response.cookies.set('hariom_mailer_refresh', tokens.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    });
    return response;
  } catch {
    return NextResponse.redirect(new URL('/mailer?error=oauth_failed', request.url));
  }
}

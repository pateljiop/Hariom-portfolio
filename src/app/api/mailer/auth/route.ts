import { NextResponse } from 'next/server';
import { getAuthUrl } from '@/lib/gmail';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    return NextResponse.redirect(getAuthUrl());
  } catch {
    return NextResponse.json({ error: 'Google OAuth is not configured yet.' }, { status: 500 });
  }
}

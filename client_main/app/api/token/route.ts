import { NextResponse } from 'next/server';
import { getAccessToken } from '@auth0/nextjs-auth0';

let cachedToken: string | undefined;
let tokenExpiry: number | null = null;

export async function GET() {
  try {
    // Check if token is cached and valid
    if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
      return NextResponse.json({ token: cachedToken });
    }

    // Fetch a new access token
    const { accessToken } = await getAccessToken();

    // Cache the token and its expiry time
    cachedToken = accessToken;
    tokenExpiry = Date.now() + 60 * 60 * 1000; // Cache for 1 hour

    return NextResponse.json({ token: accessToken });
  } catch (error) {
    console.error('Failed to get access token:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

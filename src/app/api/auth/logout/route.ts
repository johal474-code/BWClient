import { NextRequest, NextResponse } from 'next/server';

// POST /api/auth/logout
export async function POST(request: NextRequest) {
  const response = NextResponse.json(
    { message: 'Logged out successfully' },
    { status: 200 }
  );

  response.cookies.set('authToken', '', {
    httpOnly: true,
    maxAge: 0,
  });

  return response;
}

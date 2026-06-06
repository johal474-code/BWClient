import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@/lib/auth';

// GET /api/auth/me
export async function GET(request: NextRequest) {
  try {
    const auth = getAuth(request);

    if (!auth) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    return NextResponse.json(auth);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: 500 }
    );
  }
}

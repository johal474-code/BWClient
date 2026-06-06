import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuth } from '@/lib/auth';

// GET /api/communications
export async function GET(request: NextRequest) {
  try {
    const auth = getAuth(request);
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const clientId = request.nextUrl.searchParams.get('clientId');

    if (!clientId) {
      return NextResponse.json(
        { error: 'clientId parameter required' },
        { status: 400 }
      );
    }

    const communications = await prisma.communication.findMany({
      where: { clientId },
      orderBy: { date: 'desc' },
    });

    return NextResponse.json(communications);
  } catch (error) {
    console.error('GET /api/communications error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch communications' },
      { status: 500 }
    );
  }
}

// POST /api/communications
export async function POST(request: NextRequest) {
  try {
    const auth = getAuth(request);
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    if (!body.clientId || !body.type || !body.notes) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const communication = await prisma.communication.create({
      data: {
        clientId: body.clientId,
        type: body.type,
        date: new Date(body.date || new Date()),
        subject: body.subject,
        notes: body.notes,
        outcome: body.outcome,
      },
    });

    return NextResponse.json(communication, { status: 201 });
  } catch (error) {
    console.error('POST /api/communications error:', error);
    return NextResponse.json(
      { error: 'Failed to create communication' },
      { status: 500 }
    );
  }
}

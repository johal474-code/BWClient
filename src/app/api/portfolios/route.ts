import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuth } from '@/lib/auth';

// GET /api/portfolios - Fetch all portfolios for a client
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

    const portfolios = await prisma.portfolio.findMany({
      where: { clientId },
      include: {
        holdings: true,
        transactions: { orderBy: { date: 'desc' }, take: 5 },
      },
    });

    return NextResponse.json(portfolios);
  } catch (error) {
    console.error('GET /api/portfolios error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch portfolios' },
      { status: 500 }
    );
  }
}

// POST /api/portfolios - Create a new portfolio
export async function POST(request: NextRequest) {
  try {
    const auth = getAuth(request);
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();

    if (!body.clientId || !body.name || !body.type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const portfolio = await prisma.portfolio.create({
      data: {
        clientId: body.clientId,
        name: body.name,
        type: body.type,
        currency: body.currency || 'GBP',
        totalValue: 0,
      },
    });

    return NextResponse.json(portfolio, { status: 201 });
  } catch (error) {
    console.error('POST /api/portfolios error:', error);
    return NextResponse.json(
      { error: 'Failed to create portfolio' },
      { status: 500 }
    );
  }
}

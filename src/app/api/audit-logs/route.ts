import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuth } from '@/lib/auth';

// GET /api/audit-logs
export async function GET(request: NextRequest) {
  try {
    const auth = getAuth(request);
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const clientId = request.nextUrl.searchParams.get('clientId');
    const limit = parseInt(request.nextUrl.searchParams.get('limit') || '100');

    const where = clientId ? { clientId } : {};

    const logs = await prisma.auditLog.findMany({
      where,
      include: { user: { select: { name: true, email: true } } },
      orderBy: { createdAt: 'desc' },
      take: limit,
    });

    return NextResponse.json(logs);
  } catch (error) {
    console.error('GET /api/audit-logs error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch audit logs' },
      { status: 500 }
    );
  }
}

// POST /api/audit-logs - Internal function to log actions
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.userId || !body.action) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const log = await prisma.auditLog.create({
      data: {
        userId: body.userId,
        clientId: body.clientId,
        action: body.action,
        changes: body.changes,
        ipAddress: body.ipAddress,
        userAgent: body.userAgent,
      },
    });

    return NextResponse.json(log, { status: 201 });
  } catch (error) {
    console.error('POST /api/audit-logs error:', error);
    return NextResponse.json(
      { error: 'Failed to create audit log' },
      { status: 500 }
    );
  }
}

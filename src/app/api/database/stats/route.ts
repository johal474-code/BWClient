import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getAuth } from '@/lib/auth';

interface TableStats {
  name: string;
  count: number;
  records: any[];
}

// GET /api/database/stats
export async function GET(request: NextRequest) {
  try {
    const auth = getAuth(request);
    if (!auth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Only admins can view database
    if (auth.role !== 'SUPER_ADMIN' && auth.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Insufficient permissions' },
        { status: 403 }
      );
    }

    const stats: TableStats[] = [];

    // Fetch stats for each table
    const userCount = await prisma.user.findMany({ select: { id: true } });
    stats.push({
      name: 'Users',
      count: userCount.length,
      records: (await prisma.user.findMany({
        select: { id: true, email: true, name: true, role: true, createdAt: true },
        take: 10,
      })) as any[],
    });

    const clientCount = await prisma.client.findMany({ select: { id: true } });
    stats.push({
      name: 'Clients',
      count: clientCount.length,
      records: (await prisma.client.findMany({
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          status: true,
          createdAt: true,
        },
        take: 10,
      })) as any[],
    });

    const portfolioCount = await prisma.portfolio.findMany({ select: { id: true } });
    stats.push({
      name: 'Portfolios',
      count: portfolioCount.length,
      records: (await prisma.portfolio.findMany({
        select: {
          id: true,
          name: true,
          type: true,
          totalValue: true,
          createdAt: true,
        },
        take: 10,
      })) as any[],
    });

    const documentCount = await prisma.document.findMany({ select: { id: true } });
    stats.push({
      name: 'Documents',
      count: documentCount.length,
      records: (await prisma.document.findMany({
        select: {
          id: true,
          title: true,
          type: true,
          uploadedAt: true,
        },
        take: 10,
      })) as any[],
    });

    const communicationCount = await prisma.communication.findMany({
      select: { id: true },
    });
    stats.push({
      name: 'Communications',
      count: communicationCount.length,
      records: (await prisma.communication.findMany({
        select: {
          id: true,
          type: true,
          subject: true,
          date: true,
        },
        take: 10,
      })) as any[],
    });

    const transactionCount = await prisma.transaction.findMany({
      select: { id: true },
    });
    stats.push({
      name: 'Transactions',
      count: transactionCount.length,
      records: (await prisma.transaction.findMany({
        select: {
          id: true,
          type: true,
          amount: true,
          date: true,
        },
        take: 10,
      })) as any[],
    });

    const auditLogCount = await prisma.auditLog.findMany({
      select: { id: true },
    });
    stats.push({
      name: 'Audit Logs',
      count: auditLogCount.length,
      records: (await prisma.auditLog.findMany({
        select: {
          id: true,
          action: true,
          createdAt: true,
        },
        take: 10,
      })) as any[],
    });

    return NextResponse.json(stats);
  } catch (error) {
    console.error('GET /api/database/stats error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch database stats' },
      { status: 500 }
    );
  }
}

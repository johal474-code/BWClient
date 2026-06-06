'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { useAuth } from '@/lib/context/auth-context';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const isAdmin = user?.role === 'SUPER_ADMIN' || user?.role === 'ADMIN';

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-64 h-screen bg-slate-900 text-white overflow-y-auto">
        <div className="p-6 border-b border-slate-700">
          <h1 className="text-2xl font-bold">BWClient</h1>
        </div>
        <nav className="p-6 space-y-2">
          <Link
            href="/dashboard"
            className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition"
          >
            📊 Dashboard
          </Link>
          <Link
            href="/dashboard/clients"
            className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition"
          >
            👥 Clients
          </Link>
          <Link
            href="/dashboard/portfolios"
            className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition"
          >
            📈 Portfolios
          </Link>
          <Link
            href="/dashboard/documents"
            className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition"
          >
            📄 Documents
          </Link>
          <Link
            href="/dashboard/audit"
            className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition"
          >
            🔍 Audit Log
          </Link>
          {isAdmin && (
            <>
              <div className="border-t border-slate-700 my-4"></div>
              <Link
                href="/dashboard/database"
                className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition bg-slate-800"
              >
                🗄️ Database Browser
              </Link>
            </>
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {children}
      </div>
    </div>
  );
}

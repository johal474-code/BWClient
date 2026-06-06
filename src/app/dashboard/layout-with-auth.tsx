'use client';

import ProtectedLayout from '@/components/protected-layout';
import { DashboardNavbar } from '@/components/dashboard-navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedLayout>
      <div className="min-h-screen bg-slate-50">
        {/* Sidebar */}
        <aside className="fixed left-0 top-0 w-64 h-screen bg-slate-900 text-white">
          <div className="p-6 border-b border-slate-700">
            <h1 className="text-2xl font-bold">BWClient</h1>
          </div>
          <nav className="p-6 space-y-2">
            <a
              href="/dashboard"
              className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition"
            >
              📊 Dashboard
            </a>
            <a
              href="/dashboard/clients"
              className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition"
            >
              👥 Clients
            </a>
            <a
              href="/dashboard/portfolios"
              className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition"
            >
              📈 Portfolios
            </a>
            <a
              href="/dashboard/documents"
              className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition"
            >
              📋 Documents
            </a>
            <a
              href="/dashboard/audit"
              className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition"
            >
              🔍 Audit Log
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="ml-64">
          <DashboardNavbar />
          <main className="p-8">{children}</main>
        </div>
      </div>
    </ProtectedLayout>
  );
}

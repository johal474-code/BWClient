'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-64 h-screen bg-slate-900 text-white">
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
            📋 Documents
          </Link>
          <Link
            href="/dashboard/audit"
            className="block px-4 py-3 rounded-lg hover:bg-slate-800 transition"
          >
            🔍 Audit Log
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 p-6 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-slate-900">Welcome Back</h2>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Logout
          </button>
        </header>

        {/* Page Content */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}

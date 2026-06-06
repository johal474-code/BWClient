'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/context/auth-context';

export function DashboardNavbar() {
  const router = useRouter();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  const isAdmin = user?.role === 'SUPER_ADMIN' || user?.role === 'ADMIN';

  return (
    <header className="bg-white border-b border-slate-200 p-6 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-semibold text-slate-900">Welcome, {user?.email}</h2>
        <p className="text-sm text-slate-500 mt-1">Role: {user?.role}</p>
      </div>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link
            href="/dashboard/database"
            className="px-3 py-2 text-sm text-slate-600 hover:text-slate-900 font-semibold border border-slate-300 rounded-lg hover:bg-slate-50 transition"
          >
            🗄️ Database
          </Link>
        )}
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

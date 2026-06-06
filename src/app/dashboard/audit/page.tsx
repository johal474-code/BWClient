'use client';

import { useEffect, useState } from 'react';
import ProtectedLayout from '@/components/protected-layout';

interface AuditLog {
  id: string;
  action: string;
  user: { name?: string; email: string };
  clientId?: string;
  changes?: string;
  createdAt: string;
}

export default function AuditPage() {
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAuditLogs();
  }, []);

  const fetchAuditLogs = async () => {
    try {
      const res = await fetch('/api/audit-logs?limit=50');
      const data = await res.json();
      setLogs(data);
    } catch (error) {
      console.error('Failed to fetch audit logs:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedLayout>
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Audit Log</h1>

        {loading ? (
          <p className="text-slate-600">Loading audit logs...</p>
        ) : (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {logs.length === 0 ? (
              <div className="p-8 text-center">
                <p className="text-slate-600">No audit logs yet</p>
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Action</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">User</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Client</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {logs.map(log => (
                    <tr key={log.id} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 text-sm text-slate-900 font-semibold">{log.action}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{log.user.email}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{log.clientId || '-'}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {new Date(log.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </ProtectedLayout>
  );
}

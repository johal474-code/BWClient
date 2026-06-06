'use client';

import { useEffect, useState } from 'react';
import ProtectedLayout from '@/components/protected-layout';

interface TableStats {
  name: string;
  count: number;
  records: any[];
}

export default function DatabasePage() {
  const [tables, setTables] = useState<TableStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTable, setSelectedTable] = useState<string | null>(null);

  useEffect(() => {
    fetchDatabaseStats();
  }, []);

  const fetchDatabaseStats = async () => {
    try {
      const res = await fetch('/api/database/stats');
      const data = await res.json();
      setTables(data);
      if (data.length > 0) {
        setSelectedTable(data[0].name);
      }
    } catch (error) {
      console.error('Failed to fetch database stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const selectedTableData = tables.find(t => t.name === selectedTable);

  return (
    <ProtectedLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">🗄️ Database Browser</h1>
          <p className="text-slate-600">View and manage your CMS database in real-time</p>
        </div>

        {loading ? (
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <p className="text-slate-600">Loading database...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar - Table List */}
            <div className="lg:col-span-1">
              <div className="bg-white p-4 rounded-lg shadow-sm sticky top-4">
                <h2 className="text-lg font-semibold text-slate-900 mb-4">Tables</h2>
                <div className="space-y-2">
                  {tables.map(table => (
                    <button
                      key={table.name}
                      onClick={() => setSelectedTable(table.name)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition ${
                        selectedTable === table.name
                          ? 'bg-blue-100 text-blue-900 font-semibold'
                          : 'hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{table.name}</span>
                        <span className="text-xs bg-slate-200 px-2 py-1 rounded">
                          {table.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content - Table Data */}
            <div className="lg:col-span-3">
              {selectedTableData ? (
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-slate-200 bg-slate-50">
                    <h2 className="text-xl font-semibold text-slate-900">
                      {selectedTableData.name}
                    </h2>
                    <p className="text-sm text-slate-600 mt-1">
                      Total records: <span className="font-semibold">{selectedTableData.count}</span>
                    </p>
                  </div>

                  {selectedTableData.count === 0 ? (
                    <div className="p-8 text-center">
                      <p className="text-slate-600">No records in this table yet</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead className="bg-slate-50 border-b border-slate-200">
                          <tr>
                            {Object.keys(selectedTableData.records[0] || {}).map(key => (
                              <th
                                key={key}
                                className="px-4 py-3 text-left font-semibold text-slate-900 whitespace-nowrap"
                              >
                                {key}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          {selectedTableData.records.map((record, idx) => (
                            <tr key={idx} className="hover:bg-slate-50 transition">
                              {Object.values(record).map((value: any, i) => (
                                <td key={i} className="px-4 py-3 text-slate-700">
                                  <div className="max-w-xs truncate">
                                    {value === null ? (
                                      <span className="text-slate-400 italic">null</span>
                                    ) : typeof value === 'boolean' ? (
                                      <span className={value ? 'text-green-600 font-semibold' : 'text-red-600'}>
                                        {String(value)}
                                      </span>
                                    ) : typeof value === 'object' ? (
                                      <span className="text-slate-500 font-mono text-xs">
                                        {JSON.stringify(value).substring(0, 50)}...
                                      </span>
                                    ) : (
                                      String(value).substring(0, 100)
                                    )}
                                  </div>
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <p className="text-slate-600">No tables available</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </ProtectedLayout>
  );
}

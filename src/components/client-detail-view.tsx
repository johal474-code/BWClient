'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  status: string;
  totalAssets?: number;
  riskProfile?: string;
  createdAt: string;
}

export function ClientDetailView({ clientId }: { clientId: string }) {
  const [client, setClient] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchClient();
  }, [clientId]);

  const fetchClient = async () => {
    try {
      const res = await fetch(`/api/clients/${clientId}`);
      const data = await res.json();
      setClient(data);
    } catch (error) {
      console.error('Failed to fetch client:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!client) return <p>Client not found</p>;

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              {client.firstName} {client.lastName}
            </h1>
            <p className="text-slate-600 mt-1">{client.email}</p>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
            {client.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-4 border-t border-slate-200">
          <div>
            <p className="text-sm text-slate-600">Phone</p>
            <p className="font-semibold text-slate-900">{client.phone || '-'}</p>
          </div>
          <div>
            <p className="text-sm text-slate-600">Total Assets</p>
            <p className="font-semibold text-slate-900">£{client.totalAssets?.toLocaleString() || '0'}</p>
          </div>
          <div>
            <p className="text-sm text-slate-600">Risk Profile</p>
            <p className="font-semibold text-slate-900">{client.riskProfile || '-'}</p>
          </div>
          <div>
            <p className="text-sm text-slate-600">Member Since</p>
            <p className="font-semibold text-slate-900">
              {new Date(client.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-slate-200">
        {['overview', 'portfolios', 'documents', 'communications', 'audit'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 font-semibold border-b-2 transition ${
              activeTab === tab
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        {activeTab === 'overview' && (
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Client Overview</h3>
            <p className="text-slate-600">Overview details coming soon...</p>
          </div>
        )}
        {activeTab === 'portfolios' && (
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Portfolios</h3>
            <p className="text-slate-600">Portfolio management coming soon...</p>
          </div>
        )}
        {activeTab === 'documents' && (
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Documents</h3>
            <p className="text-slate-600">Document management coming soon...</p>
          </div>
        )}
        {activeTab === 'communications' && (
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Communications</h3>
            <p className="text-slate-600">Communication log coming soon...</p>
          </div>
        )}
        {activeTab === 'audit' && (
          <div>
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Audit Trail</h3>
            <p className="text-slate-600">Audit logs coming soon...</p>
          </div>
        )}
      </div>
    </div>
  );
}

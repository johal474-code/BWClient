'use client';

import ProtectedLayout from '@/components/protected-layout';

export default function PortfoliosPage() {
  return (
    <ProtectedLayout>
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Portfolios</h1>
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <p className="text-slate-600 mb-4">Portfolio management coming soon</p>
        </div>
      </div>
    </ProtectedLayout>
  );
}

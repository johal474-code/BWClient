import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">BWClient</h1>
          <div className="space-x-4">
            <Link href="/login" className="px-4 py-2 text-slate-600 hover:text-slate-900">
              Login
            </Link>
            <Link href="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-5xl font-bold text-slate-900 mb-6">
          Client Management for Financial Advisors
        </h2>
        <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto">
          A modern CMS built for UK financial advice firms. Manage clients, portfolios,
          documents, and maintain full FCA compliance with ease.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-4">👥</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Client Profiles</h3>
            <p className="text-slate-600">
              Complete client information, demographics, and financial profiles in one place
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Portfolio Tracking</h3>
            <p className="text-slate-600">
              Monitor investments, asset allocation, and transaction history at a glance
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Compliance Ready</h3>
            <p className="text-slate-600">
              Full audit trails and document management for FCA compliance and regulations
            </p>
          </div>
        </div>

        <Link
          href="/login"
          className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </main>
    </div>
  );
}

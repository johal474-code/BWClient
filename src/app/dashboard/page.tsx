'use client';

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600">
          <p className="text-slate-600 text-sm mb-2">Total Clients</p>
          <p className="text-3xl font-bold text-slate-900">--</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-600">
          <p className="text-slate-600 text-sm mb-2">Assets Under Management</p>
          <p className="text-3xl font-bold text-slate-900">£--</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-600">
          <p className="text-slate-600 text-sm mb-2">Meetings This Month</p>
          <p className="text-3xl font-bold text-slate-900">--</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-600">
          <p className="text-slate-600 text-sm mb-2">Pending Reviews</p>
          <p className="text-3xl font-bold text-slate-900">--</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">Recent Activity</h2>
        <p className="text-slate-600">No recent activity yet. Start by adding your first client!</p>
      </div>
    </div>
  );
}

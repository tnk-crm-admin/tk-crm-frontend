import React from 'react';
import { Users, Settings, Database, Shield } from 'lucide-react';

function AdminDashboard() {
  const systemStats = [
    { label: 'Total Users', value: 4, icon: Users },
    { label: 'Active Sessions', value: 3, icon: Shield },
    { label: 'Database Size', value: '2.3 MB', icon: Database },
    { label: 'System Status', value: 'Healthy', icon: Settings },
  ];

  const recentActivity = [
    { user: 'Andrew', action: 'Logged in', time: '10 minutes ago' },
    { user: 'Yeoh', action: 'Updated CTA', time: '25 minutes ago' },
    { user: 'Ms. Chong', action: 'Created stock transfer', time: '1 hour ago' },
    { user: 'Tiffany', action: 'Viewed executive dashboard', time: '2 hours ago' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>

      {/* System Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-2">
            <a href="/admin/configuration" className="block p-3 text-blue-600 hover:bg-blue-50 rounded-lg transition">
              Configure System
            </a>
            <button className="w-full text-left p-3 text-blue-600 hover:bg-blue-50 rounded-lg transition">
              Manage Users
            </button>
            <button className="w-full text-left p-3 text-blue-600 hover:bg-blue-50 rounded-lg transition">
              View Audit Logs
            </button>
            <button className="w-full text-left p-3 text-blue-600 hover:bg-blue-50 rounded-lg transition">
              System Settings
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 border-b border-gray-200 last:border-b-0">
                <div>
                  <p className="font-medium text-gray-900">{activity.user}</p>
                  <p className="text-sm text-gray-600">{activity.action}</p>
                </div>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* System Health */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="font-semibold text-lg text-gray-900 mb-4">System Health</h3>
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Database Connection</span>
              <span className="text-xs font-semibold text-green-700">ONLINE</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">API Response Time</span>
              <span className="text-xs font-semibold text-green-700">85ms</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '85%' }}></div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Server Load</span>
              <span className="text-xs font-semibold text-green-700">32%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-600 h-2 rounded-full" style={{ width: '32%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

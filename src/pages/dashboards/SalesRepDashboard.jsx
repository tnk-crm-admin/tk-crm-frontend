import React, { useState } from 'react';
import { BarChart3, Briefcase, Target, Users, TrendingUp, AlertCircle, CheckCircle, Package } from 'lucide-react';
import DateRangeFilter from '../../components/DateRangeFilter';

function SalesRepDashboard() {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    endDate: new Date(),
  });

  // Demo data - would come from API
  const dashboardData = {
    openCTAs: 12,
    overdueCTAs: 2,
    ctaCompletionRate: 68,
    visitsThisMonth: 14,
    doctorsCovered: 8,
    opportunities: 6,
    casesGenerated: 3,
    salesRevenue: 45000,
  };

  const metrics = [
    {
      label: 'My Open CTAs',
      value: dashboardData.openCTAs,
      icon: AlertCircle,
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
    },
    {
      label: 'My Overdue CTAs',
      value: dashboardData.overdueCTAs,
      icon: AlertCircle,
      color: 'bg-red-100',
      textColor: 'text-red-600',
    },
    {
      label: 'CTA Completion %',
      value: `${dashboardData.ctaCompletionRate}%`,
      icon: CheckCircle,
      color: 'bg-green-100',
      textColor: 'text-green-600',
    },
    {
      label: 'Visits This Month',
      value: dashboardData.visitsThisMonth,
      icon: Users,
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
    },
    {
      label: 'Doctors Covered',
      value: dashboardData.doctorsCovered,
      icon: Users,
      color: 'bg-indigo-100',
      textColor: 'text-indigo-600',
    },
    {
      label: 'Opportunities',
      value: dashboardData.opportunities,
      icon: Target,
      color: 'bg-yellow-100',
      textColor: 'text-yellow-600',
    },
    {
      label: 'Cases Generated',
      value: dashboardData.casesGenerated,
      icon: TrendingUp,
      color: 'bg-teal-100',
      textColor: 'text-teal-600',
    },
    {
      label: 'Sales Revenue',
      value: `RM ${dashboardData.salesRevenue.toLocaleString()}`,
      icon: BarChart3,
      color: 'bg-emerald-100',
      textColor: 'text-emerald-600',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Date Range Filter */}
      <DateRangeFilter dateRange={dateRange} setDateRange={setDateRange} />

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-2">{metric.label}</p>
                  <p className={`text-3xl font-bold ${metric.textColor}`}>
                    {metric.value}
                  </p>
                </div>
                <div className={`${metric.color} p-3 rounded-lg`}>
                  <Icon className={`w-6 h-6 ${metric.textColor}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Open CTAs Table */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Recent CTAs</h3>
          <div className="space-y-3">
            {[
              { id: 1, doctor: 'Dr. Harmony', hospital: 'Parkcity Hospital', status: 'Follow Up', daysOpen: 3 },
              { id: 2, doctor: 'Dr. Akmal', hospital: 'KPJ 2', status: 'Waiting Response', daysOpen: 5 },
              { id: 3, doctor: 'Dr. Saravana', hospital: 'Pantai Hospital', status: 'Proposal Sent', daysOpen: 2 },
            ].map((cta) => (
              <div key={cta.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50">
                <div>
                  <p className="font-medium text-gray-900">{cta.doctor}</p>
                  <p className="text-sm text-gray-600">{cta.hospital}</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{cta.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* My Stock Status */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">My Stock Status</h3>
          <div className="space-y-3">
            {[
              { product: 'Foam Sets', count: 3, minimum: 2, status: 'OK' },
              { product: 'Canisters', count: 4, minimum: 2, status: 'OK' },
              { product: 'Emergency Kits', count: 1, minimum: 2, status: 'LOW' },
            ].map((stock, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{stock.product}</p>
                  <p className="text-sm text-gray-600">Current: {stock.count} | Min: {stock.minimum}</p>
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    stock.status === 'LOW'
                      ? 'bg-red-100 text-red-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {stock.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activity Summary */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="font-semibold text-lg text-gray-900 mb-4">Activity Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Visits</p>
            <p className="text-2xl font-bold text-blue-600">14</p>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Cases</p>
            <p className="text-2xl font-bold text-green-600">3</p>
            <p className="text-xs text-gray-500 mt-1">In progress</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Opportunities</p>
            <p className="text-2xl font-bold text-purple-600">6</p>
            <p className="text-xs text-gray-500 mt-1">Hot opportunities</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Revenue</p>
            <p className="text-2xl font-bold text-amber-600">RM 45K</p>
            <p className="text-xs text-gray-500 mt-1">This month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SalesRepDashboard;

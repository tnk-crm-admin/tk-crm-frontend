import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Target, Package, AlertCircle, DollarSign } from 'lucide-react';
import DateRangeFilter from '../../components/DateRangeFilter';

function ExecutiveDashboard() {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    endDate: new Date(),
  });

  const [selectedFilters, setSelectedFilters] = useState({
    territory: 'all',
    hospital: 'all',
    doctor: 'all',
    product: 'all',
  });

  // Demo data
  const salesPerformanceData = [
    { name: 'Andrew', visits: 14, cases: 3, revenue: 45000, conversion: '68%' },
    { name: 'Yeoh', visits: 18, cases: 5, revenue: 62000, conversion: '72%' },
  ];

  const ctaPerformanceData = [
    { name: 'Andrew', open: 12, completed: 8, rate: '68%' },
    { name: 'Yeoh', open: 15, completed: 11, rate: '72%' },
  ];

  const conversionData = [
    { stage: 'Prospect', count: 24 },
    { stage: 'Active Case', count: 8 },
    { stage: 'Converted', count: 8 },
  ];

  const revenueData = [
    { month: 'Jan', revenue: 45000, target: 50000 },
    { month: 'Feb', revenue: 52000, target: 50000 },
    { month: 'Mar', revenue: 48000, target: 50000 },
    { month: 'Apr', revenue: 62000, target: 60000 },
    { month: 'May', revenue: 58000, target: 60000 },
    { month: 'Jun', revenue: 67000, target: 60000 },
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b'];

  return (
    <div className="space-y-6">
      {/* Date Range and Filters */}
      <DateRangeFilter dateRange={dateRange} setDateRange={setDateRange} />

      {/* Quick Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <select
          value={selectedFilters.territory}
          onChange={(e) => setSelectedFilters({ ...selectedFilters, territory: e.target.value })}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Territories</option>
          <option value="kl">Kuala Lumpur</option>
          <option value="selangor">Selangor</option>
          <option value="penang">Penang</option>
        </select>

        <select
          value={selectedFilters.hospital}
          onChange={(e) => setSelectedFilters({ ...selectedFilters, hospital: e.target.value })}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Hospitals</option>
          <option value="gleneagles">Gleneagles</option>
          <option value="sunway">Sunway Medical</option>
          <option value="pantai">Pantai Hospital</option>
        </select>

        <select
          value={selectedFilters.product}
          onChange={(e) => setSelectedFilters({ ...selectedFilters, product: e.target.value })}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Products</option>
          <option value="welsuc">Welsuc</option>
          <option value="denu">DENU</option>
          <option value="topivac">TopiVac</option>
        </select>

        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition">
          Apply Filters
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Total Revenue</p>
              <p className="text-3xl font-bold text-green-600">RM 107K</p>
              <p className="text-xs text-gray-500 mt-2">+15% vs last month</p>
            </div>
            <div className="bg-green-100 p-3 rounded-lg">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Active Cases</p>
              <p className="text-3xl font-bold text-blue-600">8</p>
              <p className="text-xs text-gray-500 mt-2">3 in final stage</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Conversion Rate</p>
              <p className="text-3xl font-bold text-purple-600">70%</p>
              <p className="text-xs text-gray-500 mt-2">2% above target</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `RM ${value}`} />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#3b82f6" strokeWidth={2} name="Actual" />
              <Line type="monotone" dataKey="target" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" name="Target" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Conversion Pipeline */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Conversion Pipeline</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={conversionData} cx="50%" cy="50%" labelLine={false} label={({ name, count }) => `${name}: ${count}`} outerRadius={100} fill="#8884d8" dataKey="count">
                {conversionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Rep Performance */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">Sales Rep Performance</h3>
          <div className="space-y-3">
            {salesPerformanceData.map((rep, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-medium text-gray-900">{rep.name}</p>
                  <span className="text-sm font-semibold text-green-600">{rep.conversion}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Visits</p>
                    <p className="font-semibold text-gray-900">{rep.visits}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Cases</p>
                    <p className="font-semibold text-gray-900">{rep.cases}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Revenue</p>
                    <p className="font-semibold text-gray-900">RM {rep.revenue.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Performance Analysis */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-lg text-gray-900 mb-4">CTA Performance by Rep</h3>
          <div className="space-y-3">
            {ctaPerformanceData.map((rep, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <p className="font-medium text-gray-900">{rep.name}</p>
                  <span className="text-sm font-semibold text-blue-600">{rep.rate}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: rep.rate }}
                  ></div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm mt-3">
                  <div>
                    <p className="text-gray-600">Open</p>
                    <p className="font-semibold text-gray-900">{rep.open}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Completed</p>
                    <p className="font-semibold text-gray-900">{rep.completed}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Risk Alerts */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="font-semibold text-lg text-gray-900 mb-4 flex items-center space-x-2">
          <AlertCircle className="w-5 h-5 text-red-600" />
          <span>Risk Alerts & Opportunities</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="font-medium text-red-900 mb-2">Low Stock Alert</p>
            <p className="text-sm text-red-700">Emergency stock below minimum level for Andrew</p>
          </div>
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="font-medium text-amber-900 mb-2">Overdue CTA</p>
            <p className="text-sm text-amber-700">2 CTAs overdue - Yeoh follow-up required</p>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="font-medium text-blue-900 mb-2">High Opportunity</p>
            <p className="text-sm text-blue-700">Dr. Harmony ready for proposal - close this week</p>
          </div>
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="font-medium text-green-900 mb-2">Target Achievement</p>
            <p className="text-sm text-green-700">June revenue target achieved 112%</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExecutiveDashboard;

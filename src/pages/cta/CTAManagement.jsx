import React, { useState } from 'react';
import { Plus, Check, Clock, AlertCircle } from 'lucide-react';

function CTAManagement() {
  const [filter, setFilter] = useState('open');

  const ctas = [
    {
      id: 1,
      ctaNo: 'CTA-001',
      doctor: 'Dr. Harmony',
      hospital: 'Parkcity Hospital',
      type: 'Follow Up',
      dueDate: '2026-06-22',
      status: 'Open',
      daysOpen: 3,
      priority: 'High',
    },
    {
      id: 2,
      ctaNo: 'CTA-002',
      doctor: 'Dr. Akmal',
      hospital: 'KPJ 2',
      type: 'Proposal Submission',
      dueDate: '2026-06-21',
      status: 'Open',
      daysOpen: 5,
      priority: 'High',
    },
    {
      id: 3,
      ctaNo: 'CTA-003',
      doctor: 'Dr. Saravana',
      hospital: 'Pantai Hospital',
      type: 'Follow Up',
      dueDate: '2026-06-25',
      status: 'Overdue',
      daysOpen: 8,
      priority: 'Critical',
    },
    {
      id: 4,
      ctaNo: 'CTA-004',
      doctor: 'Dr. Lim',
      hospital: 'Gleneagles',
      type: 'Quotation Follow Up',
      dueDate: '2026-06-20',
      status: 'Completed',
      daysOpen: 2,
      priority: 'Medium',
    },
  ];

  const filteredCTAs = ctas.filter((cta) => {
    if (filter === 'open') return cta.status === 'Open';
    if (filter === 'overdue') return cta.status === 'Overdue';
    if (filter === 'completed') return cta.status === 'Completed';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">CTA Management</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <Plus className="w-5 h-5" />
          <span>New CTA</span>
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Open CTAs</p>
              <p className="text-2xl font-bold text-blue-600">2</p>
            </div>
            <Clock className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Overdue</p>
              <p className="text-2xl font-bold text-red-600">1</p>
            </div>
            <AlertCircle className="w-8 h-8 text-red-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-green-600">1</p>
            </div>
            <Check className="w-8 h-8 text-green-400" />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Completion Rate</p>
              <p className="text-2xl font-bold text-purple-600">33%</p>
            </div>
            <Clock className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex space-x-3">
        <button
          onClick={() => setFilter('open')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            filter === 'open'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Open
        </button>
        <button
          onClick={() => setFilter('overdue')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            filter === 'overdue'
              ? 'bg-red-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Overdue
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            filter === 'completed'
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            filter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All
        </button>
      </div>

      {/* CTAs Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-300">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-900">CTA No</th>
                <th className="text-left p-4 font-semibold text-gray-900">Doctor</th>
                <th className="text-left p-4 font-semibold text-gray-900">Hospital</th>
                <th className="text-left p-4 font-semibold text-gray-900">Type</th>
                <th className="text-left p-4 font-semibold text-gray-900">Due Date</th>
                <th className="text-left p-4 font-semibold text-gray-900">Days Open</th>
                <th className="text-left p-4 font-semibold text-gray-900">Priority</th>
                <th className="text-left p-4 font-semibold text-gray-900">Status</th>
                <th className="text-left p-4 font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredCTAs.map((cta) => (
                <tr key={cta.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-semibold text-blue-600">{cta.ctaNo}</td>
                  <td className="p-4 text-gray-900">{cta.doctor}</td>
                  <td className="p-4 text-gray-600">{cta.hospital}</td>
                  <td className="p-4 text-gray-600">{cta.type}</td>
                  <td className="p-4 text-gray-600">{cta.dueDate}</td>
                  <td className="p-4 text-gray-900">{cta.daysOpen}</td>
                  <td className="p-4">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        cta.priority === 'Critical'
                          ? 'bg-red-100 text-red-700'
                          : cta.priority === 'High'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {cta.priority}
                    </span>
                  </td>
                  <td className="p-4">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        cta.status === 'Completed'
                          ? 'bg-green-100 text-green-700'
                          : cta.status === 'Overdue'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {cta.status}
                    </span>
                  </td>
                  <td className="p-4">
                    {cta.status !== 'Completed' && (
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-xs">
                        {cta.status === 'Overdue' ? 'Act Now' : 'Update'}
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CTAManagement;

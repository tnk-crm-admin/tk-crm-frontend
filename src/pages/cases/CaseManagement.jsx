import React, { useState } from 'react';
import { Plus, Eye, Edit, Archive } from 'lucide-react';

function CaseManagement() {
  const [filter, setFilter] = useState('active');

  const cases = [
    {
      id: 1,
      caseNo: 'CASE-001',
      patient: 'Mdm Chong / Baljit',
      doctor: 'Dr. Harmony',
      hospital: 'Parkcity Hospital',
      product: 'Welsuc RH-450',
      status: 'Active',
      cycle: 4,
      startDate: '2026-05-15',
      lastUpdate: '2026-06-20',
    },
    {
      id: 2,
      caseNo: 'CASE-002',
      patient: 'Foo Chee Gate',
      doctor: 'Dr. Akmal',
      hospital: 'KPJ 2',
      product: 'Welsuc RH-450',
      status: 'Active',
      cycle: 2,
      startDate: '2026-06-01',
      lastUpdate: '2026-06-19',
    },
    {
      id: 3,
      caseNo: 'CASE-003',
      patient: 'Mr. Tan',
      doctor: 'Dr. Saravana',
      hospital: 'Pantai Hospital',
      product: 'Welsuc RH-450',
      status: 'Closed',
      cycle: 8,
      startDate: '2026-03-01',
      lastUpdate: '2026-06-15',
    },
  ];

  const filteredCases = cases.filter((c) => {
    if (filter === 'active') return c.status === 'Active';
    if (filter === 'closed') return c.status === 'Closed';
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Case Management</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          <Plus className="w-5 h-5" />
          <span>New Case</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex space-x-3">
        <button
          onClick={() => setFilter('active')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            filter === 'active'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Active Cases
        </button>
        <button
          onClick={() => setFilter('closed')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            filter === 'closed'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Closed Cases
        </button>
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            filter === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All Cases
        </button>
      </div>

      {/* Cases Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-300">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-900">Case No</th>
                <th className="text-left p-4 font-semibold text-gray-900">Patient</th>
                <th className="text-left p-4 font-semibold text-gray-900">Doctor</th>
                <th className="text-left p-4 font-semibold text-gray-900">Hospital</th>
                <th className="text-left p-4 font-semibold text-gray-900">Product</th>
                <th className="text-left p-4 font-semibold text-gray-900">Cycle</th>
                <th className="text-left p-4 font-semibold text-gray-900">Status</th>
                <th className="text-left p-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCases.map((caseItem) => (
                <tr key={caseItem.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-semibold text-blue-600">{caseItem.caseNo}</td>
                  <td className="p-4 text-gray-900">{caseItem.patient}</td>
                  <td className="p-4 text-gray-600">{caseItem.doctor}</td>
                  <td className="p-4 text-gray-600">{caseItem.hospital}</td>
                  <td className="p-4 text-gray-600">{caseItem.product}</td>
                  <td className="p-4 font-semibold text-gray-900">{caseItem.cycle}</td>
                  <td className="p-4">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        caseItem.status === 'Active'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {caseItem.status}
                    </span>
                  </td>
                  <td className="p-4 flex items-center space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="View">
                      <Eye className="w-4 h-4" />
                    </button>
                    {caseItem.status === 'Active' && (
                      <>
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition" title="Edit">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition" title="Close">
                          <Archive className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Case Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-sm text-gray-600 mb-2">Active Cases</p>
          <p className="text-3xl font-bold text-green-600">2</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-sm text-gray-600 mb-2">Closed Cases</p>
          <p className="text-3xl font-bold text-gray-600">1</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-sm text-gray-600 mb-2">Avg Cycles</p>
          <p className="text-3xl font-bold text-blue-600">4.7</p>
        </div>
      </div>
    </div>
  );
}

export default CaseManagement;

import React, { useState } from 'react';
import { Package, AlertCircle, TrendingDown, Users, Clock } from 'lucide-react';
import DateRangeFilter from '../../components/DateRangeFilter';

function OperationsDashboard() {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
    endDate: new Date(),
  });

  const stockLocations = [
    { location: 'Main Office Stock', value: 'RM 125,000', items: 87, status: 'OK' },
    { location: 'Andrew Staff Stock', value: 'RM 18,500', items: 12, status: 'LOW' },
    { location: 'Yeoh Staff Stock', value: 'RM 22,300', items: 15, status: 'OK' },
    { location: 'Hospital Consignment', value: 'RM 45,000', items: 28, status: 'OK' },
    { location: 'Demo/Trial Stock', value: 'RM 12,000', items: 8, status: 'OK' },
    { location: 'Emergency Stock', value: 'RM 8,500', items: 6, status: 'LOW' },
  ];

  const pendingTransfers = [
    { id: 1, from: 'Main Office', to: 'Andrew', product: 'Foam Sets', qty: 3, date: '2026-06-20', status: 'Pending Confirmation' },
    { id: 2, from: 'Main Office', to: 'Yeoh', product: 'Canisters', qty: 5, date: '2026-06-19', status: 'Received' },
    { id: 3, from: 'Hospital Consignment', to: 'Main Office', product: 'Unused Stock', qty: 2, date: '2026-06-18', status: 'Pending Confirmation' },
  ];

  return (
    <div className="space-y-6">
      {/* Date Range Filter */}
      <DateRangeFilter dateRange={dateRange} setDateRange={setDateRange} />

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Total Stock Value</p>
              <p className="text-2xl font-bold text-blue-600">RM 231.3K</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-lg">
              <Package className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Total Items</p>
              <p className="text-2xl font-bold text-purple-600">156</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-lg">
              <Package className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Low Stock Alerts</p>
              <p className="text-2xl font-bold text-red-600">2</p>
              <p className="text-xs text-gray-500 mt-2">Require action</p>
            </div>
            <div className="bg-red-100 p-3 rounded-lg">
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Pending Confirmations</p>
              <p className="text-2xl font-bold text-amber-600">2</p>
              <p className="text-xs text-gray-500 mt-2">Action needed</p>
            </div>
            <div className="bg-amber-100 p-3 rounded-lg">
              <Clock className="w-6 h-6 text-amber-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Stock by Location */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="font-semibold text-lg text-gray-900 mb-4">Stock Balance by Location</h3>
        <div className="space-y-3">
          {stockLocations.map((location, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
              <div className="flex-1">
                <p className="font-medium text-gray-900">{location.location}</p>
                <p className="text-sm text-gray-600">{location.items} items • {location.value}</p>
              </div>
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  location.status === 'LOW'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-green-100 text-green-700'
                }`}
              >
                {location.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Pending Stock Transfers */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="font-semibold text-lg text-gray-900 mb-4">Stock Transfers</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-300">
              <tr>
                <th className="text-left p-3 font-semibold text-gray-900">From</th>
                <th className="text-left p-3 font-semibold text-gray-900">To</th>
                <th className="text-left p-3 font-semibold text-gray-900">Product</th>
                <th className="text-left p-3 font-semibold text-gray-900">Qty</th>
                <th className="text-left p-3 font-semibold text-gray-900">Date</th>
                <th className="text-left p-3 font-semibold text-gray-900">Status</th>
                <th className="text-left p-3 font-semibold text-gray-900">Action</th>
              </tr>
            </thead>
            <tbody>
              {pendingTransfers.map((transfer) => (
                <tr key={transfer.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-3 text-gray-900">{transfer.from}</td>
                  <td className="p-3 text-gray-900">{transfer.to}</td>
                  <td className="p-3 text-gray-900">{transfer.product}</td>
                  <td className="p-3 text-gray-900">{transfer.qty}</td>
                  <td className="p-3 text-gray-600">{transfer.date}</td>
                  <td className="p-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-medium ${
                        transfer.status === 'Pending Confirmation'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {transfer.status}
                    </span>
                  </td>
                  <td className="p-3">
                    {transfer.status === 'Pending Confirmation' && (
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-xs">
                        Confirm
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stock Movement History */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="font-semibold text-lg text-gray-900 mb-4">Recent Stock Movements</h3>
        <div className="space-y-3">
          {[
            { type: 'Transfer Out', product: 'Foam Sets', qty: 3, from: 'Main Office', to: 'Andrew', date: '2026-06-20', givenBy: 'Ms. Chong', receivedBy: 'Andrew' },
            { type: 'Transfer In', product: 'Unused Dressing', qty: 5, from: 'Hospital', to: 'Main Office', date: '2026-06-19', givenBy: 'Yeoh', receivedBy: 'Ms. Chong' },
            { type: 'Used in Case', product: 'Canister', qty: 1, from: 'Andrew Stock', to: 'Case #001', date: '2026-06-18', givenBy: 'Andrew', receivedBy: 'Patient' },
          ].map((movement, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="font-medium text-gray-900">{movement.product}</p>
                  <p className="text-sm text-gray-600">{movement.from} → {movement.to}</p>
                </div>
                <span className="text-sm font-semibold text-gray-900">Qty: {movement.qty}</span>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{movement.givenBy} gave to {movement.receivedBy}</span>
                <span>{movement.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OperationsDashboard;

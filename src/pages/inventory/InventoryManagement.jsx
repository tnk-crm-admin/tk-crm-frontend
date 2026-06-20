import React, { useState } from 'react';
import { Plus, Edit, Trash2, AlertCircle, Package } from 'lucide-react';

function InventoryManagement() {
  const [showNewTransfer, setShowNewTransfer] = useState(false);

  const inventory = [
    { id: 1, sku: 'WELSUC-FOAM', product: 'Welsuc Foam Set', category: 'Medical', qty: 45, minQty: 10, status: 'OK', expiryDate: '2027-06-30' },
    { id: 2, sku: 'WELSUC-CAN', product: 'Welsuc Canister', category: 'Medical', qty: 28, minQty: 10, status: 'OK', expiryDate: '2027-03-15' },
    { id: 3, sku: 'DENU-POLISH', product: 'DENU Polishing Material', category: 'Dental', qty: 8, minQty: 15, status: 'LOW', expiryDate: '2027-12-31' },
    { id: 4, sku: 'TOPIVAC-DRAPE', product: 'TopiVac Drape', category: 'Medical', qty: 12, minQty: 5, status: 'OK', expiryDate: '2026-09-20' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Inventory Management</h1>
        <button
          onClick={() => setShowNewTransfer(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Plus className="w-5 h-5" />
          <span>New Transfer</span>
        </button>
      </div>

      {/* Low Stock Alert */}
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-red-900">Low Stock Alert</p>
          <p className="text-sm text-red-700">DENU Polishing Material is below minimum level. Current: 8 | Minimum: 15</p>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-300">
              <tr>
                <th className="text-left p-4 font-semibold text-gray-900">Product</th>
                <th className="text-left p-4 font-semibold text-gray-900">SKU</th>
                <th className="text-left p-4 font-semibold text-gray-900">Category</th>
                <th className="text-left p-4 font-semibold text-gray-900">Quantity</th>
                <th className="text-left p-4 font-semibold text-gray-900">Min Level</th>
                <th className="text-left p-4 font-semibold text-gray-900">Expiry Date</th>
                <th className="text-left p-4 font-semibold text-gray-900">Status</th>
                <th className="text-left p-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="p-4 font-medium text-gray-900">{item.product}</td>
                  <td className="p-4 text-gray-600">{item.sku}</td>
                  <td className="p-4 text-gray-600">{item.category}</td>
                  <td className="p-4 font-semibold text-gray-900">{item.qty}</td>
                  <td className="p-4 text-gray-600">{item.minQty}</td>
                  <td className="p-4 text-gray-600">{item.expiryDate}</td>
                  <td className="p-4">
                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        item.status === 'LOW'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-green-100 text-green-700'
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 flex items-center space-x-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Transfer Modal */}
      {showNewTransfer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">New Stock Transfer</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From Location</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Main Office Stock</option>
                  <option>Hospital Consignment</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To Location</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Andrew Staff Stock</option>
                  <option>Yeoh Staff Stock</option>
                  <option>Hospital Consignment</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Product</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Welsuc Foam Set</option>
                  <option>Welsuc Canister</option>
                  <option>DENU Polishing Material</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <input type="number" min="1" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" placeholder="0" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Remarks</label>
                <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" rows="3" placeholder="Add notes about this transfer..."></textarea>
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowNewTransfer(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  Create Transfer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default InventoryManagement;

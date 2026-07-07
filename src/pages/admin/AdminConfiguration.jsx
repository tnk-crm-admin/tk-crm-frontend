import React, { useState } from 'react';
import { Plus, Edit, Trash2, ChevronDown } from 'lucide-react';

function AdminConfiguration() {
  const [activeSection, setActiveSection] = useState('products');
  const [showNewItem, setShowNewItem] = useState(false);

  const sections = [
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'territories', label: 'Territories', icon: '🗺️' },
    { id: 'specialties', label: 'Specialties', icon: '🏥' },
    { id: 'roles', label: 'Roles & Permissions', icon: '👤' },
    { id: 'statuses', label: 'Status Types', icon: '✓' },
    { id: 'stock-locations', label: 'Stock Locations', icon: '📍' },
    { id: 'custom-fields', label: 'Custom Fields', icon: '⚙️' },
  ];

  const products = [
    { id: 1, name: 'Welsuc RH-450', category: 'Medical Device', brand: 'Guangzhou Rainhome', status: 'Active' },
    { id: 2, name: 'DENU Polishing', category: 'Dental', brand: 'HDI Korea', status: 'Active' },
    { id: 3, name: 'TopiVac', category: 'Medical Device', brand: 'TopiVac', status: 'Active' },
  ];

  const territories = [
    { id: 1, country: 'Malaysia', state: 'Kuala Lumpur', area: 'KL Metropolitan', status: 'Active' },
    { id: 2, country: 'Malaysia', state: 'Selangor', area: 'Klang Valley', status: 'Active' },
    { id: 3, country: 'Malaysia', state: 'Penang', area: 'Penang Island', status: 'Active' },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'products':
        return (
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Product Management</h3>
            <button
              onClick={() => setShowNewItem(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mb-4"
            >
              <Plus className="w-5 h-5" />
              <span>New Product</span>
            </button>
            <div className="space-y-2">
              {products.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.category} • {product.brand}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">{product.status}</span>
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'territories':
        return (
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Territory Management</h3>
            <button
              onClick={() => setShowNewItem(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mb-4"
            >
              <Plus className="w-5 h-5" />
              <span>New Territory</span>
            </button>
            <div className="space-y-2">
              {territories.map((territory) => (
                <div key={territory.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                  <div>
                    <p className="font-medium text-gray-900">{territory.area}</p>
                    <p className="text-sm text-gray-600">{territory.country} • {territory.state}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full font-medium">{territory.status}</span>
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'custom-fields':
        return (
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-4">Custom Fields</h3>
            <p className="text-gray-600 mb-4">Add custom fields to any entity without code changes.</p>
            <button
              onClick={() => setShowNewItem(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition mb-4"
            >
              <Plus className="w-5 h-5" />
              <span>Add Custom Field</span>
            </button>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Available for Custom Fields:</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Doctor', 'Hospital', 'Customer', 'Product', 'Case', 'User'].map((entity) => (
                  <div key={entity} className="p-3 bg-white rounded-lg border border-blue-200 text-center">
                    <p className="font-medium text-gray-900">{entity}</p>
                    <button className="mt-2 text-xs text-blue-600 hover:text-blue-700 font-medium">
                      Add Fields
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-center py-12">
            <p className="text-gray-600">Configuration for this section coming soon</p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">System Configuration</h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-left px-4 py-3 border-b border-gray-200 hover:bg-gray-50 transition ${
                  activeSection === section.id ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                }`}
              >
                <span className="text-lg mr-2">{section.icon}</span>
                <span className="font-medium text-gray-900">{section.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* New Item Modal */}
      {showNewItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Add New {sections.find(s => s.id === activeSection)?.label}</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowNewItem(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminConfiguration;

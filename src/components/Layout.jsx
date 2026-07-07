import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { Menu, X, LogOut, Settings, Home, Package, FileText, Users, BarChart3 } from 'lucide-react';

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Navigation items based on role
  const getNavItems = () => {
    const baseItems = [];

    if (user?.role === 'sales_rep') {
      return [
        { label: 'Dashboard', path: '/dashboard/sales', icon: Home },
        { label: 'Cases', path: '/cases', icon: FileText },
        { label: 'CTAs', path: '/cta', icon: BarChart3 },
        { label: 'My Stock', path: '/inventory/my-stock', icon: Package },
      ];
    }

    if (user?.role === 'manager') {
      return [
        { label: 'Operations', path: '/dashboard/operations', icon: Home },
        { label: 'Cases', path: '/cases', icon: FileText },
        { label: 'CTAs', path: '/cta', icon: BarChart3 },
        { label: 'Inventory', path: '/inventory/management', icon: Package },
      ];
    }

    if (user?.role === 'admin') {
      return [
        { label: 'Executive', path: '/dashboard/executive', icon: BarChart3 },
        { label: 'Cases', path: '/cases', icon: FileText },
        { label: 'Inventory', path: '/inventory/management', icon: Package },
        { label: 'Configuration', path: '/admin/configuration', icon: Settings },
      ];
    }

    return baseItems;
  };

  const navItems = getNavItems();

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-white shadow-lg transition-all duration-300 flex flex-col`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            {sidebarOpen && <h1 className="font-bold text-lg text-blue-600">T&K CRM</h1>}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                title={!sidebarOpen ? item.label : ''}
              >
                <Icon size={20} className="flex-shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="p-4 border-t border-gray-200 space-y-2">
          {sidebarOpen && (
            <div className="text-xs text-gray-600 truncate">
              <p className="font-medium">{user?.name}</p>
              <p className="capitalize">{user?.role?.replace('_', ' ')}</p>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition text-sm"
          >
            <LogOut size={18} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white shadow-sm p-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">
            {navItems.find((item) => item.path === location.pathname)?.label || 'T&K CRM'}
          </h2>
          <div className="text-sm text-gray-600">
            {new Date().toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import LoginPage from './pages/LoginPage';
import SalesRepDashboard from './pages/dashboards/SalesRepDashboard';
import ExecutiveDashboard from './pages/dashboards/ExecutiveDashboard';
import AdminDashboard from './pages/admin/AdminDashboard';
import OperationsDashboard from './pages/dashboards/OperationsDashboard';
import InventoryManagement from './pages/inventory/InventoryManagement';
import CaseManagement from './pages/cases/CaseManagement';
import CTAManagement from './pages/cta/CTAManagement';
import AdminConfiguration from './pages/admin/AdminConfiguration';
import Layout from './components/Layout';

function App() {
  const { user, isAuthenticated } = useAuthStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth token on mount
    const token = localStorage.getItem('authToken');
    if (token) {
      // Token validation would happen here
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading T&K CRM...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <LoginPage />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Sales Rep Routes */}
          {(user?.role === 'sales_rep' || user?.role === 'manager' || user?.role === 'admin') && (
            <>
              <Route path="/dashboard/sales" element={<SalesRepDashboard />} />
              <Route path="/cases" element={<CaseManagement />} />
              <Route path="/cta" element={<CTAManagement />} />
              <Route path="/inventory/my-stock" element={<InventoryManagement />} />
            </>
          )}

          {/* Manager Routes */}
          {(user?.role === 'manager' || user?.role === 'admin') && (
            <>
              <Route path="/inventory/management" element={<InventoryManagement />} />
              <Route path="/dashboard/operations" element={<OperationsDashboard />} />
            </>
          )}

          {/* Admin/Executive Routes */}
          {user?.role === 'admin' && (
            <>
              <Route path="/dashboard/executive" element={<ExecutiveDashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/configuration" element={<AdminConfiguration />} />
            </>
          )}

          {/* Default Routes */}
          <Route path="/" element={<Navigate to={`/dashboard/${user?.role === 'admin' ? 'executive' : 'sales'}`} />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

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
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading T&K CRM...</div>;
  }

  return (
    <Router>
      {!isAuthenticated ? (
        <LoginPage />
      ) : (
        <Layout>
          <Routes>
            <Route path="/dashboard/sales" element={<SalesRepDashboard />} />
            <Route path="/cases" element={<CaseManagement />} />
            <Route path="/cta" element={<CTAManagement />} />
            <Route path="/inventory/my-stock" element={<InventoryManagement />} />
            <Route path="/inventory/management" element={<InventoryManagement />} />
            <Route path="/dashboard/operations" element={<OperationsDashboard />} />
            <Route path="/dashboard/executive" element={<ExecutiveDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/configuration" element={<AdminConfiguration />} />
            <Route path="/" element={<Navigate to={user?.role === 'admin' ? '/dashboard/executive' : '/dashboard/sales'} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      )}
    </Router>
  );
}

export default App;

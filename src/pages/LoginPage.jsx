import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';
import { LogIn } from 'lucide-react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  // Demo credentials
  const demoAccounts = [
    { name: 'Andrew (Sales Rep)', email: 'andrew@tk.com', password: 'demo123' },
    { name: 'Yeoh (Dental Manager)', email: 'yeoh@tk.com', password: 'demo123' },
    { name: 'Ms. Chong (Operations)', email: 'chong@tk.com', password: 'demo123' },
    { name: 'Tiffany (Executive)', email: 'tiffany@tk.com', password: 'demo123' },
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const success = await login(email, password);
    if (success) {
      navigate('/');
    } else {
      setError('Invalid credentials. Please try again.');
    }
    setLoading(false);
  };

  const handleDemoLogin = async (demoEmail) => {
    setEmail(demoEmail);
    setLoading(true);
    setError('');

    const success = await login(demoEmail, 'demo123');
    if (success) {
      navigate('/');
    } else {
      setError('Demo login failed. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4">
            <LogIn className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">T&K CRM</h1>
          <p className="text-gray-600 mt-2">Sales & Case Management System</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="user@tk.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>

        {/* Demo Accounts */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="font-semibold text-gray-900 mb-4">Demo Accounts</h3>
          <div className="space-y-2">
            {demoAccounts.map((account, index) => (
              <button
                key={index}
                onClick={() => handleDemoLogin(account.email)}
                disabled={loading}
                className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <p className="font-medium text-gray-900">{account.name}</p>
                <p className="text-sm text-gray-500">{account.email}</p>
              </button>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-4">Password: demo123 for all accounts</p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

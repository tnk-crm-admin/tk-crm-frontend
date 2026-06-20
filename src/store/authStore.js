import { create } from 'zustand';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://tk-crm-backend.onrender.com/api';

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  // Login with email and password
  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
      });
      
      const { token, user } = response.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      // Set default auth header
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      
      set({
        user,
        isAuthenticated: true,
        loading: false,
        error: null,
      });
      
      return true;
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Login failed';
      set({
        isAuthenticated: false,
        loading: false,
        error: errorMessage,
      });
      return false;
    }
  },

  // Logout
  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    delete axios.defaults.headers.common['Authorization'];
    set({
      user: null,
      isAuthenticated: false,
      error: null,
    });
  },

  // Initialize auth from stored token
  initializeAuth: async () => {
    const token = localStorage.getItem('authToken');
    const storedUser = localStorage.getItem('user');
    
    if (token && storedUser) {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        set({
          user: JSON.parse(storedUser),
          isAuthenticated: true,
        });
      } catch (error) {
        set({ isAuthenticated: false });
      }
    }
  },

  // Update user profile
  updateUser: (userData) => {
    set((state) => ({
      user: { ...state.user, ...userData },
    }));
  },
}));

// Initialize auth on app load
useAuthStore.getState().initializeAuth();

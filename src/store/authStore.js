import { create } from 'zustand';

const demoUsers = {
  'andrew@tk.com': {
    id: 1,
    name: 'Andrew Yap',
    email: 'andrew@tk.com',
    role: 'sales_rep',
    department: 'Medical Sales'
  },
  'yeoh@tk.com': {
    id: 2,
    name: 'Yeoh',
    email: 'yeoh@tk.com',
    role: 'sales_rep',
    department: 'Dental / Medical Sales'
  },
  'chong@tk.com': {
    id: 3,
    name: 'Ms. Chong',
    email: 'chong@tk.com',
    role: 'manager',
    department: 'Accounts & Admin'
  },
  'tiffany@tk.com': {
    id: 4,
    name: 'Tiffany',
    email: 'tiffany@tk.com',
    role: 'admin',
    department: 'Owner / Admin'
  }
};

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  login: async (email, password) => {
    set({ loading: true, error: null });

    const normalizedEmail = email.toLowerCase().trim();

    if (demoUsers[normalizedEmail] && password === 'demo123') {
      const user = demoUsers[normalizedEmail];

      localStorage.setItem('authToken', 'demo-token');
      localStorage.setItem('user', JSON.stringify(user));

      set({
        user,
        isAuthenticated: true,
        loading: false,
        error: null,
      });

      return true;
    }

    set({
      user: null,
      isAuthenticated: false,
      loading: false,
      error: 'Invalid credentials',
    });

    return false;
  },

  logout: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');

    set({
      user: null,
      isAuthenticated: false,
      error: null,
    });
  },

  initializeAuth: async () => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      set({
        user: JSON.parse(storedUser),
        isAuthenticated: true,
      });
    }
  },

  updateUser: (userData) => {
    set((state) => ({
      user: { ...state.user, ...userData },
    }));
  },
}));

useAuthStore.getState().initializeAuth();

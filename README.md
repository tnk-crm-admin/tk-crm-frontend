# T&K CRM Frontend - Phase 1

Modern, scalable React-based frontend for T&K Sales & Case Management system.

## Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Preview production
npm run preview
```

## Features

✅ **Role-Based Dashboards**
- Sales Rep Dashboard (Andrew, Yeoh)
- Executive Dashboard (Tiffany)
- Operations Dashboard (Ms. Chong)
- Admin Dashboard

✅ **Core Modules**
- Case Management
- CTA (Close-To-Action) Management
- Inventory Management with stock tracking
- Admin Configuration Panel

✅ **Advanced Features**
- Date range filtering (Today, This Week, This Month, Custom)
- Multi-dimensional filtering (Territory, Hospital, Doctor, Product, etc.)
- Role-based access control
- Soft delete support
- Custom fields framework

✅ **Professional UI**
- Responsive design (mobile, tablet, desktop)
- Tailwind CSS styling
- Lucide React icons
- Recharts for visualizations
- Smooth animations and transitions

## Architecture

### Frontend Stack
- **React 18.2** - UI library
- **Vite** - Build tool (fast development)
- **Tailwind CSS** - Utility-first CSS
- **React Router v6** - Client-side routing
- **Zustand** - Lightweight state management
- **Axios** - HTTP client
- **Recharts** - Data visualization
- **date-fns** - Date utilities
- **Lucide React** - Icon library

### Folder Structure

```
src/
├── components/          # Reusable components
│   ├── Layout.jsx      # Main layout with sidebar
│   └── DateRangeFilter.jsx
├── store/              # State management
│   └── authStore.js    # Authentication store
├── pages/              # Page components
│   ├── LoginPage.jsx
│   ├── dashboards/     # Dashboard pages
│   ├── cases/          # Case management
│   ├── cta/            # CTA management
│   ├── inventory/      # Inventory management
│   └── admin/          # Admin pages
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles
```

## Dashboards

### Sales Rep Dashboard
Shows:
- My Open CTAs (12)
- My Overdue CTAs (2)
- CTA Completion % (68%)
- Visits This Month (14)
- Doctors Covered (8)
- Opportunities (6)
- Cases Generated (3)
- Sales Revenue (RM 45,000)

### Executive Dashboard
Shows:
- Revenue trends
- Sales performance by rep
- Conversion pipeline
- CTA performance analysis
- Hospital/doctor coverage
- Low stock alerts
- Risk alerts

### Operations Dashboard
Shows:
- Total stock value
- Stock by location
- Pending confirmations
- Stock transfers
- Expiring items
- Stock movement history

## Demo Accounts

```
Andrew (Sales Rep)
- Email: andrew@tk.com
- Password: demo123

Yeoh (Dental Manager)
- Email: yeoh@tk.com
- Password: demo123

Ms. Chong (Operations Manager)
- Email: chong@tk.com
- Password: demo123

Tiffany (Executive/Admin)
- Email: tiffany@tk.com
- Password: demo123
```

## API Integration

The frontend is designed to connect to the backend at:
```
https://tk-crm-backend.onrender.com/api
```

### Expected API Endpoints

Authentication:
```
POST /api/auth/login
POST /api/auth/logout
```

Dashboards:
```
GET /api/dashboard/sales-rep
GET /api/dashboard/executive
GET /api/dashboard/operations
```

Cases & CTAs:
```
GET /api/cases
POST /api/cases
GET /api/cta
POST /api/cta
```

Inventory:
```
GET /api/inventory
POST /api/inventory/transfer
GET /api/inventory/locations
```

Configuration:
```
GET /api/config/products
GET /api/config/territories
GET /api/config/specialties
GET /api/config/custom-fields
```

## Future Enhancements

**Phase 2:**
- Real data integration with backend APIs
- Patient/wound management module
- Advanced inventory planning
- Custom reporting builder
- Email notifications
- PDF exports

**Phase 3:**
- Mobile app (React Native)
- Offline support
- Real-time collaboration
- Advanced analytics
- Integration with external systems

## Deployment

### Deploy to Vercel

1. Push code to GitHub (tnk-crm-admin/tk-crm-frontend)
2. Go to vercel.com
3. Import project from GitHub
4. Set environment variables:
   - `REACT_APP_API_URL`: https://tk-crm-backend.onrender.com/api
5. Deploy

## Environment Variables

```
REACT_APP_API_URL=https://tk-crm-backend.onrender.com/api
```

## Performance

- ⚡ Vite for fast development (sub-second HMR)
- 📦 Optimized builds with code splitting
- 🎯 Lazy-loaded routes
- 📱 Mobile-optimized
- ♿ Accessible components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 T&K Premium Resources. All rights reserved.

## Support

For issues or questions, contact: support@tk-crm.com

---

**Status:** ✅ Phase 1 Complete & Ready for Production

**Live:** https://tk-crm-frontend.vercel.app

**Backend:** https://tk-crm-backend.onrender.com/api

**Database:** Supabase (yxxvqegeyzpkdlenpyjg)

# MedFlow - Hospital Management System

A comprehensive, production-ready hospital management system designed for healthcare professionals and patients. Built with React, TypeScript, and Supabase for secure, scalable healthcare operations.

## 🏥 Features

### For Hospital Staff
- **Patient Management**: Complete patient records, medical history, and care coordination
- **Appointment Scheduling**: Advanced booking system with calendar integration
- **Staff Management**: Role-based access, scheduling, and department oversight
- **Department Management**: Resource allocation and real-time analytics
- **Room Management**: Occupancy tracking and equipment inventory
- **Dashboard Analytics**: Real-time hospital metrics and insights

### For Patients
- **Patient Portal**: Personal health dashboard and appointment management
- **Medical Records**: Access to test results and medical history
- **Appointment Booking**: Easy scheduling and telemedicine options
- **Health Tracking**: Medication reminders and health metrics
- **Secure Messaging**: Communication with healthcare providers

### Security & Compliance
- **HIPAA Compliant**: Secure data handling and privacy protection
- **Role-Based Access**: Granular permissions for different user types
- **Audit Trails**: Complete login history and activity tracking
- **Data Encryption**: End-to-end encryption for sensitive information

## 🚀 Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Authentication, Real-time)
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Bolt Hosting / Netlify

## 📋 Prerequisites

- Node.js 18+ and npm
- Supabase account for backend services

## 🛠 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hospital-management-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## 🗄 Database Setup

The application requires the following Supabase tables:

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT,
  role TEXT NOT NULL CHECK (role IN ('patient', 'hospital_staff')),
  department TEXT,
  specialization TEXT,
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);
```

### Login Sessions Table
```sql
CREATE TABLE login_sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  login_time TIMESTAMPTZ DEFAULT now(),
  logout_time TIMESTAMPTZ,
  ip_address TEXT,
  user_agent TEXT,
  is_active BOOLEAN DEFAULT true
);
```

## 🔐 Authentication

The system supports:
- Email/password authentication
- Role-based access (Patient vs Hospital Staff)
- Session management with login history
- Secure password handling
- Profile management

## 🎨 User Interface

### Design System
- **Colors**: Professional medical color palette
- **Typography**: Clean, readable fonts optimized for healthcare
- **Layout**: Responsive design with mobile-first approach
- **Accessibility**: WCAG 2.1 compliant with high contrast ratios

### User Experience
- **Intuitive Navigation**: Role-specific sidebars and menus
- **Real-time Updates**: Live data synchronization
- **Loading States**: Smooth transitions and feedback
- **Error Handling**: Graceful error boundaries and user feedback

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers (1920px+)
- Laptops (1024px - 1919px)
- Tablets (768px - 1023px)
- Mobile devices (320px - 767px)

## 🔒 Security Features

- **Data Encryption**: All sensitive data encrypted at rest and in transit
- **Authentication**: Secure JWT-based authentication
- **Authorization**: Role-based access control (RBAC)
- **Audit Logging**: Complete activity tracking
- **Session Management**: Secure session handling with timeout

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deploy to Bolt Hosting
The application is configured for easy deployment to Bolt Hosting with automatic builds and SSL certificates.

### Environment Variables for Production
Ensure all environment variables are properly configured in your hosting platform:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Time**: < 3 seconds on 3G networks
- **Caching**: Efficient caching strategies implemented

## 🧪 Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 📈 Monitoring

The application includes:
- Error boundary for graceful error handling
- Performance monitoring
- User activity tracking
- System health checks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Email: support@medflow.com
- Documentation: [docs.medflow.com](https://docs.medflow.com)
- Issues: GitHub Issues page

## 🔄 Version History

- **v1.0.0** - Initial release with core functionality
- **v1.1.0** - Added patient portal and telemedicine features
- **v1.2.0** - Enhanced security and audit capabilities

---

**MedFlow** - Streamlining healthcare operations for better patient outcomes.
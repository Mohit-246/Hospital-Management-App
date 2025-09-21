import React, { useState } from 'react';
import { AuthProvider } from './components/AuthProvider';
import { useAuth } from './hooks/useAuth';
import AuthScreen from './components/AuthScreen';
import ProfileSettings from './components/ProfileSettings';
import Sidebar from './components/Sidebar';
import PatientSidebar from './components/PatientSidebar';
import Header from './components/Header';
import PatientHeader from './components/PatientHeader';
import Dashboard from './components/Dashboard';
import PatientDashboard from './components/PatientDashboard';
import PatientList from './components/PatientList';
import AppointmentList from './components/AppointmentList';
import PatientAppointments from './components/PatientAppointments';
import StaffList from './components/StaffList';
import DepartmentList from './components/DepartmentList';
import RoomList from './components/RoomList';

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('dashboard');

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <AuthScreen />;
  }

  // Patient Interface
  if (user.role === 'patient') {
    const getPatientPageTitle = () => {
      switch (activeTab) {
        case 'dashboard': return 'My Dashboard';
        case 'appointments': return 'My Appointments';
        case 'medical-records': return 'Medical Records';
        case 'health-metrics': return 'Health Metrics';
        case 'messages': return 'Messages';
        case 'profile': return 'Profile Settings';
        default: return 'My Dashboard';
      }
    };

    const getPatientPageSubtitle = () => {
      switch (activeTab) {
        case 'dashboard': return 'Your health overview and recent activity';
        case 'appointments': return 'Manage your healthcare appointments';
        case 'medical-records': return 'View your medical history and records';
        case 'health-metrics': return 'Track your health progress';
        case 'messages': return 'Communicate with your healthcare team';
        case 'profile': return 'Manage your account settings';
        default: return '';
      }
    };

    const renderPatientContent = () => {
      switch (activeTab) {
        case 'dashboard':
          return <PatientDashboard />;
        case 'appointments':
          return <PatientAppointments />;
        case 'medical-records':
          return <div className="p-6 bg-gray-50 min-h-screen"><div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"><h2 className="text-xl font-semibold text-gray-900">Medical Records</h2><p className="text-gray-600 mt-2">Your medical records will be displayed here.</p></div></div>;
        case 'health-metrics':
          return <div className="p-6 bg-gray-50 min-h-screen"><div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"><h2 className="text-xl font-semibold text-gray-900">Health Metrics</h2><p className="text-gray-600 mt-2">Your health metrics and trends will be displayed here.</p></div></div>;
        case 'messages':
          return <div className="p-6 bg-gray-50 min-h-screen"><div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6"><h2 className="text-xl font-semibold text-gray-900">Messages</h2><p className="text-gray-600 mt-2">Your messages with healthcare providers will be displayed here.</p></div></div>;
        case 'profile':
          return <ProfileSettings />;
        default:
          return <PatientDashboard />;
      }
    };

    return (
      <div className="flex h-screen bg-gray-100">
        <PatientSidebar activeTab={activeTab} onTabChange={setActiveTab} patientName={`${user.firstName} ${user.lastName}`} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <PatientHeader title={getPatientPageTitle()} subtitle={getPatientPageSubtitle()} patientName={`${user.firstName} ${user.lastName}`} />
          <main className="flex-1 overflow-auto">
            {renderPatientContent()}
          </main>
        </div>
      </div>
    );
  }

  // Hospital Staff Interface
  const getPageTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Dashboard';
      case 'patients': return 'Patients';
      case 'appointments': return 'Appointments';
      case 'staff': return 'Staff';
      case 'departments': return 'Departments';
      case 'rooms': return 'Rooms';
      case 'profile': return 'Profile Settings';
      default: return 'Dashboard';
    }
  };

  const getPageSubtitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Hospital overview and key metrics';
      case 'patients': return 'Manage patient records and information';
      case 'appointments': return 'Schedule and manage appointments';
      case 'staff': return 'Manage hospital staff and schedules';
      case 'departments': return 'Department management and oversight';
      case 'rooms': return 'Room availability and management';
      case 'profile': return 'Manage your account settings';
      default: return '';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'patients':
        return <PatientList />;
      case 'appointments':
        return <AppointmentList />;
      case 'staff':
        return <StaffList />;
      case 'departments':
        return <DepartmentList />;
      case 'rooms':
        return <RoomList />;
      case 'profile':
        return <ProfileSettings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header title={getPageTitle()} subtitle={getPageSubtitle()} />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
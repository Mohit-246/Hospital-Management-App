import React, { useState } from 'react';
import { User } from './types';
import LoginScreen from './components/LoginScreen';
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

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!user) {
    return <LoginScreen onLogin={setUser} />;
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
        default:
          return <PatientDashboard />;
      }
    };

    return (
      <div className="flex h-screen bg-gray-100">
        <PatientSidebar activeTab={activeTab} onTabChange={setActiveTab} patientName={user.name} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <PatientHeader title={getPatientPageTitle()} subtitle={getPatientPageSubtitle()} patientName={user.name} />
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

export default App;
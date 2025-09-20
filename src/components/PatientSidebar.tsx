import React from 'react';
import { 
  User, 
  Calendar, 
  FileText, 
  Heart, 
  MessageCircle,
  Bell,
  Settings,
  LogOut
} from 'lucide-react';

interface PatientSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  patientName: string;
}

const PatientSidebar: React.FC<PatientSidebarProps> = ({ activeTab, onTabChange, patientName }) => {
  const menuItems = [
    { id: 'dashboard', label: 'My Dashboard', icon: User },
    { id: 'appointments', label: 'My Appointments', icon: Calendar },
    { id: 'medical-records', label: 'Medical Records', icon: FileText },
    { id: 'health-metrics', label: 'Health Metrics', icon: Heart },
    { id: 'messages', label: 'Messages', icon: MessageCircle },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-teal-600 to-teal-700 min-h-screen text-white">
      <div className="p-6 border-b border-teal-500">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-teal-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Patient Portal</h1>
            <p className="text-teal-200 text-sm">Welcome, {patientName}</p>
          </div>
        </div>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-white text-teal-700 shadow-md'
                      : 'text-teal-100 hover:bg-teal-500 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-teal-500">
        <div className="flex items-center justify-between">
          <button className="p-2 text-teal-200 hover:text-white rounded-lg hover:bg-teal-500">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-teal-200 hover:text-white rounded-lg hover:bg-teal-500">
            <Settings className="w-5 h-5" />
          </button>
          <button className="p-2 text-teal-200 hover:text-white rounded-lg hover:bg-teal-500">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientSidebar;
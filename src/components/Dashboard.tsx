import React from 'react';
import { Users, Calendar, Building2, Bed, TrendingUp, AlertTriangle } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    {
      label: 'Total Patients',
      value: '247',
      change: '+12%',
      trend: 'up',
      icon: Users,
      color: 'blue'
    },
    {
      label: 'Today\'s Appointments',
      value: '32',
      change: '+5%',
      trend: 'up',
      icon: Calendar,
      color: 'green'
    },
    {
      label: 'Available Rooms',
      value: '18',
      change: '-3',
      trend: 'down',
      icon: Bed,
      color: 'orange'
    },
    {
      label: 'Staff On Duty',
      value: '45',
      change: '+2',
      trend: 'up',
      icon: Building2,
      color: 'purple'
    }
  ];

  const recentActivities = [
    { time: '10:30 AM', activity: 'New patient admitted to Room 205', type: 'admission' },
    { time: '10:15 AM', activity: 'Emergency case assigned to Dr. Chen', type: 'emergency' },
    { time: '09:45 AM', activity: 'Surgery completed successfully', type: 'surgery' },
    { time: '09:30 AM', activity: 'Room 103 cleaned and ready for next patient', type: 'maintenance' },
    { time: '09:15 AM', activity: 'Lab results uploaded for patient in Room 301', type: 'lab' },
    { time: '09:00 AM', activity: 'Morning shift handover completed', type: 'shift' }
  ];

  const criticalPatients = [
    { name: 'Patient A', room: '205', condition: 'Critical', doctor: 'Dr. Michael Chen' },
    { name: 'Patient B', room: '301', condition: 'Critical', doctor: 'Dr. Sarah Wilson' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-${stat.color}-100`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <TrendingUp className={`w-4 h-4 mr-1 ${
                  stat.trend === 'up' ? 'text-green-500' : 'text-red-500'
                }`} />
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
                <span className="text-gray-500 text-sm ml-2">from last week</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.activity}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Critical Patients</h3>
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <div className="space-y-4">
            {criticalPatients.map((patient, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{patient.name}</p>
                    <p className="text-sm text-gray-600">Room {patient.room} • {patient.doctor}</p>
                  </div>
                  <span className="px-2 py-1 text-xs font-medium text-red-700 bg-red-100 rounded-full">
                    {patient.condition}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Department Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Cardiology', 'Emergency', 'ICU', 'Surgery'].map((dept) => (
            <div key={dept} className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">{dept}</h4>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Occupancy</span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
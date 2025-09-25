import React from 'react';
import { Calendar, Heart, FileText, Clock, AlertCircle, CheckCircle } from 'lucide-react';

const PatientDashboard: React.FC = () => {
  const upcomingAppointments = [
    { date: '2024-01-18', time: '10:00 AM', doctor: 'Dr. Sarah Wilson', type: 'Cardiology Checkup' },
    { date: '2024-01-25', time: '2:30 PM', doctor: 'Dr. Michael Chen', type: 'Follow-up' },
  ];

  const recentResults = [
    { test: 'Blood Pressure', result: '120/80 mmHg', status: 'Normal', date: '2024-01-15' },
    { test: 'Heart Rate', result: '72 bpm', status: 'Normal', date: '2024-01-15' },
    { test: 'Blood Sugar', result: '95 mg/dL', status: 'Normal', date: '2024-01-10' },
  ];

  const medications = [
    { name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', nextDose: '8:00 AM' },
    { name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', nextDose: '6:00 PM' },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl text-white p-6 mb-6">
        <h1 className="text-2xl font-bold mb-2">Welcome back!</h1>
        <p className="text-teal-100">Here's your health overview for today</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Next Appointment</p>
              <p className="text-lg font-bold text-gray-900">Jan 18</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Health Score</p>
              <p className="text-lg font-bold text-gray-900">85/100</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Test Results</p>
              <p className="text-lg font-bold text-gray-900">3 New</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Medications</p>
              <p className="text-lg font-bold text-gray-900">2 Active</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Upcoming Appointments */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h3>
          <div className="space-y-4">
            {upcomingAppointments.map((appointment, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{appointment.type}</p>
                    <p className="text-sm text-gray-600">{appointment.doctor}</p>
                    <p className="text-sm text-gray-500">{appointment.date} at {appointment.time}</p>
                  </div>
                  <button className="text-teal-600 hover:text-teal-800 font-medium text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Test Results */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Test Results</h3>
          <div className="space-y-4">
            {recentResults.map((result, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{result.test}</p>
                  <p className="text-sm text-gray-600">{result.result}</p>
                  <p className="text-xs text-gray-500">{result.date}</p>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm font-medium text-green-600">{result.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Current Medications */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Current Medications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {medications.map((medication, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-gray-900">{medication.name}</h4>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {medication.dosage}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{medication.frequency}</p>
              <div className="flex items-center text-sm text-orange-600">
                <Clock className="w-4 h-4 mr-1" />
                Next dose: {medication.nextDose}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
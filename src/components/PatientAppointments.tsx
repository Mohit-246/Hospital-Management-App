import React, { useState } from 'react';
import { Calendar, Clock, Plus, Video, MapPin } from 'lucide-react';

const PatientAppointments: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');

  const upcomingAppointments = [
    {
      id: '1',
      date: '2024-01-18',
      time: '10:00 AM',
      doctor: 'Dr. Sarah Wilson',
      specialty: 'Cardiology',
      type: 'In-Person',
      location: 'Room 205, Cardiology Wing',
      status: 'Confirmed'
    },
    {
      id: '2',
      date: '2024-01-25',
      time: '2:30 PM',
      doctor: 'Dr. Michael Chen',
      specialty: 'General Medicine',
      type: 'Telemedicine',
      location: 'Video Call',
      status: 'Confirmed'
    }
  ];

  const pastAppointments = [
    {
      id: '3',
      date: '2024-01-10',
      time: '9:00 AM',
      doctor: 'Dr. Sarah Wilson',
      specialty: 'Cardiology',
      type: 'In-Person',
      location: 'Room 205, Cardiology Wing',
      status: 'Completed'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-100 text-green-800 border-green-200';
      case 'Completed': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Cancelled': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const appointments = selectedTab === 'upcoming' ? upcomingAppointments : pastAppointments;

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">My Appointments</h2>
              <p className="text-gray-600">Manage your healthcare appointments</p>
            </div>
            <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>
          
          <div className="flex space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setSelectedTab('upcoming')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedTab === 'upcoming'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setSelectedTab('past')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                selectedTab === 'past'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Past Appointments
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div key={appointment.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                      <p className="text-sm text-gray-600">{appointment.specialty}</p>
                    </div>
                  </div>
                  <span className={`inline-flex px-3 py-1 text-sm font-medium rounded-full border ${getStatusColor(appointment.status)}`}>
                    {appointment.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(appointment.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {appointment.time}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    {appointment.type === 'Telemedicine' ? (
                      <Video className="w-4 h-4 mr-2" />
                    ) : (
                      <MapPin className="w-4 h-4 mr-2" />
                    )}
                    {appointment.location}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      appointment.type === 'Telemedicine' 
                        ? 'bg-purple-100 text-purple-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {appointment.type}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {selectedTab === 'upcoming' && (
                      <>
                        {appointment.type === 'Telemedicine' && (
                          <button className="text-purple-600 hover:text-purple-800 font-medium text-sm">
                            Join Video Call
                          </button>
                        )}
                        <button className="text-teal-600 hover:text-teal-800 font-medium text-sm">
                          Reschedule
                        </button>
                        <button className="text-red-600 hover:text-red-800 font-medium text-sm">
                          Cancel
                        </button>
                      </>
                    )}
                    {selectedTab === 'past' && (
                      <button className="text-teal-600 hover:text-teal-800 font-medium text-sm">
                        View Summary
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {appointments.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <div className="text-gray-500">
                {selectedTab === 'upcoming' 
                  ? 'No upcoming appointments scheduled' 
                  : 'No past appointments found'
                }
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientAppointments;
import React, { useState } from 'react';
import { Bed, Filter, Plus, Eye, Edit, Wrench, User, CheckCircle, AlertCircle } from 'lucide-react';
import { Room } from '../types';
import { mockRooms } from '../data/mockData';

const RoomList: React.FC = () => {
  const [rooms] = useState<Room[]>(mockRooms);
  const [filterType, setFilterType] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [filterDepartment, setFilterDepartment] = useState('All');

  const filteredRooms = rooms.filter(room => {
    const matchesType = filterType === 'All' || room.type === filterType;
    const matchesStatus = filterStatus === 'All' || room.status === filterStatus;
    const matchesDepartment = filterDepartment === 'All' || room.department === filterDepartment;
    return matchesType && matchesStatus && matchesDepartment;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Occupied': return 'bg-red-100 text-red-800 border-red-200';
      case 'Available': return 'bg-green-100 text-green-800 border-green-200';
      case 'Maintenance': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Occupied': return <User className="w-4 h-4" />;
      case 'Available': return <CheckCircle className="w-4 h-4" />;
      case 'Maintenance': return <Wrench className="w-4 h-4" />;
      default: return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'ICU': return 'bg-purple-100 text-purple-800';
      case 'Surgery': return 'bg-red-100 text-red-800';
      case 'Emergency': return 'bg-orange-100 text-orange-800';
      case 'General': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const departments = ['All', 'Cardiology', 'Emergency', 'ICU', 'Surgery'];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Room Management</h2>
              <p className="text-gray-600">Monitor room availability and manage assignments</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Room</span>
            </button>
          </div>
          
          <div className="flex items-center space-x-4 flex-wrap gap-2">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept === 'All' ? 'All Departments' : dept}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Types</option>
                <option value="General">General</option>
                <option value="ICU">ICU</option>
                <option value="Surgery">Surgery</option>
                <option value="Emergency">Emergency</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="All">All Status</option>
                <option value="Available">Available</option>
                <option value="Occupied">Occupied</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRooms.map((room) => (
              <div key={room.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Bed className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg">Room {room.number}</h3>
                      <p className="text-sm text-gray-600">{room.department}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(room.type)}`}>
                    {room.type}
                  </span>
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full border ${getStatusColor(room.status)}`}>
                    {getStatusIcon(room.status)}
                    <span className="ml-1">{room.status}</span>
                  </span>
                </div>
                
                {room.patientId && room.status === 'Occupied' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 text-red-600 mr-2" />
                      <span className="text-sm font-medium text-red-800">Patient Assigned</span>
                    </div>
                    <p className="text-sm text-red-700 mt-1">Patient ID: {room.patientId}</p>
                  </div>
                )}
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm text-gray-600 mb-2">Equipment Available:</div>
                  <div className="flex flex-wrap gap-1">
                    {room.equipment.map((item, index) => (
                      <span key={index} className="inline-flex px-2 py-1 text-xs bg-white border border-gray-200 rounded-md">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Last Updated: 2 hours ago
                  </div>
                  {room.status === 'Available' && (
                    <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                      Assign Patient
                    </button>
                  )}
                  {room.status === 'Occupied' && (
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Patient
                    </button>
                  )}
                  {room.status === 'Maintenance' && (
                    <button className="text-yellow-600 hover:text-yellow-800 text-sm font-medium">
                      Update Status
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {filteredRooms.length === 0 && (
            <div className="text-center py-12">
              <Bed className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <div className="text-gray-500">No rooms found matching your criteria.</div>
            </div>
          )}
        </div>
      </div>
      
      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Available</p>
              <p className="text-xl font-bold text-gray-900">
                {rooms.filter(r => r.status === 'Available').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center mr-3">
              <User className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Occupied</p>
              <p className="text-xl font-bold text-gray-900">
                {rooms.filter(r => r.status === 'Occupied').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
              <Wrench className="w-5 h-5 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Maintenance</p>
              <p className="text-xl font-bold text-gray-900">
                {rooms.filter(r => r.status === 'Maintenance').length}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
              <Bed className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Rooms</p>
              <p className="text-xl font-bold text-gray-900">{rooms.length}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomList;
import React, { useState } from 'react';
import { Building2, Users, Bed, TrendingUp, Plus, Edit, Eye, Phone, Mail } from 'lucide-react';
import { Department } from '../types';
import { mockDepartments } from '../data/mockData';

const DepartmentList: React.FC = () => {
  const [departments] = useState<Department[]>(mockDepartments);

  const getOccupancyColor = (current: number, max: number) => {
    const percentage = (current / max) * 100;
    if (percentage >= 90) return 'text-red-600';
    if (percentage >= 75) return 'text-yellow-600';
    return 'text-green-600';
  };

  const getOccupancyBgColor = (current: number, max: number) => {
    const percentage = (current / max) * 100;
    if (percentage >= 90) return 'bg-red-500';
    if (percentage >= 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Department Management</h2>
              <p className="text-gray-600">Manage hospital departments and their resources</p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Add Department</span>
            </button>
          </div>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {departments.map((department) => {
              const occupancyPercentage = (department.currentPatients / department.maxCapacity) * 100;
              
              return (
                <div key={department.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{department.name}</h3>
                        <p className="text-sm text-gray-600">Head: {department.head}</p>
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
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Users className="w-4 h-4 text-gray-500 mr-1" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{department.staffCount}</div>
                      <div className="text-xs text-gray-500">Staff Members</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <Bed className="w-4 h-4 text-gray-500 mr-1" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{department.roomCount}</div>
                      <div className="text-xs text-gray-500">Total Rooms</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="w-4 h-4 text-gray-500 mr-1" />
                      </div>
                      <div className={`text-2xl font-bold ${getOccupancyColor(department.currentPatients, department.maxCapacity)}`}>
                        {Math.round(occupancyPercentage)}%
                      </div>
                      <div className="text-xs text-gray-500">Occupancy</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Patient Capacity</span>
                      <span className="font-medium">{department.currentPatients}/{department.maxCapacity}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${getOccupancyBgColor(department.currentPatients, department.maxCapacity)}`}
                        style={{ width: `${Math.min(occupancyPercentage, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Available Beds:</span>
                        <span className="font-medium ml-2">{department.maxCapacity - department.currentPatients}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Status:</span>
                        <span className={`ml-2 font-medium ${
                          occupancyPercentage >= 90 ? 'text-red-600' : 
                          occupancyPercentage >= 75 ? 'text-yellow-600' : 'text-green-600'
                        }`}>
                          {occupancyPercentage >= 90 ? 'At Capacity' : 
                           occupancyPercentage >= 75 ? 'High Occupancy' : 'Available'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentList;
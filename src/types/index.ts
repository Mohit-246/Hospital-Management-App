export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  phone: string;
  email: string;
  address: string;
  emergencyContact: string;
  emergencyPhone: string;
  bloodType: string;
  allergies: string[];
  currentCondition: 'Stable' | 'Critical' | 'Under Observation' | 'Discharged';
  admissionDate?: string;
  roomNumber?: string;
  assignedDoctor?: string;
}

export interface Staff {
  id: string;
  firstName: string;
  lastName: string;
  role: 'Doctor' | 'Nurse' | 'Administrator' | 'Technician';
  department: string;
  phone: string;
  email: string;
  shift: 'Day' | 'Night' | 'Evening';
  specialization?: string;
  status: 'Available' | 'On Duty' | 'Off Duty' | 'On Leave';
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  time: string;
  type: 'Consultation' | 'Surgery' | 'Follow-up' | 'Emergency';
  status: 'Scheduled' | 'In Progress' | 'Completed' | 'Cancelled';
  notes?: string;
}

export interface Department {
  id: string;
  name: string;
  head: string;
  staffCount: number;
  roomCount: number;
  currentPatients: number;
  maxCapacity: number;
}

export interface Room {
  id: string;
  number: string;
  type: 'General' | 'ICU' | 'Surgery' | 'Emergency';
  department: string;
  status: 'Occupied' | 'Available' | 'Maintenance';
  patientId?: string;
  equipment: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'patient' | 'hospital_staff';
  patientId?: string; // Only for patient users
  staffId?: string; // Only for hospital staff users
}
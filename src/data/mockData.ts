import { Patient, Staff, Appointment, Department, Room } from '../types';

export const mockPatients: Patient[] = [
  {
    id: '1',
    firstName: 'Patient',
    lastName: 'A',
    dateOfBirth: '1985-03-15',
    gender: 'Male',
    phone: '(555) 123-4567',
    email: 'patient.a@email.com',
    address: '123 Main St, City, State 12345',
    emergencyContact: 'Emergency Contact A',
    emergencyPhone: '(555) 987-6543',
    bloodType: 'A+',
    allergies: ['Penicillin'],
    currentCondition: 'Stable',
    admissionDate: '2024-01-15',
    roomNumber: '101',
    assignedDoctor: 'Dr. Sarah Wilson'
  },
  {
    id: '2',
    firstName: 'Patient',
    lastName: 'B',
    dateOfBirth: '1992-07-22',
    gender: 'Female',
    phone: '(555) 234-5678',
    email: 'patient.b@email.com',
    address: '456 Oak Ave, City, State 12345',
    emergencyContact: 'Emergency Contact B',
    emergencyPhone: '(555) 876-5432',
    bloodType: 'O-',
    allergies: ['Latex', 'Shellfish'],
    currentCondition: 'Critical',
    admissionDate: '2024-01-14',
    roomNumber: '205',
    assignedDoctor: 'Dr. Michael Chen'
  },
  {
    id: '3',
    firstName: 'Patient',
    lastName: 'C',
    dateOfBirth: '1978-11-08',
    gender: 'Male',
    phone: '(555) 345-6789',
    email: 'patient.c@email.com',
    address: '789 Pine St, City, State 12345',
    emergencyContact: 'Emergency Contact C',
    emergencyPhone: '(555) 765-4321',
    bloodType: 'B+',
    allergies: [],
    currentCondition: 'Under Observation',
    admissionDate: '2024-01-16',
    roomNumber: '103',
    assignedDoctor: 'Dr. Sarah Wilson'
  }
];

export const mockStaff: Staff[] = [
  {
    id: '1',
    firstName: 'Sarah',
    lastName: 'Wilson',
    role: 'Doctor',
    department: 'Cardiology',
    phone: '(555) 111-2222',
    email: 'sarah.wilson@hospital.com',
    shift: 'Day',
    specialization: 'Cardiovascular Surgery',
    status: 'On Duty'
  },
  {
    id: '2',
    firstName: 'Michael',
    lastName: 'Chen',
    role: 'Doctor',
    department: 'Emergency',
    phone: '(555) 222-3333',
    email: 'michael.chen@hospital.com',
    shift: 'Night',
    specialization: 'Emergency Medicine',
    status: 'Available'
  },
  {
    id: '3',
    firstName: 'Jennifer',
    lastName: 'Adams',
    role: 'Nurse',
    department: 'ICU',
    phone: '(555) 333-4444',
    email: 'jennifer.adams@hospital.com',
    shift: 'Day',
    status: 'On Duty'
  },
  {
    id: '4',
    firstName: 'David',
    lastName: 'Brown',
    role: 'Administrator',
    department: 'Administration',
    phone: '(555) 444-5555',
    email: 'david.brown@hospital.com',
    shift: 'Day',
    status: 'Available'
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    patientName: 'Patient A',
    doctorId: '1',
    doctorName: 'Dr. Sarah Wilson',
    date: '2024-01-17',
    time: '10:00',
    type: 'Consultation',
    status: 'Scheduled',
    notes: 'Regular checkup'
  },
  {
    id: '2',
    patientId: '2',
    patientName: 'Patient B',
    doctorId: '2',
    doctorName: 'Dr. Michael Chen',
    date: '2024-01-17',
    time: '14:30',
    type: 'Emergency',
    status: 'In Progress',
    notes: 'Urgent care required'
  },
  {
    id: '3',
    patientId: '3',
    patientName: 'Patient C',
    doctorId: '1',
    doctorName: 'Dr. Sarah Wilson',
    date: '2024-01-18',
    time: '09:00',
    type: 'Follow-up',
    status: 'Scheduled',
    notes: 'Post-surgery follow-up'
  }
];

export const mockDepartments: Department[] = [
  {
    id: '1',
    name: 'Cardiology',
    head: 'Dr. Sarah Wilson',
    staffCount: 12,
    roomCount: 8,
    currentPatients: 15,
    maxCapacity: 20
  },
  {
    id: '2',
    name: 'Emergency',
    head: 'Dr. Michael Chen',
    staffCount: 18,
    roomCount: 6,
    currentPatients: 8,
    maxCapacity: 12
  },
  {
    id: '3',
    name: 'ICU',
    head: 'Dr. Patricia Lee',
    staffCount: 20,
    roomCount: 10,
    currentPatients: 12,
    maxCapacity: 15
  },
  {
    id: '4',
    name: 'Surgery',
    head: 'Dr. James Rodriguez',
    staffCount: 15,
    roomCount: 5,
    currentPatients: 6,
    maxCapacity: 8
  }
];

export const mockRooms: Room[] = [
  {
    id: '1',
    number: '101',
    type: 'General',
    department: 'Cardiology',
    status: 'Occupied',
    patientId: '1',
    equipment: ['Monitor', 'IV Stand', 'Bed']
  },
  {
    id: '2',
    number: '102',
    type: 'General',
    department: 'Cardiology',
    status: 'Available',
    equipment: ['Monitor', 'IV Stand', 'Bed']
  },
  {
    id: '3',
    number: '103',
    type: 'General',
    department: 'Cardiology',
    status: 'Occupied',
    patientId: '3',
    equipment: ['Monitor', 'IV Stand', 'Bed', 'Oxygen']
  },
  {
    id: '4',
    number: '205',
    type: 'ICU',
    department: 'ICU',
    status: 'Occupied',
    patientId: '2',
    equipment: ['Ventilator', 'Monitor', 'IV Stand', 'Bed', 'Defibrillator']
  }
];
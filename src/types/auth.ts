export interface AuthUser {
  id: string;
  email: string;
  role: 'patient' | 'hospital_staff';
  firstName: string;
  lastName: string;
  phone?: string;
  department?: string;
  specialization?: string;
  patientId?: string;
  staffId?: string;
  isActive: boolean;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginSession {
  id: string;
  userId: string;
  loginTime: string;
  logoutTime?: string;
  ipAddress?: string;
  userAgent?: string;
  isActive: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
  role: 'patient' | 'hospital_staff';
}

export interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: 'patient' | 'hospital_staff';
  department?: string;
  specialization?: string;
}
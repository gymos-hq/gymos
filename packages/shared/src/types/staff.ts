export type StaffRole = 'owner' | 'manager' | 'reception' | 'trainer';

export interface Staff {
  id: string;
  gymId: string;
  name: string;
  phone: string;
  email: string | null;
  role: StaffRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
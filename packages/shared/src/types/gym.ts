export type GymStatus = 'active' | 'suspended' | 'trial';

export interface Gym {
  id: string;
  name: string;
  slug: string;
  phone: string;
  email: string;
  city: string;
  status: GymStatus;
  createdAt: Date;
  updatedAt: Date;
}
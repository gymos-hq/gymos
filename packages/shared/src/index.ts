// Type re-exports — import these from '@gymos/shared' anywhere in the monorepo
export type { Gym, GymStatus } from './types/gym.js';
export type { Member, MemberStatus } from './types/member.js';
export type { MembershipPlan } from './types/membership-plan.js';
export type {
  Subscription,
  SubscriptionStatus,
} from './types/subscription.js';
export type { AttendanceLog, CheckInMethod } from './types/attendance.js';
export type { FreezeEvent } from './types/freeze.js';
export type { Payment, PaymentMethod } from './types/payment.js';
export type { Staff, StaffRole } from './types/staff.js';

export const VERSION = '0.0.1';
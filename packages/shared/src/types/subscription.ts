export type SubscriptionStatus = 'active' | 'expired' | 'frozen' | 'cancelled';

export interface Subscription {
  id: string;
  gymId: string;
  memberId: string;
  planId: string;
  startDate: Date;
  endDate: Date;
  status: SubscriptionStatus;
  renewedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}
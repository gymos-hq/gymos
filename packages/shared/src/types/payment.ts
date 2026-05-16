export type PaymentMethod = 'cash' | 'instapay' | 'vodafone_cash' | 'fawry' | 'card';

export interface Payment {
  id: string;
  gymId: string;
  memberId: string;
  subscriptionId: string | null;
  amountEgp: number;
  method: PaymentMethod;
  notes: string | null;
  createdAt: Date;
}
export interface MembershipPlan {
  id: string;
  gymId: string;
  nameAr: string;
  nameEn: string | null;
  durationDays: number;
  priceEgp: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
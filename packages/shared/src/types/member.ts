export type MemberStatus = 'active' | 'expired' | 'frozen' | 'deactivated';

export interface Member {
  id: string;
  gymId: string;
  fullNameAr: string;
  fullNameEn: string | null;
  phone: string;
  emergencyPhone: string | null;
  photoUrl: string | null;
  qrCode: string;
  status: MemberStatus;
  outstandingDebtEgp: number;
  createdAt: Date;
  updatedAt: Date;
}
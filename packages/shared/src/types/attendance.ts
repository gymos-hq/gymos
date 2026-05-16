export type CheckInMethod = 'qr_scan' | 'manual';

export interface AttendanceLog {
  id: string;
  gymId: string;
  memberId: string;
  subscriptionId: string;
  checkedInAt: Date;
  method: CheckInMethod;
}
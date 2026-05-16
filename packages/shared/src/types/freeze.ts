export interface FreezeEvent {
  id: string;
  gymId: string;
  memberId: string;
  subscriptionId: string;
  freezeStart: Date;
  freezeEnd: Date;
  reason: string | null;
  createdAt: Date;
}
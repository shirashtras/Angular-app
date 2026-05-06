export type IdeaStatus = 'ממתין לאישור' | 'מאושר' | 'נדחה';

export interface Idea {
  id: string;
  name: string;
  activityType: string;
  audience: string;
  duration: number;
  status: IdeaStatus;
}

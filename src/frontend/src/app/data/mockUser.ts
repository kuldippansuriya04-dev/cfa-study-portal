export interface UserProfile {
  name: string;
  streak: number;
  totalStudyHours: number;
  examDate: string; // ISO date string
  mockExamAvg: number; // percentage
  overallProgress: number; // percentage
  notificationsCount: number;
}

export const MOCK_USER: UserProfile = {
  name: 'Alex Johnson',
  streak: 12,
  totalStudyHours: 147,
  examDate: '2026-08-15',
  mockExamAvg: 68,
  overallProgress: 27,
  notificationsCount: 3,
};

export function getDaysUntilExam(examDateStr: string): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const exam = new Date(examDateStr);
  exam.setHours(0, 0, 0, 0);
  return Math.max(0, Math.round((exam.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)));
}

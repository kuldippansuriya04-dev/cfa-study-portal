export type PageId =
  | 'dashboard'
  | 'topics'
  | 'quiz'
  | 'mock-exam'
  | 'flashcards'
  | 'comics'
  | 'notes'
  | 'planner'
  | 'achievements'
  | `topic-${string}`
  | `reading-${string}-${number}`;

export type PageId =
  | 'dashboard'
  | 'topics'
  | 'quiz'
  | 'mock-exam'
  | 'flashcards'
  | 'notes'
  | 'planner'
  | 'achievements'
  | `topic-${string}`
  | `reading-${string}-${number}`;

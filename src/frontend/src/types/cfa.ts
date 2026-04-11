export interface Topic {
  id: string;
  title: string;
  description: string;
  weight: string; // e.g. "15-20%"
  questionCount: number;
  level: string; // "I" | "II" | "III"
  order: number;
}

export interface Question {
  id: string;
  topicId: string;
  stem: string;
  optionA: string;
  optionB: string;
  optionC: string;
  correctAnswer: "A" | "B" | "C";
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface MockExam {
  id: string;
  title: string;
  description: string;
  questionCount: number;
  durationMinutes: number;
  level: string;
  createdAt: string;
}

export interface ExamAnswer {
  questionId: string;
  selectedAnswer: "A" | "B" | "C";
}

export interface ExamAttempt {
  id: string;
  examId: string;
  userId: string;
  answers: ExamAnswer[];
  score: number; // 0-100
  correctCount: number;
  totalCount: number;
  completedAt: string;
  timeTakenSeconds: number;
}

export interface PracticeAttempt {
  id: string;
  topicId: string;
  userId: string;
  questionId: string;
  selectedAnswer: "A" | "B" | "C";
  isCorrect: boolean;
  attemptedAt: string;
}

export interface PracticeResult {
  questionId: string;
  selectedAnswer: "A" | "B" | "C";
  isCorrect: boolean;
  correctAnswer: "A" | "B" | "C";
  explanation: string;
}

export interface UserStats {
  totalPracticeAnswered: number;
  totalPracticeCorrect: number;
  overallAccuracy: number; // 0-100
  examAttemptCount: number;
  averageExamScore: number; // 0-100
  lastActivityAt: string;
  streak: number;
}

export interface UserTopicStats {
  topicId: string;
  answeredCount: number;
  correctCount: number;
  accuracy: number; // 0-100
  lastPracticeAt: string;
}

export type AnswerOption = "A" | "B" | "C";

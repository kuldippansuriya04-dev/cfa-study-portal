import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface PracticeResult {
    attempt: PracticeAttempt;
    correctIndex: bigint;
    explanation: string;
    isCorrect: boolean;
}
export interface ExamAttempt {
    id: bigint;
    completedAt: bigint;
    startedAt: bigint;
    userId: Principal;
    answers: Array<UserAnswer>;
    topicBreakdown: Array<[bigint, bigint, bigint]>;
    score: bigint;
    totalQuestions: bigint;
    examId: bigint;
}
export interface ExamAnswer {
    questionId: bigint;
    selectedIndex: bigint;
}
export interface UserAnswer {
    isCorrect: boolean;
    timestamp: bigint;
    questionId: bigint;
    selectedIndex: bigint;
}
export interface PracticeAttempt {
    id: bigint;
    userId: Principal;
    isCorrect: boolean;
    timestamp: bigint;
    questionId: bigint;
    selectedIndex: bigint;
    topicId: bigint;
}
export interface Topic {
    id: bigint;
    weightMax: bigint;
    weightMin: bigint;
    title: string;
    description: string;
    learningObjectives: Array<string>;
}
export interface Question {
    id: bigint;
    correctIndex: bigint;
    difficulty: string;
    explanation: string;
    stem: string;
    options: Array<string>;
    topicId: bigint;
}
export interface MockExam {
    id: bigint;
    title: string;
    questionIds: Array<bigint>;
}
export interface UserStats {
    totalPracticeAttempts: bigint;
    userId: Principal;
    totalPracticeCorrect: bigint;
    topicStats: Array<[bigint, bigint, bigint]>;
    lastActiveDate: string;
    studyStreak: bigint;
}
export interface backendInterface {
    getMockExam(id: bigint): Promise<MockExam | null>;
    getMockExamQuestions(examId: bigint): Promise<Array<Question>>;
    getMockExams(): Promise<Array<MockExam>>;
    getMyExamHistory(): Promise<Array<ExamAttempt>>;
    getMyStats(): Promise<UserStats>;
    getMyTopicStats(): Promise<Array<[bigint, bigint, bigint]>>;
    getQuestions(topicId: bigint): Promise<Array<Question>>;
    getTopic(id: bigint): Promise<Topic | null>;
    getTopics(): Promise<Array<Topic>>;
    submitExamAttempt(examId: bigint, answers: Array<ExamAnswer>): Promise<ExamAttempt>;
    submitPracticeAnswer(topicId: bigint, questionId: bigint, selectedIndex: bigint): Promise<PracticeResult>;
}

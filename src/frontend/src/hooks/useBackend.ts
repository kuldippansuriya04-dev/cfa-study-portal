import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { MOCK_EXAMS, MOCK_QUESTIONS, MOCK_TOPICS } from "../data/mockData";
import type {
  AnswerOption,
  ExamAnswer,
  ExamAttempt,
  MockExam,
  PracticeAttempt,
  Question,
  Topic,
  UserStats,
  UserTopicStats,
} from "../types/cfa";

// ─── Queries ────────────────────────────────────────────────────────────────

export function useTopics() {
  return useQuery<Topic[]>({
    queryKey: ["topics"],
    queryFn: async () => MOCK_TOPICS,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useTopic(topicId: string) {
  return useQuery<Topic | undefined>({
    queryKey: ["topic", topicId],
    queryFn: async () => MOCK_TOPICS.find((t) => t.id === topicId),
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useQuestions(topicId: string) {
  return useQuery<Question[]>({
    queryKey: ["questions", topicId],
    queryFn: async () => MOCK_QUESTIONS.filter((q) => q.topicId === topicId),
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useMockExams() {
  return useQuery<MockExam[]>({
    queryKey: ["mockExams"],
    queryFn: async () => MOCK_EXAMS,
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useMockExam(examId: string) {
  return useQuery<MockExam | undefined>({
    queryKey: ["mockExam", examId],
    queryFn: async () => MOCK_EXAMS.find((e) => e.id === examId),
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useMockExamQuestions(examId: string) {
  return useQuery<Question[]>({
    queryKey: ["examQuestions", examId],
    queryFn: async () => {
      const exam = MOCK_EXAMS.find((e) => e.id === examId);
      if (!exam) return [];
      const allQ = MOCK_QUESTIONS;
      let hash = 0;
      for (let i = 0; i < examId.length; i++) {
        hash = (hash << 5) - hash + examId.charCodeAt(i);
        hash |= 0;
      }
      const shuffled = [...allQ].sort(() => (hash % 2 === 0 ? 1 : -1));
      return shuffled.slice(0, Math.min(exam.questionCount, allQ.length));
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useMyExamHistory() {
  return useQuery<ExamAttempt[]>({
    queryKey: ["examHistory"],
    queryFn: async () => {
      const raw = localStorage.getItem("cfa_exam_history");
      return raw ? (JSON.parse(raw) as ExamAttempt[]) : [];
    },
  });
}

export function useMyStats() {
  return useQuery<UserStats>({
    queryKey: ["myStats"],
    queryFn: async () => {
      const raw = localStorage.getItem("cfa_user_stats");
      if (raw) return JSON.parse(raw) as UserStats;
      return {
        totalPracticeAnswered: 0,
        totalPracticeCorrect: 0,
        overallAccuracy: 0,
        examAttemptCount: 0,
        averageExamScore: 0,
        lastActivityAt: new Date().toISOString(),
        streak: 0,
      };
    },
  });
}

export function useMyTopicStats() {
  return useQuery<UserTopicStats[]>({
    queryKey: ["topicStats"],
    queryFn: async () => {
      const raw = localStorage.getItem("cfa_topic_stats");
      return raw ? (JSON.parse(raw) as UserTopicStats[]) : [];
    },
  });
}

// ─── Mutations ───────────────────────────────────────────────────────────────

export function useSubmitPracticeAnswer() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: {
      topicId: string;
      questionId: string;
      selectedAnswer: AnswerOption;
    }): Promise<PracticeAttempt> => {
      const question = MOCK_QUESTIONS.find((q) => q.id === payload.questionId);
      const isCorrect = question?.correctAnswer === payload.selectedAnswer;
      const attempt: PracticeAttempt = {
        id: crypto.randomUUID(),
        topicId: payload.topicId,
        userId: "local",
        questionId: payload.questionId,
        selectedAnswer: payload.selectedAnswer,
        isCorrect: isCorrect ?? false,
        attemptedAt: new Date().toISOString(),
      };

      const statsRaw = localStorage.getItem("cfa_user_stats");
      const stats: UserStats = statsRaw
        ? JSON.parse(statsRaw)
        : {
            totalPracticeAnswered: 0,
            totalPracticeCorrect: 0,
            overallAccuracy: 0,
            examAttemptCount: 0,
            averageExamScore: 0,
            lastActivityAt: "",
            streak: 0,
          };
      stats.totalPracticeAnswered += 1;
      if (isCorrect) stats.totalPracticeCorrect += 1;
      stats.overallAccuracy = Math.round(
        (stats.totalPracticeCorrect / stats.totalPracticeAnswered) * 100,
      );
      stats.lastActivityAt = new Date().toISOString();
      localStorage.setItem("cfa_user_stats", JSON.stringify(stats));

      const topicStatsRaw = localStorage.getItem("cfa_topic_stats");
      const topicStats: UserTopicStats[] = topicStatsRaw
        ? JSON.parse(topicStatsRaw)
        : [];
      const existing = topicStats.find((ts) => ts.topicId === payload.topicId);
      if (existing) {
        existing.answeredCount += 1;
        if (isCorrect) existing.correctCount += 1;
        existing.accuracy = Math.round(
          (existing.correctCount / existing.answeredCount) * 100,
        );
        existing.lastPracticeAt = new Date().toISOString();
      } else {
        topicStats.push({
          topicId: payload.topicId,
          answeredCount: 1,
          correctCount: isCorrect ? 1 : 0,
          accuracy: isCorrect ? 100 : 0,
          lastPracticeAt: new Date().toISOString(),
        });
      }
      localStorage.setItem("cfa_topic_stats", JSON.stringify(topicStats));

      return attempt;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myStats"] });
      queryClient.invalidateQueries({ queryKey: ["topicStats"] });
    },
  });
}

export function useSubmitExamAttempt() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: {
      examId: string;
      answers: ExamAnswer[];
      timeTakenSeconds: number;
    }): Promise<ExamAttempt> => {
      const questions = MOCK_QUESTIONS;
      let correctCount = 0;
      for (const a of payload.answers) {
        const q = questions.find((q) => q.id === a.questionId);
        if (q?.correctAnswer === a.selectedAnswer) correctCount++;
      }
      const score =
        payload.answers.length > 0
          ? Math.round((correctCount / payload.answers.length) * 100)
          : 0;

      const attempt: ExamAttempt = {
        id: crypto.randomUUID(),
        examId: payload.examId,
        userId: "local",
        answers: payload.answers,
        score,
        correctCount,
        totalCount: payload.answers.length,
        completedAt: new Date().toISOString(),
        timeTakenSeconds: payload.timeTakenSeconds,
      };

      const historyRaw = localStorage.getItem("cfa_exam_history");
      const history: ExamAttempt[] = historyRaw ? JSON.parse(historyRaw) : [];
      history.unshift(attempt);
      localStorage.setItem("cfa_exam_history", JSON.stringify(history));

      const statsRaw = localStorage.getItem("cfa_user_stats");
      const stats: UserStats = statsRaw
        ? JSON.parse(statsRaw)
        : {
            totalPracticeAnswered: 0,
            totalPracticeCorrect: 0,
            overallAccuracy: 0,
            examAttemptCount: 0,
            averageExamScore: 0,
            lastActivityAt: "",
            streak: 0,
          };
      stats.examAttemptCount += 1;
      const avgScore =
        history.reduce((sum, a) => sum + a.score, 0) / history.length;
      stats.averageExamScore = Math.round(avgScore);
      stats.lastActivityAt = new Date().toISOString();
      localStorage.setItem("cfa_user_stats", JSON.stringify(stats));

      return attempt;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["examHistory"] });
      queryClient.invalidateQueries({ queryKey: ["myStats"] });
    },
  });
}

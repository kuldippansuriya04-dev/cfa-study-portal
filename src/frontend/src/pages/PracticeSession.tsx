import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  RefreshCw,
  TrendingUp,
  Trophy,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { QuestionCard } from "../components/QuestionCard";
import {
  useQuestions,
  useSubmitPracticeAnswer,
  useTopic,
} from "../hooks/useBackend";
import type { AnswerOption } from "../types/cfa";

type SessionState = "active" | "complete";

export default function PracticeSession() {
  const { topicId } = useParams({ from: "/topics/$topicId/practice" });
  const navigate = useNavigate();
  const { data: topic } = useTopic(topicId);
  const { data: questions, isLoading } = useQuestions(topicId);
  const submitAnswer = useSubmitPracticeAnswer();

  const [sessionState, setSessionState] = useState<SessionState>("active");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<Record<string, boolean>>({});

  const totalQuestions = questions?.length ?? 0;
  const answeredCount = Object.keys(results).length;
  const correctCount = Object.values(results).filter(Boolean).length;
  const sessionScore =
    answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  const handleAnswer = async (
    questionId: string,
    answer: AnswerOption,
    isCorrect: boolean,
  ) => {
    setResults((prev) => ({ ...prev, [questionId]: isCorrect }));
    await submitAnswer.mutateAsync({
      topicId,
      questionId,
      selectedAnswer: answer,
    });
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setSessionState("complete");
    }
  };

  const handlePracticeAgain = () => {
    setCurrentIndex(0);
    setResults({});
    setSessionState("active");
  };

  // ─── Loading ───────────────────────────────────────────────────────────────

  if (isLoading) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-2 w-full rounded-full" />
        <Skeleton className="h-72 w-full rounded-xl" />
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="font-display text-lg font-semibold text-foreground mb-2">
          No questions available
        </p>
        <p className="text-muted-foreground text-sm mb-5">
          This topic doesn't have practice questions yet.
        </p>
        <Button
          onClick={() => navigate({ to: "/topics" })}
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Back to Topics
        </Button>
      </div>
    );
  }

  // ─── Session Complete ──────────────────────────────────────────────────────

  if (sessionState === "complete") {
    const isPassing = sessionScore >= 70;
    const incorrectCount = answeredCount - correctCount;

    return (
      <div className="bg-background min-h-screen">
        <div className="bg-card border-b border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <button
              type="button"
              onClick={() =>
                navigate({ to: "/topics/$topicId", params: { topicId } })
              }
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {topic?.title ?? "Topic"}
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Card
            className="shadow-card border border-border bg-card p-8 text-center"
            data-ocid="session-summary"
          >
            {/* Result icon */}
            <div
              className={cn(
                "w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5",
                isPassing ? "bg-[oklch(0.55_0.18_150)]/10" : "bg-accent/10",
              )}
            >
              {isPassing ? (
                <Trophy className="w-10 h-10 text-[oklch(0.45_0.18_150)]" />
              ) : (
                <TrendingUp className="w-10 h-10 text-accent" />
              )}
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mb-1">
              {isPassing ? "Great Work!" : "Keep Practicing!"}
            </h2>
            <p className="text-muted-foreground text-sm mb-2">
              {topic?.title} — Practice Session Complete
            </p>
            <p className="text-xs text-muted-foreground mb-8">
              {isPassing
                ? "You're above the 70% passing threshold. Keep it up!"
                : "Aim for 70%+ accuracy before exam day. Review the explanations and try again."}
            </p>

            {/* Score grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div
                className="bg-muted/40 rounded-xl p-4"
                data-ocid="summary-answered"
              >
                <div className="font-display text-3xl font-bold text-foreground">
                  {answeredCount}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Questions
                </div>
              </div>
              <div
                className="bg-[oklch(0.55_0.18_150)]/8 rounded-xl p-4 border border-[oklch(0.55_0.18_150)]/20"
                data-ocid="summary-correct"
              >
                <div className="font-display text-3xl font-bold text-[oklch(0.45_0.18_150)]">
                  {correctCount}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Correct
                </div>
              </div>
              <div
                className={cn(
                  "rounded-xl p-4 border",
                  isPassing
                    ? "bg-[oklch(0.55_0.18_150)]/8 border-[oklch(0.55_0.18_150)]/20"
                    : "bg-accent/8 border-accent/20",
                )}
                data-ocid="summary-score"
              >
                <div
                  className={cn(
                    "font-display text-3xl font-bold",
                    isPassing ? "text-[oklch(0.45_0.18_150)]" : "text-accent",
                  )}
                >
                  {sessionScore}%
                </div>
                <div className="text-xs text-muted-foreground mt-1">Score</div>
              </div>
            </div>

            {/* Per-question breakdown */}
            <div className="text-left mb-8 space-y-1.5">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                Question Breakdown
              </p>
              {questions.map((q, i) => {
                const isCorrect = results[q.id];
                const answered = q.id in results;
                return (
                  <div
                    key={q.id}
                    className="flex items-center gap-3 py-1.5 border-b border-border last:border-0"
                  >
                    {answered ? (
                      isCorrect ? (
                        <CheckCircle className="w-4 h-4 text-[oklch(0.45_0.18_150)] flex-shrink-0" />
                      ) : (
                        <XCircle className="w-4 h-4 text-destructive flex-shrink-0" />
                      )
                    ) : (
                      <div className="w-4 h-4 rounded-full border border-border flex-shrink-0" />
                    )}
                    <span className="text-xs text-muted-foreground flex-shrink-0 w-6">
                      Q{i + 1}
                    </span>
                    <p className="text-sm text-foreground line-clamp-1 flex-1 min-w-0">
                      {q.stem}
                    </p>
                    <span
                      className={cn(
                        "text-xs font-semibold flex-shrink-0",
                        !answered
                          ? "text-muted-foreground"
                          : isCorrect
                            ? "text-[oklch(0.45_0.18_150)]"
                            : "text-destructive",
                      )}
                    >
                      {!answered ? "Skipped" : isCorrect ? "Correct" : "Wrong"}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Incorrect count summary line */}
            {incorrectCount > 0 && (
              <p className="text-sm text-muted-foreground mb-6">
                Review{" "}
                <span className="font-semibold text-destructive">
                  {incorrectCount} incorrect
                </span>{" "}
                question{incorrectCount !== 1 ? "s" : ""} — study the
                explanations to improve your score.
              </p>
            )}

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="outline"
                onClick={handlePracticeAgain}
                className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                data-ocid="practice-again-btn"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Practice Again
              </Button>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                onClick={() =>
                  navigate({ to: "/topics/$topicId", params: { topicId } })
                }
                data-ocid="back-to-topic-btn"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Topic
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // ─── Active Session ────────────────────────────────────────────────────────

  const currentQuestion = questions[currentIndex];
  const isCurrentAnswered = currentQuestion.id in results;
  const progressPct =
    ((currentIndex + (isCurrentAnswered ? 1 : 0)) / totalQuestions) * 100;

  return (
    <div className="bg-background min-h-screen">
      {/* Session Header */}
      <div className="bg-card border-b border-border sticky top-16 z-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between gap-4 mb-3">
            <button
              type="button"
              onClick={() =>
                navigate({ to: "/topics/$topicId", params: { topicId } })
              }
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              data-ocid="exit-session-btn"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">
                {topic?.title ?? "Topic"}
              </span>
              <span className="sm:hidden">Exit</span>
            </button>

            <div className="flex items-center gap-3">
              {/* Question counter */}
              <span
                className="text-sm font-semibold text-foreground"
                data-ocid="question-counter"
              >
                Question{" "}
                <span className="text-primary">{currentIndex + 1}</span> of{" "}
                <span className="text-muted-foreground">{totalQuestions}</span>
              </span>

              {/* Running score */}
              {answeredCount > 0 && (
                <span
                  className={cn(
                    "text-xs font-semibold px-2.5 py-1 rounded-full",
                    sessionScore >= 70
                      ? "bg-[oklch(0.55_0.18_150)]/10 text-[oklch(0.45_0.18_150)]"
                      : "bg-accent/10 text-accent",
                  )}
                  data-ocid="running-score"
                >
                  {sessionScore}% so far
                </span>
              )}
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary rounded-full transition-all duration-400"
              style={{ width: `${progressPct}%` }}
              role="progressbar"
              aria-valuenow={Math.round(progressPct)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Session progress: ${Math.round(progressPct)}%`}
              tabIndex={0}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Answered indicator pills */}
        {totalQuestions <= 20 && (
          <div className="flex gap-1.5 flex-wrap mb-6">
            {questions.map((q, i) => (
              <button
                type="button"
                key={q.id}
                onClick={() => {
                  if (q.id in results || i === currentIndex) return;
                  setCurrentIndex(i);
                }}
                className={cn(
                  "w-7 h-7 rounded-md text-xs font-semibold transition-smooth flex items-center justify-center",
                  i === currentIndex
                    ? "bg-primary text-primary-foreground ring-2 ring-primary/30"
                    : q.id in results
                      ? results[q.id]
                        ? "bg-[oklch(0.55_0.18_150)]/15 text-[oklch(0.45_0.18_150)] border border-[oklch(0.55_0.18_150)]/30"
                        : "bg-destructive/10 text-destructive border border-destructive/20"
                      : "bg-muted text-muted-foreground hover:bg-muted/80",
                )}
                aria-label={`Jump to question ${i + 1}`}
                data-ocid={`q-dot-${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}

        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          index={currentIndex}
          onAnswer={handleAnswer}
          onNext={handleNext}
          showNext={isCurrentAnswered}
        />

        {/* Footer hint */}
        {!isCurrentAnswered && (
          <p className="text-xs text-center text-muted-foreground mt-4">
            Select an answer above and click "Submit Answer" to continue.
          </p>
        )}
      </div>
    </div>
  );
}

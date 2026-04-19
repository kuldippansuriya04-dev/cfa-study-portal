import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  List,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  useMockExam,
  useMockExamQuestions,
  useSubmitExamAttempt,
} from "../hooks/useBackend";
import type { AnswerOption, ExamAnswer } from "../types/cfa";

const OPTION_LABELS: AnswerOption[] = ["A", "B", "C"];
const OPTION_TEXT: Record<
  AnswerOption,
  (q: { optionA: string; optionB: string; optionC: string }) => string
> = {
  A: (q) => q.optionA,
  B: (q) => q.optionB,
  C: (q) => q.optionC,
};

function getStorageKey(examId: string) {
  return `cfa_exam_progress_${examId}`;
}

interface ProgressState {
  answers: Record<string, AnswerOption>;
  currentIndex: number;
  startedAt: number;
  timerEnabled: boolean;
}

// ── Pre-Start Screen ───────────────────────────────────────────────────────────
interface PreStartProps {
  title: string;
  questionCount: number;
  durationMinutes: number;
  onBegin: (timerEnabled: boolean) => void;
  onBack: () => void;
}

function PreStartScreen({
  title,
  questionCount,
  durationMinutes,
  onBegin,
  onBack,
}: PreStartProps) {
  const [timerOn, setTimerOn] = useState(true);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background flex items-center justify-center px-4 py-12">
      <Card className="shadow-card border border-border bg-card max-w-lg w-full p-8">
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-7 h-7 text-primary" />
          </div>
          <h1 className="font-display text-2xl font-bold text-foreground mb-1">
            {title}
          </h1>
          <p className="text-muted-foreground text-sm">
            {questionCount} questions · {durationMinutes} minutes
          </p>
        </div>

        {/* Instructions */}
        <div className="bg-muted/40 rounded-lg p-4 mb-6 space-y-2 text-xs text-muted-foreground">
          {[
            "You may navigate freely between questions before submitting.",
            "Once submitted, answers cannot be changed — review carefully.",
            "No pausing: the timer runs from the moment you begin.",
            "Answer all questions for the most accurate score breakdown.",
            "You will see full explanations after submission.",
          ].map((rule) => (
            <div key={rule} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
              <span>{rule}</span>
            </div>
          ))}
        </div>

        {/* Timer Toggle */}
        <div className="flex items-center justify-between p-3.5 rounded-lg border border-border mb-6 bg-card">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Enable Countdown Timer
            </p>
            <p className="text-xs text-muted-foreground">
              {durationMinutes} min · simulates real exam pressure
            </p>
          </div>
          <button
            type="button"
            onClick={() => setTimerOn((v) => !v)}
            className={cn(
              "relative w-12 h-6 rounded-full transition-smooth focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              timerOn ? "bg-primary" : "bg-muted",
            )}
            aria-checked={timerOn}
            role="switch"
            aria-label="Toggle timer"
            data-ocid="timer-toggle"
          >
            <span
              className={cn(
                "absolute top-0.5 w-5 h-5 rounded-full bg-card shadow-sm transition-all duration-200",
                timerOn ? "left-[26px]" : "left-0.5",
              )}
            />
          </button>
        </div>

        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={onBack}
            data-ocid="back-to-exams-btn"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back
          </Button>
          <Button
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            onClick={() => onBegin(timerOn)}
            data-ocid="begin-exam-btn"
          >
            Begin Exam
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </Card>
    </div>
  );
}

// ── Finish Confirm Modal ───────────────────────────────────────────────────────
interface FinishModalProps {
  answeredCount: number;
  totalCount: number;
  onConfirm: () => void;
  onCancel: () => void;
  submitting: boolean;
}

function FinishModal({
  answeredCount,
  totalCount,
  onConfirm,
  onCancel,
  submitting,
}: FinishModalProps) {
  const unanswered = totalCount - answeredCount;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm px-4">
      <Card className="shadow-card border border-border bg-card max-w-sm w-full p-6">
        <div className="flex items-start justify-between mb-4">
          <h2 className="font-display text-lg font-bold text-foreground">
            Submit Exam?
          </h2>
          <button
            type="button"
            onClick={onCancel}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        {unanswered > 0 && (
          <div className="flex items-start gap-2.5 bg-accent/10 border border-accent/20 rounded-lg p-3.5 mb-4">
            <AlertCircle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-foreground">
              <span className="font-semibold">{unanswered} question</span>
              {unanswered > 1 ? "s are" : " is"} unanswered. Unanswered
              questions will be marked incorrect.
            </p>
          </div>
        )}
        <p className="text-sm text-muted-foreground mb-5">
          {answeredCount}/{totalCount} questions answered. Once submitted, you
          cannot change your answers.
        </p>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            onClick={onCancel}
            data-ocid="cancel-submit-btn"
          >
            Keep Working
          </Button>
          <Button
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            onClick={onConfirm}
            disabled={submitting}
            data-ocid="confirm-submit-btn"
          >
            {submitting ? "Submitting…" : "Submit Exam"}
          </Button>
        </div>
      </Card>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export default function ExamSession() {
  const { examId } = useParams({ from: "/exams/$examId/take" });
  const navigate = useNavigate();
  const { data: exam } = useMockExam(examId);
  const { data: questions, isLoading } = useMockExamQuestions(examId);
  const submitExam = useSubmitExamAttempt();

  const [phase, setPhase] = useState<"pre" | "active">("pre");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerOption>>({});
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const startTimeRef = useRef(Date.now());

  // Restore from localStorage if in-progress exam exists
  useEffect(() => {
    const raw = localStorage.getItem(getStorageKey(examId));
    if (!raw) return;
    try {
      const saved = JSON.parse(raw) as ProgressState;
      setAnswers(saved.answers);
      setCurrentIndex(saved.currentIndex);
      setTimerEnabled(saved.timerEnabled);
      startTimeRef.current = saved.startedAt;
      if (saved.timerEnabled && exam) {
        const elapsed = Math.floor((Date.now() - saved.startedAt) / 1000);
        const remaining = exam.durationMinutes * 60 - elapsed;
        setTimeLeft(Math.max(0, remaining));
      }
      setPhase("active");
    } catch {
      // ignore malformed data
    }
  }, [examId, exam]);

  // Persist progress to localStorage
  useEffect(() => {
    if (phase !== "active") return;
    const progress: ProgressState = {
      answers,
      currentIndex,
      startedAt: startTimeRef.current,
      timerEnabled,
    };
    localStorage.setItem(getStorageKey(examId), JSON.stringify(progress));
  }, [answers, currentIndex, phase, timerEnabled, examId]);

  // Countdown timer
  useEffect(() => {
    if (phase !== "active" || !timerEnabled) return;
    const timer = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timer);
          handleSubmitFinal();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [phase, timerEnabled]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleBegin = (withTimer: boolean) => {
    startTimeRef.current = Date.now();
    setTimerEnabled(withTimer);
    if (withTimer && exam) setTimeLeft(exam.durationMinutes * 60);
    setPhase("active");
  };

  const handleSubmitFinal = useCallback(async () => {
    if (submitting || !questions) return;
    setSubmitting(true);
    setShowFinishModal(false);
    const examAnswers: ExamAnswer[] = questions.map((q) => ({
      questionId: q.id,
      selectedAnswer: answers[q.id] ?? "",
    }));
    const timeTaken = Math.round((Date.now() - startTimeRef.current) / 1000);
    try {
      const attempt = await submitExam.mutateAsync({
        examId,
        answers: examAnswers,
        timeTakenSeconds: timeTaken,
      });
      localStorage.removeItem(getStorageKey(examId));
      navigate({
        to: "/exams/$examId/result/$attemptId",
        params: { examId, attemptId: attempt.id },
      });
    } catch {
      setSubmitting(false);
    }
  }, [submitting, questions, answers, examId, submitExam, navigate]);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  if (isLoading || !exam) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Skeleton className="h-8 w-64 mb-6" />
        <Skeleton className="h-72 rounded-lg" />
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <p className="text-muted-foreground mb-4">No questions available.</p>
        <Button onClick={() => navigate({ to: "/exams" })} variant="outline">
          Back to Exams
        </Button>
      </div>
    );
  }

  if (phase === "pre") {
    return (
      <PreStartScreen
        title={exam.title}
        questionCount={questions.length}
        durationMinutes={exam.durationMinutes}
        onBegin={handleBegin}
        onBack={() => navigate({ to: "/exams" })}
      />
    );
  }

  const currentQ = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const isTimeWarning = timerEnabled && timeLeft < 300;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-background">
      {/* Sticky Exam Header */}
      <div
        className="bg-card border-b border-border sticky top-16 z-40 shadow-xs"
        data-ocid="exam-header"
      >
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="font-display font-bold text-sm text-foreground truncate">
              {exam.title}
            </h1>
            <p className="text-xs text-muted-foreground">
              Question {currentIndex + 1}/{questions.length} · {answeredCount}{" "}
              answered
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {timerEnabled && (
              <div
                className={cn(
                  "flex items-center gap-1.5 text-sm font-bold px-3 py-1.5 rounded-md",
                  isTimeWarning
                    ? "bg-destructive/10 text-destructive animate-pulse"
                    : "bg-muted text-foreground",
                )}
                data-ocid="exam-timer"
              >
                <Clock className="w-3.5 h-3.5" />
                {formatTime(timeLeft)}
              </div>
            )}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden"
              onClick={() => setNavOpen((v) => !v)}
              aria-label="Toggle question navigator"
              data-ocid="toggle-navigator-btn"
            >
              <List className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              className="bg-accent text-primary font-bold hover:bg-accent/80 text-xs px-3"
              onClick={() => setShowFinishModal(true)}
              disabled={submitting}
              data-ocid="finish-exam-btn"
            >
              Finish Exam
            </Button>
          </div>
        </div>

        {/* Answer progress bar */}
        <div className="h-1 bg-muted">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${(answeredCount / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6 flex gap-6">
        {/* Main Question Area */}
        <div className="flex-1 min-w-0">
          <Card className="shadow-card border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                Question {currentIndex + 1} of {questions.length}
              </span>
              <span
                className={cn(
                  "text-[10px] px-2 py-0.5 rounded-full font-medium",
                  currentQ.difficulty === "easy"
                    ? "bg-[oklch(0.55_0.18_150)]/10 text-[oklch(0.45_0.18_150)]"
                    : currentQ.difficulty === "medium"
                      ? "bg-accent/10 text-accent"
                      : "bg-destructive/10 text-destructive",
                )}
              >
                {currentQ.difficulty}
              </span>
            </div>

            <p className="text-foreground text-sm leading-relaxed mb-6">
              {currentQ.stem}
            </p>

            <fieldset className="space-y-3 mb-6" aria-label="Answer choices">
              <legend className="sr-only">Select an answer</legend>
              {OPTION_LABELS.map((opt) => {
                const isSelected = answers[currentQ.id] === opt;
                return (
                  <label
                    key={opt}
                    className={cn(
                      "flex items-start gap-3 rounded-md border p-4 cursor-pointer transition-smooth select-none",
                      isSelected
                        ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                        : "border-border hover:border-primary/40 hover:bg-muted/30",
                    )}
                    data-ocid={`exam-option-${opt.toLowerCase()}`}
                  >
                    <input
                      type="radio"
                      name={`exam-q-${currentQ.id}`}
                      value={opt}
                      checked={isSelected}
                      onChange={() =>
                        setAnswers((prev) => ({ ...prev, [currentQ.id]: opt }))
                      }
                      className="sr-only"
                    />
                    <span
                      className={cn(
                        "w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 transition-smooth",
                        isSelected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground",
                      )}
                    >
                      {opt}
                    </span>
                    <span className="text-sm text-foreground leading-relaxed">
                      {OPTION_TEXT[opt](currentQ)}
                    </span>
                  </label>
                );
              })}
            </fieldset>

            {/* Prev / Next */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                disabled={currentIndex === 0}
                onClick={() => setCurrentIndex((i) => i - 1)}
                data-ocid="prev-question-btn"
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              {currentIndex < questions.length - 1 ? (
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setCurrentIndex((i) => i + 1)}
                  data-ocid="next-question-btn"
                >
                  Next
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              ) : (
                <Button
                  size="sm"
                  className="bg-accent text-primary font-bold hover:bg-accent/80"
                  onClick={() => setShowFinishModal(true)}
                  disabled={submitting}
                  data-ocid="submit-exam-btn"
                >
                  Finish Exam
                </Button>
              )}
            </div>
          </Card>
        </div>

        {/* Desktop Question Navigator */}
        <div className="hidden lg:block w-52 flex-shrink-0">
          <QuestionNavigator
            questions={questions}
            answers={answers}
            currentIndex={currentIndex}
            onSelect={setCurrentIndex}
            onFinish={() => setShowFinishModal(true)}
            submitting={submitting}
          />
        </div>
      </div>

      {/* Mobile Navigator Drawer */}
      {navOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
            role="button"
            tabIndex={0}
            aria-label="Close navigator"
            onClick={() => setNavOpen(false)}
            onKeyDown={(e) => e.key === "Escape" && setNavOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-64 bg-card border-l border-border shadow-lg p-4 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-foreground">
                Questions
              </h3>
              <button
                type="button"
                onClick={() => setNavOpen(false)}
                className="text-muted-foreground hover:text-foreground"
                aria-label="Close navigator"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <QuestionNavigator
              questions={questions}
              answers={answers}
              currentIndex={currentIndex}
              onSelect={(i) => {
                setCurrentIndex(i);
                setNavOpen(false);
              }}
              onFinish={() => {
                setNavOpen(false);
                setShowFinishModal(true);
              }}
              submitting={submitting}
            />
          </div>
        </div>
      )}

      {/* Finish Modal */}
      {showFinishModal && (
        <FinishModal
          answeredCount={answeredCount}
          totalCount={questions.length}
          onConfirm={handleSubmitFinal}
          onCancel={() => setShowFinishModal(false)}
          submitting={submitting}
        />
      )}
    </div>
  );
}

// ── Question Navigator Sub-component ─────────────────────────────────────────
interface NavProps {
  questions: Array<{ id: string }>;
  answers: Record<string, AnswerOption>;
  currentIndex: number;
  onSelect: (i: number) => void;
  onFinish: () => void;
  submitting: boolean;
}

function QuestionNavigator({
  questions,
  answers,
  currentIndex,
  onSelect,
  onFinish,
  submitting,
}: NavProps) {
  const answeredCount = Object.keys(answers).length;
  return (
    <Card className="shadow-card border border-border bg-card p-4 sticky top-36">
      <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
        Questions
      </h3>
      <div className="grid grid-cols-5 gap-1.5 mb-4">
        {questions.map((q, i) => (
          <button
            key={q.id}
            type="button"
            onClick={() => onSelect(i)}
            className={cn(
              "w-8 h-8 rounded text-xs font-semibold transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              i === currentIndex
                ? "bg-primary text-primary-foreground"
                : answers[q.id]
                  ? "bg-[oklch(0.55_0.18_150)]/15 text-[oklch(0.45_0.18_150)] border border-[oklch(0.55_0.18_150)]/20"
                  : "bg-muted text-muted-foreground hover:bg-muted/80",
            )}
            aria-label={`Question ${i + 1}${answers[q.id] ? " (answered)" : ""}`}
            data-ocid={`nav-q-${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className="text-xs text-muted-foreground space-y-1.5 border-t border-border pt-3 mb-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-[oklch(0.55_0.18_150)]/15 border border-[oklch(0.55_0.18_150)]/20" />
          <span>Answered ({answeredCount})</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-sm bg-muted" />
          <span>Unanswered ({questions.length - answeredCount})</span>
        </div>
      </div>
      <Button
        size="sm"
        className="w-full bg-accent text-primary font-bold hover:bg-accent/80 text-xs"
        onClick={onFinish}
        disabled={submitting}
        data-ocid="nav-finish-btn"
      >
        Finish Exam
      </Button>
    </Card>
  );
}

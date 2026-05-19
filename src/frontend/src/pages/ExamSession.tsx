import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useNavigate, useParams } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Clock, Flag, Grid3X3, HelpCircle, Settings } from "lucide-react";
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

function formatTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

interface ProgressState {
  answers: Record<string, AnswerOption>;
  flagged: Record<string, boolean>;
  currentIndex: number;
  startedAt: number;
}

export default function ExamSession() {
  const { examId } = useParams({ from: "/exams/$examId/take" });
  const navigate = useNavigate();
  const { data: exam } = useMockExam(examId);
  const { data: questions, isLoading } = useMockExamQuestions(examId);
  const submitExam = useSubmitExamAttempt();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerOption>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [timeLeft, setTimeLeft] = useState(2 * 60 * 60);
  const [submitting, setSubmitting] = useState(false);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    if (!exam) return;
    const raw = localStorage.getItem(getStorageKey(examId));
    if (raw) {
      try {
        const saved = JSON.parse(raw) as ProgressState;
        setAnswers(saved.answers ?? {});
        setFlagged(saved.flagged ?? {});
        setCurrentIndex(saved.currentIndex ?? 0);
        startTimeRef.current = saved.startedAt ?? Date.now();
        const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);
        setTimeLeft(Math.max(0, exam.durationMinutes * 60 - elapsed));
        return;
      } catch {
        localStorage.removeItem(getStorageKey(examId));
      }
    }
    startTimeRef.current = Date.now();
    setTimeLeft(exam.durationMinutes * 60);
  }, [exam, examId]);

  useEffect(() => {
    if (!questions?.length) return;
    const progress: ProgressState = {
      answers,
      flagged,
      currentIndex,
      startedAt: startTimeRef.current,
    };
    localStorage.setItem(getStorageKey(examId), JSON.stringify(progress));
  }, [answers, currentIndex, examId, flagged, questions?.length]);

  const handleSubmitFinal = useCallback(async () => {
    if (submitting || !questions) return;
    setSubmitting(true);

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
  }, [answers, examId, navigate, questions, submitExam, submitting]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft((seconds) => {
        if (seconds <= 1) {
          window.clearInterval(timer);
          void handleSubmitFinal();
          return 0;
        }
        return seconds - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [handleSubmitFinal]);

  if (isLoading || !exam) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Skeleton className="mb-6 h-8 w-64" />
        <Skeleton className="h-72 rounded-lg" />
      </div>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <p className="mb-4 text-muted-foreground">No questions available.</p>
        <Button onClick={() => navigate({ to: "/exams" })} variant="outline">
          Back to Exams
        </Button>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const progress = Math.round((answeredCount / questions.length) * 100);

  const submitWithConfirm = () => {
    const unanswered = questions.length - answeredCount;
    const message =
      unanswered > 0
        ? `${unanswered} questions are unanswered. Finish test now?`
        : "Finish test now?";
    if (window.confirm(message)) void handleSubmitFinal();
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-[#1f1f1f] font-sans text-[#2d2d2d]">
      <header className="bg-[#1b1b1b] text-white">
        <div className="grid grid-cols-[110px_1fr_125px] items-center gap-2 px-0 py-2 sm:grid-cols-[220px_1fr_150px] sm:px-4">
          <div className="font-mono text-[13px] font-bold leading-7">
            <div>
              Question: <span className="text-lg">{currentIndex + 1}</span>
            </div>
            <div>
              Section: <span className="text-lg">{exam.id.endsWith("-s2") ? "2" : "1"}</span>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
            <div className="rounded-md border border-[#3d3d3d] bg-[#2a2a2a] px-5 py-2 text-center shadow-inner">
              <div className="flex items-center justify-center gap-2 text-[13px] text-gray-300">
                <Clock className="h-4 w-4 text-white" />
                Section Time Remaining:
              </div>
              <div className="font-mono text-[21px] font-extrabold tracking-[0.18em]">
                {formatTime(timeLeft)}
              </div>
            </div>
            <div className="w-44 text-center">
              <div className="mb-1 h-2 rounded-full bg-[#5b5b5b]">
                <div
                  className="h-full rounded-full bg-[#78c640]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="font-mono text-[12px]">Progress {progress}%</div>
            </div>
          </div>

          <Button
            className="justify-self-end rounded-md bg-[#666] px-4 font-bold text-white hover:bg-[#555]"
            disabled={submitting}
            onClick={submitWithConfirm}
            data-ocid="finish-exam-btn"
          >
            Finish Test
          </Button>
        </div>

        <div className="flex items-center justify-between bg-[#73c33d] px-2 py-2 text-sm font-bold text-white sm:px-6">
          <span>Test: {exam.title.replace(" - ", " -- ")}</span>
          <span>Candidate: USER DEMO</span>
        </div>
      </header>

      <main className="grid min-h-[calc(100vh-13rem)] grid-cols-[72px_1fr] bg-[#d8d8d8]">
        <aside className="overflow-y-auto border-r border-[#bdbdbd] bg-[#d8d8d8] py-2">
          <div className="space-y-2">
            {questions.map((q, index) => (
              <button
                key={q.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "relative flex h-[17px] w-[68px] items-center rounded-r-sm bg-[#73c33d] pl-1 text-left text-[14px] font-bold leading-none text-white",
                  index === currentIndex &&
                    "after:absolute after:right-[-9px] after:top-0 after:h-0 after:w-0 after:border-y-[8.5px] after:border-l-[9px] after:border-y-transparent after:border-l-[#73c33d]",
                  answers[q.id] && "bg-[#59a52f]",
                  flagged[q.id] && "ring-2 ring-yellow-400",
                )}
                aria-label={`Question ${index + 1}`}
                data-ocid={`nav-q-${index + 1}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </aside>

        <section className="p-2">
          <div className="min-h-full rounded border border-[#cfcfcf] bg-white px-5 py-6 sm:px-8">
            {currentQ.vignette && (
              <div className="mb-6 whitespace-pre-line rounded border border-[#d9d9d9] bg-[#f7f7f7] p-4 text-[16px] leading-7">
                {currentQ.vignette}
              </div>
            )}
            <p className="mb-7 whitespace-pre-line text-[18px] leading-8">
              {currentQ.stem}
            </p>

            <fieldset className="space-y-3" aria-label="Answer choices">
              <legend className="sr-only">Select answer</legend>
              {OPTION_LABELS.map((option) => {
                const isSelected = answers[currentQ.id] === option;
                return (
                  <label
                    key={option}
                    className={cn(
                      "grid cursor-pointer grid-cols-[42px_1fr] overflow-hidden rounded border border-[#d6d6d6] bg-white transition hover:border-[#73c33d]",
                      isSelected && "border-[#73c33d] ring-2 ring-[#73c33d]/30",
                    )}
                    data-ocid={`exam-option-${option.toLowerCase()}`}
                  >
                    <input
                      type="radio"
                      name={`q-${currentQ.id}`}
                      value={option}
                      checked={isSelected}
                      onChange={() =>
                        setAnswers((prev) => ({ ...prev, [currentQ.id]: option }))
                      }
                      className="sr-only"
                    />
                    <span className="flex min-h-[52px] items-center justify-center border-r border-[#d6d6d6] bg-[#f1f1f1] text-[15px] font-bold">
                      {option}
                    </span>
                    <span className="flex min-h-[52px] items-center px-5 text-[16px] leading-7">
                      {OPTION_TEXT[option](currentQ)}
                    </span>
                  </label>
                );
              })}
            </fieldset>
          </div>
        </section>
      </main>

      <footer className="flex items-center justify-between bg-[#1f1f1f] px-1 py-2">
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="icon" className="bg-[#3f3f3f] text-white hover:bg-[#555]">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="bg-[#3f3f3f] text-white hover:bg-[#555]">
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="icon" className="bg-[#3f3f3f] text-white hover:bg-[#555]">
            <HelpCircle className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2">
          <Button
            className={cn(
              "bg-[#73c33d] font-bold text-white hover:bg-[#65b535]",
              flagged[currentQ.id] && "bg-yellow-500 hover:bg-yellow-600",
            )}
            onClick={() =>
              setFlagged((prev) => ({
                ...prev,
                [currentQ.id]: !prev[currentQ.id],
              }))
            }
            data-ocid="flag-question-btn"
          >
            <Flag className="mr-1 h-4 w-4 text-red-600" />
            Flag
          </Button>
          <Button
            className="bg-[#666] font-bold text-white hover:bg-[#555]"
            disabled={currentIndex === 0}
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            data-ocid="prev-question-btn"
          >
            <ChevronLeft className="mr-1 h-4 w-4" />
            Back
          </Button>
          {currentIndex < questions.length - 1 ? (
            <Button
              className="bg-[#73c33d] font-bold text-white hover:bg-[#65b535]"
              onClick={() =>
                setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))
              }
              data-ocid="next-question-btn"
            >
              Next
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          ) : (
            <Button
              className="bg-[#73c33d] font-bold text-white hover:bg-[#65b535]"
              disabled={submitting}
              onClick={submitWithConfirm}
              data-ocid="submit-exam-btn"
            >
              Finish
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          )}
        </div>
      </footer>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  Clock,
  FileText,
} from "lucide-react";
import { ScoreRing } from "../components/ScoreRing";
import { useMockExams, useMyExamHistory } from "../hooks/useBackend";

const EXAM_RULES = [
  "Each exam consists of multiple-choice questions with 3 options (A, B, C).",
  "Exams cannot be paused once started — complete in one sitting.",
  "A timer is available (optional) to simulate real CFA exam conditions.",
  "You may navigate freely between questions before submitting.",
  "Results and answer explanations are shown immediately after submission.",
  "A score of 70% or above is considered a passing threshold.",
];

export default function Exams() {
  const { data: exams, isLoading } = useMockExams();
  const { data: examHistory } = useMyExamHistory();

  const completedIds = new Set((examHistory ?? []).map((a) => a.examId));

  const getBestScore = (examId: string) => {
    const attempts = (examHistory ?? []).filter((a) => a.examId === examId);
    if (attempts.length === 0) return null;
    return Math.max(...attempts.map((a) => a.score));
  };

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Skeleton className="h-10 w-64 mb-2" />
        <Skeleton className="h-5 w-80 mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Array.from({ length: 6 }, (_, i) => `sk-${i}`).map((k) => (
            <Skeleton key={k} className="h-48 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  const totalCompleted = completedIds.size;

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight">
              Mock Examinations
            </h1>
            <p className="text-muted-foreground text-sm mt-0.5">
              10 full-length practice exams · CFA Level I format ·{" "}
              <span className="text-primary font-medium">
                {totalCompleted}/10 completed
              </span>
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-2 bg-muted rounded-full overflow-hidden max-w-sm">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${(totalCompleted / 10) * 100}%` }}
          />
        </div>
      </div>

      {/* Exam Rules Card */}
      <Card className="shadow-card border border-border bg-card p-5 mb-7">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-accent flex-shrink-0" />
          <h2 className="font-semibold text-sm text-foreground">
            Exam Instructions
          </h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
          {EXAM_RULES.map((rule) => (
            <li
              key={rule}
              className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
              {rule}
            </li>
          ))}
        </ul>
      </Card>

      {/* Exam Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        data-ocid="exams-grid"
      >
        {(exams ?? []).map((exam) => {
          const isCompleted = completedIds.has(exam.id);
          const bestScore = getBestScore(exam.id);

          return (
            <Card
              key={exam.id}
              className={cn(
                "shadow-card border border-border bg-card p-5 transition-smooth group relative overflow-hidden",
                "hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:-translate-y-0.5",
              )}
              data-ocid={`exam-card-${exam.id}`}
            >
              {/* Completed accent stripe */}
              {isCompleted && (
                <div className="absolute top-0 left-0 w-1 h-full bg-[oklch(0.55_0.18_150)] rounded-l-lg" />
              )}

              <div className="flex items-start justify-between gap-3 mb-3 pl-1">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-display font-bold text-sm text-foreground leading-snug">
                      {exam.title}
                    </h3>
                    {isCompleted && (
                      <Badge className="text-[9px] py-0 px-1.5 border-0 bg-[oklch(0.55_0.18_150)]/12 text-[oklch(0.45_0.18_150)] flex items-center gap-0.5">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        Completed
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {exam.description}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <ScoreRing score={bestScore ?? 0} size="sm" />
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4 pl-1">
                <span className="flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  {exam.questionCount} questions
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {exam.durationMinutes} min
                </span>
                {bestScore !== null && (
                  <span
                    className={cn(
                      "font-semibold",
                      bestScore >= 70
                        ? "text-[oklch(0.45_0.18_150)]"
                        : "text-accent",
                    )}
                  >
                    Best: {bestScore}%
                  </span>
                )}
              </div>

              <Link
                to="/exams/$examId/take"
                params={{ examId: exam.id }}
                className="block pl-1"
              >
                <Button
                  size="sm"
                  className={cn(
                    "w-full font-semibold transition-smooth",
                    isCompleted
                      ? "bg-muted text-foreground border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
                      : "bg-primary text-primary-foreground hover:bg-primary/90",
                  )}
                  data-ocid={`start-exam-${exam.id}`}
                >
                  {isCompleted ? "Retake Exam" : "Start Exam"}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

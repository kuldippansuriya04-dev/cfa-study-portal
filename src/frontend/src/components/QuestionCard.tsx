import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle, ChevronRight, XCircle } from "lucide-react";
import { useState } from "react";
import type { AnswerOption, Question } from "../types/cfa";

interface QuestionCardProps {
  question: Question;
  index: number;
  onAnswer?: (
    questionId: string,
    answer: AnswerOption,
    isCorrect: boolean,
  ) => void;
  onNext?: () => void;
  showNext?: boolean;
  reviewMode?: boolean;
  userAnswer?: AnswerOption;
}

const OPTION_LABELS: AnswerOption[] = ["A", "B", "C"];
const OPTION_TEXT: Record<AnswerOption, (q: Question) => string> = {
  A: (q) => q.optionA,
  B: (q) => q.optionB,
  C: (q) => q.optionC,
};

const DIFFICULTY_COLORS = {
  easy: "bg-[oklch(0.55_0.18_150)]/10 text-[oklch(0.45_0.18_150)]",
  medium: "bg-accent/10 text-accent",
  hard: "bg-destructive/10 text-destructive",
};

export function QuestionCard({
  question,
  index,
  onAnswer,
  onNext,
  showNext = false,
  reviewMode = false,
  userAnswer,
}: QuestionCardProps) {
  const [selected, setSelected] = useState<AnswerOption | null>(
    userAnswer ?? null,
  );
  const [submitted, setSubmitted] = useState(reviewMode || !!userAnswer);

  const isCorrect = submitted && selected === question.correctAnswer;

  const handleSelect = (opt: AnswerOption) => {
    if (submitted) return;
    setSelected(opt);
  };

  const handleSubmit = () => {
    if (!selected || submitted) return;
    setSubmitted(true);
    onAnswer?.(question.id, selected, selected === question.correctAnswer);
  };

  const getOptionStyle = (opt: AnswerOption) => {
    if (!submitted) {
      return selected === opt
        ? "border-primary bg-primary/5 ring-1 ring-primary/30"
        : "border-border hover:border-primary/40 hover:bg-muted/40";
    }
    if (opt === question.correctAnswer)
      return "border-[oklch(0.55_0.18_150)] bg-[oklch(0.55_0.18_150)]/8 ring-1 ring-[oklch(0.55_0.18_150)]/30";
    if (opt === selected && opt !== question.correctAnswer)
      return "border-destructive bg-destructive/8 ring-1 ring-destructive/30";
    return "border-border opacity-60";
  };

  return (
    <Card
      className="shadow-card border border-border bg-card p-6 animate-slide-up"
      data-ocid="question-card"
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
            Question {index + 1}
          </span>
          <Badge
            className={cn(
              "text-[10px] py-0 px-2 border-0 font-medium",
              DIFFICULTY_COLORS[question.difficulty],
            )}
          >
            {question.difficulty}
          </Badge>
        </div>
        {submitted && (
          <div
            className={cn(
              "flex items-center gap-1.5 text-sm font-semibold",
              isCorrect ? "text-[oklch(0.55_0.18_150)]" : "text-destructive",
            )}
          >
            {isCorrect ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <XCircle className="w-4 h-4" />
            )}
            {isCorrect ? "Correct" : "Incorrect"}
          </div>
        )}
      </div>

      {/* Stem */}
      <p
        className="text-foreground font-body text-sm leading-relaxed mb-5"
        data-ocid="question-stem"
      >
        {question.stem}
      </p>

      {/* Options — using radio inputs for accessibility */}
      <fieldset className="space-y-2.5 mb-5" aria-label="Answer choices">
        <legend className="sr-only">Select an answer</legend>
        {OPTION_LABELS.map((opt) => (
          <label
            key={opt}
            className={cn(
              "flex items-start gap-3 rounded-md border p-3.5 transition-smooth select-none",
              !submitted && "cursor-pointer",
              getOptionStyle(opt),
            )}
            data-ocid={`option-${opt.toLowerCase()}`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={opt}
              checked={selected === opt}
              onChange={() => handleSelect(opt)}
              disabled={submitted}
              className="sr-only"
            />
            <span
              className={cn(
                "w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 transition-smooth",
                submitted && opt === question.correctAnswer
                  ? "border-[oklch(0.55_0.18_150)] bg-[oklch(0.55_0.18_150)] text-white"
                  : submitted && opt === selected
                    ? "border-destructive bg-destructive text-white"
                    : selected === opt
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-muted/40 text-muted-foreground",
              )}
            >
              {opt}
            </span>
            <span className="text-sm text-foreground leading-relaxed">
              {OPTION_TEXT[opt](question)}
            </span>
            {submitted && opt === question.correctAnswer && (
              <CheckCircle className="w-4 h-4 text-[oklch(0.55_0.18_150)] ml-auto flex-shrink-0 mt-0.5" />
            )}
          </label>
        ))}
      </fieldset>

      {/* Explanation */}
      {submitted && (
        <div className="rounded-md bg-muted/50 border border-border p-4 mb-4 animate-fade-in">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
            Explanation
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            {question.explanation}
          </p>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center justify-end gap-3">
        {!submitted && (
          <Button
            onClick={handleSubmit}
            disabled={!selected}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            data-ocid="submit-answer-btn"
          >
            Submit Answer
          </Button>
        )}
        {submitted && showNext && onNext && (
          <Button
            onClick={onNext}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            data-ocid="next-question-btn"
          >
            Next Question
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        )}
      </div>
    </Card>
  );
}

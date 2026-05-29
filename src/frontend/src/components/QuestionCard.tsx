import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle, ChevronRight, XCircle } from "lucide-react";
import { useState, type ReactNode } from "react";
import type { AnswerOption, Question } from "../types/cfa";

interface QuestionCardProps {
  question: Question;
  index: number;
  onAnswer?: (
    questionId: string,
    answer: AnswerOption,
    isCorrect: boolean | null,
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

export function renderFormattedText(text: string) {
  const lines = text.split("\n");
  const content: ReactNode[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) {
      content.push(<div key={`space-${i}`} className="h-2" />);
      continue;
    }

    if (line.startsWith("|") && line.endsWith("|")) {
      const tableLines: string[] = [];
      let j = i;
      while (j < lines.length) {
        const tableLine = lines[j].trim();
        if (!tableLine.startsWith("|") || !tableLine.endsWith("|")) break;
        tableLines.push(tableLine);
        j++;
      }
      const rows = tableLines
        .filter((tableLine) => !/^\|[\s:-|]+\|$/.test(tableLine))
        .map((tableLine) =>
          tableLine
            .slice(1, -1)
            .split("|")
            .map((cell) => cell.trim()),
        );

      content.push(
        <div key={`table-${i}`} className="my-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={`${i}-${row.join("-")}`}>
                  {row.map((cell, cellIndex) =>
                    rowIndex === 0 ? (
                      <th
                        key={`${cell}-${cellIndex}`}
                        className="border border-border px-3 py-2 text-center align-middle font-semibold"
                      >
                        {cell}
                      </th>
                    ) : (
                      <td
                        key={`${cell}-${cellIndex}`}
                        className="border border-border px-3 py-2 text-center align-middle"
                      >
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      );
      i = j - 1;
      continue;
    }

    content.push(
      <p key={`line-${i}`} className="mb-2 last:mb-0">
        {line}
      </p>,
    );
  }

  return content;
}

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

  const answerKeyMissing = question.answerKeyStatus === "missing";
  const isCorrect =
    submitted && !answerKeyMissing && selected === question.correctAnswer;

  const handleSelect = (opt: AnswerOption) => {
    if (submitted) return;
    setSelected(opt);
  };

  const handleSubmit = () => {
    if (!selected || submitted) return;
    setSubmitted(true);
    onAnswer?.(
      question.id,
      selected,
      answerKeyMissing ? null : selected === question.correctAnswer,
    );
  };

  const getOptionStyle = (opt: AnswerOption) => {
    if (!submitted) {
      return selected === opt
        ? "border-primary bg-primary/5 ring-1 ring-primary/30"
        : "border-border hover:border-primary/40 hover:bg-muted/40";
    }
    if (answerKeyMissing) {
      return selected === opt
        ? "border-primary bg-primary/5 ring-1 ring-primary/30"
        : "border-border opacity-70";
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
              answerKeyMissing
                ? "text-muted-foreground"
                : isCorrect
                  ? "text-[oklch(0.55_0.18_150)]"
                  : "text-destructive",
            )}
          >
            {answerKeyMissing ? null : isCorrect ? (
              <CheckCircle className="w-4 h-4" />
            ) : (
              <XCircle className="w-4 h-4" />
            )}
            {answerKeyMissing
              ? "Answer key unavailable"
              : isCorrect
                ? "Correct"
                : "Incorrect"}
          </div>
        )}
      </div>

      {/* Stem */}
      {question.vignette && (
        <div className="text-foreground text-sm leading-relaxed mb-4 whitespace-pre-line rounded-md border border-border bg-muted/30 p-4">
          {renderFormattedText(question.vignette)}
        </div>
      )}

      <div
        className="text-foreground font-body text-sm leading-relaxed mb-5"
        data-ocid="question-stem"
      >
        {renderFormattedText(question.stem)}
      </div>

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
                  : submitted && opt === selected && !answerKeyMissing
                    ? "border-destructive bg-destructive text-white"
                    : submitted && opt === selected && answerKeyMissing
                      ? "border-primary bg-primary text-primary-foreground"
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
            {submitted &&
              !answerKeyMissing &&
              opt === question.correctAnswer && (
                <CheckCircle className="w-4 h-4 text-[oklch(0.55_0.18_150)] ml-auto flex-shrink-0 mt-0.5" />
              )}
          </label>
        ))}
      </fieldset>

      {/* Explanation */}
      {submitted && (
        <div className="rounded-md bg-muted/50 border border-border p-4 mb-4 animate-fade-in">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
            Solution
          </p>
          <div className="text-sm text-foreground leading-relaxed">
            {renderFormattedText(question.explanation)}
          </div>
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

import { TOPICS } from "@/app/data/topics";
import type { PageId } from "@/app/types/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PRACTICE_PACK_QUESTIONS } from "@/data/practicePackData";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useMemo, useState } from "react";
import type { AnswerOption, Question } from "../../types/cfa";

interface PracticeQuizPageProps {
  onNavigate: (page: PageId) => void;
}

const OPTIONS: AnswerOption[] = ["A", "B", "C"];

function toPracticeTopicId(topicId: string) {
  return topicId === "alt" ? "alts" : topicId;
}

function getOptionText(question: Question, option: AnswerOption) {
  if (option === "A") return question.optionA;
  if (option === "B") return question.optionB;
  return question.optionC;
}

function inferMarkedAnswer(question: Question): AnswerOption | null {
  const values: Array<[AnswerOption, string]> = [
    ["A", question.optionA],
    ["B", question.optionB],
    ["C", question.optionC],
  ];
  for (const [option, value] of values) {
    if (/(^|\s)x\s*$/i.test(value) || /(?:^|\s)x\s*[^\w]*$/i.test(value)) {
      return option;
    }
  }

  const joined = [
    question.stem,
    question.optionA,
    question.optionB,
    question.optionC,
  ].join("\n");
  const match =
    joined.match(/(?:^|\s)x\s*([ABC])c?(?:\b|\s)/i) ??
    joined.match(/(?:^|\s)([ABC])\s*x(?:\b|\s)/i);
  return (match?.[1]?.toUpperCase() as AnswerOption | undefined) ?? null;
}

function cleanPracticeText(value: string) {
  return value
    .replace(/(?:^|\s)x\s*([ABC])c?\b/gi, "")
    .replace(/\b([ABC])\s*x\b/gi, "")
    .replace(/\s+x\s*$/i, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export function PracticeQuizPage({ onNavigate }: PracticeQuizPageProps) {
  const [topicId, setTopicId] = useState(TOPICS[0]?.id ?? "ethics");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<AnswerOption | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<Record<string, boolean | null>>({});

  const questions = useMemo(
    () =>
      PRACTICE_PACK_QUESTIONS.filter(
        (question) => question.topicId === toPracticeTopicId(topicId),
      ),
    [topicId],
  );
  const topic = TOPICS.find((item) => item.id === topicId) ?? TOPICS[0];
  const currentQuestion = questions[currentIndex];
  const inferredAnswer = currentQuestion
    ? inferMarkedAnswer(currentQuestion)
    : null;
  const answeredCount = Object.keys(results).length;
  const scorable = Object.values(results).filter(
    (result): result is boolean => result !== null,
  );
  const correctCount = scorable.filter(Boolean).length;
  const score =
    scorable.length > 0
      ? Math.round((correctCount / scorable.length) * 100)
      : 0;
  const progress =
    questions.length > 0
      ? Math.round((answeredCount / questions.length) * 100)
      : 0;
  const answerKeyMissing =
    currentQuestion?.answerKeyStatus === "missing" && !inferredAnswer;
  const correctAnswer = inferredAnswer ?? currentQuestion?.correctAnswer;

  const resetForTopic = (nextTopicId: string) => {
    setTopicId(nextTopicId);
    setCurrentIndex(0);
    setSelected(null);
    setSubmitted(false);
    setResults({});
  };

  const submit = () => {
    if (!currentQuestion || !selected || submitted) return;
    const result = answerKeyMissing ? null : selected === correctAnswer;
    setResults((previous) => ({ ...previous, [currentQuestion.id]: result }));
    setSubmitted(true);
  };

  const next = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((value) => value + 1);
      setSelected(null);
      setSubmitted(false);
    }
  };

  return (
    <div className="p-6 space-y-5 max-w-5xl mx-auto">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground -ml-2 mb-2"
            onClick={() => onNavigate("topics")}
          >
            <ArrowLeft size={16} className="mr-1" /> Study Topics
          </Button>
          <h1 className="text-2xl font-bold">Practice Quiz</h1>
          <p className="text-muted-foreground text-sm mt-1">
            Imported CFA Level I practice-pack questions by subject.
          </p>
        </div>

        <Select value={topicId} onValueChange={resetForTopic}>
          <SelectTrigger className="w-full md:w-72 bg-white">
            <SelectValue placeholder="Choose topic" />
          </SelectTrigger>
          <SelectContent>
            {TOPICS.map((item) => {
              const count = PRACTICE_PACK_QUESTIONS.filter(
                (question) => question.topicId === toPracticeTopicId(item.id),
              ).length;
              return (
                <SelectItem key={item.id} value={item.id}>
                  {item.shortName} · {count} Qs
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Subject", value: topic.shortName },
          { label: "Questions", value: questions.length },
          { label: "Answered", value: answeredCount },
          { label: "Score", value: scorable.length > 0 ? `${score}%` : "N/A" },
        ].map(({ label, value }) => (
          <Card key={label} className="border-none shadow-sm">
            <CardContent className="p-4">
              <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
                {label}
              </p>
              <p className="font-bold text-lg mt-1">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-none shadow-sm overflow-hidden">
        <div className="h-2" style={{ backgroundColor: topic.color }} />
        <CardContent className="p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{topic.icon}</span>
              <div>
                <p className="font-semibold">{topic.name}</p>
                <p className="text-xs text-muted-foreground">
                  Question {Math.min(currentIndex + 1, questions.length)} of{" "}
                  {questions.length}
                </p>
              </div>
            </div>
            <Badge
              className="w-fit text-white"
              style={{ backgroundColor: topic.color }}
            >
              {progress}% complete
            </Badge>
          </div>

          <Progress value={progress} className="h-2 mb-5" />

          {!currentQuestion ? (
            <p className="text-sm text-muted-foreground">
              No imported questions are available for this topic.
            </p>
          ) : (
            <div className="space-y-5">
              <div>
                <Badge variant="outline" className="mb-3">
                  {currentQuestion.difficulty}
                </Badge>
                <p className="text-sm leading-relaxed whitespace-pre-line">
                  {cleanPracticeText(currentQuestion.stem)}
                </p>
              </div>

              <div className="space-y-2.5">
                {OPTIONS.map((option) => {
                  const isChosen = selected === option;
                  const isCorrect =
                    submitted && !answerKeyMissing && correctAnswer === option;
                  const isWrong =
                    submitted && isChosen && !answerKeyMissing && !isCorrect;

                  return (
                    <button
                      type="button"
                      key={option}
                      disabled={submitted}
                      onClick={() => setSelected(option)}
                      className={cn(
                        "w-full text-left rounded-xl border bg-white p-3.5 transition-all",
                        !submitted &&
                          "hover:border-blue-300 hover:bg-blue-50/40",
                        isChosen && !submitted && "border-blue-500 bg-blue-50",
                        submitted &&
                          answerKeyMissing &&
                          isChosen &&
                          "border-blue-500 bg-blue-50",
                        isCorrect && "border-green-500 bg-green-50",
                        isWrong && "border-red-500 bg-red-50",
                      )}
                    >
                      <div className="flex gap-3">
                        <span
                          className={cn(
                            "flex size-7 shrink-0 items-center justify-center rounded-full border text-xs font-bold",
                            isChosen
                              ? "border-blue-500 bg-blue-500 text-white"
                              : "border-muted-foreground/30 text-muted-foreground",
                            isCorrect && "border-green-500 bg-green-500",
                            isWrong && "border-red-500 bg-red-500",
                          )}
                        >
                          {option}
                        </span>
                        <span className="text-sm leading-relaxed whitespace-pre-line">
                          {cleanPracticeText(
                            getOptionText(currentQuestion, option),
                          )}
                        </span>
                        {isCorrect && (
                          <CheckCircle2 className="ml-auto size-5 shrink-0 text-green-600" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="overflow-hidden rounded-md border border-border bg-white text-sm">
                  <div className="border-b border-border bg-muted/30 px-4 py-3">
                    <h2 className="text-lg font-semibold text-foreground">
                      Solution
                    </h2>
                  </div>
                  <div className="space-y-3 px-4 py-4">
                    {answerKeyMissing ? (
                      <p className="text-muted-foreground">
                        {currentQuestion.explanation}
                      </p>
                    ) : (
                      OPTIONS.map((option) => {
                        const isCorrectOption = option === correctAnswer;
                        return (
                          <div
                            key={option}
                            className="grid grid-cols-[24px_1fr] gap-2 leading-7"
                          >
                            <div className="font-bold text-foreground">
                              {option}.
                            </div>
                            <p className="text-muted-foreground">
                              <span
                                className={cn(
                                  "font-semibold",
                                  isCorrectOption
                                    ? "text-foreground"
                                    : "text-muted-foreground",
                                )}
                              >
                                {isCorrectOption ? "Correct" : "Incorrect"}
                              </span>
                              {" - "}
                              Exact copy-paste solution text is not available in
                              the uploaded files for this option.
                            </p>
                          </div>
                        );
                      })
                    )}
                    {!answerKeyMissing && selected && (
                      <div className="mt-2 rounded-md bg-muted/40 px-3 py-2 text-xs text-muted-foreground">
                        Your answer: {selected} · Correct answer:{" "}
                        {correctAnswer}
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="flex justify-end gap-2">
                {!submitted ? (
                  <Button onClick={submit} disabled={!selected}>
                    Submit Answer
                  </Button>
                ) : (
                  <Button
                    onClick={next}
                    disabled={currentIndex >= questions.length - 1}
                  >
                    Next Question <ArrowRight size={16} className="ml-1" />
                  </Button>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

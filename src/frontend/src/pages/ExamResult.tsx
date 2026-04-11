import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useNavigate, useParams } from "@tanstack/react-router";
import {
  AlertTriangle,
  BookOpen,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  Home,
  RotateCcw,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { QuestionCard } from "../components/QuestionCard";
import { ScoreRing } from "../components/ScoreRing";
import { MOCK_TOPICS } from "../data/mockData";
import {
  useMockExam,
  useMockExamQuestions,
  useMyExamHistory,
} from "../hooks/useBackend";

export default function ExamResult() {
  const { examId, attemptId } = useParams({
    from: "/exams/$examId/result/$attemptId",
  });
  const navigate = useNavigate();
  const { data: exam } = useMockExam(examId);
  const { data: questions } = useMockExamQuestions(examId);
  const { data: history } = useMyExamHistory();
  const [showReview, setShowReview] = useState(false);

  const attempt = history?.find((a) => a.id === attemptId);

  if (!attempt) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-muted-foreground mb-4">Result not found.</p>
        <Button onClick={() => navigate({ to: "/exams" })} variant="outline">
          Back to Exams
        </Button>
      </div>
    );
  }

  const { score, correctCount, totalCount } = attempt;
  const isPassing = score >= 70;
  const mins = Math.floor(attempt.timeTakenSeconds / 60);
  const secs = attempt.timeTakenSeconds % 60;
  const completedDate = new Date(attempt.completedAt).toLocaleDateString(
    "en-US",
    { month: "long", day: "numeric", year: "numeric" },
  );

  // Topic breakdown
  const topicBreakdown = MOCK_TOPICS.map((topic) => {
    const topicQuestions = (questions ?? []).filter(
      (q) => q.topicId === topic.id,
    );
    const topicAnswers = attempt.answers.filter((a) =>
      topicQuestions.some((q) => q.id === a.questionId),
    );
    const correct = topicAnswers.filter((a) => {
      const q = topicQuestions.find((tq) => tq.id === a.questionId);
      return q?.correctAnswer === a.selectedAnswer;
    }).length;
    const total = topicQuestions.length;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { topic, correct, total, accuracy };
  }).filter((t) => t.total > 0);

  const weakestTopic =
    topicBreakdown.length > 0
      ? [...topicBreakdown].sort((a, b) => a.accuracy - b.accuracy)[0]
      : null;

  const STATS = [
    { label: "Total Questions", value: String(totalCount) },
    {
      label: "Correct",
      value: String(correctCount),
      accent: "text-[oklch(0.45_0.18_150)]",
    },
    {
      label: "Incorrect",
      value: String(totalCount - correctCount),
      accent: "text-destructive",
    },
    { label: "Date", value: completedDate },
    { label: "Time Taken", value: `${mins}m ${secs}s` },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Pass/Fail Banner */}
      <div
        className={cn(
          "rounded-lg px-5 py-3 flex items-center gap-3 border",
          isPassing
            ? "bg-[oklch(0.55_0.18_150)]/8 border-[oklch(0.55_0.18_150)]/20"
            : "bg-destructive/8 border-destructive/20",
        )}
        data-ocid="pass-fail-banner"
      >
        {isPassing ? (
          <CheckCircle className="w-5 h-5 text-[oklch(0.55_0.18_150)] flex-shrink-0" />
        ) : (
          <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
        )}
        <div>
          <p
            className={cn(
              "font-semibold text-sm",
              isPassing ? "text-[oklch(0.35_0.18_150)]" : "text-destructive",
            )}
          >
            {isPassing
              ? "Passing Score — Well done!"
              : "Below Passing Threshold — Keep Practicing!"}
          </p>
          <p className="text-xs text-muted-foreground">
            Passing threshold is 70% · Your score: {score}%
          </p>
        </div>
      </div>

      {/* Score Hero Card */}
      <Card className="shadow-card border border-border bg-card p-8 text-center">
        <p className="text-muted-foreground text-sm mb-1">{exam?.title}</p>
        <h1 className="font-display text-2xl font-bold text-foreground mb-6">
          {isPassing ? "Excellent Work!" : "Keep Practicing!"}
        </h1>

        <div className="flex justify-center mb-8">
          <ScoreRing score={score} size="lg" label="Final Score" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
          {STATS.map(({ label, value, accent }) => (
            <div key={label} className="bg-muted/40 rounded-lg p-3">
              <div
                className={cn(
                  "font-display text-lg font-bold text-foreground leading-tight",
                  accent,
                )}
              >
                {value}
              </div>
              <div className="text-[10px] text-muted-foreground mt-0.5">
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 justify-center flex-wrap">
          <Button
            variant="outline"
            onClick={() => navigate({ to: "/exams" })}
            data-ocid="back-to-exams-btn"
          >
            <Home className="w-4 h-4 mr-1.5" />
            All Exams
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              navigate({ to: "/exams/$examId/take", params: { examId } })
            }
            data-ocid="retake-exam-btn"
          >
            <RotateCcw className="w-4 h-4 mr-1.5" />
            Retake
          </Button>
          <Button
            variant="outline"
            onClick={() => navigate({ to: "/history" })}
            data-ocid="my-scores-btn"
          >
            <TrendingUp className="w-4 h-4 mr-1.5" />
            My Scores
          </Button>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => setShowReview((v) => !v)}
            data-ocid="review-answers-btn"
          >
            {showReview ? (
              <ChevronUp className="w-4 h-4 mr-1.5" />
            ) : (
              <BookOpen className="w-4 h-4 mr-1.5" />
            )}
            {showReview ? "Hide" : "Review"} Answers
          </Button>
        </div>
      </Card>

      {/* Topic Breakdown */}
      {topicBreakdown.length > 0 && (
        <Card className="shadow-card border border-border bg-card p-6">
          <h2 className="font-display text-lg font-bold text-foreground mb-4">
            Topic Breakdown
          </h2>
          <div className="space-y-3">
            {topicBreakdown.map(({ topic, correct, total, accuracy }) => (
              <div key={topic.id} data-ocid={`topic-row-${topic.id}`}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="text-sm text-foreground font-medium truncate">
                      {topic.title}
                    </span>
                    <Badge
                      className={cn(
                        "text-[9px] px-1.5 py-0 border-0 flex-shrink-0",
                        accuracy >= 70
                          ? "bg-[oklch(0.55_0.18_150)]/10 text-[oklch(0.45_0.18_150)]"
                          : accuracy >= 50
                            ? "bg-accent/10 text-accent"
                            : "bg-destructive/10 text-destructive",
                      )}
                    >
                      {accuracy}%
                    </Badge>
                  </div>
                  <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                    {correct}/{total}
                  </span>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-700",
                      accuracy >= 70
                        ? "bg-[oklch(0.55_0.18_150)]"
                        : accuracy >= 50
                          ? "bg-accent"
                          : "bg-destructive",
                    )}
                    style={{ width: `${accuracy}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Weakest Topic Recommendation */}
      {weakestTopic && weakestTopic.accuracy < 80 && (
        <Card
          className="shadow-card border border-border bg-accent/5 p-5"
          data-ocid="weakest-topic-card"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-md bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
              <AlertTriangle className="w-4 h-4 text-accent" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-sm text-foreground mb-1">
                Recommended: Practice{" "}
                <span className="text-accent">{weakestTopic.topic.title}</span>
              </h3>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                You scored {weakestTopic.accuracy}% on this topic (
                {weakestTopic.correct}/{weakestTopic.total} correct). Targeted
                practice will significantly improve your overall performance.
              </p>
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                onClick={() =>
                  navigate({
                    to: "/topics/$topicId",
                    params: { topicId: weakestTopic.topic.id },
                  })
                }
                data-ocid="practice-weakest-btn"
              >
                Practice {weakestTopic.topic.title}
                <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Answer Review */}
      {showReview && questions && (
        <div className="space-y-4" data-ocid="review-section">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-foreground">
              Answer Review
            </h2>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-[oklch(0.55_0.18_150)] inline-block" />
              Correct
              <span className="w-2 h-2 rounded-full bg-destructive inline-block ml-1" />
              Incorrect
            </div>
          </div>
          {questions.map((q, i) => {
            const userAnswer = attempt.answers.find(
              (a) => a.questionId === q.id,
            );
            return (
              <QuestionCard
                key={q.id}
                question={q}
                index={i}
                reviewMode
                userAnswer={userAnswer?.selectedAnswer}
              />
            );
          })}

          <div className="flex gap-3 pt-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => navigate({ to: "/exams" })}
            >
              <Home className="w-4 h-4 mr-1.5" />
              All Exams
            </Button>
            <Button
              className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() =>
                navigate({ to: "/exams/$examId/take", params: { examId } })
              }
            >
              <RotateCcw className="w-4 h-4 mr-1.5" />
              Retake Exam
            </Button>
          </div>
        </div>
      )}

      {/* Time details */}
      <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground pb-2">
        <Clock className="w-3.5 h-3.5" />
        Completed on {completedDate} · Time taken: {mins}m {secs}s
      </div>
    </div>
  );
}

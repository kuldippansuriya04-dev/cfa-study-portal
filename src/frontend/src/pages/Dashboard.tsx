import { ScoreRing } from "@/components/ScoreRing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MOCK_EXAMS } from "@/data/mockData";
import {
  useMyExamHistory,
  useMyStats,
  useMyTopicStats,
  useTopics,
} from "@/hooks/useBackend";
import { cn } from "@/lib/utils";
import type { Topic, UserTopicStats } from "@/types/cfa";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  BookMarked,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Flame,
  Target,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { motion } from "motion/react";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getTopicStats(topicId: string, list: UserTopicStats[]) {
  return list.find((ts) => ts.topicId === topicId);
}

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  icon: Icon,
  accent,
  delay,
}: {
  label: string;
  value: string | number;
  icon: React.ElementType;
  accent?: boolean;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <Card className="shadow-card hover:shadow-md transition-smooth">
        <CardContent className="p-5 flex items-center gap-4">
          <div
            className={cn(
              "w-11 h-11 rounded-lg flex items-center justify-center shrink-0",
              accent
                ? "bg-accent/15 text-accent"
                : "bg-primary/10 text-primary",
            )}
          >
            <Icon className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <p className="text-2xl font-display font-bold text-foreground leading-tight">
              {value}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5 leading-tight">
              {label}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ─── Topic Progress Row ───────────────────────────────────────────────────────

function TopicProgressRow({
  topic,
  stats,
  index,
}: {
  topic: Topic;
  stats: UserTopicStats | undefined;
  index: number;
}) {
  const navigate = useNavigate();
  const answered = stats?.answeredCount ?? 0;
  const accuracy = stats?.accuracy ?? 0;
  const pct =
    topic.questionCount > 0
      ? Math.min(100, Math.round((answered / topic.questionCount) * 100))
      : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay: 0.05 * index }}
      className="flex items-center gap-3 py-3 border-b border-border last:border-0"
      data-ocid={`topic-row-${topic.id}`}
    >
      <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <span className="text-[11px] font-bold text-primary">{index + 1}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <p className="text-sm font-medium text-foreground truncate">
            {topic.title}
          </p>
          <div className="flex items-center gap-2 shrink-0">
            {answered > 0 && (
              <span className="text-xs text-muted-foreground">
                {accuracy}% acc.
              </span>
            )}
            <span className="text-xs text-muted-foreground">
              {answered}/{topic.questionCount}
            </span>
          </div>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{
              duration: 0.6,
              delay: 0.05 * index + 0.2,
              ease: "easeOut",
            }}
          />
        </div>
      </div>
      <Button
        size="sm"
        variant="outline"
        className="text-xs h-7 px-2.5 shrink-0 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
        onClick={() =>
          navigate({
            to: "/topics/$topicId/practice",
            params: { topicId: topic.id },
          })
        }
        data-ocid={`practice-btn-${topic.id}`}
      >
        Practice
      </Button>
    </motion.div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function EmptyState({ onStart }: { onStart: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center py-20 text-center"
      data-ocid="empty-state"
    >
      <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-5">
        <BookMarked className="w-9 h-9 text-accent" />
      </div>
      <h2 className="text-2xl font-display font-bold text-foreground mb-2">
        Your CFA Journey Starts Here
      </h2>
      <p className="text-muted-foreground text-sm max-w-sm mb-6 leading-relaxed">
        You haven&apos;t answered any practice questions yet. Begin with a topic
        you feel confident about to build your study momentum.
      </p>
      <Button
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 transition-smooth"
        onClick={onStart}
        data-ocid="empty-cta-start"
      >
        Start Studying
        <ArrowRight className="ml-2 w-4 h-4" />
      </Button>
    </motion.div>
  );
}

// ─── Dashboard Skeleton ───────────────────────────────────────────────────────

function DashboardSkeleton() {
  return (
    <div className="space-y-8" aria-busy="true" aria-label="Loading dashboard">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {["stat-a", "stat-b", "stat-c", "stat-d"].map((key) => (
          <Card key={key} className="shadow-card">
            <CardContent className="p-5 flex items-center gap-4">
              <Skeleton className="w-11 h-11 rounded-lg" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-6 w-16" />
                <Skeleton className="h-3 w-28" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="shadow-card">
          <CardContent className="flex flex-col items-center py-10 gap-4">
            <Skeleton className="w-28 h-28 rounded-full" />
            <div className="w-full space-y-3">
              {["row-a", "row-b", "row-c"].map((key) => (
                <Skeleton key={key} className="h-4 w-full" />
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-card lg:col-span-2">
          <CardContent className="pt-4 space-y-3">
            {["sk-a", "sk-b", "sk-c", "sk-d", "sk-e", "sk-f"].map((key) => (
              <Skeleton key={key} className="h-10 w-full" />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────

export default function Dashboard() {
  const navigate = useNavigate();
  const { data: stats, isLoading: statsLoading } = useMyStats();
  const { data: topicStats = [], isLoading: topicStatsLoading } =
    useMyTopicStats();
  const { data: examHistory = [], isLoading: historyLoading } =
    useMyExamHistory();
  const { data: topics = [], isLoading: topicsLoading } = useTopics();

  const isLoading =
    statsLoading || topicStatsLoading || historyLoading || topicsLoading;
  const hasData =
    (stats?.totalPracticeAnswered ?? 0) > 0 || examHistory.length > 0;

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const recentExams = examHistory.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Page Hero Header */}
      <div className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent block mb-1">
                CFA Level I Candidate
              </span>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground">
                Score Tracking Dashboard
              </h1>
              <p className="text-sm text-muted-foreground mt-1">{today}</p>
            </div>
            <div className="flex items-center gap-3" data-ocid="dashboard-ctas">
              <Button
                variant="outline"
                className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-medium"
                onClick={() => navigate({ to: "/topics" })}
                data-ocid="cta-start-practice"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Start Practice
              </Button>
              <Button
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-semibold"
                onClick={() => navigate({ to: "/exams" })}
                data-ocid="cta-take-exam"
              >
                <ClipboardList className="w-4 h-4 mr-2" />
                Take Mock Exam
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {isLoading ? (
          <DashboardSkeleton />
        ) : !hasData ? (
          <EmptyState onStart={() => navigate({ to: "/topics" })} />
        ) : (
          <>
            {/* Stats Row */}
            <section aria-label="Overall statistics">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                  label="Overall Accuracy"
                  value={`${stats?.overallAccuracy ?? 0}%`}
                  icon={Target}
                  accent
                  delay={0}
                />
                <StatCard
                  label="Questions Answered"
                  value={(stats?.totalPracticeAnswered ?? 0).toLocaleString()}
                  icon={BarChart3}
                  delay={0.07}
                />
                <StatCard
                  label="Mock Exams Completed"
                  value={stats?.examAttemptCount ?? 0}
                  icon={ClipboardList}
                  delay={0.14}
                />
                <StatCard
                  label="Study Streak (Days)"
                  value={stats?.streak ?? 0}
                  icon={Flame}
                  accent
                  delay={0.21}
                />
              </div>
            </section>

            {/* Score Ring + Topic Progress */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Score Ring */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.1 }}
              >
                <Card className="shadow-card h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                      Overall Progress
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col items-center justify-center gap-4 py-4">
                    <ScoreRing
                      score={stats?.overallAccuracy ?? 0}
                      size="lg"
                      label="Overall Accuracy"
                    />
                    <div className="w-full space-y-2.5 mt-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Practice Accuracy
                        </span>
                        <span className="font-semibold text-foreground">
                          {stats?.overallAccuracy ?? 0}%
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Avg Exam Score
                        </span>
                        <span className="font-semibold text-foreground">
                          {stats?.averageExamScore ?? 0}%
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Correct Answers
                        </span>
                        <span className="font-semibold text-foreground">
                          {stats?.totalPracticeCorrect ?? 0} /{" "}
                          {stats?.totalPracticeAnswered ?? 0}
                        </span>
                      </div>
                    </div>
                    <div className="w-full pt-3 border-t border-border">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <TrendingUp className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>
                          {(stats?.overallAccuracy ?? 0) >= 70
                            ? "On track to pass — keep it up!"
                            : "Aim for 70%+ to pass the CFA exam"}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Topic Progress */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.15 }}
                className="lg:col-span-2"
              >
                <Card className="shadow-card h-full">
                  <CardHeader className="pb-0">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                        Topic Progress
                      </CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs text-primary h-7 px-2"
                        onClick={() => navigate({ to: "/topics" })}
                        data-ocid="view-all-topics"
                      >
                        View all
                        <ArrowRight className="ml-1 w-3 h-3" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2 overflow-y-auto max-h-[400px] pr-2">
                    {topics.map((topic, idx) => (
                      <TopicProgressRow
                        key={topic.id}
                        topic={topic}
                        stats={getTopicStats(topic.id, topicStats)}
                        index={idx}
                      />
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Recent Mock Exams */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              aria-label="Recent mock exam scores"
            >
              <Card className="shadow-card">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
                      Recent Mock Exams
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs text-primary h-7 px-2"
                      onClick={() => navigate({ to: "/history" })}
                      data-ocid="view-exam-history"
                    >
                      Full history
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  {recentExams.length === 0 ? (
                    <div
                      className="flex flex-col items-center py-10 text-center"
                      data-ocid="no-exams-state"
                    >
                      <ClipboardList className="w-8 h-8 text-muted-foreground/40 mb-3" />
                      <p className="text-sm text-muted-foreground">
                        No mock exams taken yet.
                      </p>
                      <Button
                        size="sm"
                        className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth"
                        onClick={() => navigate({ to: "/exams" })}
                        data-ocid="no-exams-cta"
                      >
                        Take Your First Mock Exam
                      </Button>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {recentExams.map((attempt, idx) => {
                        const exam = MOCK_EXAMS.find(
                          (e) => e.id === attempt.examId,
                        );
                        const isPassing = attempt.score >= 70;
                        return (
                          <motion.div
                            key={attempt.id}
                            initial={{ opacity: 0, scale: 0.96 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: idx * 0.08 }}
                            className="rounded-lg border border-border bg-muted/30 p-4 flex items-center gap-4"
                            data-ocid={`exam-history-${idx}`}
                          >
                            <ScoreRing
                              score={attempt.score}
                              size="sm"
                              showLabel
                            />
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-semibold text-foreground truncate leading-tight">
                                {exam?.title ?? `Exam ${attempt.examId}`}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {formatDate(attempt.completedAt)}
                              </p>
                              <div className="flex items-center gap-1.5 mt-1.5">
                                {isPassing ? (
                                  <Badge className="text-[10px] h-4 px-1.5 bg-[oklch(0.55_0.18_150)]/15 text-[oklch(0.35_0.18_150)] border-[oklch(0.55_0.18_150)]/30 hover:bg-[oklch(0.55_0.18_150)]/15">
                                    <CheckCircle2 className="w-2.5 h-2.5 mr-1" />
                                    Pass
                                  </Badge>
                                ) : (
                                  <Badge className="text-[10px] h-4 px-1.5 bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/10">
                                    <XCircle className="w-2.5 h-2.5 mr-1" />
                                    Fail
                                  </Badge>
                                )}
                                <span className="text-xs text-muted-foreground">
                                  {attempt.correctCount}/{attempt.totalCount}
                                </span>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.section>

            {/* Quick Actions Banner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="rounded-xl bg-primary/5 border border-primary/15 px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
              data-ocid="quick-actions"
            >
              <div>
                <p className="font-display font-semibold text-foreground text-lg">
                  Ready to push your score higher?
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  Target weak topics or test yourself under exam conditions.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <Button
                  variant="outline"
                  className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth font-medium"
                  onClick={() => navigate({ to: "/topics" })}
                  data-ocid="quick-action-practice"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Start Practice
                </Button>
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-smooth font-semibold"
                  onClick={() => navigate({ to: "/exams" })}
                  data-ocid="quick-action-exam"
                >
                  <ClipboardList className="w-4 h-4 mr-2" />
                  Take Mock Exam
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
}

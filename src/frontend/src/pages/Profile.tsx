import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import {
  Award,
  BarChart2,
  BookOpen,
  CheckCircle,
  Flame,
  LogOut,
  Target,
  TrendingUp,
  User,
  XCircle,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import {
  useMyExamHistory,
  useMyStats,
  useMyTopicStats,
  useTopics,
} from "../hooks/useBackend";

function truncatePrincipal(id: string): string {
  if (id.length <= 20) return id;
  return `${id.slice(0, 10)}…${id.slice(-6)}`;
}

function OverallStatCard({
  icon: Icon,
  label,
  value,
  sub,
  accent,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <Card
      className={cn(
        "shadow-card border border-border bg-card p-5",
        accent && "border-accent/40 bg-accent/5",
      )}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider leading-tight">
          {label}
        </p>
        <div
          className={cn(
            "w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0",
            accent ? "bg-accent/15" : "bg-primary/10",
          )}
        >
          <Icon
            className={cn(
              "w-3.5 h-3.5",
              accent ? "text-accent" : "text-primary",
            )}
          />
        </div>
      </div>
      <p className="font-display text-2xl font-bold text-foreground">{value}</p>
      {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
    </Card>
  );
}

function AccuracyBar({ pct }: { pct: number }) {
  const barClass =
    pct >= 70
      ? "bg-[oklch(0.55_0.18_150)]"
      : pct >= 50
        ? "bg-accent"
        : "bg-destructive/70";
  return (
    <div className="flex items-center gap-3 min-w-0">
      <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden min-w-0">
        <div
          className={cn("h-full rounded-full transition-all", barClass)}
          style={{ width: `${Math.min(pct, 100)}%` }}
        />
      </div>
      <span
        className={cn(
          "text-xs font-semibold w-10 text-right flex-shrink-0",
          pct >= 70
            ? "text-[oklch(0.45_0.18_150)]"
            : pct >= 50
              ? "text-accent"
              : "text-destructive",
        )}
      >
        {pct}%
      </span>
    </div>
  );
}

export default function Profile() {
  const { principal, isAuthenticated, logout } = useAuth();
  const { data: stats, isLoading: statsLoading } = useMyStats();
  const { data: topicStats, isLoading: topicStatsLoading } = useMyTopicStats();
  const { data: topics, isLoading: topicsLoading } = useTopics();
  const { data: examHistory } = useMyExamHistory();

  const isLoading = statsLoading || topicStatsLoading || topicsLoading;

  const principalStr = principal
    ? principal
    : isAuthenticated
      ? "authenticated"
      : "anonymous";

  const bestExamScore =
    examHistory && examHistory.length > 0
      ? Math.max(...examHistory.map((a) => a.score))
      : 0;

  const topicRows = (topics ?? []).map((topic) => {
    const ts = topicStats?.find((s) => s.topicId === topic.id);
    return {
      ...topic,
      answeredCount: ts?.answeredCount ?? 0,
      accuracy: ts?.accuracy ?? 0,
      hasData: (ts?.answeredCount ?? 0) > 0,
    };
  });

  const topicsAboveThreshold = topicRows.filter(
    (t) => t.hasData && t.accuracy >= 70,
  ).length;
  const topicsBelowThreshold = topicRows.filter(
    (t) => t.hasData && t.accuracy < 70,
  ).length;
  const topicsNotStarted = 10 - topicsAboveThreshold - topicsBelowThreshold;

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="h-28 rounded-lg" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {["s1", "s2", "s3", "s4"].map((k) => (
            <Skeleton key={k} className="h-28 rounded-lg" />
          ))}
        </div>
        <Skeleton className="h-72 rounded-lg" />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">
          My Profile
        </h1>
        <p className="text-muted-foreground text-sm">
          Your learning progress, accuracy, and study statistics.
        </p>
      </div>

      {/* User Identity Card */}
      <Card
        className="shadow-card border border-border bg-card p-6"
        data-ocid="profile-identity-card"
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/20 flex items-center justify-center flex-shrink-0">
              <User className="w-7 h-7 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="font-display text-lg font-bold text-foreground">
                  CFA Candidate
                </h2>
                <Badge
                  variant="outline"
                  className={cn(
                    "text-xs h-5 px-2",
                    isAuthenticated
                      ? "border-[oklch(0.55_0.18_150)]/40 text-[oklch(0.45_0.18_150)] bg-[oklch(0.55_0.18_150)]/10"
                      : "border-muted-foreground/30 text-muted-foreground",
                  )}
                  data-ocid="login-status-badge"
                >
                  {isAuthenticated ? "Authenticated" : "Not signed in"}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                Principal:{" "}
                <span className="font-mono text-foreground select-all">
                  {truncatePrincipal(principalStr)}
                </span>
              </p>
            </div>
          </div>

          {isAuthenticated && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => logout()}
              className="border-border hover:border-destructive/40 hover:text-destructive text-muted-foreground flex-shrink-0"
              data-ocid="profile-signout-button"
            >
              <LogOut className="w-3.5 h-3.5 mr-1.5" />
              Sign Out
            </Button>
          )}
        </div>

        {/* Study streak */}
        {(stats?.streak ?? 0) > 0 && (
          <div className="mt-4 pt-4 border-t border-border flex items-center gap-2">
            <div className="flex items-center gap-1.5 text-accent">
              <Flame className="w-4 h-4" />
              <span className="font-display font-bold text-base">
                {stats!.streak}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">
              day study streak — keep it up!
            </span>
          </div>
        )}
      </Card>

      {/* Overall Stats */}
      <section>
        <h2 className="font-display text-base font-bold text-foreground flex items-center gap-2 mb-4">
          <BarChart2 className="w-4 h-4 text-primary" />
          Overall Statistics
        </h2>
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          data-ocid="profile-stats-grid"
        >
          <OverallStatCard
            icon={BookOpen}
            label="Practice Questions"
            value={stats?.totalPracticeAnswered ?? 0}
            sub="total answered"
          />
          <OverallStatCard
            icon={TrendingUp}
            label="Overall Accuracy"
            value={
              stats?.totalPracticeAnswered ? `${stats.overallAccuracy}%` : "—"
            }
            sub={
              stats?.totalPracticeAnswered
                ? `${stats.totalPracticeCorrect} correct`
                : "start practicing"
            }
          />
          <OverallStatCard
            icon={Target}
            label="Mock Exams Taken"
            value={stats?.examAttemptCount ?? 0}
            sub="completed"
          />
          <OverallStatCard
            icon={Award}
            label="Best Mock Score"
            value={bestExamScore > 0 ? `${bestExamScore}%` : "—"}
            sub={bestExamScore >= 70 ? "Passing!" : "Target: 70%"}
            accent={bestExamScore >= 70}
          />
        </div>
      </section>

      {/* Progress toward 70% threshold */}
      <Card
        className="shadow-card border border-border bg-card p-6"
        data-ocid="threshold-progress-card"
      >
        <h2 className="font-display text-base font-bold text-foreground flex items-center gap-2 mb-1">
          <Target className="w-4 h-4 text-primary" />
          70% Pass Threshold Progress
        </h2>
        <p className="text-xs text-muted-foreground mb-5">
          Topics above 70% accuracy are on track for the CFA exam
        </p>
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-[oklch(0.55_0.18_150)]" />
            <span className="text-sm font-medium text-foreground">
              {topicsAboveThreshold} topics above 70%
            </span>
          </div>
          <div className="flex items-center gap-2">
            <XCircle className="w-4 h-4 text-destructive" />
            <span className="text-sm font-medium text-foreground">
              {topicsBelowThreshold} topics need work
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full border-2 border-muted-foreground/30 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">
              {topicsNotStarted} not started
            </span>
          </div>
        </div>
        <div className="mt-4 h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-[oklch(0.55_0.18_150)] rounded-full transition-all"
            style={{ width: `${(topicsAboveThreshold / 10) * 100}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-1.5">
          {topicsAboveThreshold}/10 topics at passing level
        </p>
      </Card>

      {/* Topic Performance Table */}
      <Card
        className="shadow-card border border-border bg-card overflow-hidden"
        data-ocid="topic-performance-table"
      >
        <div className="px-6 py-4 border-b border-border">
          <h2 className="font-display text-base font-bold text-foreground flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" />
            Topic Performance
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            Accuracy per topic — badges highlight topics needing attention
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Topic
                </th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Answered
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider w-52">
                  Accuracy
                </th>
                <th className="text-center px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {topicRows.map((topic, idx) => {
                const needsWork = topic.hasData && topic.accuracy < 60;
                const onTrack = topic.hasData && topic.accuracy >= 70;
                const improving =
                  topic.hasData && topic.accuracy >= 60 && topic.accuracy < 70;
                return (
                  <tr
                    key={topic.id}
                    className={cn(
                      "border-b border-border transition-colors hover:bg-muted/20",
                      idx % 2 === 0 ? "bg-card" : "bg-muted/10",
                    )}
                    data-ocid={`topic-row-${topic.id}`}
                  >
                    <td className="px-6 py-4">
                      <Link
                        to="/topics/$topicId"
                        params={{ topicId: topic.id }}
                      >
                        <span className="font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
                          {topic.title}
                        </span>
                      </Link>
                      <span className="text-xs text-muted-foreground ml-2">
                        {topic.weight}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span className="font-mono text-foreground">
                        {topic.answeredCount}
                      </span>
                      <span className="text-xs text-muted-foreground/60">
                        /{topic.questionCount}
                      </span>
                    </td>
                    <td className="px-4 py-4 w-52">
                      {topic.hasData ? (
                        <AccuracyBar pct={topic.accuracy} />
                      ) : (
                        <span className="text-xs text-muted-foreground italic">
                          Not started
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {needsWork ? (
                        <Badge
                          variant="destructive"
                          className="text-xs"
                          data-ocid={`needs-work-badge-${topic.id}`}
                        >
                          Needs Work
                        </Badge>
                      ) : onTrack ? (
                        <Badge
                          variant="outline"
                          className="text-xs border-[oklch(0.55_0.18_150)]/40 text-[oklch(0.35_0.18_150)] bg-[oklch(0.55_0.18_150)]/10"
                        >
                          On Track
                        </Badge>
                      ) : improving ? (
                        <Badge
                          variant="outline"
                          className="text-xs border-accent/40 text-accent bg-accent/10"
                        >
                          Improving
                        </Badge>
                      ) : (
                        <Link
                          to="/topics/$topicId/practice"
                          params={{ topicId: topic.id }}
                          data-ocid={`start-practice-${topic.id}`}
                        >
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-primary hover:text-primary/80 text-xs h-6 px-2"
                          >
                            Start →
                          </Button>
                        </Link>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-border bg-muted/20">
          <div className="flex flex-wrap gap-4 justify-between items-center">
            <p className="text-xs text-muted-foreground">
              Practice at least one question per topic to track performance
            </p>
            <Link to="/topics">
              <Button
                variant="outline"
                size="sm"
                className="text-xs border-border hover:border-primary/40"
                data-ocid="practice-all-topics-button"
              >
                <BookOpen className="w-3.5 h-3.5 mr-1.5 text-primary" />
                Practice All Topics
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

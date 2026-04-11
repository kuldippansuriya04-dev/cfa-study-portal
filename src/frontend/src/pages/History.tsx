import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { Calendar, Clock, FileText, Target, TrendingUp } from "lucide-react";
import {
  useMockExams,
  useMyExamHistory,
  useMyStats,
} from "../hooks/useBackend";
import type { ExamAttempt } from "../types/cfa";

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// ─── SVG Line Chart ──────────────────────────────────────────────────────────

function ScoreLineChart({ attempts }: { attempts: ExamAttempt[] }) {
  const W = 680;
  const H = 180;
  const PAD = { top: 16, right: 48, bottom: 36, left: 44 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top - PAD.bottom;

  const sorted = [...attempts]
    .sort(
      (a, b) =>
        new Date(a.completedAt).getTime() - new Date(b.completedAt).getTime(),
    )
    .slice(-20);

  if (sorted.length < 2) return null;

  const scaleX = (i: number) => PAD.left + (i / (sorted.length - 1)) * chartW;
  const scaleY = (val: number) => PAD.top + chartH - (val / 100) * chartH;

  const pathD = sorted
    .map(
      (a, i) =>
        `${i === 0 ? "M" : "L"} ${scaleX(i).toFixed(1)} ${scaleY(a.score).toFixed(1)}`,
    )
    .join(" ");

  const areaD = `${pathD} L ${scaleX(sorted.length - 1).toFixed(1)} ${scaleY(0).toFixed(1)} L ${scaleX(0).toFixed(1)} ${scaleY(0).toFixed(1)} Z`;

  const yTicks = [0, 25, 50, 70, 100];

  return (
    <div className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid meet"
        className="w-full"
        aria-label="Score trend chart"
        role="img"
        style={{ minWidth: 300 }}
      >
        {/* Grid lines */}
        {yTicks.map((tick) => (
          <g key={tick}>
            <line
              x1={PAD.left}
              x2={W - PAD.right}
              y1={scaleY(tick)}
              y2={scaleY(tick)}
              stroke="oklch(0.88 0.01 260)"
              strokeWidth={tick === 70 ? 1.5 : 1}
              strokeDasharray={tick === 70 ? "4 3" : "2 5"}
            />
            <text
              x={PAD.left - 6}
              y={scaleY(tick) + 4}
              textAnchor="end"
              fontSize={10}
              fill="oklch(0.55 0.01 260)"
            >
              {tick}%
            </text>
          </g>
        ))}

        {/* 70% pass label */}
        <text
          x={W - PAD.right + 4}
          y={scaleY(70) + 4}
          fontSize={9}
          fill="oklch(0.45 0.18 150)"
        >
          Pass
        </text>

        {/* Area fill */}
        <path d={areaD} fill="oklch(0.65 0.15 65 / 0.08)" />

        {/* Line */}
        <path
          d={pathD}
          fill="none"
          stroke="oklch(0.65 0.15 65)"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Data points */}
        {sorted.map((a, i) => (
          <g key={a.id}>
            <circle
              cx={scaleX(i)}
              cy={scaleY(a.score)}
              r={5}
              fill="oklch(0.65 0.15 65)"
              stroke="oklch(0.99 0.005 0)"
              strokeWidth={2}
            />
            <title>
              Attempt {i + 1}: {a.score}%
            </title>
          </g>
        ))}

        {/* X axis labels */}
        {sorted.map((a, i) => (
          <text
            key={`x-${a.id}`}
            x={scaleX(i)}
            y={H - 6}
            textAnchor="middle"
            fontSize={10}
            fill="oklch(0.55 0.01 260)"
          >
            #{i + 1}
          </text>
        ))}
      </svg>
    </div>
  );
}

// ─── Summary Stat Card ────────────────────────────────────────────────────────

function SummaryStatCard({
  icon: Icon,
  label,
  value,
  sub,
  highlight,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
}) {
  return (
    <Card
      className={cn(
        "shadow-card border border-border bg-card p-5",
        highlight && "border-accent/40 bg-accent/5",
      )}
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider leading-tight">
          {label}
        </p>
        <div
          className={cn(
            "w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0",
            highlight ? "bg-accent/15" : "bg-primary/10",
          )}
        >
          <Icon
            className={cn(
              "w-3.5 h-3.5",
              highlight ? "text-accent" : "text-primary",
            )}
          />
        </div>
      </div>
      <p className="font-display text-2xl font-bold text-foreground">{value}</p>
      {sub && <p className="text-xs text-muted-foreground mt-1">{sub}</p>}
    </Card>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function History() {
  const { data: examHistory, isLoading } = useMyExamHistory();
  const { data: stats } = useMyStats();
  const { data: mockExams } = useMockExams();

  const attempts = examHistory ?? [];

  const bestScore =
    attempts.length > 0 ? Math.max(...attempts.map((a) => a.score)) : 0;

  const lastExamDate =
    attempts.length > 0
      ? formatDate(
          [...attempts].sort(
            (a, b) =>
              new Date(b.completedAt).getTime() -
              new Date(a.completedAt).getTime(),
          )[0].completedAt,
        )
      : "—";

  const avgScore =
    attempts.length > 0
      ? Math.round(attempts.reduce((s, a) => s + a.score, 0) / attempts.length)
      : 0;

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <Skeleton className="h-8 w-56" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {["stat-a", "stat-b", "stat-c", "stat-d"].map((k) => (
            <Skeleton key={k} className="h-28 rounded-lg" />
          ))}
        </div>
        <Skeleton className="h-56 rounded-lg" />
        <Skeleton className="h-64 rounded-lg" />
      </div>
    );
  }

  if (attempts.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="font-display text-2xl font-bold text-foreground mb-1">
            My Score History
          </h1>
          <p className="text-muted-foreground text-sm">
            Track your performance across all mock exam attempts.
          </p>
        </div>

        <div
          className="flex flex-col items-center justify-center py-24 text-center"
          data-ocid="history-empty-state"
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <TrendingUp className="w-10 h-10 text-primary/40" />
          </div>
          <h2 className="font-display text-xl font-bold text-foreground mb-2">
            No exam attempts yet
          </h2>
          <p className="text-muted-foreground text-sm max-w-sm mb-8">
            Complete a mock exam to see your score history, trend charts, and
            pass/fail analysis here.
          </p>
          <Link to="/exams" data-ocid="empty-state-start-exam">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
              <Target className="w-4 h-4 mr-2" />
              Take Your First Mock Exam
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const sortedByDate = [...attempts].sort(
    (a, b) =>
      new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime(),
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="font-display text-2xl font-bold text-foreground mb-1">
          My Score History
        </h1>
        <p className="text-muted-foreground text-sm">
          Track your performance across all mock exam attempts.
        </p>
      </div>

      {/* Summary Stats */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        data-ocid="history-stats-row"
      >
        <SummaryStatCard
          icon={FileText}
          label="Total Exams Taken"
          value={String(attempts.length)}
          sub="all attempts"
        />
        <SummaryStatCard
          icon={TrendingUp}
          label="Average Score"
          value={
            stats?.averageExamScore
              ? `${stats.averageExamScore}%`
              : avgScore > 0
                ? `${avgScore}%`
                : "—"
          }
          sub="across all attempts"
        />
        <SummaryStatCard
          icon={Target}
          label="Best Score"
          value={bestScore > 0 ? `${bestScore}%` : "—"}
          sub={bestScore >= 70 ? "Passing level ✓" : "Target: 70%"}
          highlight={bestScore >= 70}
        />
        <SummaryStatCard
          icon={Calendar}
          label="Last Exam Date"
          value={lastExamDate}
          sub="most recent attempt"
        />
      </div>

      {/* Score Trend Chart */}
      <Card
        className="shadow-card border border-border bg-card p-6"
        data-ocid="score-trend-chart"
      >
        <h2 className="font-display text-base font-bold text-foreground mb-1 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-accent" />
          Score Trend
        </h2>
        <p className="text-xs text-muted-foreground mb-5">
          Mock exam scores over time — dashed line at 70% pass threshold
        </p>
        {attempts.length >= 2 ? (
          <ScoreLineChart attempts={attempts} />
        ) : (
          <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
            Complete at least 2 exams to see the trend chart
          </div>
        )}
      </Card>

      {/* Attempts Table */}
      <Card
        className="shadow-card border border-border bg-card overflow-hidden"
        data-ocid="history-attempts-table"
      >
        <div className="px-6 py-4 border-b border-border">
          <h2 className="font-display text-base font-bold text-foreground flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            All Attempts
            <span className="text-xs font-normal text-muted-foreground ml-1">
              ({attempts.length} total)
            </span>
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Exam Name
                </th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Date
                </th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Score
                </th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">
                  Time
                </th>
                <th className="text-center px-4 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Result
                </th>
                <th className="text-right px-6 py-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedByDate.map((attempt, idx) => {
                const exam = mockExams?.find((e) => e.id === attempt.examId);
                const passed = attempt.score >= 70;
                return (
                  <tr
                    key={attempt.id}
                    className={cn(
                      "border-b border-border transition-colors hover:bg-muted/20",
                      idx % 2 === 0 ? "bg-card" : "bg-muted/10",
                    )}
                    data-ocid={`history-row-${attempt.id}`}
                  >
                    <td className="px-6 py-4">
                      <span className="font-medium text-foreground">
                        {exam?.title ?? `Exam ${attempt.examId}`}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-muted-foreground whitespace-nowrap">
                      {formatDate(attempt.completedAt)}
                    </td>
                    <td className="px-4 py-4 text-right">
                      <span
                        className={cn(
                          "font-display font-bold text-base",
                          passed
                            ? "text-[oklch(0.45_0.18_150)]"
                            : attempt.score >= 50
                              ? "text-accent"
                              : "text-destructive",
                        )}
                      >
                        {attempt.score}%
                      </span>
                      <span className="text-xs text-muted-foreground block">
                        {attempt.correctCount}/{attempt.totalCount} correct
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right text-muted-foreground whitespace-nowrap hidden sm:table-cell">
                      {formatTime(attempt.timeTakenSeconds)}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <Badge
                        variant={passed ? "outline" : "destructive"}
                        className={cn(
                          "text-xs font-semibold",
                          passed &&
                            "border-[oklch(0.55_0.18_150)]/40 text-[oklch(0.35_0.18_150)] bg-[oklch(0.55_0.18_150)]/10 hover:bg-[oklch(0.55_0.18_150)]/10",
                        )}
                        data-ocid={`result-badge-${attempt.id}`}
                      >
                        {passed ? "Pass" : "Fail"}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link
                        to="/exams/$examId/result/$attemptId"
                        params={{
                          examId: attempt.examId,
                          attemptId: attempt.id,
                        }}
                        data-ocid={`view-details-${attempt.id}`}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary/80 text-xs h-7 px-3"
                        >
                          View →
                        </Button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

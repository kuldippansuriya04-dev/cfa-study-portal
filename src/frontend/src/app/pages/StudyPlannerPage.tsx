import { STUDY_PLAN, TOPIC_HOUR_PLAN } from "@/app/data/plannerAchievements";
import type { PageId } from "@/app/types/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  ListChecks,
  Target,
} from "lucide-react";

interface StudyPlannerPageProps {
  onNavigate: (page: PageId) => void;
}

const statusStyles = {
  done: "bg-green-100 text-green-700 border-green-200",
  today: "bg-blue-100 text-blue-700 border-blue-200",
  planned: "bg-slate-100 text-slate-600 border-slate-200",
};

function formatHours(minutes: number) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  if (!hours) return `${mins}m`;
  if (!mins) return `${hours}h`;
  return `${hours}h ${mins}m`;
}

export function StudyPlannerPage({ onNavigate }: StudyPlannerPageProps) {
  const weeklyProgress = Math.round(
    (STUDY_PLAN.completedHours / STUDY_PLAN.weeklyGoalHours) * 100,
  );
  const totalPlannedMinutes = STUDY_PLAN.dailySessions.reduce(
    (sum, session) => sum + session.durationMin,
    0,
  );
  const completedSessions = STUDY_PLAN.dailySessions.filter(
    (session) => session.status === "done",
  ).length;

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
            <CalendarDays size={18} />
            Study Planner
          </div>
          <h1 className="mt-2 text-3xl font-black tracking-tight">
            Weekly CFA Level I Study Plan
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {STUDY_PLAN.focus} with clear sessions, time targets, and topic
            priorities.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => onNavigate("topics")}>
            Review Topics
          </Button>
          <Button onClick={() => onNavigate("quiz")}>
            Start Practice <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-none shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Weekly Goal
              </p>
              <Target size={18} className="text-blue-600" />
            </div>
            <div className="mt-3 text-3xl font-black">
              {STUDY_PLAN.completedHours}h / {STUDY_PLAN.weeklyGoalHours}h
            </div>
            <Progress value={weeklyProgress} className="mt-3 h-2" />
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Planned Time
              </p>
              <Clock size={18} className="text-emerald-600" />
            </div>
            <div className="mt-3 text-3xl font-black">
              {formatHours(totalPlannedMinutes)}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Across {STUDY_PLAN.dailySessions.length} focused sessions.
            </p>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Completed
              </p>
              <CheckCircle2 size={18} className="text-green-600" />
            </div>
            <div className="mt-3 text-3xl font-black">
              {completedSessions}/{STUDY_PLAN.dailySessions.length}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Keep today's FRA block protected.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.55fr_1fr]">
        <Card className="border-none shadow-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">This Week's Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {STUDY_PLAN.dailySessions.map((session) => {
              const topic = TOPIC_HOUR_PLAN.find(
                (item) => item.id === session.topicId,
              );
              return (
                <div
                  key={`${session.day}-${session.title}`}
                  className="grid gap-3 rounded-xl border bg-white p-4 md:grid-cols-[88px_1fr_auto]"
                >
                  <div>
                    <p className="text-sm font-bold">{session.day}</p>
                    <p className="text-xs text-muted-foreground">
                      {session.date}
                    </p>
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-semibold">{session.title}</h3>
                      <Badge
                        variant="outline"
                        className={cn("capitalize", statusStyles[session.status])}
                      >
                        {session.status}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {session.task}
                    </p>
                    {topic && (
                      <div className="mt-3 flex items-center gap-2 text-xs font-medium">
                        <span
                          className="size-2 rounded-full"
                          style={{ backgroundColor: topic.color }}
                        />
                        {topic.shortName} progress: {topic.progress}%
                      </div>
                    )}
                  </div>
                  <div className="text-sm font-bold text-slate-700">
                    {formatHours(session.durationMin)}
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        <div className="space-y-5">
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <ListChecks size={18} /> Next Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {STUDY_PLAN.nextActions.map((action) => (
                <div key={action} className="flex gap-3 text-sm">
                  <CheckCircle2 size={18} className="mt-0.5 text-blue-600" />
                  <span>{action}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Topic Hour Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {TOPIC_HOUR_PLAN.slice(0, 6).map((topic) => {
                const value = Math.min(
                  100,
                  Math.round((topic.completedHours / topic.plannedHours) * 100),
                );
                return (
                  <div key={topic.id}>
                    <div className="mb-1 flex items-center justify-between gap-2 text-sm">
                      <span className="font-medium">{topic.shortName}</span>
                      <span className="text-muted-foreground">
                        {topic.completedHours}h/{topic.plannedHours}h
                      </span>
                    </div>
                    <Progress value={value} className="h-2" />
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

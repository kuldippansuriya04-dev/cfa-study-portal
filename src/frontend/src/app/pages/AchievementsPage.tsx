import {
  ACHIEVEMENT_SUMMARY,
  BADGES,
  LEADERBOARD,
  MILESTONES,
} from "@/app/data/plannerAchievements";
import type { PageId } from "@/app/types/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Award,
  BookOpenCheck,
  Calculator,
  FileText,
  Flame,
  Medal,
  Scale,
  Timer,
  Trophy,
} from "lucide-react";

interface AchievementsPageProps {
  onNavigate: (page: PageId) => void;
}

const BADGE_ICONS = {
  Award,
  BookOpenCheck,
  Calculator,
  FileText,
  Flame,
  Scale,
  Timer,
};

export function AchievementsPage({ onNavigate }: AchievementsPageProps) {
  const badgeProgress = Math.round(
    (ACHIEVEMENT_SUMMARY.unlockedBadges / ACHIEVEMENT_SUMMARY.totalBadges) * 100,
  );

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-amber-700">
            <Trophy size={18} />
            Achievements
          </div>
          <h1 className="mt-2 text-3xl font-black tracking-tight">
            Badges, Rank, and CFA Study Milestones
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Track earned badges, leaderboard points, streaks, and exam-readiness
            targets in one place.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" onClick={() => onNavigate("planner")}>
            Open Planner
          </Button>
          <Button onClick={() => onNavigate("quiz")}>Earn More Points</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: "Total Points", value: ACHIEVEMENT_SUMMARY.points, icon: Trophy },
          { label: "Current Level", value: ACHIEVEMENT_SUMMARY.level, icon: Award },
          { label: "Leaderboard Rank", value: `#${ACHIEVEMENT_SUMMARY.rank}`, icon: Medal },
          {
            label: "Badges Unlocked",
            value: `${ACHIEVEMENT_SUMMARY.unlockedBadges}/${ACHIEVEMENT_SUMMARY.totalBadges}`,
            icon: BookOpenCheck,
          },
        ].map(({ label, value, icon: Icon }) => (
          <Card key={label} className="border-none shadow-sm">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {label}
                </p>
                <Icon size={18} className="text-amber-600" />
              </div>
              <p className="mt-3 text-3xl font-black">{value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-5 xl:grid-cols-[1.45fr_1fr]">
        <Card className="border-none shadow-sm">
          <CardHeader className="pb-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <CardTitle className="text-lg">Badge Collection</CardTitle>
              <Badge className="w-fit bg-amber-100 text-amber-800 hover:bg-amber-100">
                {badgeProgress}% complete
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {BADGES.map((badge) => {
                const Icon =
                  BADGE_ICONS[badge.icon as keyof typeof BADGE_ICONS] ?? Award;
                return (
                  <div
                    key={badge.title}
                    className="rounded-xl border bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="flex size-11 shrink-0 items-center justify-center rounded-xl text-white"
                        style={{ backgroundColor: badge.color }}
                      >
                        <Icon size={21} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-bold">{badge.title}</h3>
                          {badge.unlocked && (
                            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                              Unlocked
                            </Badge>
                          )}
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {badge.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="font-medium">Progress</span>
                        <span>{badge.progress}%</span>
                      </div>
                      <Progress value={badge.progress} className="h-2" />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-5">
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Leaderboard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {LEADERBOARD.map((student, index) => (
                <div
                  key={student.name}
                  className={`grid grid-cols-[36px_1fr_auto] items-center gap-3 rounded-xl border p-3 ${
                    student.name === "You"
                      ? "border-blue-200 bg-blue-50"
                      : "bg-white"
                  }`}
                >
                  <div className="flex size-8 items-center justify-center rounded-full bg-slate-100 text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold">{student.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {student.accuracy}% accuracy - {student.streak} day streak
                    </p>
                  </div>
                  <div className="text-right text-sm font-bold">
                    {student.points}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Readiness Milestones</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {MILESTONES.map((milestone) => {
                const value = Math.min(
                  100,
                  Math.round((milestone.value / milestone.target) * 100),
                );
                return (
                  <div key={milestone.label}>
                    <div className="mb-1 flex justify-between gap-2 text-sm">
                      <span className="font-medium">{milestone.label}</span>
                      <span className="text-muted-foreground">
                        {milestone.value}/{milestone.target}
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

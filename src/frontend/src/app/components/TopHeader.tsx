import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MOCK_USER, getDaysUntilExam } from "@/app/data/mockUser";
import { Flame, Bell, Menu, Clock, Target } from "lucide-react";

interface TopHeaderProps {
  onToggleSidebar: () => void;
  notificationsOpen: boolean;
  onToggleNotifications: (e?: React.MouseEvent) => void;
}

export function TopHeader({
  onToggleSidebar,
  notificationsOpen,
  onToggleNotifications,
}: TopHeaderProps) {
  const daysLeft = getDaysUntilExam(MOCK_USER.examDate);
  const progress = MOCK_USER.overallProgress;

  return (
    <header className="h-14 flex-shrink-0 bg-white border-b border-border flex items-center px-4 gap-4 z-10">
      {/* Hamburger */}
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-muted-foreground hover:text-foreground"
        onClick={onToggleSidebar}
      >
        <Menu size={18} />
      </Button>

      {/* App Title */}
      <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
        <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white text-[9px] font-black">CFA</span>
        </div>
        <span className="font-semibold text-sm text-foreground">
          CFA Level 1 Practice Hub
        </span>
      </div>

      <div className="flex-1" />

      {/* Study Streak */}
      <div className="hidden md:flex items-center gap-1.5 bg-orange-50 border border-orange-200 rounded-lg px-3 py-1.5">
        <Flame size={15} className="text-orange-500" />
        <span className="text-sm font-bold text-orange-600">
          {MOCK_USER.streak}
        </span>
        <span className="text-xs text-orange-500">day streak</span>
      </div>

      {/* Days Until Exam */}
      <div className="hidden md:flex items-center gap-1.5 bg-blue-50 border border-blue-200 rounded-lg px-3 py-1.5">
        <Clock size={15} className="text-blue-600" />
        <span className="text-sm font-bold text-blue-700">{daysLeft}</span>
        <span className="text-xs text-blue-600">days to exam</span>
      </div>

      {/* Overall Progress */}
      <div className="hidden lg:flex items-center gap-2 min-w-[160px]">
        <Target size={15} className="text-muted-foreground flex-shrink-0" />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-0.5">
            <span className="text-xs text-muted-foreground">Overall</span>
            <span className="text-xs font-semibold text-foreground">
              {progress}%
            </span>
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>
      </div>

      {/* Notifications */}
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 relative"
          onClick={onToggleNotifications}
        >
          <Bell size={18} className="text-muted-foreground" />
          {MOCK_USER.notificationsCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              {MOCK_USER.notificationsCount}
            </span>
          )}
        </Button>

        {notificationsOpen && (
          <div className="absolute right-0 top-10 w-72 bg-white border border-border rounded-xl shadow-lg z-50 overflow-hidden">
            <div className="px-4 py-3 border-b border-border flex items-center justify-between">
              <span className="font-semibold text-sm">Notifications</span>
              <Badge variant="secondary" className="text-xs">
                {MOCK_USER.notificationsCount} new
              </Badge>
            </div>
            <div className="divide-y divide-border">
              {[
                {
                  title: "🔥 Keep your streak!",
                  msg: "Don't forget to study today — you're on a 12-day streak!",
                  time: "5m ago",
                },
                {
                  title: "📝 Mock exam reminder",
                  msg: "Your scheduled Full-Length Mock Exam starts in 2 hours.",
                  time: "1h ago",
                },
                {
                  title: "🏆 New achievement!",
                  msg: 'You earned the "Week Warrior" badge. +50 points!',
                  time: "2h ago",
                },
              ].map((n, i) => (
                <div
                  key={i}
                  className="px-4 py-3 hover:bg-muted/50 cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-medium leading-snug">
                        {n.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                        {n.msg}
                      </p>
                    </div>
                    <span className="text-[10px] text-muted-foreground whitespace-nowrap flex-shrink-0 mt-0.5">
                      {n.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-4 py-2 border-t border-border">
              <button className="text-xs text-blue-600 hover:underline">
                Mark all as read
              </button>
            </div>
          </div>
        )}
      </div>

      {/* User Avatar */}
      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 cursor-pointer">
        <span className="text-white text-xs font-bold">
          {MOCK_USER.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
      </div>
    </header>
  );
}

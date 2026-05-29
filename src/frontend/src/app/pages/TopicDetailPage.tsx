import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TOPICS } from "@/app/data/topics";
import { CFA_READINGS } from "@/app/data/cfaReadings";
import type { PageId } from "@/app/types/navigation";
import {
  ArrowLeft,
  Clock,
  BookOpen,
  BarChart2,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { PRACTICE_PACK_QUESTIONS } from "@/data/practicePackData";

interface TopicDetailPageProps {
  topicId: string;
  onNavigate: (page: PageId) => void;
}

function estimateMinutes(pages: number) {
  return Math.round(pages * 2.5);
}

function practiceTopicId(topicId: string) {
  return topicId === "alt" ? "alts" : topicId;
}

export function TopicDetailPage({ topicId, onNavigate }: TopicDetailPageProps) {
  const topic = TOPICS.find((t) => t.id === topicId);
  const modules = CFA_READINGS[topicId] ?? [];

  const [completed, setCompleted] = useState<Set<number>>(new Set());

  if (!topic) {
    return (
      <div className="flex items-center justify-center h-full p-8">
        <div className="text-center">
          <p className="text-muted-foreground">Topic not found.</p>
          <Button
            variant="ghost"
            size="sm"
            className="mt-4"
            onClick={() => onNavigate("topics")}
          >
            ← Back to Topics
          </Button>
        </div>
      </div>
    );
  }

  const completedCount = completed.size;
  const totalCount = modules.length;
  const practiceQuestionCount = PRACTICE_PACK_QUESTIONS.filter(
    (question) => question.topicId === practiceTopicId(topicId),
  ).length;
  const progressPct =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const toggleComplete = (num: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCompleted((prev) => {
      const next = new Set(prev);
      next.has(num) ? next.delete(num) : next.add(num);
      return next;
    });
  };

  return (
    <div className="p-6 space-y-6 max-w-5xl mx-auto">
      {/* Back button */}
      <Button
        variant="ghost"
        size="sm"
        className="text-muted-foreground -ml-2"
        onClick={() => onNavigate("topics")}
      >
        <ArrowLeft size={16} className="mr-1" /> All Topics
      </Button>

      {/* Topic Header */}
      <div
        className="rounded-2xl p-6 text-white"
        style={{
          background: `linear-gradient(135deg, ${topic.color}, ${topic.color}cc)`,
        }}
      >
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-4xl">{topic.icon}</span>
              <div>
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wide">
                  {topic.code}
                </p>
                <h1 className="text-xl font-bold leading-tight">
                  {topic.name}
                </h1>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-xl">
              {topic.description}
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button
              className="bg-white/20 hover:bg-white/30 text-white border-white/30"
              variant="outline"
              size="sm"
              onClick={() => onNavigate("quiz")}
            >
              <BookOpen size={14} className="mr-1" /> Practice{" "}
              {practiceQuestionCount} Qs
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          {[
            {
              icon: "⚖️",
              label: `${topic.examWeightMin}–${topic.examWeightMax}% exam weight`,
            },
            { icon: "⏱️", label: `~${topic.estimatedHours}h estimated` },
            { icon: "📖", label: `${totalCount} learning modules` },
            { icon: "✏️", label: `${practiceQuestionCount} practice questions` },
            { icon: "📊", label: `${topic.difficulty} difficulty` },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-xs font-medium"
            >
              <span>{icon}</span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Progress */}
      <Card className="border-none shadow-sm">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <BarChart2 size={16} className="text-muted-foreground" />
              <span className="text-sm font-semibold">Your Progress</span>
            </div>
            <span className="text-sm font-bold" style={{ color: topic.color }}>
              {completedCount}/{totalCount} modules
            </span>
          </div>
          <Progress value={progressPct} className="h-2" />
          <p className="text-xs text-muted-foreground mt-1.5">
            {progressPct}% complete
          </p>
        </CardContent>
      </Card>

      {/* Readings List */}
      <Card className="border-none shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold">
            Learning Modules{" "}
            <span className="text-muted-foreground font-normal text-sm ml-1">
              — Click any module to read
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0 space-y-2">
          {modules.length === 0 && (
            <p className="text-sm text-muted-foreground py-4 text-center">
              No reading content available for this topic yet.
            </p>
          )}
          {modules.map((mod) => {
            const isDone = completed.has(mod.number);
            const mins = estimateMinutes(mod.pages);
            return (
              <div
                key={mod.number}
                onClick={() =>
                  onNavigate(`reading-${topicId}-${mod.number}` as PageId)
                }
                className={`flex items-center gap-3 p-3 rounded-xl border transition-all cursor-pointer hover:shadow-sm group ${
                  isDone
                    ? "bg-green-50 border-green-200"
                    : "bg-white border-border hover:border-gray-300"
                }`}
              >
                {/* Number badge */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                    isDone ? "bg-green-500 text-white" : "text-white"
                  }`}
                  style={!isDone ? { backgroundColor: topic.color } : {}}
                >
                  {isDone ? "✓" : mod.number}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm font-medium ${isDone ? "text-green-700" : "text-foreground"}`}
                  >
                    LM{mod.number}: {mod.title}
                  </p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                      <Clock size={10} /> ~{mins}m
                    </span>
                    <span className="text-[10px] text-muted-foreground">·</span>
                    <span className="text-[10px] text-muted-foreground">
                      {mod.pages} pages
                    </span>
                    <span className="text-[10px] text-muted-foreground">·</span>
                    <span className="text-[10px] text-muted-foreground">
                      📄 PDF Content
                    </span>
                    {isDone && (
                      <Badge
                        variant="outline"
                        className="text-[10px] px-1.5 py-0 text-green-600 border-green-300"
                      >
                        Completed
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Mark complete button */}
                <button
                  onClick={(e) => toggleComplete(mod.number, e)}
                  title={isDone ? "Mark incomplete" : "Mark complete"}
                  className="flex-shrink-0 p-1 rounded-full hover:bg-muted transition-colors"
                >
                  <CheckCircle2
                    size={18}
                    className={
                      isDone
                        ? "text-green-500"
                        : "text-muted-foreground/40 hover:text-green-400"
                    }
                  />
                </button>

                <ChevronRight
                  size={16}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 flex-shrink-0"
                />
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
}

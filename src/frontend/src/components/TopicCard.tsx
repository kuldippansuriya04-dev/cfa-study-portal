import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen } from "lucide-react";
import type { Topic } from "../types/cfa";
import type { UserTopicStats } from "../types/cfa";

interface TopicCardProps {
  topic: Topic;
  stats?: UserTopicStats;
  compact?: boolean;
}

export function TopicCard({ topic, stats, compact = false }: TopicCardProps) {
  const accuracy = stats?.accuracy ?? 0;
  const answered = stats?.answeredCount ?? 0;
  const progressPct = Math.min((answered / topic.questionCount) * 100, 100);

  const accuracyColor =
    accuracy >= 70
      ? "text-[oklch(0.55_0.18_150)]"
      : accuracy >= 50
        ? "text-accent"
        : answered === 0
          ? "text-muted-foreground"
          : "text-destructive";

  return (
    <Card
      className={cn(
        "group shadow-card hover:shadow-elevated transition-smooth border border-border bg-card",
        compact ? "p-4" : "p-5",
      )}
      data-ocid={`topic-card-${topic.id}`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-start gap-3 min-w-0">
          <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <BookOpen className="w-4 h-4 text-primary" />
          </div>
          <div className="min-w-0">
            <h3
              className={cn(
                "font-display font-semibold text-foreground leading-tight line-clamp-2",
                compact ? "text-sm" : "text-base",
              )}
            >
              {topic.title}
            </h3>
            {!compact && (
              <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                {topic.description}
              </p>
            )}
          </div>
        </div>
        <span className="badge-weight flex-shrink-0 text-[10px]">
          {topic.weight}
        </span>
      </div>

      {/* Progress bar */}
      <div className="mb-3">
        <div className="flex items-center justify-between text-xs mb-1.5">
          <span className="text-muted-foreground">
            {answered} / {topic.questionCount} questions
          </span>
          {answered > 0 && (
            <span className={cn("font-semibold", accuracyColor)}>
              {accuracy}% accuracy
            </span>
          )}
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

      {/* Action */}
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">
          {topic.questionCount} practice Qs
        </span>
        <Link to="/topics/$topicId/practice" params={{ topicId: topic.id }}>
          <Button
            size="sm"
            variant="outline"
            className="h-7 px-3 text-xs font-medium border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth group-hover:border-primary/60"
            data-ocid={`practice-btn-${topic.id}`}
          >
            Practice
            <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
          </Button>
        </Link>
      </div>
    </Card>
  );
}

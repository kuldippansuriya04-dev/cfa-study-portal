import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { BookOpen, Search, Target } from "lucide-react";
import { useState } from "react";
import { useMyTopicStats, useTopics } from "../hooks/useBackend";

const TOPIC_COLORS: Record<string, string> = {
  ethics: "bg-[oklch(0.55_0.18_150)]/10 text-[oklch(0.45_0.18_150)]",
  quant: "bg-primary/10 text-primary",
  econ: "bg-accent/10 text-accent",
  fsa: "bg-[oklch(0.55_0.14_300)]/10 text-[oklch(0.45_0.14_300)]",
  corp: "bg-[oklch(0.6_0.16_30)]/10 text-[oklch(0.5_0.16_30)]",
  equity: "bg-primary/10 text-primary",
  fi: "bg-[oklch(0.55_0.18_200)]/10 text-[oklch(0.45_0.18_200)]",
  deriv: "bg-destructive/10 text-destructive",
  alts: "bg-accent/10 text-accent",
  pm: "bg-[oklch(0.55_0.18_150)]/10 text-[oklch(0.45_0.18_150)]",
};

export default function Topics() {
  const { data: topics, isLoading } = useTopics();
  const { data: topicStats } = useMyTopicStats();
  const [search, setSearch] = useState("");

  const filtered = (topics ?? []).filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase()),
  );

  const totalAnswered = (topicStats ?? []).reduce(
    (sum, s) => sum + s.answeredCount,
    0,
  );
  const totalCorrect = (topicStats ?? []).reduce(
    (sum, s) => sum + s.correctCount,
    0,
  );
  const overallAccuracy =
    totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const topicsStarted = (topicStats ?? []).filter(
    (s) => s.answeredCount > 0,
  ).length;

  return (
    <div className="bg-background min-h-screen">
      {/* Page Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                  CFA Level I
                </span>
              </div>
              <h1 className="font-display text-3xl font-bold text-foreground mb-1">
                Study Topics
              </h1>
              <p className="text-muted-foreground text-sm max-w-xl">
                10 topic areas covering the full CFA Level I curriculum.
                Practice questions, track your accuracy, and identify your weak
                areas.
              </p>
            </div>

            {/* Summary stats */}
            <div className="flex gap-4 flex-shrink-0">
              {[
                { label: "Topics Started", value: topicsStarted },
                {
                  label: "Overall Accuracy",
                  value: totalAnswered > 0 ? `${overallAccuracy}%` : "—",
                },
                { label: "Total Answered", value: totalAnswered },
              ].map(({ label, value }) => (
                <div key={label} className="text-center">
                  <div className="font-display text-xl font-bold text-foreground">
                    {value}
                  </div>
                  <div className="text-xs text-muted-foreground">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + filter bar */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search topics…"
              className="pl-9 bg-card border-border"
              data-ocid="topic-search"
            />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Badge
              variant="outline"
              className="border-border font-normal text-muted-foreground"
            >
              {filtered.length} topics
            </Badge>
          </div>
        </div>

        {/* Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 10 }, (_, i) => String(i)).map((k) => (
              <Skeleton key={k} className="h-52 rounded-lg" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div
            className="text-center py-20 bg-card rounded-xl border border-border"
            data-ocid="topics-empty"
          >
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="font-display text-lg font-semibold text-foreground mb-1">
              No topics found
            </p>
            <p className="text-muted-foreground text-sm mb-4">
              Try a different search term.
            </p>
            <Button variant="outline" size="sm" onClick={() => setSearch("")}>
              Clear search
            </Button>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            data-ocid="topics-grid"
          >
            {filtered.map((topic) => {
              const stats = topicStats?.find((s) => s.topicId === topic.id);
              return (
                <EnhancedTopicCard
                  key={topic.id}
                  topic={topic}
                  stats={stats}
                  colorClass={
                    TOPIC_COLORS[topic.id] ?? "bg-primary/10 text-primary"
                  }
                />
              );
            })}
          </div>
        )}

        {/* CFA Exam info strip */}
        <div className="mt-10 rounded-xl bg-primary/5 border border-primary/15 p-5 flex flex-col sm:flex-row items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-foreground">
              CFA Institute recommends 300+ hours of study
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Focus on Ethics, FSA, and Fixed Income — they carry the highest
              exam weights. Aim for 70%+ accuracy before exam day.
            </p>
          </div>
          <Link to="/exams" className="sm:ml-auto flex-shrink-0">
            <Button
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              data-ocid="go-to-exams-btn"
            >
              Take a Mock Exam
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Enhanced Topic Card ──────────────────────────────────────────────────────

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import type { UserTopicStats } from "../types/cfa";
import type { Topic } from "../types/cfa";

interface EnhancedTopicCardProps {
  topic: Topic;
  stats?: UserTopicStats;
  colorClass?: string;
}

function EnhancedTopicCard({ topic, stats }: EnhancedTopicCardProps) {
  const accuracy = stats?.accuracy ?? 0;
  const answered = stats?.answeredCount ?? 0;
  const progressPct = Math.min((answered / topic.questionCount) * 100, 100);

  const accuracyColor =
    accuracy >= 70
      ? "text-[oklch(0.45_0.18_150)]"
      : accuracy >= 50
        ? "text-accent"
        : answered === 0
          ? "text-muted-foreground"
          : "text-destructive";

  return (
    <Card
      className="group shadow-card hover:shadow-md transition-smooth border border-border bg-card flex flex-col overflow-hidden"
      data-ocid={`topic-card-${topic.id}`}
    >
      {/* Color accent stripe */}
      <div className="h-1 w-full bg-gradient-to-r from-primary/40 to-accent/40" />

      <div className="p-5 flex flex-col flex-1">
        {/* Topic header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-display text-sm font-bold text-foreground leading-tight line-clamp-2 flex-1">
            {topic.title}
          </h3>
          <span className="badge-weight flex-shrink-0 text-[10px]">
            {topic.weight}
          </span>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4 flex-1">
          {topic.description}
        </p>

        {/* Accuracy indicator */}
        <div className="mb-3">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-muted-foreground">
              {answered}/{topic.questionCount} answered
            </span>
            {answered > 0 && (
              <span className={cn("font-semibold", accuracyColor)}>
                {accuracy}% correct
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

        {/* Actions */}
        <div className="flex items-center gap-2 mt-auto pt-1">
          <Link
            to="/topics/$topicId"
            params={{ topicId: topic.id }}
            className="flex-1"
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full h-7 text-xs border-border hover:border-primary/40 hover:bg-muted/60 transition-smooth"
              data-ocid={`study-btn-${topic.id}`}
            >
              Study
            </Button>
          </Link>
          <Link
            to="/topics/$topicId/practice"
            params={{ topicId: topic.id }}
            className="flex-1"
          >
            <Button
              size="sm"
              className="w-full h-7 text-xs bg-primary text-primary-foreground hover:bg-primary/90 font-semibold transition-smooth"
              data-ocid={`practice-btn-${topic.id}`}
            >
              Practice
              <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}

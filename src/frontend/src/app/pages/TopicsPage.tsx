import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { TOPICS } from '@/app/data/topics';
import type { PageId } from '@/app/types/navigation';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';

interface TopicsPageProps {
  onNavigate: (page: PageId) => void;
}

export function TopicsPage({ onNavigate }: TopicsPageProps) {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold">Study Topics</h1>
        <p className="text-muted-foreground text-sm mt-1">
          CFA Level I covers 10 topic areas. Click a topic to see readings and start studying.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {TOPICS.map((topic) => (
          <Card
            key={topic.id}
            className="border-none shadow-sm cursor-pointer hover:shadow-md transition-all group overflow-hidden"
            onClick={() => onNavigate(`topic-${topic.id}` as PageId)}
          >
            {/* Color Header */}
            <div
              className="h-2 w-full"
              style={{ backgroundColor: topic.color }}
            />
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{topic.icon}</span>
                  <div>
                    <p className="font-semibold text-sm leading-tight">{topic.shortName}</p>
                    <p className="text-[10px] text-muted-foreground">{topic.code}</p>
                  </div>
                </div>
                <Badge
                  className="text-[10px] px-2 py-0.5 flex-shrink-0 text-white"
                  style={{ backgroundColor: topic.color }}
                >
                  {topic.examWeightMin}–{topic.examWeightMax}%
                </Badge>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                {topic.description}
              </p>

              <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <BookOpen size={11} /> {topic.totalReadings} readings
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={11} /> ~{topic.estimatedHours}h
                </span>
                <span
                  className="ml-auto px-2 py-0.5 rounded-full text-[10px] font-semibold"
                  style={{ backgroundColor: topic.color + '20', color: topic.color }}
                >
                  {topic.difficulty}
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-muted-foreground">Progress</span>
                  <span className="text-[10px] font-semibold" style={{ color: topic.color }}>{topic.progress}%</span>
                </div>
                <Progress value={topic.progress} className="h-1.5" />
              </div>

              <div className="flex items-center justify-end mt-3">
                <span
                  className="text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ color: topic.color }}
                >
                  Open topic <ArrowRight size={12} />
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

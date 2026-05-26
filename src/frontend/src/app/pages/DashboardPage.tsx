import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { MOCK_USER, getDaysUntilExam } from '@/app/data/mockUser';
import { TOPICS, OVERALL_PROGRESS } from '@/app/data/topics';
import type { PageId } from '@/app/types/navigation';
import {
  Flame,
  Clock,
  TrendingUp,
  Award,
  BookOpen,
  Pencil,
  FileText,
  Target,
  ChevronRight,
  CheckCircle2,
  Circle,
} from 'lucide-react';

const TODAY_TASKS = [
  { id: 1, title: 'Complete Reading 3: Time Value of Money', topic: 'Quantitative', color: '#7C3AED', duration: 45, done: true },
  { id: 2, title: 'Practice Quiz — Ethics Standards I-VII', topic: 'Ethics', color: '#1E40AF', duration: 30, done: false },
  { id: 3, title: 'Review Flashcards: Fixed Income', topic: 'Fixed Income', color: '#65A30D', duration: 20, done: false },
  { id: 4, title: 'Study Reading 5: Aggregate Output', topic: 'Economics', color: '#059669', duration: 60, done: false },
];

const RECENT_ACTIVITY = [
  { icon: '📖', text: 'Completed Reading 2: Probability Concepts', topic: 'Quant', time: '2h ago' },
  { icon: '✅', text: 'Scored 78% on Ethics Practice Quiz', topic: 'Ethics', time: '4h ago' },
  { icon: '🃏', text: 'Reviewed 24 Flashcards', topic: 'Economics', time: 'Yesterday' },
  { icon: '📝', text: 'Added note: DCF Valuation Formula', topic: 'Equity', time: 'Yesterday' },
  { icon: '🎯', text: 'Mock Exam — Score: 65%', topic: 'Full Length', time: '2 days ago' },
];

interface DashboardPageProps {
  onNavigate: (page: PageId) => void;
}

export function DashboardPage({ onNavigate }: DashboardPageProps) {
  const daysLeft = getDaysUntilExam(MOCK_USER.examDate);
  const completedToday = TODAY_TASKS.filter(t => t.done).length;
  const dailyGoalMin = 120;
  const studiedMin = 45;

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, {MOCK_USER.name.split(' ')[0]}! 👋</h1>
            <p className="text-blue-200 mt-1 text-sm">
              You're on a <span className="text-white font-bold">{MOCK_USER.streak}-day</span> streak.
              Keep going — exam day is <span className="text-white font-bold">{daysLeft} days</span> away!
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button
              size="sm"
              className="bg-white text-blue-700 hover:bg-blue-50 font-semibold"
              onClick={() => onNavigate('quiz')}
            >
              <Pencil size={14} className="mr-1" /> Practice Quiz
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => onNavigate('mock-exam')}
            >
              <FileText size={14} className="mr-1" /> Mock Exam
            </Button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-none shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Study Streak</span>
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                <Flame size={16} className="text-orange-500" />
              </div>
            </div>
            <div className="text-3xl font-black text-foreground">{MOCK_USER.streak}</div>
            <div className="text-xs text-muted-foreground mt-1">days in a row 🔥</div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Study Hours</span>
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock size={16} className="text-blue-600" />
              </div>
            </div>
            <div className="text-3xl font-black text-foreground">{MOCK_USER.totalStudyHours}</div>
            <div className="text-xs text-muted-foreground mt-1">of ~300 recommended</div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Overall Progress</span>
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp size={16} className="text-green-600" />
              </div>
            </div>
            <div className="text-3xl font-black text-foreground">{OVERALL_PROGRESS}%</div>
            <Progress value={OVERALL_PROGRESS} className="h-1.5 mt-2" />
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Mock Exam Avg</span>
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Award size={16} className="text-purple-600" />
              </div>
            </div>
            <div className="text-3xl font-black text-foreground">{MOCK_USER.mockExamAvg}%</div>
            <div className="text-xs mt-1">
              <span className={MOCK_USER.mockExamAvg >= 70 ? 'text-green-600 font-semibold' : 'text-orange-500 font-semibold'}>
                {MOCK_USER.mockExamAvg >= 70 ? '✓ Passing range' : '↑ Need 70% to pass'}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Topic Progress */}
        <Card className="lg:col-span-2 border-none shadow-sm">
          <CardHeader className="flex-row items-center justify-between pb-3">
            <CardTitle className="text-base font-semibold">Topic Progress</CardTitle>
            <Button variant="ghost" size="sm" className="text-xs text-blue-600 h-7" onClick={() => onNavigate('topics')}>
              View all <ChevronRight size={12} className="ml-1" />
            </Button>
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-3">
            {TOPICS.map((topic) => (
              <div
                key={topic.id}
                className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 -mx-2 px-2 py-1 rounded-lg group transition-colors"
                onClick={() => onNavigate(`topic-${topic.id}` as PageId)}
              >
                <span className="text-lg w-6 text-center flex-shrink-0">{topic.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-medium truncate">{topic.shortName}</span>
                    <span className="text-xs text-muted-foreground ml-2 flex-shrink-0">{topic.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full transition-all"
                      style={{ width: `${topic.progress}%`, backgroundColor: topic.color }}
                    />
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className="text-[10px] px-1.5 py-0 flex-shrink-0 hidden sm:flex"
                  style={{ borderColor: topic.color + '60', color: topic.color }}
                >
                  {topic.examWeightMin}-{topic.examWeightMax}%
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Right Column */}
        <div className="space-y-4">
          {/* Today's Plan */}
          <Card className="border-none shadow-sm">
            <CardHeader className="flex-row items-center justify-between pb-3">
              <CardTitle className="text-base font-semibold">Today's Plan</CardTitle>
              <Button variant="ghost" size="sm" className="text-xs text-blue-600 h-7" onClick={() => onNavigate('planner')}>
                Planner <ChevronRight size={12} className="ml-1" />
              </Button>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-muted-foreground">{completedToday}/{TODAY_TASKS.length} tasks</span>
                <span className="text-xs text-muted-foreground">{studiedMin}/{dailyGoalMin} min</span>
              </div>
              <Progress value={(studiedMin / dailyGoalMin) * 100} className="h-1.5 mb-3" />
              <div className="space-y-2">
                {TODAY_TASKS.map((task) => (
                  <div key={task.id} className="flex items-start gap-2">
                    {task.done ? (
                      <CheckCircle2 size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <Circle size={16} className="text-muted-foreground mt-0.5 flex-shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs leading-snug ${task.done ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                        {task.title}
                      </p>
                      <div className="flex items-center gap-1 mt-0.5">
                        <span
                          className="text-[10px] px-1.5 rounded font-medium"
                          style={{ backgroundColor: task.color + '20', color: task.color }}
                        >
                          {task.topic}
                        </span>
                        <span className="text-[10px] text-muted-foreground">{task.duration}m</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-base font-semibold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-2">
              {RECENT_ACTIVITY.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-foreground leading-snug">{item.text}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-muted-foreground">{item.topic}</span>
                      <span className="text-[10px] text-muted-foreground">·</span>
                      <span className="text-[10px] text-muted-foreground">{item.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { icon: BookOpen, label: 'Resume Study', sub: 'Quant: Reading 3', color: 'text-purple-600 bg-purple-100', page: 'topics' as PageId },
          { icon: Pencil, label: 'Practice Quiz', sub: 'Any topic, any time', color: 'text-blue-600 bg-blue-100', page: 'quiz' as PageId },
          { icon: FileText, label: 'Mock Exam', sub: '90 questions · 3 hrs', color: 'text-red-600 bg-red-100', page: 'mock-exam' as PageId },
          { icon: Target, label: 'Flashcards', sub: '12 cards due today', color: 'text-green-600 bg-green-100', page: 'flashcards' as PageId },
        ].map(({ icon: Icon, label, sub, color, page }) => (
          <Card
            key={label}
            className="border-none shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onNavigate(page)}
          >
            <CardContent className="p-4">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${color}`}>
                <Icon size={18} />
              </div>
              <p className="text-sm font-semibold">{label}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

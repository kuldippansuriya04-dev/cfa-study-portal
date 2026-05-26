import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { PageId } from '@/app/types/navigation';

const PAGE_META: Record<string, { icon: string; title: string; description: string }> = {
  topics: { icon: '📚', title: 'Topic Explorer', description: 'Browse all 10 CFA L1 topics and readings.' },
  quiz: { icon: '✏️', title: 'Practice Quiz', description: 'Test your knowledge with topic-based practice questions.' },
  'mock-exam': { icon: '📋', title: 'Mock Exam Simulator', description: 'Simulate a full CFA Level I exam experience.' },
  flashcards: { icon: '🃏', title: 'Flashcard Study Tool', description: 'Review key terms and formulas with spaced repetition.' },
  notes: { icon: '📝', title: 'Study Notes', description: 'Create, organize, and search your study notes.' },
  planner: { icon: '📅', title: 'Study Planner', description: 'Plan your weekly study schedule with goal tracking.' },
  achievements: { icon: '🏆', title: 'Achievements', description: 'Unlock badges and compete on the leaderboard.' },
};

interface PlaceholderPageProps {
  page: PageId;
  onNavigate: (page: PageId) => void;
}

export function PlaceholderPage({ page, onNavigate }: PlaceholderPageProps) {
  const meta = PAGE_META[page] ?? { icon: '🚧', title: String(page), description: 'Coming soon.' };

  return (
    <div className="flex items-center justify-center h-full p-8">
      <Card className="max-w-md w-full border-none shadow-sm text-center">
        <CardContent className="p-10">
          <div className="text-6xl mb-4">{meta.icon}</div>
          <h2 className="text-2xl font-bold mb-2">{meta.title}</h2>
          <p className="text-muted-foreground text-sm mb-6">{meta.description}</p>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-6">
            🚧 Coming in next iteration
          </div>
          <div>
            <Button variant="outline" size="sm" onClick={() => onNavigate('dashboard')}>
              ← Back to Dashboard
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

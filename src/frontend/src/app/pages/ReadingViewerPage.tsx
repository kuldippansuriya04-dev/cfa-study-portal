import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { TOPICS } from '@/app/data/topics';
import { CFA_READINGS } from '@/app/data/cfaReadings';
import type { PageId } from '@/app/types/navigation';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  List,
  X,
  ChevronLeft,
  ChevronRight,
  Target,
  FileText,
  Info,
} from 'lucide-react';

interface ReadingViewerPageProps {
  topicId: string;
  moduleNumber: number;
  onNavigate: (page: PageId) => void;
}

type Tab = 'overview' | 'los' | 'content';

function formatContent(text: string): string {
  // Clean up extracted PDF text - normalize whitespace, fix common issues
  return text
    .replace(/\r\n/g, '\n')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .replace(/([a-z])-\n([a-z])/g, '$1$2') // fix hyphenated line breaks
    .trim();
}

function renderFormattedText(text: string) {
  const lines = text.split('\n');
  const elements: React.ReactElement[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) { i++; continue; }

    // ALL CAPS headings
    if (/^[A-Z][A-Z\s:,\-–—]{8,}$/.test(line) && line.length < 80) {
      elements.push(
        <h2 key={i} className="text-lg font-bold text-foreground mt-6 mb-2 tracking-tight">
          {line}
        </h2>
      );
    }
    // Section with colon (sub-heading)
    else if (/^[A-Z][a-zA-Z\s]{3,40}:$/.test(line)) {
      elements.push(
        <h3 key={i} className="text-base font-semibold text-foreground mt-4 mb-1">
          {line}
        </h3>
      );
    }
    // Bullet points (■ or •)
    else if (/^[■•▪–\-]/.test(line)) {
      elements.push(
        <li key={i} className="ml-4 mb-1 text-sm text-foreground leading-relaxed list-none flex gap-2">
          <span className="text-blue-500 flex-shrink-0">■</span>
          <span>{line.replace(/^[■•▪–\-]\s*/, '')}</span>
        </li>
      );
    }
    // Numbered lists
    else if (/^\d+\.\s/.test(line)) {
      elements.push(
        <li key={i} className="ml-4 mb-1 text-sm text-foreground leading-relaxed list-decimal">
          {line.replace(/^\d+\.\s/, '')}
        </li>
      );
    }
    // Formula-like lines (contain = and numbers)
    else if (/[=+\-×÷∑∫√].*\d/.test(line) && line.length < 100) {
      elements.push(
        <div key={i} className="my-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg font-mono text-sm text-blue-800">
          {line}
        </div>
      );
    }
    // Regular paragraphs
    else {
      elements.push(
        <p key={i} className="text-sm text-foreground leading-relaxed mb-3">
          {line}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export function ReadingViewerPage({ topicId, moduleNumber, onNavigate }: ReadingViewerPageProps) {
  const topic = TOPICS.find(t => t.id === topicId);
  const modules = CFA_READINGS[topicId] ?? [];
  const mod = modules.find(m => m.number === moduleNumber);
  const [activeTab, setActiveTab] = useState<Tab>('overview');
  const [tocOpen, setTocOpen] = useState(false);
  const [completed, setCompleted] = useState(false);

  const currentIndex = modules.findIndex(m => m.number === moduleNumber);
  const prevMod = currentIndex > 0 ? modules[currentIndex - 1] : null;
  const nextMod = currentIndex < modules.length - 1 ? modules[currentIndex + 1] : null;

  if (!topic || !mod) {
    return (
      <div className="flex items-center justify-center h-full p-8">
        <div className="text-center">
          <p className="text-muted-foreground">Reading not found.</p>
          <Button variant="ghost" size="sm" className="mt-4" onClick={() => onNavigate(`topic-${topicId}` as PageId)}>
            ← Back to Topic
          </Button>
        </div>
      </div>
    );
  }

  const tabs: { id: Tab; label: string; icon: typeof BookOpen }[] = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'los', label: 'Learning Outcomes', icon: Target },
    { id: 'content', label: 'Full Content', icon: FileText },
  ];

  const losLines = mod.los
    .split('\n')
    .filter(l => l.trim().length > 15)
    .filter(l => !/^Mastery/i.test(l));

  return (
    <div className="flex h-full overflow-hidden">
      {/* TOC Sidebar overlay */}
      {tocOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="bg-black/40 flex-1" onClick={() => setTocOpen(false)} />
          <div className="w-72 bg-white shadow-xl flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <span className="font-semibold text-sm">All Modules</span>
              <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => setTocOpen(false)}>
                <X size={16} />
              </Button>
            </div>
            <ScrollArea className="flex-1">
              <div className="p-3 space-y-1">
                {modules.map((m) => (
                  <button
                    key={m.number}
                    onClick={() => {
                      onNavigate(`reading-${topicId}-${m.number}` as PageId);
                      setTocOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-colors ${
                      m.number === moduleNumber
                        ? 'font-semibold text-white'
                        : 'text-foreground hover:bg-muted'
                    }`}
                    style={m.number === moduleNumber ? { backgroundColor: topic.color } : {}}
                  >
                    <span className="font-bold mr-1">LM{m.number}:</span>
                    {m.title}
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      )}

      {/* Main reading area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Reading Header */}
        <div className="flex-shrink-0 bg-white border-b border-border px-4 py-3">
          <div className="flex items-center gap-3 flex-wrap">
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground h-8 px-2"
              onClick={() => onNavigate(`topic-${topicId}` as PageId)}
            >
              <ArrowLeft size={15} className="mr-1" />
              {topic.shortName}
            </Button>

            <Separator orientation="vertical" className="h-5" />

            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span
                className="text-xs font-bold px-2 py-0.5 rounded text-white flex-shrink-0"
                style={{ backgroundColor: topic.color }}
              >
                LM{mod.number}
              </span>
              <span className="font-semibold text-sm truncate">{mod.title}</span>
            </div>

            <div className="flex items-center gap-2 ml-auto flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-muted-foreground"
                onClick={() => setTocOpen(true)}
              >
                <List size={15} className="mr-1" /> Contents
              </Button>
              <Button
                size="sm"
                className={`h-8 px-3 text-xs ${completed ? 'bg-green-600 hover:bg-green-700' : ''}`}
                onClick={() => setCompleted(v => !v)}
              >
                <CheckCircle2 size={14} className="mr-1" />
                {completed ? 'Completed ✓' : 'Mark Complete'}
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mt-3">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  activeTab === id
                    ? 'text-white'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                style={activeTab === id ? { backgroundColor: topic.color } : {}}
              >
                <Icon size={12} />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable content */}
        <ScrollArea className="flex-1">
          <div className="max-w-3xl mx-auto px-6 py-8">

            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Module header card */}
                <div
                  className="rounded-2xl p-6 text-white"
                  style={{ background: `linear-gradient(135deg, ${topic.color}, ${topic.color}bb)` }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-3xl">{topic.icon}</span>
                    <div>
                      <p className="text-white/70 text-xs uppercase tracking-widest font-semibold">
                        {topic.code} · Learning Module {mod.number}
                      </p>
                      <h1 className="text-2xl font-black leading-tight">{mod.title}</h1>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="bg-white/20 rounded-full px-3 py-1 text-xs font-medium">
                      📄 {mod.pages} pages
                    </span>
                    <span className="bg-white/20 rounded-full px-3 py-1 text-xs font-medium">
                      ⏱ ~{Math.round(mod.pages * 2.5)}m reading
                    </span>
                    <span className="bg-white/20 rounded-full px-3 py-1 text-xs font-medium">
                      📚 CFA Institute Curriculum
                    </span>
                  </div>
                </div>

                {/* Introduction */}
                {mod.intro && (
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <h2 className="text-base font-bold mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 rounded-full inline-block" style={{ backgroundColor: topic.color }} />
                        Introduction
                      </h2>
                      <p className="text-sm text-foreground leading-relaxed">{mod.intro}</p>
                    </CardContent>
                  </Card>
                )}

                {/* Overview */}
                {mod.overview && (
                  <Card className="border-none shadow-sm">
                    <CardContent className="p-6">
                      <h2 className="text-base font-bold mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 rounded-full inline-block" style={{ backgroundColor: topic.color }} />
                        Module Overview
                      </h2>
                      <div className="space-y-1">
                        {renderFormattedText(formatContent(mod.overview))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Quick action */}
                <div className="flex justify-end">
                  <Button
                    className="text-white"
                    style={{ backgroundColor: topic.color }}
                    onClick={() => setActiveTab('content')}
                  >
                    Read Full Content <ArrowRight size={15} className="ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* LOS Tab */}
            {activeTab === 'los' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold mb-1">Learning Outcome Statements</h2>
                  <p className="text-sm text-muted-foreground">
                    After completing this module, the candidate should be able to:
                  </p>
                </div>
                <div className="space-y-3">
                  {losLines.map((line, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 bg-white rounded-xl border border-border shadow-sm"
                    >
                      <span
                        className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: topic.color }}
                      >
                        {i + 1}
                      </span>
                      <p className="text-sm text-foreground leading-relaxed">{line.trim()}</p>
                    </div>
                  ))}
                  {losLines.length === 0 && (
                    <p className="text-muted-foreground text-sm">
                      Learning outcomes not parsed for this module.
                    </p>
                  )}
                </div>
                <div className="flex justify-end">
                  <Button
                    className="text-white"
                    style={{ backgroundColor: topic.color }}
                    onClick={() => setActiveTab('content')}
                  >
                    Continue to Content <ArrowRight size={15} className="ml-2" />
                  </Button>
                </div>
              </div>
            )}

            {/* Content Tab */}
            {activeTab === 'content' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Full Reading Content</h2>
                  <Badge variant="outline" className="text-xs">
                    Extracted from CFA Curriculum PDF
                  </Badge>
                </div>
                <Card className="border-none shadow-sm">
                  <CardContent className="p-6">
                    <div className="prose prose-sm max-w-none">
                      {renderFormattedText(formatContent(mod.body))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Navigation Footer */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-border">
              {prevMod ? (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onNavigate(`reading-${topicId}-${prevMod.number}` as PageId)}
                >
                  <ChevronLeft size={15} className="mr-1" /> LM{prevMod.number}: {prevMod.title.slice(0, 30)}
                  {prevMod.title.length > 30 ? '…' : ''}
                </Button>
              ) : (
                <div />
              )}
              {nextMod ? (
                <Button
                  size="sm"
                  className="text-white"
                  style={{ backgroundColor: topic.color }}
                  onClick={() => onNavigate(`reading-${topicId}-${nextMod.number}` as PageId)}
                >
                  LM{nextMod.number}: {nextMod.title.slice(0, 30)}
                  {nextMod.title.length > 30 ? '…' : ''} <ChevronRight size={15} className="ml-1" />
                </Button>
              ) : (
                <Button
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white"
                  onClick={() => onNavigate(`topic-${topicId}` as PageId)}
                >
                  <CheckCircle2 size={15} className="mr-1" /> Finish Topic
                </Button>
              )}
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

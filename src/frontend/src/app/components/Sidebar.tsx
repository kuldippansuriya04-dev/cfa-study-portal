import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { TOPICS } from "@/app/data/topics";
import type { PageId } from "@/app/types/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Pencil,
  BrainCircuit,
  FileText,
  CalendarDays,
  Trophy,
  ChevronRight,
} from "lucide-react";

interface SidebarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
  collapsed: boolean;
}

const NAV_SECTIONS = [
  { id: "dashboard" as PageId, label: "Dashboard", icon: LayoutDashboard },
  { id: "topics" as PageId, label: "Study Topics", icon: BookOpen },
  { id: "quiz" as PageId, label: "Practice Quiz", icon: Pencil },
  { id: "mock-exam" as PageId, label: "Mock Exam", icon: FileText },
  { id: "flashcards" as PageId, label: "Flashcards", icon: BrainCircuit },
  { id: "notes" as PageId, label: "Study Notes", icon: FileText },
  { id: "planner" as PageId, label: "Study Planner", icon: CalendarDays },
  { id: "achievements" as PageId, label: "Achievements", icon: Trophy },
];

const MOCK_PORTAL_URL = `${import.meta.env.BASE_URL}mock-portal.html`;

export function Sidebar({ activePage, onNavigate, collapsed }: SidebarProps) {
  const isActive = (id: PageId) =>
    activePage === id || (id === "topics" && activePage.startsWith("topic-"));

  const handleNavClick = (id: PageId) => {
    if (id === "mock-exam") {
      window.location.href = MOCK_PORTAL_URL;
      return;
    }
    onNavigate(id);
  };

  return (
    <aside
      className={`flex flex-col h-full bg-[#0F172A] border-r border-white/10 transition-all duration-300 ${
        collapsed ? "w-16" : "w-60"
      } flex-shrink-0`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5 flex-shrink-0">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white font-black text-sm">CFA</span>
        </div>
        {!collapsed && (
          <div>
            <div className="text-white font-bold text-sm leading-none">
              CFA Level 1
            </div>
            <div className="text-blue-400 text-xs mt-0.5">
              Practice Questions Hub
            </div>
          </div>
        )}
      </div>

      <Separator className="bg-white/10" />

      <ScrollArea className="flex-1 py-3">
        {/* Main Navigation */}
        <div className="px-2 mb-2">
          {!collapsed && (
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest px-2 mb-1">
              Navigation
            </p>
          )}
          {NAV_SECTIONS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className={`w-full flex items-center gap-3 px-2 py-2 rounded-lg text-sm font-medium transition-all mb-0.5 ${
                isActive(id)
                  ? "bg-blue-600 text-white"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              } ${collapsed ? "justify-center" : ""}`}
              title={collapsed ? label : undefined}
            >
              <Icon size={18} className="flex-shrink-0" />
              {!collapsed && <span className="truncate">{label}</span>}
            </button>
          ))}
        </div>

        <Separator className="bg-white/10 my-3 mx-4" />

        {/* Topics */}
        {!collapsed && (
          <div className="px-2">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest px-2 mb-1">
              Topics
            </p>
            {TOPICS.map((topic) => {
              const topicPageId = `topic-${topic.id}` as PageId;
              const active = activePage === topicPageId;
              return (
                <button
                  key={topic.id}
                  onClick={() => onNavigate(topicPageId)}
                  className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-medium transition-all mb-0.5 group ${
                    active
                      ? "bg-white/10 text-white"
                      : "text-white/50 hover:text-white/80 hover:bg-white/5"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: topic.color }}
                  />
                  <span className="truncate flex-1 text-left">
                    {topic.shortName}
                  </span>
                  <span
                    className="text-[10px] px-1.5 py-0.5 rounded font-semibold flex-shrink-0"
                    style={{
                      backgroundColor: topic.color + "33",
                      color: topic.color,
                    }}
                  >
                    {topic.examWeightMin}-{topic.examWeightMax}%
                  </span>
                  <ChevronRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 flex-shrink-0"
                  />
                </button>
              );
            })}
          </div>
        )}

        {collapsed && (
          <div className="px-2 space-y-1">
            {TOPICS.map((topic) => {
              const topicPageId = `topic-${topic.id}` as PageId;
              const active = activePage === topicPageId;
              return (
                <button
                  key={topic.id}
                  onClick={() => onNavigate(topicPageId)}
                  title={topic.shortName}
                  className={`w-full flex justify-center py-1.5 rounded-lg transition-all ${
                    active ? "bg-white/10" : "hover:bg-white/5"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: topic.color }}
                  />
                </button>
              );
            })}
          </div>
        )}
      </ScrollArea>

      {/* Footer */}
      {!collapsed && (
        <>
          <Separator className="bg-white/10" />
          <div className="px-4 py-3">
            <div className="text-white/30 text-[10px] text-center">
              CFA Level 1 Practice Questions Hub
            </div>
          </div>
        </>
      )}
    </aside>
  );
}

"use client";

import "@/index.css";
import { useState } from "react";
import { Sidebar } from "@/app/components/Sidebar";
import { TopHeader } from "@/app/components/TopHeader";
import { DashboardPage } from "@/app/pages/DashboardPage";
import { TopicsPage } from "@/app/pages/TopicsPage";
import { TopicDetailPage } from "@/app/pages/TopicDetailPage";
import { ReadingViewerPage } from "@/app/pages/ReadingViewerPage";
import { PlaceholderPage } from "@/app/pages/PlaceholderPage";
import { PracticeQuizPage } from "@/app/pages/PracticeQuizPage";
import { StudyPlannerPage } from "@/app/pages/StudyPlannerPage";
import { AchievementsPage } from "@/app/pages/AchievementsPage";
import { FlashcardsPage } from "@/app/pages/FlashcardsPage";
import { ComicsPage } from "@/app/pages/ComicsPage";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { PageId } from "@/app/types/navigation";

const MOCK_PORTAL_URL = `${import.meta.env.BASE_URL}mock-portal.html`;

function App() {
  const [activePage, setActivePage] = useState<PageId>("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const handleNavigate = (page: PageId) => {
    if (page === "mock-exam") {
      window.location.href = MOCK_PORTAL_URL;
      return;
    }
    setActivePage(page);
    setNotificationsOpen(false);
  };

  const renderPage = () => {
    if (activePage === "dashboard") {
      return <DashboardPage onNavigate={handleNavigate} />;
    }
    if (activePage === "topics") {
      return <TopicsPage onNavigate={handleNavigate} />;
    }
    if (activePage.startsWith("topic-")) {
      const topicId = activePage.replace("topic-", "");
      return <TopicDetailPage topicId={topicId} onNavigate={handleNavigate} />;
    }
    if (activePage.startsWith("reading-")) {
      // format: reading-{topicId}-{moduleNumber}
      const parts = activePage.replace("reading-", "").split("-");
      const moduleNumber = parseInt(parts[parts.length - 1], 10);
      const topicId = parts.slice(0, parts.length - 1).join("-");
      return (
        <ReadingViewerPage
          topicId={topicId}
          moduleNumber={moduleNumber}
          onNavigate={handleNavigate}
        />
      );
    }
    if (activePage === "quiz") {
      return <PracticeQuizPage onNavigate={handleNavigate} />;
    }
    if (activePage === "flashcards") {
      return <FlashcardsPage onNavigate={handleNavigate} />;
    }
    if (activePage === "comics") {
      return <ComicsPage />;
    }
    if (activePage === "planner") {
      return <StudyPlannerPage onNavigate={handleNavigate} />;
    }
    if (activePage === "achievements") {
      return <AchievementsPage onNavigate={handleNavigate} />;
    }
    return <PlaceholderPage page={activePage} onNavigate={handleNavigate} />;
  };

  return (
    <div
      className="flex h-screen w-full overflow-hidden bg-muted/30"
      onClick={() => notificationsOpen && setNotificationsOpen(false)}
    >
      {/* Sidebar */}
      <Sidebar
        activePage={activePage}
        onNavigate={handleNavigate}
        collapsed={sidebarCollapsed}
      />

      {/* Main Area */}
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        {/* Top Header */}
        <TopHeader
          onToggleSidebar={() => setSidebarCollapsed((c) => !c)}
          notificationsOpen={notificationsOpen}
          onToggleNotifications={(e) => {
            e?.stopPropagation?.();
            setNotificationsOpen((o) => !o);
          }}
        />

        {/* Page Content */}
        <ScrollArea className="flex-1">{renderPage()}</ScrollArea>
      </div>
    </div>
  );
}

export default App;

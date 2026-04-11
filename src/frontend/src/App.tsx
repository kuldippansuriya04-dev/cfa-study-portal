import { RouterProvider, createRouter } from "@tanstack/react-router";
import { createRootRoute, createRoute } from "@tanstack/react-router";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import ExamResult from "./pages/ExamResult";
import ExamSession from "./pages/ExamSession";
import Exams from "./pages/Exams";
import History from "./pages/History";
import Login from "./pages/Login";
import PracticeSession from "./pages/PracticeSession";
import Profile from "./pages/Profile";
import TopicDetail from "./pages/TopicDetail";
import Topics from "./pages/Topics";

const rootRoute = createRootRoute({ component: Layout });

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  ),
});
const topicsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/topics",
  component: () => (
    <ProtectedRoute>
      <Topics />
    </ProtectedRoute>
  ),
});
const topicDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/topics/$topicId",
  component: () => (
    <ProtectedRoute>
      <TopicDetail />
    </ProtectedRoute>
  ),
});
const practiceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/topics/$topicId/practice",
  component: () => (
    <ProtectedRoute>
      <PracticeSession />
    </ProtectedRoute>
  ),
});
const examsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/exams",
  component: () => (
    <ProtectedRoute>
      <Exams />
    </ProtectedRoute>
  ),
});
const examSessionRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/exams/$examId/take",
  component: () => (
    <ProtectedRoute>
      <ExamSession />
    </ProtectedRoute>
  ),
});
const examResultRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/exams/$examId/result/$attemptId",
  component: () => (
    <ProtectedRoute>
      <ExamResult />
    </ProtectedRoute>
  ),
});
const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/history",
  component: () => (
    <ProtectedRoute>
      <History />
    </ProtectedRoute>
  ),
});
const profileRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: () => (
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  ),
});

const routeTree = rootRoute.addChildren([
  loginRoute,
  indexRoute,
  topicsRoute,
  topicDetailRoute,
  practiceRoute,
  examsRoute,
  examSessionRoute,
  examResultRoute,
  historyRoute,
  profileRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}

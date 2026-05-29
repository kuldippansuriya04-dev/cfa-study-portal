import { TOPICS } from "@/app/data/topics";

export const STUDY_PLAN = {
  weeklyGoalHours: 14,
  completedHours: 8.5,
  examTarget: "CFA Level I",
  focus: "FRA, Ethics, and Quant revision",
  dailySessions: [
    {
      day: "Mon",
      date: "Jun 01",
      title: "Ethics Standards I-VII",
      topicId: "ethics",
      durationMin: 90,
      status: "done",
      task: "Read summary notes and solve 20 practice questions.",
    },
    {
      day: "Tue",
      date: "Jun 02",
      title: "Time Value of Money",
      topicId: "quant",
      durationMin: 75,
      status: "done",
      task: "Formula review, calculator drills, and 15 mixed questions.",
    },
    {
      day: "Wed",
      date: "Jun 03",
      title: "Financial Statements",
      topicId: "fsa",
      durationMin: 120,
      status: "today",
      task: "Income statement and balance sheet practice set.",
    },
    {
      day: "Thu",
      date: "Jun 04",
      title: "Economics Review",
      topicId: "econ",
      durationMin: 80,
      status: "planned",
      task: "Aggregate output, inflation, and business cycle notes.",
    },
    {
      day: "Fri",
      date: "Jun 05",
      title: "Equity Valuation",
      topicId: "equity",
      durationMin: 90,
      status: "planned",
      task: "DCF, market multiples, and end-of-reading questions.",
    },
    {
      day: "Sat",
      date: "Jun 06",
      title: "Mock Exam Session",
      topicId: "pm",
      durationMin: 180,
      status: "planned",
      task: "90-question timed mock plus error-log review.",
    },
    {
      day: "Sun",
      date: "Jun 07",
      title: "Fixed Income Catch-up",
      topicId: "fi",
      durationMin: 90,
      status: "planned",
      task: "Bond pricing, duration, convexity, and flashcards.",
    },
  ],
  nextActions: [
    "Finish today's FRA practice set before starting a new topic.",
    "Review every missed Ethics question in the error log.",
    "Spend one short session on Fixed Income because progress is still low.",
  ],
};

export const TOPIC_HOUR_PLAN = TOPICS.map((topic) => ({
  ...topic,
  plannedHours: Math.max(2, Math.round(topic.estimatedHours * 0.35)),
  completedHours: Math.round(topic.estimatedHours * (topic.progress / 100) * 0.35),
})).sort((a, b) => b.examWeightMax - a.examWeightMax);

export const ACHIEVEMENT_SUMMARY = {
  points: 2840,
  level: 7,
  rank: 4,
  totalBadges: 18,
  unlockedBadges: 11,
};

export const BADGES = [
  {
    title: "Ethics Starter",
    description: "Completed the first Ethics practice set.",
    icon: "Scale",
    progress: 100,
    unlocked: true,
    color: "#1E40AF",
  },
  {
    title: "Quant Builder",
    description: "Answered 100 Quant questions.",
    icon: "Calculator",
    progress: 76,
    unlocked: false,
    color: "#7C3AED",
  },
  {
    title: "FRA Focus",
    description: "Logged 10 hours in Financial Reporting.",
    icon: "FileText",
    progress: 52,
    unlocked: false,
    color: "#DC2626",
  },
  {
    title: "Mock Warrior",
    description: "Completed 3 timed mock sessions.",
    icon: "Timer",
    progress: 100,
    unlocked: true,
    color: "#EA580C",
  },
  {
    title: "Seven Day Streak",
    description: "Studied every day for one full week.",
    icon: "Flame",
    progress: 100,
    unlocked: true,
    color: "#F97316",
  },
  {
    title: "Review Master",
    description: "Reviewed 250 missed-question explanations.",
    icon: "BookOpenCheck",
    progress: 64,
    unlocked: false,
    color: "#059669",
  },
];

export const LEADERBOARD = [
  { name: "Aarav P.", points: 3260, accuracy: 78, streak: 14 },
  { name: "Nisha S.", points: 3095, accuracy: 75, streak: 9 },
  { name: "Mehul K.", points: 2920, accuracy: 73, streak: 11 },
  { name: "You", points: ACHIEVEMENT_SUMMARY.points, accuracy: 71, streak: 8 },
  { name: "Riya D.", points: 2685, accuracy: 69, streak: 6 },
];

export const MILESTONES = [
  { label: "Overall progress", value: 42, target: 60 },
  { label: "Practice accuracy", value: 71, target: 75 },
  { label: "Mock exam average", value: 65, target: 70 },
  { label: "Weekly study hours", value: STUDY_PLAN.completedHours, target: STUDY_PLAN.weeklyGoalHours },
];

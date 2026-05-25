// Temporary mock dashboard data for API development
const studyDistractionData = [
  { day: "Sun", study: 0, distraction: 10 },
  { day: "Mon", study: 25, distraction: 20 },
  { day: "Tue", study: 45, distraction: 20 },
  { day: "Wed", study: 20, distraction: 15 },
  { day: "Thu", study: 18, distraction: 35 },
  { day: "Fri", study: 25, distraction: 20 },
  { day: "Sat", study: 40, distraction: 15 },
];

const dsaProgress = [
  { topic: "Arrays", progress: 70 },
  { topic: "Strings", progress: 50 },
  { topic: "Graphs", progress: 30 },
  { topic: "Pointer", progress: 50 },
];

const activeSession = {
  isRunning: true,
  time: "00:45:12",
};

const stats = {
  todayHours: 4.5,
  yesterdayDiff: 1.2,
};

const insights = {
  streak: 5,
  bestTime: "8:00 PM",
  tip: "Try to tackle weak topics on Mondays.",
};

const activityHeatmap = [
  { date: "2026-01-01", value: 1 },
  { date: "2026-01-02", value: 2 },
  { date: "2026-01-03", value: 4 },
  { date: "2026-01-04", value: 3 },
  { date: "2026-01-05", value: 0 },
  { date: "2026-01-06", value: 5 },
  { date: "2026-01-07", value: 2 },
];

const weeks = [
  activityHeatmap,
];

const mockDashboard = {
  studyDistractionData,
  dsaProgress,
  activeSession,
  activityHeatmap,
  weeks,
  stats,
  insights,
};

export default mockDashboard;

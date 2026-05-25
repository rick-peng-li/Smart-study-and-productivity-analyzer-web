import { generateHeatmap, getWeekGroups } from "../utils/calculations";

// Study and distraction tracking data (Weekly)
const studyDistractionData = [
  { day: "Sun", study: 60, distraction: 10 },
  { day: "Mon", study: 25, distraction: 20 },
  { day: "Tue", study: 45, distraction: 20 },
  { day: "Wed", study: 20, distraction: 15 },
  { day: "Thu", study: 18, distraction: 35 },
  { day: "Fri", study: 25, distraction: 20 },
  { day: "Sat", study: 40, distraction: 15 },
];

// DSA topic progress
const dsaProgress = [
  { topic: "Arrays", progress: 70 },
  { topic: "Strings", progress: 50 },
  { topic: "Graphs", progress: 30 },
  { topic: "Pointer", progress: 50 },
];

// Current active study session
const activeSession = {
  isRunning: true,
  time: "00:45:12",
};

// Generate activity heatmap and organize into weeks
const activityHeatmap = generateHeatmap();
const weeks = getWeekGroups(activityHeatmap);

// Daily and weekly statistics
const stats = {
  todayHours: 4.5,
  yesterdayDiff: 1.2,
};

// AI-generated insights
const insights = {
  streak: 5,
  bestTime: "8:00 PM",
  tip: "Try to tackle weak topics on Mondays.",
};

// Complete dashboard data object
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

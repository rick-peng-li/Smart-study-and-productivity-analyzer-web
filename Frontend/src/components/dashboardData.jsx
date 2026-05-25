const studyDistractionData = [
    { day: "Sun", study: 60, distraction: 10 },
    { day: "Mon", study: 25, distraction: 20 },
    { day: "Tue", study: 45, distraction: 20 },
    { day: "Wed", study: 20, distraction: 15 },
    { day: "Thu", study: 18, distraction: 35 },
    { day: "Fri", study: 25, distraction: 20 },
    { day: "Sat", study: 40, distraction: 15 }
];
const dsaProgress = [
  { topic: "Arrays", progress: 70 },
  { topic: "Strings", progress: 50 },
  { topic: "Graphs", progress: 30 },
  { topic: "Pointer", progress: 50 }
];
const activeSession = {
  isRunning: true,
  time: "00:45:12"
};

const generateHeatmap=()=>{
const data = [];
const start=new Date(2026,0,1);

for(let i=0;i<365;i++){
  const d=new Date(start);
  d.setDate(start.getDate()+i);
  data.push({
    date: d.toISOString().split("T")[0],
    value: Math.floor(Math.random()*6) // 0-5 hours
  });
}
return data;
}
const activityHeatmap = generateHeatmap();

const getWeek = (data) => {
  const weeks=[];
  let week=[];

  data.forEach((day) => {
    week.push(day);
    if(week.length === 7){
      weeks.push(week);
      week=[];
    }
  });

  if(week.length > 0) weeks.push(week);
  return weeks;
};

const weeks = getWeek(activityHeatmap);

const stats = {
  todayHours: 4.5,
  yesterdayDiff: 1.2
};
const insights = {
  streak: 5,
  bestTime: "8:00 PM",
  tip: "Try to tackle weak topics on Mondays."
};
const dashboardData = {
  studyDistractionData,
  dsaProgress,
  activeSession,
  activityHeatmap,
  weeks,
  stats,
  insights
};
export default dashboardData;
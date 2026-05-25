// Generate a year of activity data (365 days with random values)
export const generateHeatmap = () => {
  const data = [];
  const start = new Date(2026, 0, 1);

  for (let i = 0; i < 365; i++) {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    data.push({
      date: d.toISOString().split("T")[0],
      value: Math.floor(Math.random() * 6), // 0-5 hours
    });
  }

  return data;
};

// Group activity data into weeks (7 days per week)
export const getWeekGroups = (data) => {
  const weeks = [];
  let week = [];

  data.forEach((day) => {
    week.push(day);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  });

  if (week.length > 0) weeks.push(week);
  return weeks;
};

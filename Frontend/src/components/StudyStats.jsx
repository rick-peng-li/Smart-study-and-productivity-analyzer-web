import Card from "./Card";

// Map value to heatmap color
const getColorHeatmap = (value) => {
  if (value === 0) return "#2d2d2d";
  if (value <= 1) return "#0e4429";
  if (value <= 3) return "#006d32";
  if (value <= 5) return "#26a641";
  return "#39d353";
};

export default function StudyStats({ weeks, stats, insights }) {
  return (
    <>
      {/* Activity Heatmap Card */}
      <Card 
        width="800px" 
        height="220px" 
        title="Activity Tracking" 
        content={
          <div className="row align-items-center">
            {/* LEFT → Heatmap */}
            <div className="col-md-9">
              <div className="d-flex">
                {/* Day Labels */}
                <div className="d-flex flex-column me-2 small text-secondary">
                  <small>Mon</small>
                  <small>Tue</small>
                  <small>Wed</small>
                  <small>Thu</small>
                  <small>Fri</small>
                  <small>Sat</small>
                  <small>Sun</small>
                </div>

                {/* Heatmap Scroll */}
                <div className="d-flex overflow-auto">
                  {weeks.map((week, wIndex) => (
                    <div key={wIndex} className="d-flex flex-column">
                      {week.map((day, dIndex) => (
                        <div
                          key={dIndex}
                          title={`${day.date} : ${day.value}`}
                          style={{
                            width: "15px",
                            height: "15px",
                            margin: "1px",
                            backgroundColor: getColorHeatmap(day.value),
                          }}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT → Stats */}
            <div className="col-md-3">
              <div className="p-2 border rounded-3 text-center">
                <p className="text-secondary small mb-1">Daily/Weekly Stats</p>
                <h4 className="mb-1">{stats.todayHours} Hrs</h4>
                <p className="text-success mb-0">+{stats.yesterdayDiff} Hrs</p>
                <small className="text-secondary">vs Yesterday</small>
              </div>
            </div>
          </div>
        }
      />

      {/* AI Insights Card */}
      <Card 
        width="460px" 
        height="200px" 
        title="AI Insights" 
        content={
          <>
            <p>Streak maintained! {insights.streak} days strong.</p>
            <p>Insight: You are most productive at {insights.bestTime}</p>
            <p>Tip: Try to tackle weak topics on {insights.tip}</p>
          </>
        }
      />
    </>
  );
}

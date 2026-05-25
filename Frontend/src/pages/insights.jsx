import Card from "../components/Card";

export default function Insights() {
  return (
    <div
      className="container mt-4"
      style={{ position: "relative", top: 59 }}
    >
      <h2 className="mb-4">AI Insights</h2>

      <div className="row g-4 justify-content-center">

        {/* LEFT SIDE */}
        <div className="col-lg-6 d-flex flex-column gap-4">
          <Card
            height="260px"
            title="WEEKLY EFFICIENCY & PREDICTED PRODUCTIVITY"
          />
          <Card
            height="260px"
            title="STUDY EFFICIENCY HEATMAP"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="col-lg-6 d-flex flex-column gap-4">

          {/* 4 small cards */}
          <div className="row g-4">
            <div className="col-6">
              <Card height="150px" title="PEAK PRODUCTIVITY HOURS" content="You are consistently most productive between 8:00 PM and 10:00 PM"/>
            </div>
            <div className="col-6">
              <Card height="150px" title="DSA PROGRESS INSIGHTS" />
            </div>
            <div className="col-6">
              <Card height="150px" title="RECOMMENDED WEAK TOPIC REVIEW" />
            </div>
            <div className="col-6">
              <Card height="150px" title="PERSONALIZED HABIT TIP" />
            </div>
          </div>

          {/* THIS is the key fix 🔥 */}
          <Card
            height="150px"
            title="AUTOMATED PROGRESS REPORT"
          />

        </div>

      </div>
    </div>
  );
}
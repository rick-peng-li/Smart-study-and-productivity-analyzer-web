import Card from "../components/Card";

export default function Goals() {
  return (
    <>
      <div
        className="container d-flex flex-column gap-4 mt-4"
        style={{ position: "relative", top: 59 }}
      >
        <h2>Goals and Performance</h2>

        {/* TOP ROW */}
        <div className="d-flex gap-4 justify-content-center flex-wrap">
          <Card width="400px" height="100px" title="Active Goals" />
          <Card width="400px" height="100px" title="Completion Ratio" />
          <Card width="400px" height="100px" title="Longest Streak" />
        </div>

        {/* BOTTOM LAYOUT */}
        <div className="d-flex gap-4 justify-content-center flex-wrap">

          {/* LEFT SIDE (Card 4 + 6) */}
          <div className="d-flex flex-column gap-4">
            <Card width="500px" height="150px" title="Create New Goal" />
            <Card width="500px" height="150px" title="Completed & Archieved Goals" />
          </div>

          {/* RIGHT SIDE (Card 5) */}
          <div className="d-flex">
            <Card width="720px" height="320px" title="Active Goals" />
          </div>

        </div>

      </div>
    </>
  );
}
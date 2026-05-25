import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Cell } from "recharts";
import Card from "./Card";

// Color mapping for different topics
const getColor = (topic) => {
  if (topic === "Arrays") return "#74cbb1";
  if (topic === "Strings") return "#bb7575";
  if (topic === "Graphs") return "#6ea0b5";
  return "#a17eb1";
};

export default function DashboardCharts({ studyData, progressData }) {
  return (
    <Card 
      width="800px" 
      height="300px" 
      title="Your Study/Distraction Ration" 
      content={
        <div className="row align-items-center g-3">
          {/* LEFT → Line Chart */}
          <div className="col-md-6 d-flex flex-wrap">
            <LineChart width={300} height={200} data={studyData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Line dataKey="study" type="monotone" stroke="#39c697" />
              <Line dataKey="distraction" type="monotone" stroke="#ca4230" />
            </LineChart>
          </div>

          {/* RIGHT → BAR CHART */}
          <div className="col-md-3">
            <BarChart width={300} height={200} data={progressData}>
              <XAxis dataKey="topic" />
              <YAxis />
              <Bar dataKey="progress">
                {progressData.map((entry, index) => (
                  <Cell key={index} fill={getColor(entry.topic)} />
                ))}
              </Bar>
            </BarChart>
          </div>
        </div>
      }
    />
  );
}

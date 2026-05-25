import { useEffect, useState } from "react";
import axios from "axios";
import DashboardCharts from "../components/DashboardCharts";
import StudyStats from "../components/StudyStats";
import ActiveSessionCard from "../components/ActiveSessionCard";

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/dashboard");
        setDashboardData(response.data.data);
      } catch (err) {
        setError(
          err.response?.data?.message || "Unable to load dashboard data."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div
        className="container d-flex flex-column gap-4 mt-4"
        style={{ position: "relative", top: 59 }}
      >
        <h2>Smart Dashboard</h2>
        <p>Loading dashboard data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="container d-flex flex-column gap-4 mt-4"
        style={{ position: "relative", top: 59 }}
      >
        <h2>Smart Dashboard</h2>
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className="container d-flex flex-column gap-4 mt-4"
        style={{ position: "relative", top: 59 }}
      >
        <h2>Smart Dashboard</h2>
        <div className="d-flex gap-4 flex-wrap justify-content-center">
          {/* Charts Section */}
          <DashboardCharts
            studyData={dashboardData.studyDistractionData}
            progressData={dashboardData.dsaProgress}
          />

          {/* Active Session Card */}
          <ActiveSessionCard sessionTime={dashboardData.activeSession.time} />

          {/* Activity Heatmap & AI Insights */}
          <StudyStats
            weeks={dashboardData.weeks}
            stats={dashboardData.stats}
            insights={dashboardData.insights}
          />
        </div>
      </div>
    </>
  );
}
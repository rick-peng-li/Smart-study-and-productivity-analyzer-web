import { NavLink } from "react-router-dom";

export default function SideNavbar() {
  return (
    <div
      className="bg-dark vh-100 position-fixed"
      style={{ width: "207px", top: "59px" }}
    >
      <div className="p-3">
        <div className="nav nav-pills flex-column gap-2">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active bg-secondary" : ""}`
            }
          >
            <i className="bi bi-columns-gap me-2"></i>
            Dashboard
          </NavLink>

          <NavLink
            to="/study-timer"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active bg-secondary" : ""}`
            }
          >
            <i className="bi bi-clock me-2"></i>
            Study Timer
          </NavLink>

          <NavLink
            to="/activity-log"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active bg-secondary" : ""}`
            }
          >
            <i className="bi bi-journal-text me-2"></i>
            Activity Log
          </NavLink>

          <NavLink
            to="/ai-insights"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active bg-secondary" : ""}`
            }
          >
            <i className="bi bi-lightbulb me-2"></i>
            AI Insights
          </NavLink>

          <NavLink
            to="/goal"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active bg-secondary" : ""}`
            }
          >
            <i className="bi bi-bullseye me-2"></i>
            Goals
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `nav-link text-white ${isActive ? "active bg-secondary" : ""}`
            }
          >
            <i className="bi bi-gear me-2"></i>
            Settings
          </NavLink>
        </div>
      </div>
    </div>
  );
}
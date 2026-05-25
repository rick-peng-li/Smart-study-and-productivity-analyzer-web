import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
export default function TopNavbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const isAuthPage =
    location.pathname === "/" || location.pathname === "/signup";

  const username = "Tanya";

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom fixed-top">
      <div className="container">
        <h1 className="navbar-brand">Smart Study & Productivity Analyzer</h1>

        <div ref={dropdownRef} style={{ position: "relative" }}>
          {location.pathname === "/" && (
            <Link to="/signup" className="btn btn-outline-light me-2">
              Signup
            </Link>
          )}
          {location.pathname === "/signup" && (
            <Link to="/" className="btn btn-outline-light me-2">
              Login
            </Link>
          )}

          {!isAuthPage && (
            <div
              className="d-flex align-items-center gap-2 text-white"
              style={{ cursor: "pointer" }}
              onClick={() => setOpen(!open)}
            >
              {/* Avatar */}
              <div
                className="rounded-circle bg-primary d-flex justify-content-center align-items-center"
                style={{ width: "35px", height: "35px" }}
              >
                {username[0]}
              </div>

              <span>{username}</span>
              <span><i className="bi bi-chevron-down"></i></span>
            </div>
          )}

          {/* Dropdown */}
          <div
            className={`dropdown-menu dropdown-menu-end show mt-2 ${open && !isAuthPage ? "" : "d-none"}`}
          >
            <Link to="/profile" className="dropdown-item"><i className="bi bi-person"></i>&nbsp;
              Profile
            </Link>
            <Link to="/leaderboard" className="dropdown-item"><i className="bi bi-trophy"></i>&nbsp;
              Leaderboard
            </Link>

            <button
              className="dropdown-item text-danger"
              onClick={handleLogout}
            ><i className="bi bi-box-arrow-right"></i>&nbsp;
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
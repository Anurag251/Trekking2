import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import logoImage from "../assets/images/logo-sh.png";
import { Link, useLocation } from "react-router-dom";

const SideNavComponent = () => {
  const { sideNavHidden, setSideNavHidden } = useContext(AllDataContext);
  const location = useLocation();

  return (
    <div className={`side-nav ${sideNavHidden ? "active" : ""}`}>
      <div
        className="side-nav-close-btn"
        onClick={() => setSideNavHidden(false)}
      >
        <i className="fas fa-times"></i>
      </div>

      <div className="logo">
        <Link to="/" onClick={() => setSideNavHidden(false)}>
          <img src={logoImage} alt="" />
        </Link>
      </div>

      <ul className="nav-links">
        <li onClick={() => setSideNavHidden(false)}>
          <Link to="/">
            <button
              className={`nav-btn ${location.pathname === "/" ? "active" : ""}`}
            >
              Home
            </button>
          </Link>
        </li>

        <li onClick={() => setSideNavHidden(false)}>
          <Link to="/about">
            <button
              className={`nav-btn ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              About
            </button>
          </Link>
        </li>

        <li onClick={() => setSideNavHidden(false)}>
          <Link to="/knowledge">
            <button
              className={`nav-btn ${
                location.pathname === "/knowledge" ? "active" : ""
              }`}
            >
              Knowledge Centre
            </button>
          </Link>
        </li>

        <li onClick={() => setSideNavHidden(false)}>
          <Link to="/packages">
            <button
              className={`nav-btn ${
                location.pathname === "/packages" ? "active" : ""
              }`}
            >
              Packages
            </button>
          </Link>
        </li>

        <li onClick={() => setSideNavHidden(false)}>
          <Link to="/search">
            <button
              className={`nav-btn ${
                location.pathname === "/search" ? "active" : ""
              }`}
            >
              Search
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideNavComponent;

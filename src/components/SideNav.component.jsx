import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import logoImage from "../assets/images/SACRED HIMALAYA LOGOA-03.svg";
import { Link, useLocation } from "react-router-dom";

const SideNavComponent = () => {
  const {
    contactDatas,
    sideNavHidden,
    setSideNavHidden,
    setContactPopup,
    contactPopup,
  } = useContext(AllDataContext);
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
          <img src={contactDatas && contactDatas.branding.logo} alt="" />
        </Link>
      </div>

      <ul className="nav-links">
        <li onClick={() => setSideNavHidden(false)}>
          <Link to="/destination-details/nepal">
            <button
              className={`nav-btn ${
                location.pathname === "/destination-details/nepal"
                  ? "active"
                  : ""
              }`}
            >
              Nepal Trek
            </button>
          </Link>
        </li>

        <li onClick={() => setSideNavHidden(false)}>
          <Link to="/destination-details/bhutan">
            <button
              className={`nav-btn ${
                location.pathname === "/destination-details/bhutan"
                  ? "active"
                  : ""
              }`}
            >
              Bhutan Trek
            </button>
          </Link>
        </li>

        <li onClick={() => setSideNavHidden(false)}>
          <Link to="/search-page">
            <button
              className={`nav-btn ${
                location.pathname === "/search-page" ? "active" : ""
              }`}
            >
              Tours
            </button>
          </Link>
        </li>

        <li onClick={() => setSideNavHidden(false)}>
          <Link to="/tours-in-nepal">
            <button
              className={`nav-btn ${
                location.pathname === "/tours-in-nepal" ? "active" : ""
              }`}
            >
              Nepal Marathon
            </button>
          </Link>
        </li>

        <li onClick={() => setSideNavHidden(false)}>
          <Link to="/lama-land-homestay">
            <button
              className={`nav-btn ${
                location.pathname === "/lama-land-homestay" ? "active" : ""
              }`}
            >
              Lama Land Homestay
            </button>
          </Link>
        </li>

        <li className="drop-menu">
          <button className="nav-btn">
            About <i className="fas fa-angle-down"></i>
          </button>

          <div className="drop-down-area">
            <ul className="drop-down">
              <li onClick={() => setSideNavHidden(false)}>
                <Link to="/meet-the-team">
                  <button
                    className={`${
                      location.pathname === "/meet-the-team" ? "active" : ""
                    }`}
                  >
                    Meet The Team
                  </button>
                </Link>
              </li>

              <li onClick={() => setSideNavHidden(false)}>
                <Link to="/reasons-to-choose-us">
                  <button
                    className={`${
                      location.pathname === "/reasons-to-choose-us"
                        ? "active"
                        : ""
                    }`}
                  >
                    Reasons To Choose Us
                  </button>
                </Link>
              </li>

              <li onClick={() => setSideNavHidden(false)}>
                <Link to="/flexibility-promise">
                  <button
                    className={`${
                      location.pathname === "/flexibility-promise"
                        ? "active"
                        : ""
                    }`}
                  >
                    Flexibility Promise
                  </button>
                </Link>
              </li>

              <li onClick={() => setSideNavHidden(false)}>
                <Link to="/awesomeness-guarantee">
                  <button
                    className={`${
                      location.pathname === "/awesomeness-guarantee"
                        ? "active"
                        : ""
                    }`}
                  >
                    Awesomeness Guarantee
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li onClick={() => setSideNavHidden(false)}>
          <button
            onClick={() => setContactPopup(!contactPopup)}
            className={`nav-btn`}
          >
            Contact Us
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideNavComponent;

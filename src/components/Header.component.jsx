import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import Logo from "../assets/images/SACRED HIMALAYA LOGOA-03.svg";
import telephoneImage from "../assets/images/telephone.png";
import TrustpilotWidgetComponent from "./TrustpilotWidget.component";

const HeaderComponent = () => {
  const {
    categoriesDatas,
    setSideNavHidden,
    sideNavHidden,
    contactPopup,
    setContactPopup,
    contactDatas,
  } = useContext(AllDataContext);
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedCatId, setSelectedCatId] = useState(null);
  const [destinationsSelected, setDestinationsSelected] = useState(false);

  useEffect(() => {
    setSelectedCat(categoriesDatas && categoriesDatas[0].trips);
    setSelectedCatId(categoriesDatas && categoriesDatas[0].id);
  }, [categoriesDatas]);

  const location = useLocation();

  useEffect(() => {
    setDestinationsSelected(false);
  }, [location]);

  return (
    <React.Fragment>
      <header>
        <div className="wrapper">
          <div className="header-top">
            <Link to="/">
              <div className="logo">
                <img
                  src={contactDatas && contactDatas.branding.logo}
                  alt="logo"
                />
              </div>
            </Link>

            <div className="header-other">
              <div className="phoneNumber">
                <a
                  href={`tel:${contactDatas && contactDatas.branding.phone}`}
                  className={`nav-btn`}
                >
                  <div className="icon">
                    <img src={telephoneImage} alt="" />
                  </div>
                  {contactDatas && contactDatas.branding.phone}
                </a>
                <p>Direct Call or WhatsApp 24/7</p>
              </div>

              <div
                className={`side-nav-btn ${sideNavHidden ? "active" : ""}`}
                onClick={() => setSideNavHidden(!sideNavHidden)}
              >
                <div className="das"></div>
              </div>
            </div>
          </div>

          <div className="inner">
            <ul className="nav-links">
              {/* <li className="drop-menu">
                <button
                  className={`nav-btn ${
                    location.pathname === "/trekking-in-nepal" ? "active" : ""
                  }`}
                >
                  Trekking <i className="fas fa-angle-down"></i>
                </button>

                <ul className="drop-down">
                  <li>
                    <Link to="/destination-details/nepal">
                      <button
                        className={`${
                          location.pathname === "/destination-details/nepal"
                            ? "active"
                            : ""
                        }`}
                      >
                        Nepal
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/destination-details/bhutan">
                      <button
                        className={`${
                          location.pathname === "/destination-details/bhutan"
                            ? "active"
                            : ""
                        }`}
                      >
                        Bhutan
                      </button>
                    </Link>
                  </li>

                  <li>
                    <Link to="/destination-details/tibet">
                      <button
                        className={`${
                          location.pathname === "/destination-details/tibet"
                            ? "active"
                            : ""
                        }`}
                      >
                        Tibet
                      </button>
                    </Link>
                  </li>
                </ul>
              </li> */}

              <li>
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

              <li>
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

              <li>
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

              <li>
                <Link to="http://www.nepalmarathons.com/" target="blank">
                  <button
                    className={`nav-btn ${
                      location.pathname === "/tours-in-nepal" ? "active" : ""
                    }`}
                  >
                    Nepal Marathon
                  </button>
                </Link>
              </li>

              <li>
                <Link to="/lama-land-homestay">
                  <button
                    className={`nav-btn ${
                      location.pathname === "/lama-land-homestay"
                        ? "active"
                        : ""
                    }`}
                  >
                    Lama Land Homestay
                  </button>
                </Link>
              </li>

              {/*  <li>
                <button
                  className="nav-btn"
                  onClick={() => setDestinationsSelected(!destinationsSelected)}
                >
                  Destination <i className="fas fa-angle-down"></i>
                </button>
              </li> */}

              <li className="drop-menu">
                <button className="nav-btn">
                  About <i className="fas fa-angle-down"></i>
                </button>

                <ul className="drop-down">
                  <li>
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

                  <li>
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

                  <li>
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

                  <li>
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
              </li>

              <li>
                <button
                  onClick={() => setContactPopup(!contactPopup)}
                  className={`nav-btn`}
                >
                  Contact Us
                </button>
              </li>

              {/* <li className="loginMember">
              <a href="#">
                <button
                  onClick={() => setContactPopup(!contactPopup)}
                  className={`nav-btn`}
                >
                  Members <br /> Login
                </button>
              </a>
            </li> */}
            </ul>
          </div>
        </div>
      </header>

      <div className={`big-drop-down ${destinationsSelected ? "active" : ""}`}>
        <div className="link-cagtegory">
          <ul>
            {categoriesDatas &&
              categoriesDatas.map((data, idx) => (
                <li
                  className={`${data.id === selectedCatId ? "active" : ""}`}
                  style={{
                    backgroundImage: `url(${data.image.original_image})`,
                  }}
                  key={idx}
                  onClick={() => {
                    setSelectedCat(data.trips);
                    setSelectedCatId(data.id);
                  }}
                >
                  <span>{data.category_name}</span>
                </li>
              ))}
          </ul>
        </div>

        <div className="link-details">
          <div className="link-title">
            <h4>Package</h4>
            <button>
              <Link to="/packages">View All</Link>
            </button>
          </div>

          <ul>
            {selectedCat &&
              selectedCat
                .filter((data, idx) => idx < 15)
                .map((data, idx) => (
                  <li key={idx}>
                    <Link to={`/package-details/${data.id}`}>{data.title}</Link>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderComponent;

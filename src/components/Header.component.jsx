import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import Logo from "../assets/images/logo-sh.png";

const HeaderComponent = () => {
  const { categoriesDatas, setSideNavHidden, sideNavHidden } =
    useContext(AllDataContext);
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
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/">
                <button
                  className={`nav-btn ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                >
                  Home
                </button>
              </Link>
            </li>

            <li>
              <button
                className="nav-btn"
                onClick={() => setDestinationsSelected(!destinationsSelected)}
              >
                Destinations <i className="fas fa-angle-down"></i>
              </button>
            </li>

            <li>
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

            <li>
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

            <li>
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

          <div
            className={`side-nav-btn ${sideNavHidden ? "active" : ""}`}
            onClick={() => setSideNavHidden(!sideNavHidden)}
          >
            <div className="das"></div>
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
                    <Link to={`/details/${data.id}`}>{data.title}</Link>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderComponent;

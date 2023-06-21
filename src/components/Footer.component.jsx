/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import footerImage from "../assets/images/footerbg.jpg";
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import Logo from "../assets/images/logo-sh.png";

const FooterComponent = ({ contactPopup, setContactPopup }) => {
  const { categoriesDatas, setSelectedCate, contactDatas, aboutDetails } =
    useContext(AllDataContext);

  const navigate = useNavigate();

  return (
    <footer style={{ backgroundImage: `url(${footerImage})` }}>
      <div className="wrapper">
        <div className="footer-list">
          <div className="item">
            <div className="logo">
              <img src={Logo} alt="logo" />
            </div>

            <p
              className="desc"
              dangerouslySetInnerHTML={{
                __html: aboutDetails && aboutDetails[0].description,
              }}
            />
          </div>

          <div className="item">
            <div className="f-title">Useful Links</div>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/packages">Adventures</Link>
              </li>
              <li>
                <Link to="/Knowledge">Blog</Link>
              </li>
              <li onClick={() => setContactPopup(!contactPopup)}>Contact</li>
            </ul>
          </div>

          <div className="item">
            <div className="f-title">Packages</div>

            <ul>
              {categoriesDatas &&
                categoriesDatas.map((data, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setSelectedCate(data.id);
                      navigate("/search", {
                        state: {
                          searchedData: data.trips,
                        },
                      });
                    }}
                  >
                    {data.category_name}
                  </li>
                ))}
            </ul>
          </div>

          <div className="item">
            <div className="f-title">Support Links</div>

            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                {contactDatas && contactDatas.branding.address}
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                {contactDatas && contactDatas.branding.phone}
              </li>
              <li>
                <i className="fas fa-phone"></i>
                {contactDatas && contactDatas.branding.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <span>© Copyright 2022 Company </span>

          <div className="icons">
            <div className="icon">
              <a href="">
                <i className="fab fa-instagram"></i>
              </a>
            </div>

            <div className="icon">
              <a href="">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

            <div className="icon">
              <a href="">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>

            <div className="icon">
              <a href="">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

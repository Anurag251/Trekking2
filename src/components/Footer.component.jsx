/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import footerImage from "../assets/images/footerbg.jpg";
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import Logo from "../assets/images/SACRED HIMALAYA LOGOA-03.svg";
import HtmlToParagraphs from "./HtmlToParagraphs.component";

const FooterComponent = () => {
  const {
    categoriesDatas,
    setSelectedCate,
    contactDatas,
    aboutDetails,
    contactPopup,
    setContactPopup,
    socialMedia,
  } = useContext(AllDataContext);

  const navigate = useNavigate();

  return (
    <footer>
      <div className="wrapper">
        <div className="footer-list">
          <div className="item">
            <div className="logo">
              <img
                src={contactDatas && contactDatas.branding.logo}
                alt="logo"
              />
            </div>

            <HtmlToParagraphs
              data={
                aboutDetails !== ""
                  ? aboutDetails !== null && aboutDetails !== undefined
                    ? aboutDetails[0]?.description
                    : "No Descriptions"
                  : ""
              }
              length={200}
            />
          </div>

          <div className="item">
            <div className="f-title">Useful Links</div>

            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/destinations">About</Link>
              </li>
              <li>
                <Link to="/destination-details/nepal">Adventures</Link>
              </li>
              <li>
                <Link to="/blogging">Blog</Link>
              </li>
              <li onClick={() => setContactPopup(!contactPopup)}>Contact</li>
            </ul>
          </div>

          <div className="item">
            <div className="f-title">Packages</div>

            <ul className="cate-list">
              {categoriesDatas &&
                categoriesDatas.map((data, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      setSelectedCate(data.id);
                      navigate("/search-page", {
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
                <i className="fas fa-phone"></i>

                <a href={`tel:${contactDatas && contactDatas.branding.phone}`}>
                  {contactDatas && contactDatas.branding.phone}
                </a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <a
                  href={`mailto:${contactDatas && contactDatas.branding.email}`}
                >
                  {contactDatas && contactDatas.branding.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          <span>© Copyright 2022 Company </span>

          <div className="icons">
            {socialMedia?.map((data, idx) => (
              <div className="icon" key={idx}>
                <a href={data?.url}>
                  <i className={`fab ${data?.icon.split(" ")[1]}`}></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;

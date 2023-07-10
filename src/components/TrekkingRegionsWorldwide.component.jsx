import { Link } from "react-router-dom";
import nepalImage from "../assets/images/nepal.webp";
import bhutanImage from "../assets/images/bhutan.jpeg";
import tibetImage from "../assets/images/tibet.jpeg";

const TrekkingRegionsWorldwideComponent = () => {
  return (
    <div className="TrekkingRegionsWorldwide">
      <section>
        <div className="wrapper">
          <div className="title-part">
            <h5>CHECK OUT</h5>

            <div className="name">our trekking Regions Worldwide</div>
          </div>

          <div className="list">
            <Link to="/destination-details/nepal">
              <div className="item">
                <div className="image-area">
                  <img src={nepalImage} alt="" />
                </div>

                <div className="name">Nepal</div>
              </div>
            </Link>

            <Link to="/destination-details/bhutan">
              <div className="item">
                <div className="image-area">
                  <img src={bhutanImage} alt="" />
                </div>

                <div className="name">Bhutan</div>
              </div>
            </Link>

            <Link to="/destination-details/tibet">
              <div className="item">
                <div className="image-area">
                  <img src={tibetImage} alt="" />
                </div>

                <div className="name">Tibet</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrekkingRegionsWorldwideComponent;

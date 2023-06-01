import packageImage2 from "../assets/images/blog3.png";
import packageImage3 from "../assets/images/card1.jpg";
import packageImage4 from "../assets/images/card8.jpg";
import packageImage5 from "../assets/images/card7.jpg";
import packageImage6 from "../assets/images/card6.jpg";
import CardComponent from "./Card.component";

const PackageComponent = () => {
  return (
    <section className="sec-bg">
      <div className="wrapper">
        <div className="special-package">
          <div className="title">TOP EVERTREK AdVentuRes</div>

          <div className="list">
            <CardComponent />

            <div className="item">
              <div className="image-sec">
                <img src={packageImage2} alt="" />
              </div>

              <div className="text-sec">
                <div className="days">14 Days</div>

                <a href="#">
                  <div className="name">
                    Nar Phu, Thorung La, Tilich & Khopra Trek
                  </div>
                </a>

                <div className="price">
                  <span>From</span>
                  <h4>
                    $3320 <span>/ person</span>
                  </h4>
                </div>

                <p>
                  Nar Phu, Thorung La, Tilich & Khopra Trek Phu Gaon I’m
                  trekking in the Nar-Phu Valley, a remote and sparsely visited
                  region near the Tibetan[...]
                </p>

                <a href="product-details-page.html">
                  <button>Details</button>
                </a>
              </div>
            </div>

            <div className="item">
              <div className="image-sec">
                <img src={packageImage3} alt="" />
              </div>

              <div className="text-sec">
                <div className="days">14 Days</div>

                <a href="#">
                  <div className="name">
                    Nar Phu, Thorung La, Tilich & Khopra Trek
                  </div>
                </a>

                <div className="price">
                  <span>From</span>
                  <h4>
                    $3320 <span>/ person</span>
                  </h4>
                </div>

                <p>
                  Nar Phu, Thorung La, Tilich & Khopra Trek Phu Gaon I’m
                  trekking in the Nar-Phu Valley, a remote and sparsely visited
                  region near the Tibetan[...]
                </p>

                <a href="product-details-page.html">
                  <button>Details</button>
                </a>
              </div>
            </div>

            <div className="item">
              <div className="image-sec">
                <img src={packageImage4} alt="" />
              </div>

              <div className="text-sec">
                <div className="days">14 Days</div>

                <a href="#">
                  <div className="name">
                    Nar Phu, Thorung La, Tilich & Khopra Trek
                  </div>
                </a>

                <div className="price">
                  <span>From</span>
                  <h4>
                    $3320 <span>/ person</span>
                  </h4>
                </div>

                <p>
                  Nar Phu, Thorung La, Tilich & Khopra Trek Phu Gaon I’m
                  trekking in the Nar-Phu Valley, a remote and sparsely visited
                  region near the Tibetan[...]
                </p>

                <a href="product-details-page.html">
                  <button>Details</button>
                </a>
              </div>
            </div>

            <div className="item">
              <div className="image-sec">
                <img src={packageImage5} alt="" />
              </div>

              <div className="text-sec">
                <div className="days">14 Days</div>

                <a href="#">
                  <div className="name">
                    Nar Phu, Thorung La, Tilich & Khopra Trek
                  </div>
                </a>

                <div className="price">
                  <span>From</span>
                  <h4>
                    $3320 <span>/ person</span>
                  </h4>
                </div>

                <p>
                  Nar Phu, Thorung La, Tilich & Khopra Trek Phu Gaon I’m
                  trekking in the Nar-Phu Valley, a remote and sparsely visited
                  region near the Tibetan[...]
                </p>

                <a href="product-details-page.html">
                  <button>Details</button>
                </a>
              </div>
            </div>

            <div className="item">
              <div className="image-sec">
                <img src={packageImage6} alt="" />
              </div>

              <div className="text-sec">
                <div className="days">14 Days</div>

                <a href="#">
                  <div className="name">
                    Nar Phu, Thorung La, Tilich & Khopra Trek
                  </div>
                </a>

                <div className="price">
                  <span>From</span>
                  <h4>
                    $3320 <span>/ person</span>
                  </h4>
                </div>

                <p>
                  Nar Phu, Thorung La, Tilich & Khopra Trek Phu Gaon I’m
                  trekking in the Nar-Phu Valley, a remote and sparsely visited
                  region near the Tibetan[...]
                </p>

                <a href="product-details-page.html">
                  <button>Details</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageComponent;


import packageImage1 from "../assets/images/blog1.png";

const CardComponent = () => {
  return (
    <div className="item">
      <div className="image-sec">
        <img src={packageImage1} alt="" />
      </div>

      <div className="text-sec">
        <div className="days">14 Days</div>

        <a href="#">
          <div className="name">Nar Phu, Thorung La, Tilich & Khopra Trek</div>
        </a>

        <div className="price">
          <span>From</span>
          <h4>
            $3320 <span>/ person</span>
          </h4>
        </div>

        <p>
          Nar Phu, Thorung La, Tilich & Khopra Trek Phu Gaon I’m trekking in the
          Nar-Phu Valley, a remote and sparsely visited region near the
          Tibetan[...]
        </p>

        <a href="product-details-page.html">
          <button>Details</button>
        </a>
      </div>
    </div>
  );
};

export default CardComponent;

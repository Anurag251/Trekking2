import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

import bannerImage1 from "../assets/images/banner-2.jpg";
import bannerImage2 from "../assets/images/banner-3.jpg";

const BannerComponent = () => {
  return (
    <div className="banner">
      <div className="wrapper search-section">
        <div className="content-area">
          <h2>Where Next?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla cum
            ratione inventore quisquam amet autem est itaque atque.
            Reprehenderit dolore ad molestias eligendi porro. Architecto aperiam
            veniam cupiditate temporibus incidunt.
          </p>
        </div>

        <div className="form-area">
          <h2>Find Your Trek</h2>

          <form action="">
            <div className="input-section">
              <div className="check-in-out-date">
                <select name="" id="">
                  <option value="">Any Location</option>
                  <option value="">Nepal</option>
                  <option value="">China</option>
                  <option value="">India</option>
                  <option value="">UK</option>
                  <option value="">USA</option>
                </select>
              </div>

              <div className="check-in-out-date">
                <select name="" id="">
                  <option value="">1-7 Days</option>
                  <option value="">7-10 Days</option>
                  <option value="">10-20 Days</option>
                  <option value="">20-50 Days</option>
                  <option value="">50-100 Days</option>
                  <option value="">100-1000 Days</option>
                </select>
              </div>

              <div className="check-in-out-date">
                <input type="date" name="" id="" />
              </div>

              <button>Search</button>
            </div>
          </form>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        speed={1000}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="item"
            style={{ backgroundImage: `url(${bannerImage1})` }}
          ></div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="item"
            style={{ backgroundImage: `url(${bannerImage2})` }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerComponent;

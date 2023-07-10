import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";

const AboutPageGalleryComponent = () => {
  return (
    <div className="AboutPageGallery">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        speed={1000}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://i.assetzen.net/i/polEmIQ8Nban/w:1000/h:600/q:100.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.assetzen.net/i/bMMzZD8ODNHy/w:1000/h:500/q:100.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.assetzen.net/i/6kkjO74oudys/w:1000/h:500/q:100.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.assetzen.net/i/IyEercgVkLKL/w:1000/h:600/q:100.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.assetzen.net/i/qebCBtB38a3A/w:1000/h:500/q:100.webp"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            src="https://i.assetzen.net/i/3c2uN8O65PKP/w:1000/h:500/q:100.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutPageGalleryComponent;

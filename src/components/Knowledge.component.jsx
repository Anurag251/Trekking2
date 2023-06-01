import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

import image1 from "../assets/images/banner3.jpeg";
import image2 from "../assets/images/banner2.jpeg";
import image3 from "../assets/images/banner.jpg";
import image4 from "../assets/images/card5.png";
import image5 from "../assets/images/banner3.jpeg";
import image6 from "../assets/images/about-img2.jpg";

const KnowledgeComponent = () => {
  return (
    <section>
      <div className="knowledge">
        <div className="title">Mountain OF Knowledge</div>

        <Swiper
          slidesPerView={4}
          speed={1000}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="item" style={{ backgroundImage: `url(${image1})` }}>
              <div className="details">
                <h2>Podcast</h2>
                <p>
                  Listen to our latest ramblings on the monthly podcast
                  episodes!
                </p>

                <button>Explore</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item" style={{ backgroundImage: `url(${image2})` }}>
              <div className="details">
                <h2>Knowledge Centre</h2>
                <p>
                  All of your questions and concerns answered in plain, no
                  nonsense english.
                </p>

                <button>Explore</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item" style={{ backgroundImage: `url(${image3})` }}>
              <div className="details">
                <h2>Blog</h2>
                <p>
                  Read our latest blog articles, straight from experts of the
                  mountains!
                </p>

                <button>Explore</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item" style={{ backgroundImage: `url(${image4})` }}>
              <div className="details">
                <h2>Mount Everest</h2>
                <p>Your best Adventure Deals with nature</p>

                <button>Explore</button>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="item" style={{ backgroundImage: `url(${image5})` }}>
              <div className="details">
                <h2>Hotel Jalmahal</h2>
                <p>Your best Adventure Deals with nature</p>

                <button>Explore</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default KnowledgeComponent;

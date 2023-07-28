import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { EffectFade, Autoplay } from "swiper";
import { AllDataContext } from "../context/AllData.context";

const AboutSacredComponent = () => {
  const { aboutDetails, galleryDatas } = useContext(AllDataContext);

  return (
    <div className="AboutSacred">
      <section className="bg-color">
        <div className="wrapper">
          <div className="title">
            Nepal, Tibet and Bhutan is on of the world's premier destinations
            for first-time and experienced trekkers
          </div>
          <div className="item">
            <div className="content">
              <p
                className="desc"
                dangerouslySetInnerHTML={{
                  __html:
                    aboutDetails !== null
                      ? aboutDetails[1]?.description.length > 800
                        ? `${aboutDetails[1]?.description.slice(0, 800)}...`
                        : aboutDetails[1]?.description
                      : "",
                }}
              />

              <div className="button-group">
                <Link to="/reasons-to-choose-us">
                  <button>Why Choose Sacred?</button>
                </Link>

                <Link to="/destinations">
                  <button>View Destinations</button>
                </Link>
              </div>
            </div>

            <Swiper
              slidesPerView={1}
              centeredSlides={true}
              effect={"fade"}
              loop={true}
              speed={1000}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, EffectFade]}
              className="mySwiper"
            >
              {galleryDatas?.map((data, idx) => (
                <SwiperSlide key={idx}>
                  <div className="image-area">
                    <img src={data?.original_image} alt={data?.title} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSacredComponent;

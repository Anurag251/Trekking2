import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

import { useContext, useEffect, useRef } from "react";
import { AllDataContext } from "../context/AllData.context";
import TrustpilotWidgetComponent from "./TrustpilotWidget.component";
import { Link } from "react-router-dom";

import trustPilotImage from "../assets/images/trust-pilot.png";

const TestinomialComponent = () => {
  const { reviewDatas } = useContext(AllDataContext);

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      swiper.el.addEventListener("mouseenter", () => {
        try {
          swiper.autoplay.stop();
        } catch (err) {
          //(err);
        }
      });

      swiper.el.addEventListener("mouseleave", () => {
        try {
          swiper.autoplay.start();
        } catch (err) {
          //(err);
        }
      });
    }
  }, [reviewDatas]);

  return (
    <section>
      <div className="wrapper">
        <div className="title">
          Below you will find a selection of comments made by those who have had
          the pleasure of Sacred Himalaya's services over the years -
        </div>

        <div className="testinomial">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            speed={1000}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {reviewDatas &&
              reviewDatas.map((data, idx) => (
                <SwiperSlide key={idx}>
                  <div className="item">
                    <div className="text-sec">
                      <p
                        className="desc"
                        dangerouslySetInnerHTML={{
                          __html: data && data.description,
                        }}
                      />

                      <div className="name">{data.name}</div>
                      <div className="post">{data.title}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>

          <Link
            to="https://www.trustpilot.com/review/sacredhimalaya.com"
            target="blank"
          >
            <div className="trust-pilot-sec">
              <h3>We're Excellent Rated on</h3>
              <img src={trustPilotImage} alt="Trustpilot" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TestinomialComponent;

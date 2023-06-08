import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

import image1 from "../assets/images/banner3.jpeg";
import image2 from "../assets/images/banner2.jpeg";
import image3 from "../assets/images/banner.jpg";
import image4 from "../assets/images/card5.png";
import image5 from "../assets/images/banner3.jpeg";
import image6 from "../assets/images/about-img2.jpg";

const KnowledgeComponent = () => {
  const { categoriesDatas } = useContext(AllDataContext);
  console.log(categoriesDatas);

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
          {categoriesDatas &&
            categoriesDatas.map((data, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="item"
                  style={{
                    backgroundImage: `url(${data.image.original_image})`,
                  }}
                >
                  <div className="details">
                    <h2>{data.category_name}</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data && data.content,
                      }}
                    />

                    <button>Explore</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default KnowledgeComponent;

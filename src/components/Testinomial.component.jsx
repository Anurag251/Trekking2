import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

import image1 from "../assets/images/banner3.jpeg";
import image2 from "../assets/images/banner2.jpeg";
import image3 from "../assets/images/banner.jpg";
import image4 from "../assets/images/card5.png";
import image5 from "../assets/images/banner3.jpeg";

const TestinomialComponent = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="testinomial">
          <div className="title">Testinomial</div>

          <Swiper
            slidesPerView={1}
            speed={1000}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="item">
                <div className="image-sec">
                  <img src={image1} alt="user-image" />
                </div>

                <div className="text-sec">
                  <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia ab obcaecati, saepe ducimus accusamus quasi, ad
                    suscipit, fugit delectus recusandae molestiae nesciunt
                    labore ea laboriosam eos veniam dolorum inventore totam!
                  </div>

                  <div className="name">Naruto</div>
                  <div className="post">CEO</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <div className="image-sec">
                  <img src={image2} alt="user-image" />
                </div>

                <div className="text-sec">
                  <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia ab obcaecati, saepe ducimus accusamus quasi, ad
                    suscipit, fugit delectus recusandae molestiae nesciunt
                    labore ea laboriosam eos veniam dolorum inventore totam!
                  </div>

                  <div className="name">Naruto</div>
                  <div className="post">CEO</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <div className="image-sec">
                  <img src={image3} alt="user-image" />
                </div>

                <div className="text-sec">
                  <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia ab obcaecati, saepe ducimus accusamus quasi, ad
                    suscipit, fugit delectus recusandae molestiae nesciunt
                    labore ea laboriosam eos veniam dolorum inventore totam!
                  </div>

                  <div className="name">Naruto</div>
                  <div className="post">CEO</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <div className="image-sec">
                  <img src={image4} alt="user-image" />
                </div>

                <div className="text-sec">
                  <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia ab obcaecati, saepe ducimus accusamus quasi, ad
                    suscipit, fugit delectus recusandae molestiae nesciunt
                    labore ea laboriosam eos veniam dolorum inventore totam!
                  </div>

                  <div className="name">Naruto</div>
                  <div className="post">CEO</div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <div className="image-sec">
                  <img src={image5} alt="user-image" />
                </div>

                <div className="text-sec">
                  <div className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia ab obcaecati, saepe ducimus accusamus quasi, ad
                    suscipit, fugit delectus recusandae molestiae nesciunt
                    labore ea laboriosam eos veniam dolorum inventore totam!
                  </div>

                  <div className="name">Naruto</div>
                  <div className="post">CEO</div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestinomialComponent;

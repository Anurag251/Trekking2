import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

import image1 from "../assets/images/banner3.jpeg";
import image2 from "../assets/images/banner2.jpeg";
import image3 from "../assets/images/banner.jpg";
import image4 from "../assets/images/card5.png";
import image5 from "../assets/images/banner3.jpeg";

export const PackageDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [itinerarytoggle, setItineraryToggle] = useState("");
  const [FAQstoggle, setFAQsToggle] = useState("");
  const [toggle, setToggle] = useState("OVERVIEW");

  const scrollPosition = () => {
    window.scroll(0, 910);
  };

  return (
    <section className="other-page">
      <div className="wrapper">
        <div className="package-details">
          <div className="package-title">Annapurna Base Camp Trek</div>

          <div className="package-details-image">
            <div className="images-sec">
              <div className="image-preview">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <div className="clickToView">
                      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clickToView">
                      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clickToView">
                      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clickToView">
                      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clickToView">
                      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clickToView">
                      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clickToView">
                      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clickToView">
                      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clickToView">
                      <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="clickToView">
                      <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="image-btns">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={1}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 10,
                    },
                  }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="item">
                      <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="item">
                      <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>

          <div className="package-main-info">
            <ul>
              <li>
                <i className="fas fa-sun"></i> MODERATE
              </li>
              <li>
                <i className="fas fa-mountain"></i> 4000 - 6000M
              </li>
              <li>
                <i className="fas fa-calendar"></i> 15 DAYS
              </li>
              <li>
                <i className="fas fa-tag"></i> £2,145PP
              </li>
            </ul>
          </div>

          <div className="packages-details-area">
            <div className="packages-details">
              <ul className="navigate-btn">
                <li
                  className={`${toggle === "OVERVIEW" ? "active" : ""}`}
                  onClick={() => {
                    scrollPosition();
                    setToggle("OVERVIEW");
                  }}
                >
                  TRIP OVERVIEW
                </li>
                <li
                  className={`${toggle === "ITINERARY" ? "active" : ""}`}
                  onClick={() => {
                    scrollPosition();
                    setToggle("ITINERARY");
                  }}
                >
                  ITINERARY
                </li>
                <li
                  className={`${toggle === "DATES" ? "active" : ""}`}
                  onClick={() => {
                    scrollPosition();
                    setToggle("DATES");
                  }}
                >
                  DATES & PRICES
                </li>
                <li
                  className={`${toggle === "FAQs" ? "active" : ""}`}
                  onClick={() => {
                    scrollPosition();
                    setToggle("FAQs");
                  }}
                >
                  FAQs
                </li>
              </ul>

              <div className={`list ${toggle === "OVERVIEW" ? "active" : ""}`}>
                <div className="item">
                  <h4 className="item-name">Overview</h4>

                  <p className="desc">
                    Venture out on a timeless journey through the Kingdom of Lo,
                    an off-the-beaten-path region that was a hidden Tibetan
                    Buddhist enclave forbidden to foreigners until recently.
                    From the trail, expect sights like sculpted canyons, deep
                    gorges, ancient fortresses, and mysterious cave hermitages.
                    You'll also see the Tibetan Buddhist gompas and soaring snow
                    peaks that characterize this region.{" "}
                  </p>
                </div>

                <div className="item">
                  <h4 className="item-name">Highlight</h4>

                  <ul>
                    <li>
                      <strong>Kathmandu</strong>:- Explore the riverside Temple
                      of Pashupatinath, Narayanthan, Bodnath Stupa,
                      Swayambhunath, the medieval city of Bhaktapur & Patan, a
                      UNESCO World Heritage Site.
                    </li>
                    <li>
                      <strong>Pokhara</strong>:- Peace Pagoda for views across
                      Phewa Lake and draw magnificent Himalayan views of the
                      Annapurna Range.
                    </li>
                    <li>
                      <strong>Unbelievable</strong>:- Mountains views of the
                      Dhaulagiri & Annapurna Himalayan range while flying from
                      Kathmandu-PokharaJomsom-Pokhara- Kathmandu.
                    </li>
                    <li>
                      <strong>Explore</strong>:-Ancient Monasteries, caves and
                      Buddhist shrines City of walled breathtaking views of
                      Lower & Mustang landscapes, Tibetan Culture, and Chorten
                      with Mountain.
                    </li>
                    <li>
                      <strong>Varieties of ethnic groups</strong>:- Gurung,
                      Magar, Thakali, Lo and Bhotias, High Buddhist cultural
                      experience. The maximum altitude of the upper Mustang trek
                      is 3810 m, which is not higher than Everest and Annapurna
                      trekking.
                    </li>
                    <li>
                      <strong>
                        The upper Mustang area is known as the desert part of
                        Nepal
                      </strong>
                      :- however spring (March June) and autumn (Sept-November)
                      is the best season for Upper Mustang trekking Nepal.
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`list ${toggle === "ITINERARY" ? "active" : ""}`}>
                <div className={`item active`}>
                  <div className="inner-content">
                    <ul className="faq">
                      <li
                        className={`${
                          itinerarytoggle === "itineraryToggle2" ? "active" : ""
                        }`}
                      >
                        <div
                          className="title"
                          onClick={() => setItineraryToggle("itineraryToggle2")}
                        >
                          <span>
                            Day 2: Full day Guided Sightseeing tour in
                            Kathmandu-A UNESCO World Heritage Site. Day 2: Full
                            day Guided Sightseeing tour in Kathmandu-A UNESCO
                            World Heritage Site.
                          </span>
                          <i className="fas fa-angle-down"></i>
                        </div>

                        <p className="desc">
                          Today, upon arrival from your respective countries,
                          our representative will transfer you to the hotel from
                          the airport. The rest of the day will be spent in the
                          hotel itself. You can either relish the unique and
                          delicious Nepali cuisine that Nepal is famous for or
                          decide to stroll around the streets of your hotel.
                          Breathe in the ambience of Kathmandu as much as you
                          can. There will also be a full trek briefing on this
                          evening.
                          <br />
                          <br />
                          Overnight at Hotel in Kathmandu.
                          <br /> Meals not included.
                        </p>
                      </li>

                      <li
                        className={`${
                          itinerarytoggle === "itineraryToggle3" ? "active" : ""
                        }`}
                      >
                        <div
                          className="title"
                          onClick={() => setItineraryToggle("itineraryToggle3")}
                        >
                          <span>
                            Day 1: Arrival Kathmandu [1350 m/ 4428 ft], transfer
                            to Hotel
                          </span>
                          <i className="fas fa-angle-down"></i>
                        </div>

                        <p className="desc">
                          Today, upon arrival from your respective countries,
                          our representative will transfer you to the hotel from
                          the airport. The rest of the day will be spent in the
                          hotel itself. You can either relish the unique and
                          delicious Nepali cuisine that Nepal is famous for or
                          decide to stroll around the streets of your hotel.
                          Breathe in the ambience of Kathmandu as much as you
                          can. There will also be a full trek briefing on this
                          evening.
                          <br />
                          <br />
                          Overnight at Hotel in Kathmandu.
                          <br /> Meals not included.
                        </p>
                      </li>

                      <li
                        className={`${
                          itinerarytoggle === "itineraryToggle4" ? "active" : ""
                        }`}
                      >
                        <div
                          className="title"
                          onClick={() => setItineraryToggle("itineraryToggle4")}
                        >
                          <span>
                            Day 1: Arrival Kathmandu [1350 m/ 4428 ft], transfer
                            to Hotel
                          </span>
                          <i className="fas fa-angle-down"></i>
                        </div>

                        <p className="desc">
                          Today, upon arrival from your respective countries,
                          our representative will transfer you to the hotel from
                          the airport. The rest of the day will be spent in the
                          hotel itself. You can either relish the unique and
                          delicious Nepali cuisine that Nepal is famous for or
                          decide to stroll around the streets of your hotel.
                          Breathe in the ambience of Kathmandu as much as you
                          can. There will also be a full trek briefing on this
                          evening.
                          <br />
                          <br />
                          Overnight at Hotel in Kathmandu.
                          <br /> Meals not included.
                        </p>
                      </li>

                      <li
                        className={`${
                          itinerarytoggle === "itineraryToggle5" ? "active" : ""
                        }`}
                      >
                        <div
                          className="title"
                          onClick={() => setItineraryToggle("itineraryToggle5")}
                        >
                          <span>
                            Day 1: Arrival Kathmandu [1350 m/ 4428 ft], transfer
                            to Hotel
                          </span>
                          <i className="fas fa-angle-down"></i>
                        </div>

                        <p className="desc">
                          Today, upon arrival from your respective countries,
                          our representative will transfer you to the hotel from
                          the airport. The rest of the day will be spent in the
                          hotel itself. You can either relish the unique and
                          delicious Nepali cuisine that Nepal is famous for or
                          decide to stroll around the streets of your hotel.
                          Breathe in the ambience of Kathmandu as much as you
                          can. There will also be a full trek briefing on this
                          evening.
                          <br />
                          <br />
                          Overnight at Hotel in Kathmandu.
                          <br /> Meals not included.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`list ${toggle === "FAQs" ? "active" : ""}`}>
                <div className={`item active`}>
                  <div className="inner-content">
                    <ul className="faq">
                      <li
                        className={`${
                          FAQstoggle === "FAQstoggle2" ? "active" : ""
                        }`}
                      >
                        <div
                          className="title"
                          onClick={() => setFAQsToggle("FAQstoggle2")}
                        >
                          <span> Where is Trekking?</span>
                          <i className="fas fa-angle-down"></i>
                        </div>

                        <p className="desc">
                          Today, upon arrival from your respective countries,
                          our representative will transfer you to the hotel from
                          the airport. The rest of the day will be spent in the
                          hotel itself. You can either relish the unique and
                          delicious Nepali cuisine that Nepal is famous for or
                          decide to stroll around the streets of your hotel.
                          Breathe in the ambience of Kathmandu as much as you
                          can. There will also be a full trek briefing on this
                          evening.
                          <br />
                          <br />
                          Overnight at Hotel in Kathmandu.
                          <br /> Meals not included.
                        </p>
                      </li>

                      <li
                        className={`${
                          FAQstoggle === "FAQstoggle3" ? "active" : ""
                        }`}
                      >
                        <div
                          className="title"
                          onClick={() => setFAQsToggle("FAQstoggle3")}
                        >
                          <span>Who is Trekking?</span>
                          <i className="fas fa-angle-down"></i>
                        </div>

                        <p className="desc">
                          Today, upon arrival from your respective countries,
                          our representative will transfer you to the hotel from
                          the airport. The rest of the day will be spent in the
                          hotel itself. You can either relish the unique and
                          delicious Nepali cuisine that Nepal is famous for or
                          decide to stroll around the streets of your hotel.
                          Breathe in the ambience of Kathmandu as much as you
                          can. There will also be a full trek briefing on this
                          evening.
                          <br />
                          <br />
                          Overnight at Hotel in Kathmandu.
                          <br /> Meals not included.
                        </p>
                      </li>

                      <li
                        className={`${
                          FAQstoggle === "FAQstoggle4" ? "active" : ""
                        }`}
                      >
                        <div
                          className="title"
                          onClick={() => setFAQsToggle("FAQstoggle4")}
                        >
                          <span> Why is Trekking</span>
                          <i className="fas fa-angle-down"></i>
                        </div>

                        <p className="desc">
                          Today, upon arrival from your respective countries,
                          our representative will transfer you to the hotel from
                          the airport. The rest of the day will be spent in the
                          hotel itself. You can either relish the unique and
                          delicious Nepali cuisine that Nepal is famous for or
                          decide to stroll around the streets of your hotel.
                          Breathe in the ambience of Kathmandu as much as you
                          can. There will also be a full trek briefing on this
                          evening.
                          <br />
                          <br />
                          Overnight at Hotel in Kathmandu.
                          <br /> Meals not included.
                        </p>
                      </li>

                      <li
                        className={`${
                          FAQstoggle === "FAQstoggle5" ? "active" : ""
                        }`}
                      >
                        <div
                          className="title"
                          onClick={() => setFAQsToggle("FAQstoggle5")}
                        >
                          What is Trekking
                          <i className="fas fa-angle-down"></i>
                        </div>

                        <p className="desc">
                          Today, upon arrival from your respective countries,
                          our representative will transfer you to the hotel from
                          the airport. The rest of the day will be spent in the
                          hotel itself. You can either relish the unique and
                          delicious Nepali cuisine that Nepal is famous for or
                          decide to stroll around the streets of your hotel.
                          Breathe in the ambience of Kathmandu as much as you
                          can. There will also be a full trek briefing on this
                          evening.
                          <br />
                          <br />
                          Overnight at Hotel in Kathmandu.
                          <br /> Meals not included.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className={`list ${toggle === "DATES" ? "active" : ""}`}>
                <div className={`item active`}>
                  <div className="inner-content">
                    <ul className="faq">
                      <li
                        className={`${
                          FAQstoggle === "FAQstoggle2" ? "active" : ""
                        }`}
                      >
                        <div
                          className="title"
                          onClick={() => setFAQsToggle("FAQstoggle2")}
                        >
                          <span> Where is Trekking?</span>
                          <i className="fas fa-angle-down"></i>
                        </div>

                        <p className="desc">
                          Today, upon arrival from your respective countries,
                          our representative will transfer you to the hotel from
                          the airport. The rest of the day will be spent in the
                          hotel itself. You can either relish the unique and
                          delicious Nepali cuisine that Nepal is famous for or
                          decide to stroll around the streets of your hotel.
                          Breathe in the ambience of Kathmandu as much as you
                          can. There will also be a full trek briefing on this
                          evening.
                          <br />
                          <br />
                          Overnight at Hotel in Kathmandu.
                          <br /> Meals not included.
                        </p>
                      </li>

                      <li
                        className={`${
                          FAQstoggle === "FAQstoggle3" ? "active" : ""
                        }`}
                      >
                        <div
                          className="title"
                          onClick={() => setFAQsToggle("FAQstoggle3")}
                        >
                          <span>Who is Trekking?</span>
                          <i className="fas fa-angle-down"></i>
                        </div>

                        <p className="desc">
                          Today, upon arrival from your respective countries,
                          our representative will transfer you to the hotel from
                          the airport. The rest of the day will be spent in the
                          hotel itself. You can either relish the unique and
                          delicious Nepali cuisine that Nepal is famous for or
                          decide to stroll around the streets of your hotel.
                          Breathe in the ambience of Kathmandu as much as you
                          can. There will also be a full trek briefing on this
                          evening.
                          <br />
                          <br />
                          Overnight at Hotel in Kathmandu.
                          <br /> Meals not included.
                        </p>
                      </li>

                      <li
                        className={`${
                          FAQstoggle === "FAQstoggle4" ? "active" : ""
                        }`}
                      >
                        <div
                          className="title"
                          onClick={() => setFAQsToggle("FAQstoggle4")}
                        >
                          <span> Why is Trekking</span>
                          <i className="fas fa-angle-down"></i>
                        </div>

                        <p className="desc">
                          Today, upon arrival from your respective countries,
                          our representative will transfer you to the hotel from
                          the airport. The rest of the day will be spent in the
                          hotel itself. You can either relish the unique and
                          delicious Nepali cuisine that Nepal is famous for or
                          decide to stroll around the streets of your hotel.
                          Breathe in the ambience of Kathmandu as much as you
                          can. There will also be a full trek briefing on this
                          evening.
                          <br />
                          <br />
                          Overnight at Hotel in Kathmandu.
                          <br /> Meals not included.
                        </p>
                      </li>

                      <li
                        className={`${
                          FAQstoggle === "FAQstoggle5" ? "active" : ""
                        }`}
                      >
                        <div
                          className="title"
                          onClick={() => setFAQsToggle("FAQstoggle5")}
                        >
                          What is Trekking
                          <i className="fas fa-angle-down"></i>
                        </div>

                        <p className="desc">
                          Today, upon arrival from your respective countries,
                          our representative will transfer you to the hotel from
                          the airport. The rest of the day will be spent in the
                          hotel itself. You can either relish the unique and
                          delicious Nepali cuisine that Nepal is famous for or
                          decide to stroll around the streets of your hotel.
                          Breathe in the ambience of Kathmandu as much as you
                          can. There will also be a full trek briefing on this
                          evening.
                          <br />
                          <br />
                          Overnight at Hotel in Kathmandu.
                          <br /> Meals not included.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="package-booking-area">
              <div className="start-booking">
                <div className="title-sec">
                  <div className="form-title">Start Booking</div>

                  <div className="price">
                    <span>per night</span> $24
                  </div>
                </div>

                <div className="booking-form">
                  <form>
                    <div className="form-inputs">
                      <div className="input-group">
                        <div className="group">
                          <label htmlFor="From">From</label>
                          <input
                            type="text"
                            name="From"
                            id="From"
                            placeholder="DD / MM / YYYY"
                          />
                        </div>

                        <div className="group">
                          <label htmlFor="To">To</label>
                          <input
                            type="text"
                            name="To"
                            id="To"
                            placeholder="DD / MM / YYYY"
                          />
                        </div>
                      </div>

                      <div className="input-group">
                        <div className="group">
                          <label htmlFor="Adult">Adult</label>
                          <input
                            type="number"
                            name="Adult"
                            id="Adult"
                            value="1"
                          />
                        </div>

                        <div className="group">
                          <label htmlFor="Children">Children</label>
                          <input
                            type="number"
                            name="Children"
                            id="Children"
                            value="1"
                          />
                        </div>

                        <div className="group">
                          <label htmlFor="packages">packages</label>
                          <input
                            type="number"
                            name="packages"
                            id="packages"
                            value="1"
                          />
                        </div>
                      </div>

                      <div className="input-group">
                        <div className="group">
                          <label htmlFor="Email">Email</label>
                          <input
                            type="email"
                            name="Email"
                            id="Email"
                            placeholder="example@name.com"
                          />
                        </div>

                        <div className="group">
                          <label htmlFor="contactNumber">Contact Number</label>
                          <input
                            type="number"
                            name="contactNumber"
                            id="contactNumber"
                            placeholder="XXX XXX XXXX"
                          />
                        </div>
                      </div>

                      <div className="group">
                        <label htmlFor="Message">package Type</label>

                        <select name="" id="">
                          <option value="">Select package</option>
                          <option value="">package 1</option>
                          <option value="">package 2</option>
                          <option value="">package 3</option>
                        </select>
                      </div>
                    </div>

                    <button className="submit-btn">
                      Submit
                      <img src="./assets/icon/arrow-right-dark.svg" alt="" />
                    </button>
                  </form>
                </div>
              </div>

              <div className="best-packages">
                <div className="title-sec">Best packages</div>

                <div className="list">
                  <div className="item">
                    <div className="image">
                      <img src={image1} alt="" />
                    </div>

                    <div className="details">
                      <div className="name-sec">
                        <div className="name">
                          <a href="package-details.html">
                            <h4>Package 1</h4>
                          </a>

                          <div className="rating">
                            <div className="stars" data-value="3"></div>
                          </div>
                        </div>

                        <div className="price">
                          <span>From</span> $24
                        </div>
                      </div>

                      <a href="#">
                        <button>
                          View
                          <img
                            src="./assets/icon/arrow-right-dark.svg"
                            alt=""
                          />
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className="item">
                    <div className="image">
                      <img src={image2} alt="" />
                    </div>

                    <div className="details">
                      <div className="name-sec">
                        <div className="name">
                          <a href="package-details.html">
                            <h4>Package 2</h4>
                          </a>

                          <div className="rating">
                            <div className="stars" data-value="3"></div>
                          </div>
                        </div>

                        <div className="price">
                          <span>From</span> $24
                        </div>
                      </div>

                      <a href="#">
                        <button>
                          View
                          <img
                            src="./assets/icon/arrow-right-dark.svg"
                            alt=""
                          />
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className="item">
                    <div className="image">
                      <img src={image3} alt="" />
                    </div>

                    <div className="details">
                      <div className="name-sec">
                        <div className="name">
                          <a href="package-details.html">
                            <h4>Package 3</h4>
                          </a>

                          <div className="rating">
                            <div className="stars" data-value="3"></div>
                          </div>
                        </div>

                        <div className="price">
                          <span>From</span> $24
                        </div>
                      </div>

                      <a href="#">
                        <button>
                          View
                          <img
                            src="./assets/icon/arrow-right-dark.svg"
                            alt=""
                          />
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className="item">
                    <div className="image">
                      <img src={image4} alt="" />
                    </div>

                    <div className="details">
                      <div className="name-sec">
                        <div className="name">
                          <a href="package-details.html">
                            <h4>Package 4</h4>
                          </a>

                          <div className="rating">
                            <div className="stars" data-value="3"></div>
                          </div>
                        </div>

                        <div className="price">
                          <span>From</span> $24
                        </div>
                      </div>

                      <a href="#">
                        <button>
                          View
                          <img
                            src="./assets/icon/arrow-right-dark.svg"
                            alt=""
                          />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

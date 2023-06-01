import image1 from "../assets/images/banner3.jpeg";
import image2 from "../assets/images/banner2.jpeg";
import image3 from "../assets/images/banner.jpg";
import image4 from "../assets/images/card5.png";
import image5 from "../assets/images/banner3.jpeg";

const BlogComponent = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="news-events">
          <div className="title">Evertrekker community</div>

          <ul className="switch-btn">
            <li className="active" data-filters="data-news">
              News
            </li>
            <li data-filters="data-event">Events</li>
          </ul>

          <div className="list">
            <div className="item itemBox data-news">
              <div className="image">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${image1})` }}
                ></div>
              </div>
              <div className="details">
                <div className="date-time">
                  <div className="date">
                    <div className="day">20</div>
                    <div className="month">dec</div>
                  </div>
                  <div className="line"></div>
                  <div className="time">
                    <div className="hrs">
                      <i className="fas fa-clock"></i> 09:00 PM
                    </div>
                    <div className="loc">
                      <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
                    </div>
                  </div>
                </div>
                <h4 className="name">How high is Everest Base Camp?</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus ad aspernatur hic ipsam nemo provident. Quo adipisci
                  dignissimos ipsa vitae.
                </p>
                <a href="#">
                  <button>Read More</button>
                </a>
              </div>
            </div>

            <div className="item itemBox data-news">
              <div className="image">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${image2})` }}
                ></div>
              </div>
              <div className="details">
                <div className="date-time">
                  <div className="date">
                    <div className="day">20</div>
                    <div className="month">dec</div>
                  </div>
                  <div className="line"></div>
                  <div className="time">
                    <div className="hrs">
                      <i className="fas fa-clock"></i> 09:00 PM
                    </div>
                    <div className="loc">
                      <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
                    </div>
                  </div>
                </div>
                <h4 className="name">A Bimble is Better than a Bash</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus ad aspernatur hic ipsam nemo provident. Quo adipisci
                  dignissimos ipsa vitae.
                </p>
                <a href="#">
                  <button>Read More</button>
                </a>
              </div>
            </div>

            <div className="item itemBox data-event">
              <div className="image">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${image3})` }}
                ></div>
              </div>
              <div className="details">
                <div className="date-time">
                  <div className="date">
                    <div className="day">20</div>
                    <div className="month">dec</div>
                  </div>
                  <div className="line"></div>
                  <div className="time">
                    <div className="hrs">
                      <i className="fas fa-clock"></i> 09:00 PM
                    </div>
                    <div className="loc">
                      <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
                    </div>
                  </div>
                </div>
                <h4 className="name">Nepals 8000m Giants</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus ad aspernatur hic ipsam nemo provident. Quo adipisci
                  dignissimos ipsa vitae.
                </p>
                <a href="#">
                  <button>Read More</button>
                </a>
              </div>
            </div>

            <div className="item itemBox data-event">
              <div className="image">
                <div
                  className="img"
                  style={{ backgroundImage: `url(${image4})` }}
                ></div>
              </div>
              <div className="details">
                <div className="date-time">
                  <div className="date">
                    <div className="day">20</div>
                    <div className="month">dec</div>
                  </div>
                  <div className="line"></div>
                  <div className="time">
                    <div className="hrs">
                      <i className="fas fa-clock"></i> 09:00 PM
                    </div>
                    <div className="loc">
                      <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
                    </div>
                  </div>
                </div>
                <h4 className="name">How high is Everest Base Camp?</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus ad aspernatur hic ipsam nemo provident. Quo adipisci
                  dignissimos ipsa vitae.
                </p>
                <a href="#">
                  <button>Read More</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogComponent;

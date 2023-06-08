import image1 from "../assets/images/banner3.jpeg";
import image2 from "../assets/images/banner2.jpeg";
import image3 from "../assets/images/banner.jpg";
import image4 from "../assets/images/card5.png";
import image5 from "../assets/images/banner3.jpeg";

import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const BlogComponent = () => {
  const { blogDatas } = useContext(AllDataContext);
  console.log(blogDatas);

  return (
    <section>
      <div className="wrapper">
        <div className="news-events">
          <div className="title">Evertrekker community</div>

          <div className="list">
            {blogDatas &&
              blogDatas.map((data, idx) => {
                console.log(data.created_at.slice(5, 7));
                console.log(data.created_at.slice(11, 19));
                return (
                  <div className="item itemBox data-news" key={idx}>
                    <div className="image">
                      <div
                        className="img"
                        style={{
                          backgroundImage: `url(${data.image.original_image})`,
                        }}
                      ></div>
                    </div>
                    <div className="details">
                      <div className="date-time">
                        <div className="date">
                          <div className="day">{data.created_at.slice(8, 10)}</div>
                          <div className="month">{data.created_at.slice(5, 7)}</div>
                        </div>
                        <div className="line"></div>
                        <div className="time">
                          <div className="hrs">
                            <i className="fas fa-clock"></i> {data.created_at.slice(11, 16)}
                          </div>
                          <div className="loc">
                            <i className="fas fa-map-marker-alt"></i> Kathmandu,
                            Nepal
                          </div>
                        </div>
                      </div>
                      <h4 className="name">{data.title}</h4>

                      <p
                        dangerouslySetInnerHTML={{
                          __html: data && data.content,
                        }}
                      />
                      <a href="#">
                        <button>Read More</button>
                      </a>
                    </div>
                  </div>
                );
              })}

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

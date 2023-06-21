/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BlogCardComponent = ({ data }) => {
  return (
    <div className="item itemBox data-news">
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
              <i className="fas fa-map-marker-alt"></i> Kathmandu, Nepal
            </div>
          </div>
        </div>
        <h4 className="name">{data.title}</h4>

        <p
          dangerouslySetInnerHTML={{
            __html: data && data.content,
          }}
        />
        <Link to={`/blog-details/${data.id}`}>
          <button>Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCardComponent;

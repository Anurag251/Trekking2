import image1 from "../assets/images/profile.jpeg";
import image2 from "../assets/images/profile2.jpeg";
import image3 from "../assets/images/profile3.jpeg";
import image4 from "../assets/images/profile4.jpeg";

const TeamsComponent = () => {
  return (
    <section className="bg">
      <div className="wrapper">
        <div className="teams">
          <div className="title">Our Teams</div>

          <div className="list list-grid">
            <div className="item">
              <div className="image">
                <img className="img" src={image1} alt="profile-image" />
              </div>
              <div className="details">
                <div className="name">Monkey King</div>
                <div className="info">Developer</div>
              </div>
            </div>

            <div className="item">
              <div className="image">
                <img className="img" src={image2} alt="profile-image" />
              </div>
              <div className="details">
                <div className="name">Cristal Median</div>
                <div className="info">Review</div>
              </div>
            </div>

            <div className="item">
              <div className="image">
                <img className="img" src={image3} alt="profile-image" />
              </div>
              <div className="details">
                <div className="name">Medusa</div>
                <div className="info">Manager</div>
              </div>
            </div>

            <div className="item">
              <div className="image">
                <img className="img" src={image4} alt="profile-image" />
              </div>
              <div className="details">
                <div className="name">Panthom Assassin</div>
                <div className="info">CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsComponent;

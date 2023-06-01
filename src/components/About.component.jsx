import aboutImage1 from '../assets/images/banner.png'
import aboutImage2 from '../assets/images/banner2.jpeg'
import aboutImage3 from '../assets/images/banner2.jpg'
import aboutImage4 from '../assets/images/banner3.jpeg'

const AboutComponent = () => {
  return (
    <section>
      <div className="wrapper">
        <div className="about-page">
          <div className="title">Making the Adventure Happen</div>

          <div className="section">
            <div className="text-sec">
              <div className="sec-title">Welcome to Nepal</div>

              <p>
                Looking for the adventure of your lifetime in the luscious
                natural retreat to the nation on the lap of proudly standing the
                Himalayas? Corporate Adventure Treks Pvt. Ltd. provides you the
                best deals with the options to choose rather personalized trips
                to budget-friendly packaged tours in various destinations all
                around the country. Our agency provides services of trekking,
                hiking, expedition, peak climbing as well as tours around the
                cities, and many more.
              </p>
              <p>
                We want the world to know Nepal’s undeniable reserve of fresh
                gateways that can heal a tired soul and rejuvenate the essence
                of being alive through the means of traveling. Therefore, we
                will always offer the finest options in your safe and jubilant
                journeys!
              </p>
              <p>
                We welcome you to Nepal and ensure the time you have with us
                will be the one etched into your memories!
              </p>
            </div>

            <div className="image-sec">
              <img src={aboutImage1} alt="about-image" />
              <img src={aboutImage2} alt="about-image" />
              <img src={aboutImage3} alt="about-image" />
              <img src={aboutImage4} alt="about-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutComponent;

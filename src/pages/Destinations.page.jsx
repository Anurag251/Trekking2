import HaveChatComponent from "../components/HaveChat.component";
import PageBannerComponent from "../components/PageBanner.component";
import TrekkingRegionsWorldwideComponent from "../components/TrekkingRegionsWorldwide.component";
import WhyChooseUsComponent from "../components/WhyChooseUs.component";

const DestinationsPage = () => {
  return (
    <div className="Destinations">
      <PageBannerComponent
        contentLeft="View All Our"
        image="https://i.assetzen.net/i/JPlzqpfxRxey/w:1920/h:600/q:70.webp"
      >
        destinations
      </PageBannerComponent>

      <section>
        <div className="wrapper">
          <div className="about-destinations">
            <h4>
              As the UK’s No.1 High Altitude trekking specialist, if you love
              the mountains, want to climb higher, trek further and tick Everest
              Base Camp, Kili or Machu Picchu off your bucket list, come and
              join us.
            </h4>

            <p>
              We hand pick the best destinations and trips for beginners, expert
              climbers and everything in between - check out all our
              destinations below
            </p>

            <button>Why Choose Sacred</button>
          </div>
        </div>
      </section>

      <TrekkingRegionsWorldwideComponent />

      <div className="wrapper">
        <div className="package-footer">
          <h2>
            Secure your <span>lifetime deposit</span> today
          </h2>

          <p>Book onto a TREK. Once you pay your deposit, it NEVER expires!</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationsPage;

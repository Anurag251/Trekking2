import React from "react";
import PageBannerComponent from "../components/PageBanner.component";
import DownloadTripGuideComponent from "../components/DownloadTripGuide.component";
import AboutPageGalleryComponent from "../components/AboutPageGallery.component";
import WhyChooseUsComponent from "../components/WhyChooseUs.component";
import HaveChatComponent from "../components/HaveChat.component";

const ReasonsToChooseUsPage = () => {
  return (
    <div className="ReasonsToChooseUs">
      <PageBannerComponent image="https://i.assetzen.net/i/Cull2QUZyWCT/w:1920/h:500/q:70.webp">
        Reason to choose sacred
      </PageBannerComponent>

      <div className="wrapper">
        <section>
          <div className="about-content">
            <h3>Understanding the need for adventure...</h3>

            <ul>
              <li>
                Voted the UK's number one trekking and walking company at the
                British Travel Awards by our awesome customers, we know how to
                get that adventure done for you!
              </li>
              <li>
                I mean it’s not every day you fly across the world to wander the
                streets of Thamel in Kathmandu or enjoy a dreamy Everest
                sunrise. But for us, it’s been our every day for YEARS!
              </li>
              <li>
                The balance of the challenge and time to explore the remote
                mountains, a mix of the classics and some local secrets you
                won’t find on Google.
              </li>
              <li>Thats adventure done proper!</li>
            </ul>
          </div>
        </section>

        <section className="with-image">
          <div className="image">
            <img
              src="https://i.assetzen.net/i/3qS6tfQj3Tki/w:500/h:300/q:100.webp"
              alt=""
            />
          </div>

          <div className="about-content">
            <h3>Flexible Yeti’s</h3>

            <ul>
              <li>
                We like to remain as accessible and as flexible as possible by
                having our Adventure Experts like Rosie, Vicky, Dave or Jody on
                hand to supply all the information you need for a successful and
                worry-free and epic trip.
              </li>
              <li>
                From our video messages to picking up the 'Dog and Bone'. We are
                never far away from answering your questions.
              </li>
              <li>
                You could even join us on one of our Tuesday Tune-In LIVE Q &
                A's each week over on Facebook where we answer all of your top
                trekking questions.
              </li>
            </ul>
          </div>
        </section>

        <section className="with-image">
          <div className="image">
            <img
              src="https://i.assetzen.net/i/59qEYacEB9DX/w:500/h:400/q:100.webp"
              alt=""
            />
          </div>

          <div className="about-content">
            <h3>Taking Prep to the next level</h3>

            <ul>
              <li>
                We spend more time preparing our EverTrekkers and truly believe
                they are the best prepared trekkers on the mountain with a
                success rate of over 95% (industry standard 65%).
              </li>
              <li>
                You get a personalised trip planner, which will be your trekking
                bible for both before and during the trek to help prepare you
                practically, mentally & physically.
              </li>
              <li>
                You'll have access to our Mobile app with countdown timers,
                maps, and heaps more to clued up on everything you need to know
                about your trip.
              </li>
            </ul>
          </div>
        </section>

        <section className="with-image">
          <div className="image">
            <img
              src="https://i.assetzen.net/i/7qEXqCd7V6TI/w:00/h:500/q:100.webp"
              alt=""
            />
          </div>

          <div className="about-content">
            <h3>Understanding the need for adventure...</h3>

            <ul>
              <li>
                Voted the UK's number one trekking and walking company at the
                British Travel Awards by our awesome customers, we know how to
                get that adventure done for you!
              </li>
              <li>
                I mean it’s not every day you fly across the world to wander the
                streets of Thamel in Kathmandu or enjoy a dreamy Everest
                sunrise. But for us, it’s been our every day for YEARS!
              </li>
              <li>
                The balance of the challenge and time to explore the remote
                mountains, a mix of the classics and some local secrets you
                won’t find on Google.
              </li>
              <li>Thats adventure done proper!</li>
            </ul>
          </div>
        </section>

        <section className="with-image">
          <div className="image">
            <img
              src="https://i.assetzen.net/i/QwrpudJbQe1P/w:500/h:350/q:100.webp"
              alt=""
            />
          </div>

          <div className="about-content">
            <h3>Adventure is in the blood!</h3>

            <ul>
              <li>
                Ever since our Head Yeti and CEO Andy set up EverTrek on his
                return from Nepal many years ago, our focus has been on helping
                our community to achieve big things in the mountains of the
                world.
              </li>
              <li>
                We're trekkers, climbers and adventurers just like you and all
                of our Yeti team here in the UK have gone on trips. You could
                say that trekking is in our blood and we love nothing more than
                to help you get that adventure in the diary and ticked off.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <AboutPageGalleryComponent />
        </section>
      </div>
    </div>
  );
};

export default ReasonsToChooseUsPage;

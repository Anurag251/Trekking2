import { useContext } from "react";
import PageBannerComponent from "../components/PageBanner.component";
import TeamCardComponent from "../components/TeamCard.component";
import { AllDataContext } from "../context/AllData.context";

const MeetTheTeamPage = () => {
  const { teamDatas } = useContext(AllDataContext);

  return (
    <div className="MeetTheTeamPage">
      <PageBannerComponent
        contentLeft="Get To Know The"
        image="https://i.assetzen.net/i/JPlzqpfxRxey/w:1920/h:600/q:70.webp"
      >
        sacred Yetis
      </PageBannerComponent>

      <section>
        <div className="wrapper">
          <div className="teams-area">
            <div className="title-part">
              <div className="name">our team in the UK</div>
            </div>

            <div className="all-teams-list">
              {teamDatas?.map((data, idx) => (
                <TeamCardComponent data={data} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MeetTheTeamPage;

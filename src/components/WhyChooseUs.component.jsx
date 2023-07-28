import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const WhyChooseUsComponent = () => {
  const { aboutSacred } = useContext(AllDataContext);

  return (
    <div className="why-choose-us">
      <section>
        <div className="wrapper">
          <div className="title-part">
            <h5>WHY</h5>

            <div className="name">choose sacred</div>
          </div>

          <div className="list">
            {aboutSacred?.map((data, idx) => (
              <div className="item" key={idx}>
                <img src={data?.image} alt="" />

                <div className="name">{data?.title}</div>

                <p className="desc">{data?.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsComponent;

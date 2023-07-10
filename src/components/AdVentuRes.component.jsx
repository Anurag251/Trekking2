import React, { useContext } from "react";
import NewPackageCardComponent from "./NewPackageCard.component";
import { AllDataContext } from "../context/AllData.context";

const AdVentuResComponent = () => {
  const { tripDatas } = useContext(AllDataContext);

  return (
    <div className="AdVentuRes">
      <section>
        <div className="wrapper">
          <div className="title-part">
            <h5>TOP Sacred</h5>

            <div className="name">adVentuRes</div>
          </div>

          <div className="list">
            {tripDatas &&
              tripDatas
                .filter((data, idx) => idx < 3)
                .map((data, idx) => (
                  <NewPackageCardComponent key={idx} data={data} />
                ))}
          </div>

          <div className="package-footer">
            <h2>
              Secure your <span>lifetime deposit</span> today
            </h2>

            <p>
              Book onto a TREK. Once you pay your deposit, it NEVER expires!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdVentuResComponent;

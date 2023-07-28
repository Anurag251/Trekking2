import React, { useContext } from "react";
import NewPackageCardComponent from "./NewPackageCard.component";
import { AllDataContext } from "../context/AllData.context";

const MountainOFKnowledgeComponent = () => {
  const { tripDatas } = useContext(AllDataContext);

  return (
    <div className="AdVentuRes">
      <section className="bg-color">
        <div className="wrapper">
          <div className="title-part">
            <h5>Sacred Himalaya Best</h5>

            <div className="name">Recommended Trip</div>
          </div>

          <div className="list">
            {tripDatas &&
              tripDatas
                .filter((data) => data.recommended)
                .filter((data, idx) => idx < 3)
                .map((data, idx) => (
                  <NewPackageCardComponent key={idx} data={data} />
                ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MountainOFKnowledgeComponent;

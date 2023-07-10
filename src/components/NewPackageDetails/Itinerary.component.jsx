/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AllDataContext } from "../../context/AllData.context";
import HtmlToParagraphs from "../HtmlToParagraphs.component";
import ItineraryCardComponent from "./ItineraryCard.component";

const ItineraryComponent = ({ data }) => {
  const { detailsPageNav } = useContext(AllDataContext);

  return (
    <div
      className={`ItinerarySection ${
        detailsPageNav === "Itinerary" ? "active" : ""
      }`}
    >
      <section>
        <div className="wrapper">
          <div className="main-title">Itinerary</div>
          <div className="main-container">
            <div className="all-list">
              {data.itenarydetails.map((data, idx) => (
                <ItineraryCardComponent data={data} key={idx} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItineraryComponent;

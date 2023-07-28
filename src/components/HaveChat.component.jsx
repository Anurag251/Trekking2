import React, { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const HaveChatComponent = () => {
  const { contactDatas } = useContext(AllDataContext);

  return (
    <div className="HaveChat">
      <section>
        <div className="wrapper">
          <div className="list">
            <div className="item">
              <p className="desc">
                Please feel free to contact us on any matter. We will be more
                than happy to answer any questions or to discuss any requests or
                queries you may have
              </p>

              <div className="button-group">
                <a href={`tel:${contactDatas && contactDatas.branding.phone}`}>
                  <button className="callBtn">Book A Call Back</button>
                </a>

                <a href={`tel:${contactDatas && contactDatas.branding.phone}`}>
                  <button className="phoneBtn">
                    <i className="fas fa-phone"></i>{" "}
                    {contactDatas && contactDatas.branding.phone}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HaveChatComponent;

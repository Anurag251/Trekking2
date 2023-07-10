import React from "react";

const HaveChatComponent = () => {
  return (
    <div className="HaveChat">
      <section>
        <div className="wrapper">
          <div className="list">
            <div className="item">
              <div className="title-part">
                <h5>WE'D LOVE TO</h5>

                <div className="name">Have a cHat</div>
              </div>

              <p className="desc">
                If you would like to discuss your next adventure, have any
                questions or simply just a good old chin wag, then please call
                us, or send us a message.
              </p>

              <div className="button-group">
                <button className="callBtn">Book A Call Back</button>

                <button className="phoneBtn">
                  <i className="fas fa-phone"></i> 02920 003216
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HaveChatComponent;

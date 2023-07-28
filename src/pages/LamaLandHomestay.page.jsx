import React, { Fragment, useContext, useEffect, useState } from "react";
import PageBannerComponent from "../components/PageBanner.component";
import AboutPageGalleryComponent from "../components/AboutPageGallery.component";
import { AllDataContext } from "../context/AllData.context";

const LamaLandHomestayPage = () => {
  const { aboutSacred, aboutDetails } = useContext(AllDataContext);

  const [thisPageData, setThisPageData] = useState(null);

  useEffect(() => {
    aboutDetails?.forEach((data) => {
      if (data.slug === "lama-land-homestay") {
        setThisPageData(data);
      }
    });
  }, [aboutDetails]);

  return (
    <div className="ReasonsToChooseUs">
      <PageBannerComponent image={thisPageData?.image?.original_image}>
        {thisPageData?.title}
      </PageBannerComponent>

      <div className="wrapper">
        <section>
          <div className="about-content">
            <p
              className="desc"
              dangerouslySetInnerHTML={{
                __html: thisPageData?.description,
              }}
            ></p>
          </div>
        </section>

        {thisPageData?.contents?.map((data, idx) => (
          <Fragment key={idx}>
            {data?.image !== null ? (
              <section className="with-image">
                <div className="image">
                  <img src={data?.image?.original_image} alt={data?.text} />
                </div>

                <div className="about-content">
                  <h3>{data?.text}</h3>

                  <p
                    className="desc"
                    dangerouslySetInnerHTML={{
                      __html: data?.content,
                    }}
                  ></p>
                </div>
              </section>
            ) : (
              <section>
                <div className="about-content">
                  <h3>{data?.text}</h3>

                  <p
                    className="desc"
                    dangerouslySetInnerHTML={{
                      __html: data?.content,
                    }}
                  ></p>
                </div>
              </section>
            )}
          </Fragment>
        ))}

        <section>
          <AboutPageGalleryComponent />
        </section>
      </div>
    </div>
  );
};

export default LamaLandHomestayPage;

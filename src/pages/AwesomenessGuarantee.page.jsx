import { Fragment, useContext, useEffect, useState } from "react";
import PageBannerComponent from "../components/PageBanner.component";
import { AllDataContext } from "../context/AllData.context";

const AwesomenessGuaranteePage = () => {
  const { aboutDetails } = useContext(AllDataContext);

  const [thisPageData, setThisPageData] = useState(null);

  useEffect(() => {
    aboutDetails?.forEach((data) => {
      if (data.slug === "awesomeness-guarantee") {
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
        {thisPageData?.description !== null ? (
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
        ) : null}

        {thisPageData?.contents.length ? (
          <>
            {thisPageData?.contents?.map((data, idx) => (
              <Fragment key={idx}>
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
              </Fragment>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default AwesomenessGuaranteePage;

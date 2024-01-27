import { useState, useEffect, memo } from "react";
import HeroSection from "@/shared-components/hero-section";
import { wrapComponentWithContainer } from "@/utils/helpers/common";
import Carousel from "@/components/draggable-carousal";
import HiringNow from "./hiring-now";
import { heroSectionData } from "./contents/hero-section.data";
import { testimonyList } from "@/components/draggable-carousal/carousal.data";
import classes from "./career.module.scss";
import withTextHighlighter from "@/hocs/withTextHighlighter";
import { getCareerOpenings } from "@/utils/services/careers-form.service";
import { getOpeningsAsPerBusinessFunctions } from "./job-description/job-description.helper";
import TrackLines from "@/components/drone-animation/track-lines";

const CareersComp = () => {
  const [jobDetails, setJobDetails] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const getCareerOpeningsList = async () => {
    try {
      const response = await getCareerOpenings();
      setJobDetails(
        getOpeningsAsPerBusinessFunctions(
          "User Experience Design",
          response?.data
        )
      );
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCareerOpeningsList();
  }, [loading]);

  return (
    <>
      <div className={classes.heroSectionWrapper}>
        <HeroSection
          heading={withTextHighlighter({ text: heroSectionData?.heading })}
          cardContent={heroSectionData?.cardContent}
          customClass={classes.customClassHeroSection}
          customImageClass={classes.customStylingOnHeroSectionImage}
          customImageContainerClass={classes.customImageContainerCard}
          customInfoClass={classes.customInfoClassCard}
        />
      </div>
      <TrackLines>
        <div className={classes.carousalWrapper}>
          {wrapComponentWithContainer(
            {
              list: testimonyList,
            },
            Carousel
          )}
        </div>
      </TrackLines>
      <TrackLines customGridClass="formGrids" height="50%">
        <div className={classes.hiringNowWrapper}>
          {wrapComponentWithContainer(
            {
              title: "We're Hiring now!",
              hiringDetails: jobDetails ? jobDetails : [],
              loading: loading,
            },
            HiringNow
          )}
        </div>
      </TrackLines>
    </>
  );
};

export default memo(CareersComp);

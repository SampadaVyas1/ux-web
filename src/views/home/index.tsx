import { memo, useState } from "react";
import InfoCounter from "@/components/info-counter";
import HeroSection from "@/shared-components/hero-section";
import TrustedBySection from "./trusted-by-section";
import ScrollCompWrapper from "./scroll-comp-wrapper";
import NumberedCardWrapper from "./numbered-card-wrapper";
import Testimonial from "./client-testimonial";
import { clientTestimonialData } from "./client-testimonial/testimonial.data";
import { wrapComponentWithContainer } from "@/utils/helpers/common";
import { heroSectionData } from "./contents/hero-section.data";
import { infoCounterList } from "./contents/info-counter.data";
import ContactUsSideForm from "@/shared-components/side-form";
import { CONTACT_US_SIDE_FORM_FIELDS } from "../../shared-components/side-form/contact-us-side-form.helper";
import {
  CONTACT_US_SIDE_FORM_INITIAL_VALUES,
  CONTACT_US_SIDE_FORM_SCHEMA,
} from "../../shared-components/side-form/contact-us-side-form.schema";
import classes from "./home.module.scss";
import withTextHighlighter from "@/hocs/withTextHighlighter";
import TrackLines from "@/components/drone-animation/track-lines";
import Grid from "@/components/grid";
import TextAnimator from "@/components/text-animator";
import { numberedCardData } from "./contents/numbered-card.data";

const { heading: numberCardHeading } = numberedCardData;
const HomePageComp = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const getPlayingInfo = (param: boolean) => setIsPlaying(param);

  return (
    <div className={classes.homepageWrapper}>
      <div className={classes.heroSectionWrapper}>
        <HeroSection
          videoSrc={heroSectionData?.videoSrc}
          heading={withTextHighlighter({
            text: heroSectionData?.heading,
            textHighlighterKeys: heroSectionData.textHighlighter,
            className: classes.headingColor,
          })}
          getPlayingInfo={getPlayingInfo}
          contentCustomClass={classes.contentContainer}
        />

        <div className={(!isPlaying && classes.overlay) || ""} />
      </div>
      <TrackLines customClass={classes.gridWrapper}>
        <div className={classes.infoAndTiltCardWrapper}>
          {wrapComponentWithContainer({ info: infoCounterList }, InfoCounter)}
          {wrapComponentWithContainer({}, TrustedBySection)}
        </div>
      </TrackLines>
      <TrackLines customClass={classes.gridWrapper}>
        <div className={classes.numberCardWrapper}>
          {wrapComponentWithContainer({}, () => (
            <Grid fullWidth className={classes.heading}>
              <TextAnimator text={numberCardHeading} variant="heading-1" />
            </Grid>
          ))}
          {wrapComponentWithContainer({}, NumberedCardWrapper)}
        </div>
      </TrackLines>
      <TrackLines customGridClass="formGrids" customClass={classes.gridWrapper}>
        <div className={classes.scrollWrapper}>
          <ScrollCompWrapper />
        </div>
      </TrackLines>
      <TrackLines customClass={classes.gridWrapper}>
        <div className={classes.clientTestimonialWrapper}>
          {wrapComponentWithContainer(
            { clientTestimonialData: clientTestimonialData },
            Testimonial
          )}
        </div>
      </TrackLines>
      <TrackLines customGridClass="formGrids" customClass={classes.gridWrapper}>
        <div className={classes.formContainer}>
          <ContactUsSideForm
            formFields={CONTACT_US_SIDE_FORM_FIELDS}
            schema={CONTACT_US_SIDE_FORM_SCHEMA}
            initialValues={CONTACT_US_SIDE_FORM_INITIAL_VALUES}
          />
        </div>
      </TrackLines>
    </div>
  );
};

export default memo(HomePageComp);

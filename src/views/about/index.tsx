import { memo } from "react";
import Grid from "@/components/grid";
import MeetOurPeople from "@/views/about/meet-our-people";
import ContactUsSideForm from "@/shared-components/side-form";
import { MEET_OUR_PEOPLE_LIST } from "./meet-our-people/meet-our-people-data";
import { CONTACT_US_SIDE_FORM_FIELDS } from "@/shared-components/side-form/contact-us-side-form.helper";
import {
  CONTACT_US_SIDE_FORM_INITIAL_VALUES,
  CONTACT_US_SIDE_FORM_SCHEMA,
} from "@/shared-components/side-form/contact-us-side-form.schema";
import CoreBeliefs from "./core-beliefs";
import classes from "./about-us.module.scss";
import OurVision from "./our-vision";
import HeroSection from "@/shared-components/hero-section";
import { heroSectionData } from "./contents/hero-section.data";
import { infoCounterList } from "./contents/info-counter-list";
import withTextHighlighter from "@/hocs/withTextHighlighter";
import TrackLines from "@/components/drone-animation/track-lines";

const AboutUsComp = () => {
  return (
    <Grid fullWidth>
      <HeroSection
        heading={withTextHighlighter({ text: heroSectionData?.heading })}
        cardContent={heroSectionData?.cardContent}
        infoCounterList={infoCounterList}
        customClass={classes.heroSectionContainer}
        contentCustomClass={classes.contentWrapper}
        customInfoClass={classes.infoContainer}
        customInfoCounterClass={classes.infoCounter}
      />
      <TrackLines customGridClass="formGrids">
        <div className={classes.ourVisionWrapper}>
          <OurVision />
        </div>
      </TrackLines>
      <TrackLines customGridClass="formGrids">
        <div className={classes.coreBeliefsWrapper}>
          <CoreBeliefs />
        </div>
      </TrackLines>
      <TrackLines>
        <Grid fullWidth className={classes.meetPeopleContainer}>
          <MeetOurPeople data={MEET_OUR_PEOPLE_LIST} />
        </Grid>
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
    </Grid>
  );
};

export default memo(AboutUsComp);

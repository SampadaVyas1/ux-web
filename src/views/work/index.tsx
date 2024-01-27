import { memo } from "react";
import HeroSection from "@/shared-components/hero-section";
import ContactUsSideForm from "@/shared-components/side-form";
import { CONTACT_US_SIDE_FORM_FIELDS } from "@/shared-components/side-form/contact-us-side-form.helper";
import {
  CONTACT_US_SIDE_FORM_INITIAL_VALUES,
  CONTACT_US_SIDE_FORM_SCHEMA,
} from "@/shared-components/side-form/contact-us-side-form.schema";
import WorkSection from "./work-section";
import { wrapComponentWithContainer } from "@/utils/helpers/common";
import { heroSectionData } from "./content/hero-section.data";
import { workCardDetails } from "../case-study/contents/otherWorkCardDetails.data";
import {
  ModalFormData,
  ModalFormTextData,
} from "./more-case-study-form-helper";
import {
  MORE_CASE_STUDY_INITIAL_VALUES,
  MORE_CASE_STUDY_SCHEMA,
} from "./more-case-study-form.schema";
import classes from "./work.module.scss";
import { workSectionTitle } from "./content/work-section.data";
import withTextHighlighter from "@/hocs/withTextHighlighter";
import TrackLines from "@/components/drone-animation/track-lines";
import { CASE_STUDY_ROUTES } from "@/utils/constants/routes";

const WorkComp = () => {
  return (
    <div className={classes.workPageWrapper}>
      <HeroSection
        heading={withTextHighlighter({ text: heroSectionData?.heading })}
        cardContent={heroSectionData?.cardContent}
        customClass={classes.customClassHeroSection}
        isReadCursorEnable={true}
        customImageContainerClass={classes.imageContainer}
        url={CASE_STUDY_ROUTES.JPMC}
      />
      <TrackLines>
        <div className={classes.ourWorkContainer}>
          {wrapComponentWithContainer(
            {
              title: workSectionTitle,
              cardDetails: workCardDetails,
              ModalFormTextData: ModalFormTextData,
              ModalFormData: ModalFormData,
              MORE_CASE_STUDY_INITIAL_VALUES: MORE_CASE_STUDY_INITIAL_VALUES,
              MORE_CASE_STUDY_SCHEMA: MORE_CASE_STUDY_SCHEMA,
            },
            WorkSection
          )}
        </div>
      </TrackLines>
      <TrackLines customGridClass="formGrids">
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

export default memo(WorkComp);

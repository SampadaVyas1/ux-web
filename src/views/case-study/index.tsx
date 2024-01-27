import CaseStudyHeroSection from "@/shared-components/case-study/case-study-hero-section";
import Overview from "@/shared-components/case-study/overview";
import NumberWithDescription from "@/components/number-with-description";
import Challenges from "@/shared-components/case-study/challenges";
import CaseStudyOtherWork from "@/shared-components/case-study/case-study-other-work";
import CaseStudySolution from "@/shared-components/case-study/case-study-solution";
import ColorWithTypography from "@/shared-components/case-study/color-typography";
import Outcome from "@/shared-components/case-study/outcome";
import VisualDesignAndWireframes from "@/shared-components/case-study/case-study-visual-designs-and-wire-frames";
import ContactUsSideForm from "@/shared-components/side-form";
import { CONTACT_US_SIDE_FORM_FIELDS } from "@/shared-components/side-form/contact-us-side-form.helper";
import {
  CONTACT_US_SIDE_FORM_INITIAL_VALUES,
  CONTACT_US_SIDE_FORM_SCHEMA,
} from "@/shared-components/side-form/contact-us-side-form.schema";
import { wrapComponentWithContainer } from "@/utils/helpers/common";
import withTextHighlighter from "@/hocs/withTextHighlighter";
import { ICaseStudyType } from "./case-study";
import {
  CHALLENGES_CARD,
  OTHER_WORK_CARD,
  OUTCOME_CARD,
  getCaseStudyCardDetails,
  wireframeCaseStudies,
} from "./case-study.helper";
import classes from "./case-study.module.scss";
import TrackLines from "@/components/drone-animation/track-lines";

const CaseStudy = ({ caseStudy }: ICaseStudyType) => {
  const {
    caseStudyName,
    heroSection,
    overview,
    objectiveDetails,
    challenges,
    solutions,
    otherWork,
    typography,
    visualDesign,
    wireFrames,
    outcome,
  } = caseStudy;

  return (
    <>
      <TrackLines>
        <CaseStudyHeroSection
          heading={withTextHighlighter({
            text: heroSection.heading,
            textHighlighterKeys: heroSection.textHighlighter,
          })}
          subHeading={heroSection.subHeading}
          records={heroSection.records}
          breadCrumbs={heroSection.breadCrumbs}
        />
      </TrackLines>
      <TrackLines customGridClass="formGrids" height="80%">
        <div className={classes.overviewWrapper}>
          {wrapComponentWithContainer(
            {
              title: overview.title,
              content: overview.content,
              customClass: "overviewStyle",
            },
            Overview
          )}
        </div>
      </TrackLines>
      <TrackLines customGridClass="formGrids" height="80%">
        <div>
          {wrapComponentWithContainer(
            {
              projectDetails: {
                objectiveTitle: objectiveDetails.objectiveTitle,
                projectDescription: objectiveDetails.projectDescription,
                objectives: objectiveDetails.objectives,
              },
            },
            NumberWithDescription
          )}
        </div>
      </TrackLines>
      <TrackLines customGridClass="formGrids" height="80%">
        <div className={classes.challengeWrapper}>
          {wrapComponentWithContainer(
            {
              title: challenges.title,
              cardDetails: getCaseStudyCardDetails(
                caseStudyName,
                CHALLENGES_CARD
              ),
              customClass: "challengesStyle",
            },
            Challenges
          )}
        </div>
      </TrackLines>
      <TrackLines>
        <div>
          {wrapComponentWithContainer(
            {
              title: solutions.title,
              details: solutions.details,
              keyPoints: solutions.keyPoints,
            },
            CaseStudySolution
          )}
        </div>
      </TrackLines>
      <TrackLines>
        {wireframeCaseStudies.includes(caseStudyName) && (
          <div className={classes.wireFramwWrapper}>
            <VisualDesignAndWireframes
              title={`${wireFrames?.title}`}
              imageSrc={wireFrames?.imageSrc}
            />
          </div>
        )}
      </TrackLines>
      <TrackLines>
        <div className={classes.typographyWrapper}>
          {wrapComponentWithContainer(typography, ColorWithTypography)}
        </div>
      </TrackLines>
      <TrackLines>
        <div className={classes.visualWrapper}>
          <VisualDesignAndWireframes
            title={`${visualDesign?.title}`}
            imageSrc={visualDesign?.imageSrc}
          />
        </div>
      </TrackLines>
      <TrackLines>
        <div className={classes.outcomeLayoutWrapper}>
          {wrapComponentWithContainer(
            {
              title: outcome.title,
              content: outcome.content,
              outcomeList: getCaseStudyCardDetails(caseStudyName, OUTCOME_CARD),
            },
            Outcome
          )}
        </div>
      </TrackLines>
      <TrackLines>
        <div className={classes.formContainer}>
          <ContactUsSideForm
            formFields={CONTACT_US_SIDE_FORM_FIELDS}
            schema={CONTACT_US_SIDE_FORM_SCHEMA}
            initialValues={CONTACT_US_SIDE_FORM_INITIAL_VALUES}
          />
        </div>
      </TrackLines>
      <TrackLines customGridClass="formGrids">
        <div className={classes.otherWorkWrapper}>
          {wrapComponentWithContainer(
            {
              title: otherWork.title,
              cardDetails: getCaseStudyCardDetails(
                caseStudyName,
                OTHER_WORK_CARD
              ),
            },
            CaseStudyOtherWork
          )}
        </div>
      </TrackLines>
    </>
  );
};

export default CaseStudy;

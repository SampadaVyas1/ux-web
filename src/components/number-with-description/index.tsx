import React from "react";
import classes from "./number-with-description.module.scss";
import Grid from "../grid";
import ObjectivesDescription from "./objectives-description";
import { IProjectDetails } from "./number-with-description";
import TextAnimator from "../text-animator";

const NumberWithDescription = (props: IProjectDetails) => {
  const {
    projectDetails: {
      objectiveTitle,
      projectDescription,
      objectives,
      customVariantOnObjectiveTitle,
      customVariantOnProjectDescription,
    },
  } = props;

  return (
    <Grid fullWidth className={classes.projectDetailsSection}>
      <Grid container className={classes.contentContainer}>
        <Grid item sm={4} md={8} lg={12}>
          <TextAnimator
            text={objectiveTitle}
            fontVariant="light"
            variant={
              customVariantOnObjectiveTitle
                ? customVariantOnObjectiveTitle
                : "heading-6"
            }
            customStylingOnText={classes.objectiveTitle}
          />
        </Grid>
        <Grid item sm={4} md={8} lg={10}>
          <TextAnimator
            text={projectDescription}
            variant={
              customVariantOnProjectDescription
                ? customVariantOnProjectDescription
                : "body-2"
            }
            customStylingOnText={classes.projectDescription}
          />
        </Grid>
      </Grid>
      <div className={classes.objectives}>
        <ObjectivesDescription objectives={objectives} />
      </div>
    </Grid>
  );
};

export default NumberWithDescription;

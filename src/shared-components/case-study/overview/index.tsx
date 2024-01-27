import { Fragment } from "react";
import Grid from "@/components/grid";
import { IOverview } from "./overview";
import classes from "./overview.module.scss";
import TextAnimator from "@/components/text-animator";

const Overview = (props: IOverview) => {
  const {
    title,
    content,
    customClass,
    customStylingOnTitle,
    customStylingOnContent,
  } = props;
  return (
    <Fragment>
      <Grid item lg={12} sm={4} md={8}>
        <Grid container className={classes[`${customClass}`]}>
          <Grid item lg={12} sm={4}>
            <TextAnimator
              variant="heading-1"
              customStylingOnText={`${classes.title} ${customStylingOnTitle}`}
              text={title}
            />
          </Grid>
          <Grid item lg={10} sm={4}>
            {content && (
              <TextAnimator
                variant="body-2"
                customStylingOnText={`${classes.content} ${customStylingOnContent}`}
                text={content}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Overview;

import { memo } from "react";
import Grid from "@/components/grid";
import Breadcrumbs from "@/components/breadcrumbs";
import Typography from "@/components/typography";
import Statistics from "@/shared-components/statistics";
import withContainer from "@/hocs/withContainer";
import { ICSHeroProps } from "./case-study-hero-section";
import classes from "./case-study-hero-section.module.scss";

const CaseStudyHeroSection = (props: ICSHeroProps) => {
  const {
    heading = "",
    subHeading = "",
    records = [],
    breadCrumbs = [],
    customClass,
  } = props;
  return (
    <Grid fullWidth>
      <div className={`${classes.componentWrapper} ${customClass}`}>
        <Grid fullWidth className={classes.breadCrumbs}>
          <Breadcrumbs breadCrumbs={breadCrumbs} />
        </Grid>
        <Grid fullWidth>
          <Typography variant="heading-1" customStyle={classes.title}>
            {heading}
          </Typography>
        </Grid>
        <Grid container>
          <Grid item sm={4} md={7} lg={12}>
            <Typography variant="body-2" customStyle={classes.subHeading}>
              {subHeading}
            </Typography>
          </Grid>
        </Grid>
        <Grid container className={classes.records}>
          <Statistics records={records} />
        </Grid>
      </div>
    </Grid>
  );
};

export default memo(withContainer(CaseStudyHeroSection));

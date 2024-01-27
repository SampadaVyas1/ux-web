import Grid from "@/components/grid";
import Typography from "@/components/typography";
import Breadcrumbs from "@/components/breadcrumbs";
import Button from "@/components/button";
import SkeletonLayout from "@/components/skeleton";
import { APPLY_NOW, baseColor, highlightColor } from "@/utils/constants/common";
import { IJobDetails } from "./job-description-hero-section";
import classes from "./job-description-hero-section.module.scss";
import BigCircleCursor from "@/components/big-circle-cursor";

const JobHeroSection = (props: IJobDetails) => {
  const {
    breadcrumbs,
    jobId,
    city,
    title,
    jobType,
    jobLevel,
    experience,
    handleApplyNow,
    loading,
  } = props;

  return (
    <Grid fullWidth>
      <Grid container>
        <Grid item lg={12}>
          <div className={classes.heroWrapper}>
            <div className={classes.breadCrumbsWrapper}>
              {loading ? (
                <SkeletonLayout
                  baseColor={baseColor}
                  highlightColor={highlightColor}
                  height="1.5rem"
                  width="50%"
                />
              ) : (
                <Breadcrumbs breadCrumbs={breadcrumbs} />
              )}
            </div>
            {loading ? (
              <SkeletonLayout
                count={2}
                baseColor={baseColor}
                highlightColor={highlightColor}
                height="1.5rem"
              />
            ) : (
              <div className={classes.contentLayout}>
                <div className={classes.jobDetailsLayout}>
                  <Typography
                    variant="heading-1"
                    customStyle={classes.headingWrapper}
                  >
                    {title}
                  </Typography>
                  <div className={classes.jobDetails}>
                    {[city, jobLevel, jobType, experience].map(
                      (detail: string, index: number) => (
                        <Typography
                          variant="body-2"
                          customStyle={classes.details}
                          key={index}
                        >
                          {detail}
                        </Typography>
                      )
                    )}
                  </div>
                </div>
                <BigCircleCursor>
                  <Button
                    type="submit"
                    className={classes.buttonWrapper}
                    onClick={() => handleApplyNow(jobId)}
                  >
                    {APPLY_NOW}
                  </Button>
                </BigCircleCursor>
              </div>
            )}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default JobHeroSection;

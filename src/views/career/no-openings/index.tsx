import { useRouter } from "next/router";
import Grid from "@/components/grid";
import TextAnimator from "@/components/text-animator";
import Button from "@/components/button";
import { NO_OPENING_DATA, SUBMIT_DETAILS } from "@/utils/constants/common";
import { APPLY_JOB_ROUTE } from "@/utils/constants/routes";
import classes from "./no-openings.module.scss";
import BigCircleCursor from "@/components/big-circle-cursor";

const NoOpenings = () => {
  const router = useRouter();

  const handleSubmitDetails = () => {
    router.push(APPLY_JOB_ROUTE.noOpeningRoute);
  };

  return (
    <Grid fullWidth>
      <Grid container>
        <Grid item sm={4} md={8} lg={12}>
          <div className={classes.noOpeningWrapper}>
            <div className={classes.noOpeningContent}>
              <TextAnimator
                variant="heading-1"
                text={NO_OPENING_DATA.title}
                customStylingOnText={classes.title}
                fontVariant="light"
              />
              <Grid
                item
                sm={4}
                md={8}
                lg={8}
                className={classes.jobDescription}
              >
                <TextAnimator
                  variant="body-2"
                  text={NO_OPENING_DATA.content}
                  customStylingOnText={classes.content}
                />
              </Grid>
            </div>
            <BigCircleCursor>
              <Button
                type="submit"
                onClick={handleSubmitDetails}
                className={classes.customBtn}
              >
                {SUBMIT_DETAILS}
              </Button>
            </BigCircleCursor>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NoOpenings;

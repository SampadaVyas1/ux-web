import Grid from "@/components/grid";
import TextAnimator from "@/components/text-animator";
import React from "react";
import classes from "./our-vision.module.scss";
import { ourVision } from "../contents/our-vision.data";
import { UpsetComma, MobQuotes } from "@/assets/svgs";
import withContainer from "@/hocs/withContainer";
import useWindowUtil from "@/hooks/useWindowUtil";
import { DeviceType } from "@/utils/enum";

const OurVision = () => {
  const { deviceType } = useWindowUtil();
  const isMobileDevice = deviceType === DeviceType.MOBILE;

  return (
    <Grid fullWidth>
      <Grid container className={classes.ourVision}>
        <Grid item lg={12} md={8} sm={4} className={classes.titleContent}>
          {isMobileDevice ? (
            <MobQuotes className={classes.mobQuotes} />
          ) : (
            <UpsetComma className={classes.upSetComma} />
          )}
          <TextAnimator
            variant={"heading-1"}
            text={ourVision.title}
            customStylingOnText={classes.title}
          />
        </Grid>
        <Grid item lg={12} md={8} sm={4}>
          <div className={classes.descriptionWrapper}>
            <TextAnimator
              variant="body-1"
              text={ourVision.description}
              customStylingOnText={classes.description}
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withContainer(OurVision);

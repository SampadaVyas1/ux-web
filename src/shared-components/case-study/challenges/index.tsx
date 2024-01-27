import Grid from "@/components/grid";
import { CaseStudyCard } from "@/components/cards";
import Overview from "../overview";
import classes from "./challenges.module.scss";
import useWindowUtil from "@/hooks/useWindowUtil";
import { getCustomStyleForExtraSmallDevice } from "@/utils/helpers/common";

const Challenges = (props: any) => {
  const { title, cardDetails, customClass } = props;
  const { windowDimensions } = useWindowUtil();

  const customStyleForExtraSmallDevice = getCustomStyleForExtraSmallDevice(
    windowDimensions,
    classes.title
  );

  return (
    <Grid item lg={12}>
      <Grid container className={classes[`${customClass}`]}>
        <Grid item sm={4} md={8} lg={12}>
          <Overview
            title={title}
            customStylingOnTitle={
              customStyleForExtraSmallDevice
                ? customStyleForExtraSmallDevice
                : classes.customStylingOnTitle
            }
          />
        </Grid>
        <Grid item>
          <CaseStudyCard cardDetails={cardDetails} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Challenges;

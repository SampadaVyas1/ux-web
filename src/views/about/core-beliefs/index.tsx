import { Fragment, memo } from "react";
import Grid from "@/components/grid";
import OutcomeList from "@/components/outcome-list";
import TextAnimator from "@/components/text-animator";
import withContainer from "@/hocs/withContainer";
import { TEXT_TYPES } from "@/utils/constants/common";
import { CoreBeliefData } from "./core-beliefs.helper";
import { coreBeliefsDetails } from "../contents/core-beliefs.data";
import classes from "./core-beliefs.module.scss";

const CoreBeliefs = () => {
  return (
    <Fragment>
      <Grid item sm={4} md={7} lg={5} className={classes.leftSectionWrapper}>
        <div className={classes.leftSection}>
          <TextAnimator
            text={CoreBeliefData?.heading}
            variant={"heading-1"}
            customStylingOnText={classes.title}
          />
          <TextAnimator
            text={CoreBeliefData?.subText}
            variant={"body-2"}
            customStylingOnText={classes.subText}
          />
        </div>
      </Grid>
      <Grid item sm={0} md={0} lg={1} className={classes.leftSectionWrapper}>
        <></>
      </Grid>
      <Grid item sm={4} md={8} lg={6}>
        <OutcomeList
          outcomeListDetails={coreBeliefsDetails}
          textType={TEXT_TYPES.Multiple}
          customClass={classes.listContent}
        />
      </Grid>
    </Fragment>
  );
};
export default memo(withContainer(CoreBeliefs));

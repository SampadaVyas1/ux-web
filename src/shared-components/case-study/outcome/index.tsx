import Grid from "@/components/grid";
import OutcomeList from "@/components/outcome-list";
import { TEXT_TYPES } from "@/utils/constants/common";
import Overview from "../overview";
import { IOutcome } from "./outcome";
import classes from "./outcome-section.module.scss";

const Outcome = (props: IOutcome) => {
  const { title, content, outcomeList } = props;
  return (
    <Grid item lg={12} sm={4} md={8}>
      <Grid container className={classes.outcomeWrapper}>
        <Grid item lg={6} sm={4}>
          <div className={classes.contentWrapper}>
            <Overview
              title={title}
              content={content}
              customClass="overviewStyle"
              customStylingOnContent={classes.customStyleOnContent}
            />
          </div>
        </Grid>
        <Grid item lg={5} sm={4}>
          <OutcomeList
            outcomeListDetails={outcomeList}
            textType={TEXT_TYPES.Single}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Outcome;

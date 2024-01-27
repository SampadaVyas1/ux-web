import { Fragment } from "react";
import Grid from "@/components/grid";
import { IOutcomeList, IOutcomeListDetails } from "./outcome";
import classes from "./outcome.module.scss";
import Typography from "@/components/typography";
import { TEXT_TYPES } from "@/utils/constants/common";
import withIsInView from "@/hocs/isInView";

const OutcomeList = ({
  outcomeListDetails,
  textType = TEXT_TYPES.Single,
  customClass,
}: IOutcomeList) => {
  return (
    <Fragment>
      {textType === TEXT_TYPES.Single ? (
        <Grid
          item
          sm={12}
          md={12}
          lg={12}
          className={classes.singleOutcomeWrapper}
        >
          <Grid container className={classes.singleContainerWrapper}>
            {outcomeListDetails?.map(
              (ele: IOutcomeListDetails, index: number) => (
                <Grid
                  item
                  md={4}
                  key={index}
                  className={classes.singleOutcomeLayout}
                >
                  <Typography
                    variant="heading-6"
                    customStyle={classes.iconWrapper}
                  >
                    {ele?.count}
                  </Typography>
                  <Typography
                    variant="heading-3"
                    customStyle={classes.contentWrapper}
                  >
                    {ele?.text}
                  </Typography>
                </Grid>
              )
            )}
          </Grid>
        </Grid>
      ) : (
        <Grid
          item
          sm={12}
          md={12}
          lg={12}
          className={classes.multipleOutcomeWrapper}
        >
          <Grid container className={classes.containerWrapper}>
            {outcomeListDetails?.map(
              (ele: IOutcomeListDetails, index: number) => (
                <Grid
                  item
                  md={4}
                  key={index}
                  className={classes.animatedElement}
                >
                  <div className={classes.multipeOutcomeLayout}>
                    <Typography
                      variant="heading-6"
                      customStyle={`${classes.numberIconWrapper} ${
                        classes[`number-text-${ele.textColor}`]
                      }`}
                    >
                      {ele?.count}
                    </Typography>
                    <div className={`${classes.contentWrapper} ${customClass}`}>
                      <Typography
                        variant="heading-3"
                        customStyle={`${classes[`title-${ele.textColor}`]}`}
                      >
                        {ele?.title}
                      </Typography>
                      <Typography
                        variant="heading-3"
                        customStyle={`${classes[`subTitle-${ele.textColor}`]}`}
                      >
                        {ele?.subTitle}
                      </Typography>
                    </div>
                  </div>
                  <div
                    className={`${classes.bottomWrapper} ${
                      classes[`line-${ele.textColor}`]
                    }`}
                  ></div>
                </Grid>
              )
            )}
          </Grid>
        </Grid>
      )}
    </Fragment>
  );
};

export default withIsInView(OutcomeList);

import { Fragment } from "react";
import Grid from "@/components/grid";
import Typography from "@/components/typography";
import { IHiringCard, IChipItems } from "./hiringcard";
import { TimerIcon, LocationIcon } from "@/assets/svgs";
import classes from "./hiringcard.module.scss";
import useWindowUtil from "@/hooks/useWindowUtil";
import { getCustomStyleForExtraSmallDevice } from "@/utils/helpers/common";

const HiringCard = ({
  jobTitle,
  jobDescription,
  jobType,
  jobLocation,
  vacancy,
  handleJobRedirection,
  jobId,
}: IHiringCard) => {
  const { windowDimensions } = useWindowUtil();

  const chipItems = [
    {
      icon: TimerIcon,
      text: jobType,
    },
    {
      icon: LocationIcon,
      text: jobLocation,
    },
  ];

  const customStyleForExtraSmallDevice = getCustomStyleForExtraSmallDevice(
    windowDimensions,
    classes.customStyleForExtraSmallDevice
  );
  return (
    <Fragment>
      <Grid item sm={4} md={8} lg={6} className={classes.gridContainer}>
        <div
          className={classes.hiringCardWrapper}
          onClick={() => handleJobRedirection(jobId)}
        >
          <div className={classes.contentWrapper}>
            <div className={classes.titleWrapper}>
              <Typography variant="body-2" customStyle={classes.title}>
                {jobTitle}
              </Typography>
              <Typography variant="heading-5" customStyle={classes.vacancy}>
                Vacancy : {vacancy}
              </Typography>
            </div>
            <Typography variant="heading-4" customStyle={classes.subTitle}>
              {jobDescription}
            </Typography>
          </div>
          <div className={classes.infoChipWrapper}>
            {chipItems?.map((ele: IChipItems, index: number) => (
              <div
                className={`${classes.chipLayout} ${customStyleForExtraSmallDevice}`}
                key={index}
              >
                <ele.icon />
                <Typography variant="heading-4" customStyle={classes.content}>
                  {ele.text}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Grid>
    </Fragment>
  );
};

export default HiringCard;

import { Fragment } from "react";
import { StepType, StepperProps } from "./stepper";
import classes from "./stepper.module.scss";
import { GreenBackgroundTick } from "@/assets/svgs";
import Typography from "../typography";

const Stepper = (props: StepperProps) => {
  const { activeStep, values, basicHeading, workHeading } = props;
  return (
    <div className={classes.outerWrapper}>
      <div className={classes.stepperWrapper}>
        {values?.map((item: StepType, index: number) => {
          return (
            <Fragment key={index}>
              {index !== values?.length && index >= 1 && (
                <div
                  className={
                    activeStep >= index
                      ? `${classes.progressLine} ${classes.activeLine}`
                      : `${classes.progressLine}`
                  }
                ></div>
              )}
              <div
                className={
                  activeStep >= index
                    ? `${classes.stepCount} ${classes.active}`
                    : `${classes.stepCount}`
                }
              >
                {activeStep > index ? (
                  <GreenBackgroundTick className={classes.whiteTick} />
                ) : (
                  `${item?.text}`
                )}
              </div>
            </Fragment>
          );
        })}
      </div>
      <div className={classes.stepperText}>
        <Typography
          variant="input-label"
          customStyle={
            activeStep == 0 ? classes.activeStep1 : classes.basicDetails
          }
        >
          {basicHeading}
        </Typography>
        <Typography
          variant="input-label"
          customStyle={
            activeStep == 1 ? classes.activeStep2 : classes.workDetails
          }
        >
          {workHeading}
        </Typography>
      </div>
    </div>
  );
};
export default Stepper;

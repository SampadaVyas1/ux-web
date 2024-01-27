import { memo, useCallback, useEffect, useState } from "react";
import Grid from "@/components/grid";
import classes from "./drone.module.scss";
import DroneAnimation from "@/components/drone-animation/index";
import { useRouter } from "next/router";
import { APP_ROUTES } from "@/utils/constants/routes";

const Drone = () => {
  const { pathname } = useRouter();

  return (
    <Grid container>
      <div className={classes.droneContainer}>
        <div className={classes.droneItem}>
          <DroneAnimation
            type={"rightWhiteDrone"}
            classes={classes.rightWhiteDrone}
          />
        </div>
        <div className={classes.droneItem}>
          <DroneAnimation
            type={"rightGreenDrone"}
            classes={classes.rightGreenDrone5}
          />
        </div>
        <div className={classes.droneItem}>
          <DroneAnimation
            type={"rightWhiteDrone"}
            classes={
              pathname === `/${APP_ROUTES.LETS_TALK}`
                ? `${classes.rightWhiteDrone1} ${classes.rightWhiteDrone1InLetsTalk} `
                : classes.rightWhiteDrone1
            }
          />
        </div>
        <div className={classes.droneItem}></div>
        <div className={classes.droneItem}>
          <DroneAnimation
            type={"rightGreenDrone"}
            classes={classes.rightGreenDrone6}
          />
        </div>
        <div className={classes.droneItem}>
          {pathname !== `/${APP_ROUTES.LETS_TALK}` && (
            <DroneAnimation
              type={"rightGreenDrone"}
              classes={classes.rightGreenDrone1}
            />
          )}
        </div>
        <div className={classes.droneItem}>
          <DroneAnimation
            type={"rightGreenDrone"}
            classes={classes.rightGreenDrone4}
          />
        </div>
        <div className={classes.droneItem}></div>
        <div className={classes.droneItem}>
          <DroneAnimation type={"leftPinkDrone"} classes={classes.leftPink} />
        </div>
        <div className={classes.droneItem}>
          <DroneAnimation
            type={"rightGreenDrone"}
            classes={classes.rightGreenDrone3}
          />
        </div>
        <div className={classes.droneItem}>
          {pathname !== `/${APP_ROUTES.LETS_TALK}` && (
            <DroneAnimation
              type={"leftWhiteDrone"}
              classes={classes.leftWhiteDrone}
            />
          )}
        </div>
        <div className={classes.droneItem}></div>
      </div>
    </Grid>
  );
};

export default memo(Drone);

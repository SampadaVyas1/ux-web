import React from "react";
import classes from "./splash.module.scss";
import { SplashLogo } from "@/assets/svgs";

const SplashComponent = () => {
  return (
    <div className={classes.wrapper}>
      <div className={`${classes.container}`}>
        <div className={classes.customStylingForExtraSmallDevice}>
          <SplashLogo />
        </div>
      </div>
    </div>
  );
};

export default SplashComponent;

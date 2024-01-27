import React, { useCallback, useEffect, useState } from "react";
import classes from "./info-counter.module.scss";
import Typography from "../typography";
import { ICounterItem } from "./info-counter";
import TextAnimator from "../text-animator";

const InfoCounterItem = (props: ICounterItem) => {
  const {
    experience,
    icon,
    sideText,
    title,
    startDelay,
    textVariantForTitle,
    textVariantForSideText,
    iconPlace = "beforeText",
    counterSpeed = 10,
  } = props;

  const [count, setCount] = useState<number>(0);
  const [showExperience, setShowExperience] = useState<boolean>(false);
  const [showTitles, setShowTitles] = useState<boolean>(false);

  const startCounter = useCallback(() => {
    setShowExperience(true);

    const interval = setInterval(() => {
      setCount((prevCount) =>
        prevCount >= experience ? experience : prevCount + 1
      );
    }, counterSpeed);

    return () => {
      clearInterval(interval);
    };
  }, [experience, counterSpeed]);

  const handleTextDisplay = useCallback((text: any) => {
    if (text) {
      setShowTitles(true);
      const titleInterval = setInterval(() => {}, 5000);
      return () => clearInterval(titleInterval);
    }
  }, []);

  useEffect(() => {
    const startTimeout = setTimeout(startCounter, startDelay);
    handleTextDisplay(showExperience);
    handleTextDisplay(showTitles);
    return () => clearTimeout(startTimeout);
  }, [startCounter, startDelay, handleTextDisplay, showExperience, showTitles]);

  const showPlus = count >= experience && icon;

  return (
    <div className={classes.infoCounterItem}>
      <div className={classes.experience}>
        {showExperience && (
          <Typography variant={"body-1"} customStyle={classes.experienceLevel}>
            {iconPlace === "beforeText" && showPlus
              ? `${experience}${icon}`
              : count}
          </Typography>
        )}
        {sideText && (
          <TextAnimator
            text={sideText}
            variant={textVariantForSideText ? textVariantForSideText : "body-1"}
            customStylingOnText={`${classes.experienceLevel} ${classes.sideText}`}
          />
        )}
        <Typography variant={"body-1"} customStyle={classes.experienceLevel}>
          {iconPlace === "afterText" && `${icon}`}
        </Typography>
      </div>
      {showTitles && (
        <div className={classes.titleWrapper}>
          <TextAnimator
            text={title}
            variant={textVariantForTitle ? textVariantForTitle : "heading-3"}
            customStylingOnText={classes.title}
          />
        </div>
      )}
    </div>
  );
};

export default InfoCounterItem;

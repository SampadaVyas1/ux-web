import React, { useEffect, useState } from "react";
import classes from "./case-study-solution.module.scss";
import { BulletPoint, BulletPointGray } from "@/assets/svgs";
import { ISolutionDetails, ISolutionKeyPoint } from "./case-study-solution";
import TextAnimator from "@/components/text-animator";
import TextHighlighter from "@/components/text-highlighter";
import Grid from "@/components/grid";
import Typography from "@/components/typography";

const CaseStudySolution = (props: ISolutionDetails) => {
  const {
    title,
    customVariantOnDetails,
    details,
    customVariantOnTitle,
    keyPoints,
  } = props;
  const [toggleBulletIcon, setToggleBulletIcon] = useState<boolean>(false);

  const setIntervalForBlinkingOfBulletIcon = () => {
    const intervalId = setInterval(() => {
      setToggleBulletIcon((prevState) => !prevState);
    }, 1800);

    return intervalId;
  };

  useEffect(() => {
    const intervalId = setIntervalForBlinkingOfBulletIcon();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Grid fullWidth className={classes.solutionContainer}>
      <Grid container className={classes.solutionWrapper}>
        <Grid item sm={4} md={8} lg={6}>
          <Grid container className={classes.content}>
            <Grid item sm={4} md={8} lg={5}>
              <TextAnimator
                text={title}
                fontVariant="light"
                variant={
                  customVariantOnTitle ? customVariantOnTitle : "heading-6"
                }
                customStylingOnText={classes.title}
              />
            </Grid>
            <Grid item sm={4} md={8} lg={5}>
              <TextAnimator
                text={details}
                variant={
                  customVariantOnDetails ? customVariantOnDetails : "body-2"
                }
                customStylingOnText={classes.solutionDescription}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={4} md={8} lg={1} className={classes.spacerColumn}>
          {" "}
        </Grid>
        <Grid item sm={4} md={8} lg={5}>
          <div className={classes.keyPointCard}>
            {!!keyPoints.length &&
              keyPoints?.map((point: ISolutionKeyPoint, idx: number) => {
                return (
                  <div className={classes.bulletPoint} key={idx}>
                    <div className={classes.bulletImage}>
                      {toggleBulletIcon ? <BulletPointGray /> : <BulletPoint />}
                    </div>
                    <Typography
                      variant="body-2"
                      customStyle={classes.keyPoints}
                    >
                      <TextHighlighter
                        text={point.description}
                        textHighlighterKeys={point.highLighterText}
                      />{" "}
                    </Typography>
                  </div>
                );
              })}
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CaseStudySolution;

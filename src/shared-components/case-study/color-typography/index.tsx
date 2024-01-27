import React from "react";
import Grid from "@/components/grid";
import TextAnimator from "@/components/text-animator";
import Typography from "@/components/typography";
import { IColorWithTypography } from "./color-typography";
import classes from "./color-typography.module.scss";

const ColorWithTypography = (props: IColorWithTypography) => {
  const {
    title,
    fontFamilyTitle,
    fontFamilyVariant,
    labelFontWeights,
    colorItemOne,
    colorItemTwo,
    colorItemThree,
    colorItemFour,
  } = props;

  return (
    <Grid fullWidth className={classes.colorTypographyContainer}>
      <Grid container>
        <Grid item lg={12} md={8} sm={4}>
          <TextAnimator
            text={title}
            variant={"heading-6"}
            fontVariant="light"
            customStylingOnText={classes.wrapperContainer}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.cardWrapper}>
        <Grid
          item
          lg={4}
          md={3}
          sm={4}
          className={classes.typographyStylingCard}
        >
          <Typography variant={"body-2"} customStyle={classes.fontFamilyTitle}>
            {fontFamilyTitle}
          </Typography>
          <div className={classes.typographyDetails}>
            <Typography
              variant={"heading-2"}
              customStyle={classes.fontFamilyVariant}
            >
              {fontFamilyVariant}
            </Typography>
            <Typography
              variant={"body-2"}
              customStyle={classes.fontWeightDetails}
            >
              {labelFontWeights}
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          lg={5}
          md={3}
          sm={4}
          className={`${classes.colorItemOne} ${
            classes[`item-background-${colorItemOne.customStyles}`]
          }`}
        >
          <Typography
            variant={"heading-2"}
            customStyle={classes.colorNameOnCard}
          >
            {colorItemOne.colorNameOnCard}
          </Typography>
        </Grid>
        <Grid
          item
          lg={3}
          md={2}
          sm={4}
          className={`${classes.colorItemTwo} ${
            classes[`item-background-${colorItemTwo.customStyles}`]
          }`}
        >
          <Typography
            variant={"heading-2"}
            customStyle={classes.colorNameOnCard}
          >
            {colorItemTwo.colorNameOnCard}
          </Typography>
        </Grid>
        <Grid
          item
          lg={4}
          md={3}
          sm={4}
          className={`${classes.colorItemThree} ${
            classes[`item-background-${colorItemThree.customStyles}`]
          }`}
        >
          <Typography
            variant={"heading-2"}
            customStyle={classes.colorNameOnCard}
          >
            {colorItemThree.colorNameOnCard}
          </Typography>
        </Grid>
        <Grid
          item
          lg={5}
          md={3}
          sm={4}
          className={`${classes.colorItemFour} ${
            classes[`item-background-${colorItemFour.customStyles}`]
          }`}
        >
          <Typography
            variant={"heading-2"}
            customStyle={classes.colorNameOnCard}
          >
            {colorItemFour.colorNameOnCard}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ColorWithTypography;

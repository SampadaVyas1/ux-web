import React from "react";
import Grid from "@/components/grid";
import CustomImage from "@/components/image";
import TextAnimator from "@/components/text-animator";
import { IVisualDesignAndWireframes } from "./case-study-visual-designs";
import classes from "./case-study-visual-designs.module.scss";

const VisualDesignAndWireframes = (props: IVisualDesignAndWireframes) => {
  const { title, imageSrc, customVariantOnTitle } = props;
  return (
    <Grid fullWidth>
      <Grid container className={classes.titlewrapper}>
        <Grid item lg={12} md={8} sm={4}>
          <TextAnimator
            text={title}
            fontVariant="light"
            variant={customVariantOnTitle ? customVariantOnTitle : "heading-6"}
            customStylingOnText={classes.visualDesignAndWireFramesTitle}
          />
        </Grid>
      </Grid>
      <div className={classes.visualDesignAndWireFramesImageContainer}>
        <CustomImage
          src={imageSrc}
          alt={""}
          customClass={classes.visualDesignAndWireFramesImage}
        />
      </div>
    </Grid>
  );
};

export default VisualDesignAndWireframes;

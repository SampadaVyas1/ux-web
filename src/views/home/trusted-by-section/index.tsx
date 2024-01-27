import { Fragment, useContext } from "react";
import Image from "next/image";
import classes from "./trusted-by-section.module.scss";
import Typography from "@/components/typography";
import Grid from "@/components/grid";
import TiltCardComponent from "@/components/cards/tilt-card";
import SlideUpContainer from "@/components/slide-up-container";
import withIsInView from "@/hocs/isInView";
import { ITrustedByItem } from "./trusted-by-section";
import { trustedByData } from "../contents/trusted-by.data";
import TextAnimator from "@/components/text-animator";
import { useRouter } from "next/router";
import { MouseContext } from "@/context/mouseContext/mouseContext";
import { CURSOR_TYPE } from "@/components/big-circle-cursor/cursor-type.helper";

const TrustedBySection = () => {
  const { items, heading } = trustedByData;
  const { push } = useRouter();
  const { cursorChangeHandler } = useContext(MouseContext);

  const readHandler = (link: string) => {
    link && push(link);
  };
  const onEnter = () => {
    cursorChangeHandler(CURSOR_TYPE.NOCUSTOMCURSOR);
  };
  const onLeave = () => {
    cursorChangeHandler(CURSOR_TYPE.DOTCURSOR);
  };

  const renderCustomButton = () => {
    return (
      <Typography variant={"input-label"} customStyle={classes.cursorText}>
        Read
      </Typography>
    );
  };
  return (
    <Fragment>
      <Grid fullWidth className={classes.heading}>
        <TextAnimator variant="heading-1" text={heading} />
      </Grid>
      <Grid fullWidth>
        <Grid container fullWidth className={classes.containerWrapper}>
          {items?.length &&
            items.map((item: ITrustedByItem, index: number) => (
              <Grid
                key={index}
                item
                sm={4}
                md={index === 0 ? 4 : 2}
                lg={index === 0 ? 6 : 3}
                className={classes.cardWrapper}
              >
                <SlideUpContainer>
                  <TiltCardComponent
                    isCustomBtn={true}
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    tiltCustomButton={renderCustomButton()}
                    image={item.tiltCard.image}
                    textOnImage={item.tiltCard.textOnImage}
                    onClick={() =>
                      item?.tiltCard?.link && readHandler(item?.tiltCard?.link)
                    }
                    className={classes.customTiltCard}
                    customStylingOnImage={classes.customStylingOnImage}
                    customStyleImageContainer={classes.customImageContainer}
                    customStyleOnImageText={
                      item.tiltCard?.customStyleOnImageText
                        ? classes[item.tiltCard?.customStyleOnImageText]
                        : ""
                    }
                  />
                  <div className={`${classes.logoContainer}`}>
                    <Image
                      src={item.logo}
                      alt="logo"
                      className={`${classes.logo}`}
                    />
                  </div>
                </SlideUpContainer>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default withIsInView(TrustedBySection);

import { Fragment, useContext, useState, useEffect } from "react";
import classes from "./work-highlights.module.scss";
import { IScrollComponent } from "./work-highlights";
import ImageSlider from "@/components/carousel/vertical-image-slider";
import ScrollText from "@/components/vertical-scroll-text";
import Grid from "@/components/grid";
import { APP_ROUTES } from "@/utils/constants/routes";
import { useRouter } from "next/router";
import BigCircleCursor from "@/components/big-circle-cursor";
import { TiltCardComponent } from "@/components/cards";
import Button from "@/components/button";
import { MouseContext } from "@/context/mouseContext/mouseContext";
import { CURSOR_TYPE } from "@/components/big-circle-cursor/cursor-type.helper";
import Typography from "@/components/typography";

const ScrollComponent = (props: IScrollComponent) => {
  const { clientHighlights } = props;
  const [isVisible, setIsVisible] = useState(false);

  const { cursorChangeHandler } = useContext(MouseContext);
  const { push } = useRouter();
  const handleNavigation = () => {
    cursorChangeHandler(CURSOR_TYPE.DOTCURSOR);
    push(`/${APP_ROUTES.WORK}`);
  };

  const checkVisibility = () => {
    const scrollY = window.scrollY;
    const shouldBeVisible = scrollY >= 30;
    setIsVisible(shouldBeVisible);
  };

  const onClick = (url: string) => {
    push(url);
  };

  const renderCustomButton = () => {
    return (
      <Typography variant={"input-label"} customStyle={classes.cursorText}>
        Read
      </Typography>
    );
  };

  const onEnter = () => {
    cursorChangeHandler(CURSOR_TYPE.NOCUSTOMCURSOR);
  };
  const onLeave = () => {
    cursorChangeHandler(CURSOR_TYPE.DOTCURSOR);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return isVisible ? (
    <Fragment>
      <Grid fullWidth className={classes.scrollComponent}>
        <ScrollText clientHighlights={clientHighlights} onClick={onClick} />
        <TiltCardComponent
          tiltCustomButton={renderCustomButton()}
          onMouseEnter={onEnter}
          onMouseLeave={onLeave}
          isCustomBtn={true}
          className={classes.tiltcardWrapperImageSlider}
          customStyleImageContainer={classes.containerImage}
        >
          <ImageSlider clientHighlights={clientHighlights} onClick={onClick} />
        </TiltCardComponent>
        <div className={classes.viewBtnWrapper}>
          <BigCircleCursor
            className={classes.viewBtn}
            onClick={handleNavigation}
          >
            <Button className={classes.customBtn}>View All</Button>
          </BigCircleCursor>
        </div>
      </Grid>
    </Fragment>
  ) : null;
};

export default ScrollComponent;

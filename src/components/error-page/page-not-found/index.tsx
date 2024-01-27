import { useContext } from "react";
import Grid from "@/components/grid";
import { PageError } from "@/assets/svgs";
import Typography from "@/components/typography";
import classes from "./page-not-found.module.scss";
import BigCircleCursor from "@/components/big-circle-cursor";
import Button from "@/components/button";
import { MouseContext } from "@/context/mouseContext/mouseContext";
import { APP_ROUTES } from "@/utils/constants/routes";
import { useRouter } from "next/router";
import { CURSOR_TYPE } from "@/components/big-circle-cursor/cursor-type.helper";
import { pageContent } from "./page-not-found.helper";
import TrackLines from "@/components/drone-animation/track-lines";

const PageNotFound = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  const { push } = useRouter();
  const handleNavigation = () => {
    cursorChangeHandler(CURSOR_TYPE.DOTCURSOR);
    push(`/${APP_ROUTES.HOME}`);
  };

  return (
    <Grid fullWidth className={classes.outerWrapper}>
      <TrackLines height="80%" customGridClass="formGrids">
        <div className={classes.wrapper}>
          <PageError />
          <div className={classes.content}>
            <Typography
              variant="heading-2"
              fontVariant="light"
              customStyle={classes.title}
            >
              {pageContent.title}
            </Typography>
            <Typography
              variant="body-2"
              fontVariant="light"
              customStyle={classes.description}
            >
              {pageContent.description.map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </Typography>
          </div>

          <BigCircleCursor onClick={handleNavigation}>
            <Button className={classes.backBtn}>
              <Typography
                variant="button-text"
                customStyle={classes.btnText}
                fontVariant="bold"
              >
                {pageContent.buttonTxt}
              </Typography>
            </Button>
          </BigCircleCursor>
        </div>
      </TrackLines>
    </Grid>
  );
};

export default PageNotFound;

import { useMemo, memo, useState, useContext, useCallback } from "react";
import Grid from "@/components/grid";
import Typography from "@/components/typography";
import CustomVideo from "@/components/video";
import CustomImage from "@/components/image";
import { InfoCounterWithMinHeight } from "@/components/info-counter";
import InfoCard from "@/components/cards/info-card";
import withContainer from "@/hocs/withContainer";
import { IHeroProps } from "./hero-section";
import classes from "./hero-section.module.scss";
import TrackLines from "@/components/drone-animation/track-lines";
import CustomReadCursor from "@/components/custom-read-cursor";
import { useRouter } from "next/router";
import { CURSOR_TYPE } from "@/components/big-circle-cursor/cursor-type.helper";
import { MouseContext } from "@/context/mouseContext/mouseContext";

const HeroSection = (props: IHeroProps) => {
  const {
    heading,
    videoSrc = "",
    cardContent,
    infoCounterList,
    customClass,
    customImageClass,
    getPlayingInfo,
    contentCustomClass,
    customTitleClass,
    customImageContainerClass,
    customInfoClass,
    isReadCursorEnable = false,
    url,
    customInfoCounterClass,
  } = props;

  const [isHovered, setIsHovered] = useState(false);
  const { push } = useRouter();
  const { cursorChangeHandler } = useContext(MouseContext);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    cursorChangeHandler(CURSOR_TYPE.NOCUSTOMCURSOR);
  }, [cursorChangeHandler]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    cursorChangeHandler(CURSOR_TYPE.DOTCURSOR);
  }, [cursorChangeHandler]);

  const handleOnClick = useCallback(
    (url: string) => {
      push(url);
    },
    [push]
  );

  const renderCustomButton = () => {
    return (
      <Typography variant={"input-label"} customStyle={classes.cursorText}>
        Read
      </Typography>
    );
  };

  const getChildComponent = useMemo(() => {
    if (videoSrc) {
      return (
        <CustomVideo
          className={classes.videoContainer}
          src={videoSrc}
          getPlayingInfo={getPlayingInfo}
          customClassOnvideoPlayer={classes.videoPlayer}
        />
      );
    } else {
      return (
        <Grid container className={classes.cardContainer}>
          <Grid
            item
            sm={4}
            className={`${classes.card1} ${isHovered && classes.isCardHovered}`}
          >
            <InfoCard
              className={`${classes.infoCard} ${customInfoClass}`}
              title={cardContent?.infoCard.title ?? ""}
              content={cardContent?.infoCard.content ?? ""}
              onMouseEnter={() => url && handleMouseEnter()}
              onMouseLeave={() => url && handleMouseLeave()}
              onClick={() => url && handleOnClick(url)}
            />
          </Grid>
          <Grid
            item
            sm={4}
            className={`${classes.card2} ${customImageContainerClass} ${
              isHovered && classes.isCardHovered
            }`}
          >
            <CustomImage
              src={cardContent?.imageSrc ?? ""}
              alt="heroBanner"
              shape="roundedSquare"
              customClass={`${classes.cardImage} ${customImageClass}`}
              onMouseEnter={() => url && handleMouseEnter()}
              onMouseLeave={() => url && handleMouseLeave()}
              onClick={() => url && handleOnClick(url)}
            />
          </Grid>

          {infoCounterList && (
            <InfoCounterWithMinHeight
              customClass={customInfoCounterClass}
              info={infoCounterList ?? []}
            />
          )}
        </Grid>
      );
    }
  }, [
    videoSrc,
    getPlayingInfo,
    isHovered,
    customInfoClass,
    cardContent?.infoCard.title,
    cardContent?.infoCard.content,
    cardContent?.imageSrc,
    customImageContainerClass,
    customImageClass,
    infoCounterList,
    customInfoCounterClass,
    url,
    handleMouseEnter,
    handleMouseLeave,
    handleOnClick,
  ]);
  return (
    <Grid fullWidth>
      <TrackLines width="100%" customGridClass="formGrids">
        <Grid
          container
          className={`${classes.componentWrapper} ${
            videoSrc && classes.resetBottomPadding
          } ${customClass}`}
        >
          <Grid fullWidth className={`${classes.heading} ${customTitleClass}`}>
            <Typography variant="heading-1" customStyle={classes.title}>
              {heading}
            </Typography>
          </Grid>
          <Grid
            fullWidth
            className={`${classes.contentWrapper} ${contentCustomClass}`}
          >
            {getChildComponent}
          </Grid>
        </Grid>
      </TrackLines>
      {isReadCursorEnable && (
        <CustomReadCursor
          isCustomBtn={true}
          isHovered={isHovered}
          customButton={renderCustomButton()}
        />
      )}
    </Grid>
  );
};

export default memo(withContainer(HeroSection));

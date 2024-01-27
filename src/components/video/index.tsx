import React, {
  Fragment,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { IVideoProps } from "./video";
import Grid from "@/components/grid";
import { VideoIcon, VideoIconMob, VideoIconTab } from "@/assets/svgs";
import { CONTENT_TYPES } from "@/utils/constants/common";
import useWindowUtil from "@/hooks/useWindowUtil";
import { DeviceType } from "@/utils/enum";
import classes from "./video.module.scss";

const CustomVideo = ({
  src,
  controls = false,
  className,
  getPlayingInfo,
  customClassOnvideoPlayer,
}: IVideoProps) => {
  const videoRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const { deviceType } = useWindowUtil();
  const isMobileDevice = deviceType === DeviceType.MOBILE;
  const isTabDevice = deviceType === DeviceType.TAB;

  const togglePlay = () => {
    const video = videoRef?.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      getPlayingInfo?.(true);
    } else {
      video.pause();
      setIsPlaying(false);
      getPlayingInfo?.(false);
    }
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (
        videoRef?.current &&
        !videoRef?.current?.contains(event?.target as any)
      ) {
        videoRef?.current?.pause();
        setIsPlaying(false);
        getPlayingInfo?.(false);
      }
      return;
    },
    [videoRef, getPlayingInfo]
  );

  useEffect(() => {
    window.addEventListener("click", handleClickOutside, true);
    return () => {
      window.removeEventListener("click", handleClickOutside, true);
    };
  }, [videoRef, handleClickOutside]);

  return (
    <Grid item sm={4} md={8} lg={12} className={className}>
      <div className={classes.videoContainer}>
        <video
          ref={videoRef}
          className={`${classes.videoPlayer} ${customClassOnvideoPlayer} ${
            isPlaying ? classes.activeVideo : ""
          }`}
          controls={controls}
          onClick={togglePlay}
        >
          <source src={src} type={CONTENT_TYPES?.video} />
        </video>
        {!isPlaying && (
          <div className={classes.overlayDiv} onClick={togglePlay} />
        )}
        {!controls && !isPlaying && (
          <Fragment>
            {isMobileDevice ? (
              <VideoIconMob className={classes.mobIcon} onClick={togglePlay} />
            ) : isTabDevice ? (
              <VideoIconTab className={classes.icon} onClick={togglePlay} />
            ) : (
              <VideoIcon className={classes.icon} onClick={togglePlay} />
            )}
          </Fragment>
        )}
      </div>
    </Grid>
  );
};

export default CustomVideo;

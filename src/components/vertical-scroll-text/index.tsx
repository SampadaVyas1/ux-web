import { useEffect, useRef, useState, Fragment, useContext } from "react";
import classes from "./scroll.module.scss";
import { IText, IScrollComponent } from "./scroll";
import Typography from "@/components/typography";
import useWindowUtil from "@/hooks/useWindowUtil";
import { DeviceType } from "@/utils/enum";
import { getCustomStyleForExtraSmallDevice } from "@/utils/helpers/common";
import CustomReadCursor from "../custom-read-cursor";
import { MouseContext } from "@/context/mouseContext/mouseContext";
import { CURSOR_TYPE } from "../big-circle-cursor/cursor-type.helper";

const ScrollText = (props: IScrollComponent) => {
  const { clientHighlights, onClick } = props;
  const containerRef = useRef<any>(null);
  const highlightedContainerRef = useRef<any>(null);
  const [activeIndex, updateActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { cursorChangeHandler } = useContext(MouseContext);

  const { deviceType, windowDimensions } = useWindowUtil();
  const isMobileOrTabDevice = deviceType === DeviceType.MOBILE;

  const customStyleForExtraSmallDevice = getCustomStyleForExtraSmallDevice(
    windowDimensions,
    classes.subText
  );
  const handleOnclick = (url: string) => {
    onClick && onClick(url);
  };

  const renderCustomButton = () => {
    return (
      <Typography variant={"input-label"} customStyle={classes.cursorText}>
        Read
      </Typography>
    );
  };

  useEffect(() => {
    const currentContainerRef = highlightedContainerRef?.current;
    if (currentContainerRef) {
      currentContainerRef?.classList.add(classes.active1);
    }
    const updateInterval = setTimeout(
      () => {
        updateActiveIndex(
          (prevState) => (prevState + 1) % clientHighlights?.length
        );
      },
      (15 / clientHighlights?.length) * 1000
    );
    return () => {
      clearTimeout(updateInterval);
      currentContainerRef?.classList.remove(classes.active1);
    };
  }, [activeIndex, clientHighlights]);

  return (
    <Fragment>
      <div
        className={`${classes.textContainer} ${customStyleForExtraSmallDevice}`}
        ref={containerRef}
        onMouseEnter={() => {
          setIsHovered(true);
          cursorChangeHandler(CURSOR_TYPE.NOCUSTOMCURSOR);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          cursorChangeHandler(CURSOR_TYPE.DOTCURSOR);
        }}
      >
        {clientHighlights?.length &&
          clientHighlights?.map((element: IText, index: number) => {
            const { title, description } = element;

            return (
              <div
                key={index}
                className={`${classes.carouselItem} 
                ${index === activeIndex && classes.active}
                  `}
                onClick={() => handleOnclick(clientHighlights[index]?.url)}
              >
                <Typography variant="heading-2" customStyle={classes.title}>
                  {title}
                </Typography>
                <Typography variant="body-2" customStyle={classes.description}>
                  {description}
                </Typography>
              </div>
            );
          })}
      </div>
      {isMobileOrTabDevice ? (
        <div className={classes.separator}>
          {clientHighlights?.map((element: IText, idx: number) => {
            return (
              <div
                key={idx}
                className={
                  idx == activeIndex
                    ? `${classes.activeSep}`
                    : `${classes.inactiveSep}`
                }
              ></div>
            );
          })}
        </div>
      ) : null}
      <CustomReadCursor
        isCustomBtn={true}
        isHovered={isHovered}
        customButton={renderCustomButton()}
      />
    </Fragment>
  );
};
export default ScrollText;

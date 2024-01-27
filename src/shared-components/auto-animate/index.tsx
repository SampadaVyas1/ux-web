import {
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import classes from "./auto-animate.module.scss";
import { PolygonIcon } from "@/assets/svgs";
import Grid from "@/components/grid";
import useTypewriter from "@/hooks/useTypewriter";
import SlideUpContainer from "@/components/slide-up-container";

const AutoAnimate = ({
  className = "",
  children,
  leftInfoText,
  rightInfoText,
  customClassesOnCardContainer,
}: {
  className?: string;
  children: ReactNode;
  leftInfoText: string;
  rightInfoText: string;
  customClassesOnCardContainer?: string;
}) => {
  const [isFinalState, setIsFinalState] = useState(false);
  const [showBorder, setShowBorder] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [showInfoBox, setShowInfoBox] = useState(false);
  const leftInfo = useTypewriter(leftInfoText, showInfoBox);
  const rightInfo = useTypewriter(rightInfoText, showInfoBox);
  const [childContainerHeight, updateChildContainerHeightToParent] =
    useState(0);

  const timeout = (delay: number) =>
    new Promise((resolve) => setTimeout(resolve, delay));

  const startAndProcessAnimation = useCallback(async () => {
    //show border
    const delay1 = 1000;
    await timeout(delay1);
    setShowBorder(true);
    //show cursor
    const delay2 = 200;
    await timeout(delay2);
    setShowCursor(true);
    //start animation
    const delay3 = 300; // time after animation start
    await timeout(delay3);
    setIsFinalState(true);
    //transition time  (if changed here need to be change in css module as)
    const delay4 = 2000;
    await timeout(delay4);
    //show info box and do needful animation
    setShowInfoBox(true);
    //time for text animation
    const delay5 = 1300;
    await timeout(delay5);
    //back to initialState
    setIsFinalState(false);
  }, []);

  useEffect(() => {
    startAndProcessAnimation();
  }, [startAndProcessAnimation]);

  const getFinalClass = (circle: string) => {
    return (isFinalState && classes[`${circle}Final`]) || "";
  };
  const getBorderClass = useMemo(() => {
    return `${classes.border} 
    ${classes.borderInitial} 
    ${isFinalState && classes.borderFinal}`;
  }, [isFinalState]);
  const getPolygonClass = useMemo(() => {
    return `${classes.polygon}
    ${showBorder && classes.polygonBg}
    ${classes.polygonInitial} 
    ${isFinalState && classes.polygonFinal}`;
  }, [isFinalState, showBorder]);

  const getCircle = (circle: string) => {
    return (
      showBorder && (
        <div
          className={`${classes.commonCircle} ${
            classes[circle]
          } ${getFinalClass(circle)}`}
        />
      )
    );
  };

  const getCursor = (customClass: string, isRightCursor = false) => {
    return (
      showCursor && (
        <div
          className={`${classes.cursor} ${classes[customClass]} ${getFinalClass(
            customClass
          )}`}
        >
          <PolygonIcon className={(isRightCursor && classes.invert) || ""} />
        </div>
      )
    );
  };
  const getInfoBox = (
    customClass: string,
    text: string,
    isRightBox = false
  ) => {
    return (
      showInfoBox && (
        <div
          className={`${classes.info} ${classes[customClass]}
          ${getFinalClass(customClass)}
          ${isRightBox && classes.infoRightBg} `}
        >
          {text}
        </div>
      )
    );
  };

  return (
    <Grid
      fullWidth
      className={`${classes.componentWrapper} ${
        showInfoBox && classes.mt24
      } ${className}`}
      fullWidthStyle={{ height: `${childContainerHeight}px` }}
    >
      {showBorder && <div className={getBorderClass} />}
      {showBorder && (
        <div className={`${getBorderClass} ${classes.horizontalBorder}`} />
      )}
      <div className={getPolygonClass}>
        <SlideUpContainer
          updateChildContainerHeightToParent={
            updateChildContainerHeightToParent
          }
        >
          <Grid
            container
            className={`${classes.cardContainer} ${customClassesOnCardContainer}`}
          >
            {children}
          </Grid>
        </SlideUpContainer>
      </div>

      {/* all four pointer on corners */}
      {getCircle("topLeft")}
      {getCircle("topRight")}
      {getCircle("bottomRight")}
      {getCircle("bottomLeft")}

      {/* left and right cursor */}
      {getCursor("cursorLeft")}
      {getCursor("cursorRight", true)}

      {/* left and right info card */}
      {getInfoBox("infoLeft", leftInfo)}
      {getInfoBox("infoRight", rightInfo, true)}
    </Grid>
  );
};

export default memo(AutoAnimate);

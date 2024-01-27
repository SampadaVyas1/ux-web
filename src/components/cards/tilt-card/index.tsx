import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import Image from "next/image";
import { ITiltCardComponent } from "./tilt-card";
import Typography from "../../typography";
import {
  updateCursorWithMousePosition,
  handleMouseMove,
} from "@/utils/helpers/mouse-animation";
import classes from "./tilt-card.module.scss";
import useWindowUtil from "@/hooks/useWindowUtil";
import { DeviceType } from "@/utils/enum";

const defaultOptions = {
  reverse: true,
  max: 22, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const TiltCardComponent = (props: ITiltCardComponent) => {
  const {
    image,
    textOnImage,
    className,
    customStylingOnImage,
    onClick,
    imageVariant,
    customStyleOnImageText,
    tiltCustomButton,
    isCustomBtn = false,
    children,
    customStyleImageContainer,
    customGradientClass,
    customStylingOnTiltCard,
    isTiltCard = true,
    ...restProps
  } = props;

  const cursorPointerRef = useRef<HTMLImageElement>(null);
  const targetElementRef = useRef<HTMLDivElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [corner, setCorner] = useState<string>();
  const { deviceType } = useWindowUtil();
  const isdeskTopDevice = deviceType === DeviceType.DESKTOP;

  const readOnClickFunction = () => {
    onClick?.();
  };
  const mousePosition = useMemo(
    () => ({
      mouseX: 0,
      mouseY: 0,
    }),
    []
  );
  const pointPosition = useMemo(
    () => ({
      mouseX: 0,
      mouseY: 0,
    }),
    []
  );

  const isCursorNearCorner = (event: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const cursorX = (event.clientX - bounds.left) / bounds.width;
    const cursorY = (event.clientY - bounds.top) / bounds.height;

    const isCursorNearCorner =
      (cursorX < 0.1 || cursorX > 0.9) && (cursorY < 0.2 || cursorY > 0.8);

    if (isCursorNearCorner) {
      const corner =
        cursorX > 0.5
          ? cursorY > 0.5
            ? "bottom-right"
            : "top-right"
          : cursorY > 0.5
          ? "bottom-left"
          : "top-left";
      setCorner(corner);
    } else {
      if (cursorX > 0.6 && cursorY > 0.1) {
        setCorner("right");
      } else if (cursorX < 0.4 && cursorY > 0.1) {
        setCorner("left");
      } else if (cursorX > 0.1 && cursorY < 0.4) {
        setCorner("top");
      } else if (cursorX > 0.1 && cursorY > 0.6) {
        setCorner("bottom");
      } else {
        setCorner("center");
      }
    }
  };

  const updatedCursorPointer = useCallback(() => {
    if (targetElementRef.current) {
      updateCursorWithMousePosition(targetElementRef.current, mousePosition);
    }
  }, [mousePosition]);

  const mouseMoveHandler = useCallback(
    (e: any) => {
      const { scrollTop = 0 } = document.getElementById(
        "parallaxWrapper"
      ) as HTMLElement;
      handleMouseMove(e, mousePosition, pointPosition, targetElementRef, {
        scrollX: 0,
        scrollY: scrollTop,
      });
    },
    [mousePosition, pointPosition]
  );
  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
    updatedCursorPointer();
    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, [mouseMoveHandler, mousePosition, pointPosition, updatedCursorPointer]);

  return (
    <div
      className={
        className
          ? `${className} ${classes.tiltCardContainer}`
          : classes.tiltCardContainer
      }
      {...restProps}
    >
      {isTiltCard ? (
        <Tilt
          options={defaultOptions}
          className={`${classes.tiltBoxWrap} ${customStylingOnTiltCard}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setCorner("");
          }}
          onMouseMove={isCursorNearCorner}
        >
          <>
            {children ? (
              <div
                className={`${classes.gradientEffect}  ${customGradientClass}`}
                data-corner={corner || ""}
              >
                <div className={customStyleImageContainer}>{children}</div>
              </div>
            ) : (
              <div
                className={`${classes.gradientEffect}`}
                data-corner={corner || ""}
              >
                <div
                  className={`${classes.imageContainer} ${customStyleImageContainer}`}
                  onClick={readOnClickFunction}
                >
                  <Image
                    src={image}
                    alt=""
                    className={`${classes.cardImage} ${customStylingOnImage}`}
                  />
                  {textOnImage && (
                    <Typography
                      variant={imageVariant ? imageVariant : "heading-2"}
                      customStyle={
                        customStyleOnImageText
                          ? `${customStyleOnImageText} ${classes.imageText}`
                          : classes.imageText
                      }
                    >
                      {textOnImage}
                    </Typography>
                  )}
                </div>
              </div>
            )}
          </>
        </Tilt>
      ) : (
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`${classes.tiltBoxWrap} ${customStylingOnTiltCard}`}
        >
          {children}
        </div>
      )}
      <div
        ref={targetElementRef}
        data-amt="0.20"
        className={`${classes.cursor}`}
      >
        {isdeskTopDevice && isHovered && isCustomBtn && (
          <div ref={cursorPointerRef} className={classes.cursorCircle}>
            {tiltCustomButton}
          </div>
        )}
      </div>
    </div>
  );
};
export default memo(TiltCardComponent);

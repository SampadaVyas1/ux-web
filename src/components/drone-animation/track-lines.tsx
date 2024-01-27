import React, { useRef, useEffect, useState, useCallback } from "react";
import { ITrackLinesProps } from "./track-line";
import classes from "@/pages/globals.module.scss";
import droneAnimClasses from "./drone.module.scss";
import useWindowUtil from "@/hooks/useWindowUtil";
import { DeviceType } from "@/utils/enum";

const TrackLines = (props: ITrackLinesProps) => {
  const childCompRef = useRef<HTMLDivElement>(null);
  const {
    customWrapperClass,
    children,
    customGridClass,
    width,
    height,
    customOpacity,
  } = props;
  const { deviceType } = useWindowUtil();
  const isMobileDevice = deviceType === DeviceType.MOBILE;
  const isTabDevice = deviceType === DeviceType.TAB;
  const [numGridItems, setNumGridItems] = useState(12);
  const [childCompHeight, updateChildCompHeight] = useState(0);
  const droneCustomClass = customGridClass || "";

  useEffect(() => {
    setNumGridItems(isMobileDevice ? 4 : isTabDevice ? 8 : 12);
  }, [isMobileDevice, isTabDevice, numGridItems]);
  useEffect(() => {
    childCompRef?.current &&
      childCompRef?.current?.clientHeight > 0 &&
      updateChildCompHeight(childCompRef?.current?.clientHeight);
  }, [childCompRef?.current?.clientHeight]);

  const heightSetter = useCallback(() => {
    childCompRef?.current &&
      childCompRef?.current?.clientHeight > 0 &&
      childCompRef?.current?.clientHeight != childCompHeight &&
      updateChildCompHeight((currentVal) =>
        currentVal == childCompRef?.current?.clientHeight
          ? currentVal
          : childCompRef?.current?.clientHeight ?? 0
      );
  }, [childCompHeight]);
  useEffect(() => {
    heightSetter();
    window.addEventListener("scroll", heightSetter);
    return () => {
      window.removeEventListener("scroll", heightSetter);
    };
  }, [heightSetter]);

  const gridItems = Array.from({ length: numGridItems }, (_, index) => (
    <div
      key={index}
      className={`${classes.droneItem} ${classes[droneCustomClass]}`}
    >
      {Array.from({ length: 2 }, (_, imageIndex) => (
        <span
          className={classes.line}
          key={imageIndex}
          style={{
            height: `${childCompHeight}px`,
            opacity: `${customOpacity ?? "0.4"}`,
          }}
        />
      ))}
    </div>
  ));

  return (
    <div
      className={`${droneAnimClasses.trackLineWrapper} ${
        customWrapperClass || ""
      }`}
    >
      <div
        className={`${classes.lineWrapper}`}
        style={{
          width: width,
        }}
      >
        {gridItems}
      </div>
      <div
        className={droneAnimClasses.trackLineChildWrapper}
        ref={childCompRef}
      >
        {children}
      </div>
    </div>
  );
};

export default TrackLines;

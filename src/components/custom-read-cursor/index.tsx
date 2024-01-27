import React from "react";
import { useCallback, useEffect, useMemo, useRef } from "react";
import {
  updateCursorWithMousePosition,
  handleMouseMove,
} from "@/utils/helpers/mouse-animation";
import useWindowUtil from "@/hooks/useWindowUtil";
import { DeviceType } from "@/utils/enum";
import classes from "./custom-read-cursor.module.scss";
import { ICustomReadCursor } from "./custom-read-cursor";

const CustomReadCursor = (props: ICustomReadCursor) => {
  const { isCustomBtn, customButton, isHovered } = props;
  const targetElementRef = useRef<HTMLDivElement | null>(null);
  const cursorPointerRef = useRef<HTMLImageElement>(null);
  const { deviceType } = useWindowUtil();
  const isdeskTopDevice = deviceType === DeviceType.DESKTOP;

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

  const updatedCursorPointer = useCallback(() => {
    if (targetElementRef.current) {
      updateCursorWithMousePosition(targetElementRef.current, mousePosition);
    }
  }, [mousePosition]);

  const mouseMoveHandler = useCallback(
    (e: MouseEvent) => {
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
    <div ref={targetElementRef} data-amt="0.20" className={`${classes.cursor}`}>
      {isdeskTopDevice && isHovered && isCustomBtn && (
        <div ref={cursorPointerRef} className={classes.cursorCircle}>
          {customButton}
        </div>
      )}
    </div>
  );
};

export default CustomReadCursor;

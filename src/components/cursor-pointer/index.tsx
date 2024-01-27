import { useCallback, useContext, useEffect, useRef } from "react";
import classes from "./cursor-pointer.module.scss";
import { MouseContext } from "@/context/mouseContext/mouseContext";
import {
  updateCursorWithMousePosition,
  handleMouseMove,
} from "@/utils/helpers/mouse-animation";
import { CURSOR_TYPE } from "../big-circle-cursor/cursor-type.helper";

const mousePosition = {
  mouseX: 0,
  mouseY: 0,
};

const pointPosition = {
  mouseX: 0,
  mouseY: 0,
};

const CursorPointer = () => {
  const cursorCircle = useRef<HTMLDivElement | null>(null);
  const cursorDot = useRef<HTMLDivElement | null>(null);
  const { cursorType } = useContext(MouseContext);

  const updatedCursorPosition = useCallback(() => {
    if (cursorCircle.current && cursorDot.current) {
      updateCursorWithMousePosition(cursorCircle.current, mousePosition);
      updateCursorWithMousePosition(cursorDot.current, mousePosition);
    }
  }, [cursorCircle, cursorDot]);

  const handleMouseEvent = useCallback((e: any) => {
    handleMouseMove(e, mousePosition, pointPosition, cursorDot);
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseEvent);
    updatedCursorPosition();
    return () => {
      window.removeEventListener("mousemove", handleMouseEvent);
    };
  }, [handleMouseEvent, updatedCursorPosition]);

  return (
    <div>
      <div
        ref={cursorCircle}
        data-amt="0.15"
        className={
          cursorType === CURSOR_TYPE.BIGCIRCLE
            ? `${classes.cursorCircle} ${classes.bigCircle}`
            : cursorType === CURSOR_TYPE.DOTCURSOR
            ? classes.cursorCircle
            : classes.cursorDotNone
        }
      />
      <div
        ref={cursorDot}
        data-amt="0.20"
        className={
          cursorType === CURSOR_TYPE.BIGCIRCLE
            ? classes.cursorDotNone
            : cursorType === CURSOR_TYPE.DOTCURSOR
            ? classes.cursorDot
            : classes.cursorDotNone
        }
      />
    </div>
  );
};

export default CursorPointer;

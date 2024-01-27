import React, { ReactNode, useContext } from "react";
import { MouseContext } from "@/context/mouseContext/mouseContext";
import { IBigCircleCursorProps } from "./big-circle-cursor";
import { CURSOR_TYPE } from "./cursor-type.helper";

const DivElem = (props: {
  children?: ReactNode;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
}) => <div {...props}>{props?.children}</div>;

const BigCircleCursor = ({
  Element,
  children,
  ...props
}: IBigCircleCursorProps) => {
  const { cursorChangeHandler, cursorType } = useContext(MouseContext);

  const handleMouseEnter = () => {
    if (cursorType != CURSOR_TYPE.BIGCIRCLE) {
      cursorChangeHandler(CURSOR_TYPE.BIGCIRCLE);
    }
  };

  const handleMouseLeave = () => cursorChangeHandler(CURSOR_TYPE.DOTCURSOR);

  let ElementComp = Element || DivElem;

  return (
    <ElementComp
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </ElementComp>
  );
};

export default BigCircleCursor;

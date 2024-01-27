import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import classes from "./slide-up-container.module.scss";
const SlideUpContainer = ({
  children,
  updateChildContainerHeightToParent,
}: {
  children: ReactNode;
  updateChildContainerHeightToParent?: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  const updateHeightFromRef = useCallback(() => {
    if (ref?.current) {
      setTimeout(() => {
        setHeight(ref?.current?.clientHeight ?? 0);
        updateChildContainerHeightToParent?.(ref?.current?.clientHeight);
      }, 0);
    }
  }, [ref, updateChildContainerHeightToParent]);

  useEffect(() => {
    if (ref?.current?.clientHeight) {
      updateHeightFromRef();
    }
    window.addEventListener("resize", updateHeightFromRef);
    return () => {
      window.removeEventListener("resize", updateHeightFromRef);
    };
  }, [updateHeightFromRef, ref?.current?.clientHeight]);

  return (
    <div className={classes.slideUpWrapper} style={{ height: height }}>
      <div className={classes.SlideUpContainer} ref={ref}>
        {children}
      </div>
    </div>
  );
};

export default SlideUpContainer;

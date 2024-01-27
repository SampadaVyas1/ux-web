import { ReactNode, memo } from "react";
import classes from "./container.module.scss";

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={`${classes.containerWrapper} ${className || ""}`}>
      {children}
    </div>
  );
};

export default memo(Container);

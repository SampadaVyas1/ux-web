import { useState, useEffect, cloneElement } from "react";
import classes from "./button.module.scss";
import { IButtonProps, IStartIconProps } from "./button";

const Button = ({
  className,
  onClick,
  startIconProps,
  children,
  variant = "primary",
  type = "submit",
  ...rest
}: IButtonProps) => {
  const [isIconInitialized, updateIconState] = useState(false);

  const StartIcon = (props: Omit<IStartIconProps, "element">) =>
    startIconProps?.element && cloneElement(startIconProps?.element, props);
  useEffect(() => {
    updateIconState(true);
    return () => {
      updateIconState(false);
    };
  }, [startIconProps?.element]);

  return (
    <button
      type={type}
      className={`${classes.btn} ${className || ""} ${classes[`${variant}`]}`}
      onClick={onClick}
      {...rest}
    >
      <div className={classes.btnContentWrapper}>
        {!!isIconInitialized && (
          <StartIcon className={startIconProps?.className || ""} />
        )}
        {children}
      </div>
    </button>
  );
};

export default Button;

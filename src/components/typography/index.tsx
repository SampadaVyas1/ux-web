import { memo } from "react";
import classes from "./typography.module.scss";
import { ITypographyProps } from "./typography";

const Typography = (props: ITypographyProps) => {
  const { variant, customStyle, fontVariant, ...rest } = props;
  const defaultVariant = variant || "body-3";
  const defaultFont = fontVariant || "regular";
  return (
    <div
      className={`${classes[defaultVariant]} ${customStyle} ${classes[defaultFont]}`}
      {...rest}
    >
      {props.children}
    </div>
  );
};

export default memo(Typography);

import {
  ReactNode,
  Fragment,
  memo,
  CSSProperties,
  forwardRef,
  ForwardedRef,
} from "react";
import classes from "./grid.module.scss";
import { Alignment, DeviceType } from "@/utils/enum";
import useWindowUtil from "@/hooks/useWindowUtil";

const Grid = forwardRef(
  (
    {
      className,
      children,
      container,
      item,
      alignContent = Alignment.LEFT,
      sm = 4,
      md = 8,
      lg = 12,
      fullWidth = false,
      fullWidthStyle,
    }: {
      className?: string;
      children: ReactNode;
      container?: boolean;
      item?: boolean;
      alignContent?: string;
      sm?: number;
      md?: number;
      lg?: number;
      fullWidth?: boolean;
      fullWidthStyle?: CSSProperties;
    },
    ref: ForwardedRef<any>
  ) => {
    const { deviceType } = useWindowUtil();

    const getGridContentAlignment = () => {
      switch (alignContent) {
        case Alignment.RIGHT:
          return "gridItem-align-right";
        case Alignment.CENTER:
          return "gridItem-align-center";
        default:
          return "gridItem-align-left";
      }
    };

    const getGridType = () => {
      const className = `gridItem-`;
      switch (deviceType) {
        case DeviceType.MOBILE:
          return `${className}${fullWidth ? 4 : sm}`;
        case DeviceType.TAB:
          return `${className}${fullWidth ? 8 : md}`;
        default:
          return `${className}${fullWidth ? 12 : lg}`;
      }
    };

    return (
      <Fragment>
        {container ? (
          <div
            ref={ref}
            className={`${classes.gridContainer} ${className || ""}`}
          >
            {children}
          </div>
        ) : item ? (
          <div
            ref={ref}
            className={`${
              classes[`${getGridType()}`]
            } ${getGridContentAlignment()} ${className || ""}`}
          >
            {children}
          </div>
        ) : fullWidth ? (
          <div
            ref={ref}
            className={`${classes[`${getGridType()}`]} ${className || ""}`}
            style={fullWidthStyle}
          >
            {children}
          </div>
        ) : (
          children
        )}
      </Fragment>
    );
  }
);
Grid.displayName = "Grid";

export default memo(Grid);

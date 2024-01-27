import React, { memo } from "react";
import InfoCounterItem from "./info-counter-item";
import { IInfoCounter, IInfoCounterItem } from "./info-counter";
import Grid from "../grid";
import { DeviceType } from "@/utils/enum";
import useWindowUtil from "@/hooks/useWindowUtil";
import withIsInView from "@/hocs/isInView";
import classes from "./info-counter.module.scss";

const InfoCounter = (props: IInfoCounter) => {
  const { info, customClass } = props;
  const { deviceType } = useWindowUtil();
  const isTabOrMobileDevice =
    deviceType === DeviceType.TAB || deviceType === DeviceType.MOBILE;

  return (
    <Grid
      fullWidth
      className={`${classes.mainInfoCounterWrapper} ${customClass}`}
    >
      <Grid container className={classes.wrapper}>
        {info?.map((infoItem: IInfoCounterItem, index: number) => {
          const {
            experience,
            icon,
            sideText,
            title,
            textVariantForTitle,
            textVariantForSideText,
            mdSideText,
            iconPlace,
            ...restProps
          } = infoItem;

          let tabText = sideText;
          isTabOrMobileDevice ? (tabText = mdSideText) : tabText;

          return (
            <Grid item sm={2} md={2} lg={3} key={index}>
              <div className={classes.infoCount}>
                <InfoCounterItem
                  experience={experience}
                  icon={icon}
                  sideText={tabText}
                  title={title}
                  startDelay={index * 1000}
                  textVariantForTitle={textVariantForTitle}
                  textVariantForSideText={textVariantForSideText}
                  iconPlace={iconPlace}
                  {...restProps}
                />
              </div>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};

export const InfoCounterWithMinHeight = memo(
  withIsInView(InfoCounter, "17rem")
);
export default memo(withIsInView(InfoCounter));

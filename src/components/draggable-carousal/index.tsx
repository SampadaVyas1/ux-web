import { Fragment, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Typography from "@/components/typography";
import Grid from "@/components/grid";
import { UpsetComma, MobQuotes } from "@/assets/svgs";
import { ICarousalType } from "./carousal";
import {
  debounce,
  getCustomStyleForExtraSmallDevice,
} from "@/utils/helpers/common";
import { DEFAULT_DEBOUNCE_DELAY } from "@/utils/constants/common";
import TextAnimator from "../text-animator";
import useWindowUtil from "@/hooks/useWindowUtil";
import { DeviceType } from "@/utils/enum";
import classes from "./carousal.module.scss";

const ImageSlider = dynamic(() => import("./TestiMonials/slider"), {
  ssr: false,
});
const Carousel = (props: ICarousalType) => {
  const { list } = props;
  const [activeIndex, setActiveIndex] = useState([1, 2, 3]);
  const [direction, setDirection] = useState("reverse");
  const [index, setIndex] = useState<number>(activeIndex[0]);
  const { deviceType } = useWindowUtil();
  const isMobileDevice = deviceType === DeviceType.MOBILE;
  const { windowDimensions } = useWindowUtil();

  const customStyleForExtraSmallDevice = getCustomStyleForExtraSmallDevice(
    windowDimensions,
    classes.customStylingOnTitle
  );

  const customStyleOnCarouselContainer = getCustomStyleForExtraSmallDevice(
    windowDimensions,
    classes.customStyleOnCarouselContainer
  );
  const customStyleForExtraSmallDeviceOnImage =
    getCustomStyleForExtraSmallDevice(
      windowDimensions,
      classes.customStyleOnCarouselImage
    );

  const prevPlace = () => {
    const last = activeIndex.length - 1;
    const temp = [activeIndex[last], ...activeIndex.slice(0, last)];
    setDirection("reverse");
    setActiveIndex(temp);
  };

  const debouncedHandleAnimation = debounce(() => {
    prevPlace();
  }, DEFAULT_DEBOUNCE_DELAY);

  useEffect(() => {
    debouncedHandleAnimation();
  }, [index, debouncedHandleAnimation]);

  return (
    <Grid fullWidth>
      <Grid item sm={4} md={8} lg={12}>
        <div className={classes.wrapper}>
          <TextAnimator
            variant="heading-1"
            fontVariant="light"
            text={"Employee Testimonials"}
            customStylingOnText={customStyleForExtraSmallDevice}
          />
          <div className={classes.container}>
            <Fragment>
              <div className={classes.testimonyContainer}>
                <div className={classes.content}>
                  <span className={classes.comma}>
                    {isMobileDevice ? <MobQuotes /> : <UpsetComma />}
                  </span>
                  <div className={classes.carousalContext}>
                    <Typography
                      variant="body-2"
                      customStyle={classes.testimony}
                    >
                      {list[index]?.text}
                    </Typography>
                    <Typography variant="body-2" customStyle={classes.name}>
                      {list[index]?.name}
                    </Typography>
                    <Typography
                      variant="body-3"
                      customStyle={classes.designation}
                    >
                      {list[index]?.designation}
                    </Typography>
                  </div>
                </div>
              </div>
            </Fragment>
            <div
              className={`${classes.carouselContainer} ${customStyleOnCarouselContainer}`}
            >
              <ImageSlider setIndex={setIndex} />
              <div className={classes.separator}>
                {list?.map((item, idx: number) => {
                  return (
                    <div
                      key={idx}
                      className={
                        idx == index
                          ? `${classes.active}`
                          : `${classes.inactive}`
                      }
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Carousel;

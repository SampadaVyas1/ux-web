import { memo } from "react";
import { IParallax } from "./parallax";
import { ParallaxBanner } from "react-scroll-parallax";

const ParallaxComp = (props: IParallax) => {
  const { parallaxData, children, id = "parallaxWrapper" } = props;

  return (
    <ParallaxBanner layers={parallaxData} id={id}>
      {children}
    </ParallaxBanner>
  );
};

export default memo(ParallaxComp);

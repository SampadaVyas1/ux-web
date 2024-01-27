import Ellipse from "@/assets/images/parallax-ellipse.png";
import classes from "./parallax.module.scss";

export const parallaxDataCaseStudy = [
  {
    image: Ellipse?.src,
    className: classes.ellipse,
    speed: 90,
    scale: [1.5, 1.5, "easeInCubic"],
    shouldAlwaysCompleteAnimation: false,
    expanded: true,
    rotateY: [180, 180],
  },
  {
    image: Ellipse?.src,
    className: classes.rightEllipse,
    speed: 90,
    scale: [1, 1, "easeInCubic"],
    shouldAlwaysCompleteAnimation: false,
    expanded: true,
  },
  {
    image: Ellipse?.src,
    className: classes.rightBottomEllipse,
    speed: 90,
    scale: [1, 1, "easeInCubic"],
    shouldAlwaysCompleteAnimation: false,
    expanded: true,
  },
];

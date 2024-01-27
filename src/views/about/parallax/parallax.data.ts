import Ellipse from "@/assets/images/parallax-ellipse.png";
import classes from "./parallax.module.scss";

export const parallaxDataAboutUs = [
  {
    image: Ellipse?.src,
    className: classes.ellipse,
    speed: 90,
    scale: [1, 1, "easeInCubic"],
    shouldAlwaysCompleteAnimation: false,
    expanded: true,
  },
  {
    image: Ellipse?.src,
    className: classes.leftEllipse,
    speed: 90,
    scale: [1.5, 1.5, "easeInCubic"],
    shouldAlwaysCompleteAnimation: false,
    expanded: true,
    rotateY: [180, 180],
  },
  {
    image: Ellipse?.src,
    className: classes.bottomEllipse,
    speed: 90,
    scale: [1, 1, "easeInCubic"],
    shouldAlwaysCompleteAnimation: false,
    expanded: true,
  },
];

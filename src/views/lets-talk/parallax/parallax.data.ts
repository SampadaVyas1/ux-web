import Ellipse from "@/assets/images/parallax-ellipse.png";
import Rectangle from "@/assets/images/parallax-rectangle.png";
import classes from "./parallax.module.scss";

export const parallaxDataLetsTalk = [
  {
    image: Ellipse?.src,
    className: classes.ellipse,
    speed: 90,
    scale: [1, 1, "easeInCubic"],
    shouldAlwaysCompleteAnimation: false,
    expanded: true,
  },
];

import Ellipse from "@/assets/images/parallax-ellipse.png";
import Rectangle from "@/assets/images/parallax-rectangle.png";
import classes from "./parallax.module.scss";

export const parallaxData = [
  {
    image: Rectangle?.src,
    className: classes.rectangle,
    speed: 50,
    scale: [1, 1],
    shouldAlwaysCompleteAnimation: true,
    expanded: true,
  },
  {
    image: Ellipse?.src,
    className: classes.ellipse,
    speed: 50,
    scale: [1, 1],
    shouldAlwaysCompleteAnimation: true,
    expanded: true,
  },
];

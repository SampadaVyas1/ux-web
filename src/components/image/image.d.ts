import { StaticImageData } from "next/image";
export interface IImageProps {
  src: string | StaticImageData;
  alt: string;
  customClass?: any;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick?: () => void;
  shape?: "round" | "roundedSquare" | "";
}

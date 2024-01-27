import "@/utils/types/common";
import { ReactHTMLElement, ReactNode } from "react";
type DivProps = JSX.IntrinsicElements["div"];

export interface ITiltCardComponent extends DivProps {
  image?: StaticImageData;
  textOnImage?: string;
  className?: string;
  link?: string;
  customStylingOnImage?: string;
  onClick?: () => void;
  imageVariant?: TypographyVariant;
  customStyleOnImageText?: string;
  tiltCustomButton?: ReactNode;
  isCustomBtn?: boolean;
  children?: ReactHTMLElement;
  customStyleImageContainer?: string;
  customGradientClass?: string;
  customStylingOnTiltCard?: string;
  isTiltCard?: boolean;
}

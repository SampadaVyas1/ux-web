import { TypographyVariant } from "@/utils/types/common";

export interface ITextAnimator {
  text: string;
  typeOfText?: "subHeading" | "description";
  variant?: TypographyVariant;
  fontVariant?: string;
  customStylingOnText?: string;
}

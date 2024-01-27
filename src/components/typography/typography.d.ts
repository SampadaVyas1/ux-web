import { HTMLAttributes } from "react";
import "@/utils/types/common";

export type fontTypographyVariant = "light" | "regular" | "bold" | "medium";
export interface ITypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  children: any;
  variant?: TypographyVariant;
  customStyle?: string;
  fontVariant?: string;
}

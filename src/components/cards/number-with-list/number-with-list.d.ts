import { TypographyVariant } from "@/utils/types/common";
import { CSSProperties } from "react";

export interface ICardItem {
  title: string;
  count: string;
  bulletPoints: string[];
}

export interface ICardComponent {
  cardsDetails: ICardItem[];
  titleVariant?: TypographyVariant;
  customStyle?: CSSProperties;
}

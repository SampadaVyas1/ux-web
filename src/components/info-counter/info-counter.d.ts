import { TypographyVariant } from "@/utils/types/common";

export interface IInfoCounterItem {
  experience: number;
  plusIcon?: string;
  sideText?: string;
  title: string;
  textVariantForTitle?: TypographyVariant;
  textVariantForSideText?: TypographyVariant;
  icon?: string;
  iconPlace?: afterText | beforeText;
  mdSideText?: string;
  counterSpeed?: number;
}
export interface IInfoCounter {
  info: IInfoCounterItem[];
  customClass?: string;
}

export interface ICounterItem extends IInfoCounterItem {
  startDelay: number;
}

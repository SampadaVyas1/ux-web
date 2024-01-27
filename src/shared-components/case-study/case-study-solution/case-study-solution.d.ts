import { TypographyVariant } from "@/utils/types/common";

export interface ISolutionKeyPoint {
  description: string;
  highLighterText: {
    [key: any]: string;
  };
}

export interface ISolutionDetails {
  title: string;
  details: string;
  keyPoints: SolutionPoint[];
  customVariantOnDetails?: TypographyVariant;
  customVariantOnTitle?: TypographyVariant;
}

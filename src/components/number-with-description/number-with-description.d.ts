import { TypographyVariant } from "@/utils/types/common";

interface NumberWithDescriptionProps {
  projectDetails: IProjectDetails;
}
export interface IObjectives {
  description: string;
  count: string;
  customVariantOnDescription?: TypographyVariant;
  highLighterText: {
    [key: any]: string;
  };
}

interface IProjectDetails {
  projectDetails: {
    objectiveTitle: string;
    projectDescription: string;
    customVariantOnProjectDescription?: TypographyVariant;
    customVariantOnObjectiveTitle?: TypographyVariant;
    objectives: IObjectives[];
  };
}

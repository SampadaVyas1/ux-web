import { ISolutionDetails } from "@/shared-components/case-study/case-study-solution/case-study-solution";
import { IColorWithTypography } from "@/shared-components/case-study/color-typography/color-typography";
import { IOutcome } from "@/shared-components/case-study/outcome/outcome";

export interface IRecord {
  title: string;
  content: string;
}

export interface IBreadCrumb {
  label: string;
  url: string;
}

export interface IHeroSection {
  heading: string;
  subHeading: string;
  textHighlighter: object;
  records: IRecord[];
  breadCrumbs: IBreadCrumb[];
}

export interface IOverviewSection {
  title: string;
  content: string;
}

export interface IObjectives {
  count: string;
  description: string;
  highLighterText: object;
}

export interface IObjectiveDetails {
  objectiveTitle: string;
  projectDescription: string;
  objectives: IObjectives[];
}

export interface IChallenges {
  title: string;
}

export interface IOtherWork {
  title: string;
}

export interface IOutcomesection {
  title: string;
  content: string;
}

export interface ICaseStudy {
  caseStudyName: string;
  heroSection: IHeroSection;
  overview: IOverviewSection;
  objectiveDetails: IObjectiveDetails;
  challenges: IChallenges;
  solutions: ISolutionDetails;
  otherWork: IOtherWork;
  typography: IColorWithTypography;
  typography: IColorWithTypography;
  visualDesign: IVisualDesign;
  wireFrames?: IWireFrames;
  outcome: IOutcomeSection;
}

export interface ICaseStudyType {
  caseStudy: ICaseStudy;
}

export interface IVisualDesign {
  title: string;
  imageSrc: string | StaticImageData;
}

export interface IWireFrames {
  title: string;
  imageSrc: string | StaticImageData;
}

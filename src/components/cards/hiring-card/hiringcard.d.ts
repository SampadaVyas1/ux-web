import { ReactHTMLElement } from "react";

export interface IHiringCard {
  jobTitle: string;
  vacancy: number;
  jobDescription: string;
  jobType: string;
  jobLocation: string;
  handleJobRedirection: (jobID: string) => ReturnType;
  jobId: string;
}

export interface IChipItems {
  icon: ReactHTMLElement;
  text: string;
}

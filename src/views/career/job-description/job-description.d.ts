import { ReactHTMLElement } from "react";

export interface IJobListingDetails {
  _id: string;
  jobId: string;
  __v: number;
  category: string;
  city: string;
  hiredCandidateNo?: null;
  jobDomain: string;
  jobLevel: string;
  jobOpeningStatus: string;
  jobPostTitle: string;
  jobType: string;
  positionNo: number;
  publish: string;
  salary: string;
  jobDescription: ReactHTMLElement;
  jdSummary: string;
}

export interface IJobList {
  openings: IJobListingDetails[];
}

import { APP_ROUTES } from "@/utils/constants/routes";
import { IJobListingDetails, IJobList } from "./job-description";

export const getJobDescriptionAsPerId = (
  jobId: string | string[] | undefined,
  openings: any
) => {
  const matchingJob = openings.find((job: any) => job.jobId === jobId);

  if (matchingJob) {
    return {
      title: matchingJob.jobPostTitle,
      jobSummary: matchingJob.jdSummary,
      jobDescription: matchingJob?.jobDescription,
      jobId: matchingJob.jobId,
      city: matchingJob.city,
      jobType: matchingJob.jobType,
      jobLevel: matchingJob.jobLevel,
      experience: matchingJob.workExpRequired,
    };
  }
};

export const getOpeningsAsPerBusinessFunctions = (
  category: string | undefined,
  openings: [IJobListingDetails]
) => {
  return openings
    .filter((job: IJobListingDetails) => job.category === category)
    .map((job: IJobListingDetails) => ({
      jobTitle: job.jobPostTitle,
      jobDescription: job.jdSummary,
      jobId: job.jobId,
      jobType: job.jobType,
      jobLocation: job.city,
    }));
};

export const getBreadCrumbs = (jobTitle: string) => {
  return [
    {
      label: "Home",
      url: `/`,
    },
    {
      label: "Careers",
      url: `/${APP_ROUTES?.CAREERS}`,
    },
    {
      label: jobTitle,
      url: ``,
    },
  ];
};

export const jobApplyRoute = "/careers/job-apply";

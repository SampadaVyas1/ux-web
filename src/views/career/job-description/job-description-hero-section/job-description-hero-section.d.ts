import { IBreadCrumb } from "@/views/case-study/case-study";

export interface IJobDetails {
  title: string;
  jobId: string;
  city: string;
  jobType: string;
  jobLevel: string;
  experience: string;
  handleApplyNow: (jobId: string) => ReturnType;
  loading: boolean;
  breadcrumbs: IBreadCrumb[];
}

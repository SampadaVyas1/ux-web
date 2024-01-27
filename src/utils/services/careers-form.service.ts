import FormData from "form-data";
import axiosInstance from "./axios-instance";
import { API_ROUTES } from "../constants/routes";
import { FORM_HEADERS } from "../constants/common";
import { ENV_VARIABLES } from "../constants/common";
import { IStepperFormPayload } from "@/components/stepper-form/stepper";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL_CAREERS;
const instance = axiosInstance(baseURL);
const environment = process.env.NEXT_PUBLIC_ENV;

export const ApplyJobForm = async (
  payload: IStepperFormPayload,
  resume: FileList
) => {
  const resume_file = resume[0];
  try {
    const formData = new FormData();
    formData.append("First_Name", payload?.firstName);
    formData.append("Last_Name", payload?.lastName);
    formData.append("Mobile", payload?.mobile);
    formData.append("Email", payload?.email);
    formData.append("Total_Experience", payload?.totalExperience);
    formData.append("City", payload?.city);
    formData.append("Current_Employer", payload?.currentEmployer);
    formData.append("Current_Salary", payload?.currentSalary);
    formData.append("Notice_Period", payload?.noticePeriod?.value);
    formData.append("Last_Working_Day", payload?.lastWorkingDay);
    formData.append("Current_Job_Title", payload?.currentJobTitle);
    formData.append("Resume", resume_file as Blob);
    formData.append("Resume_filename", payload?.resumeFilename);
    formData.append("jobId", payload?.jobId);
    const res = await instance.post(
      environment === ENV_VARIABLES.prod
        ? API_ROUTES.applyJobForm
        : API_ROUTES.applyJobFormTest,
      formData,
      {
        headers: {
          "Content-Type": FORM_HEADERS?.multiPartFormHeader,
        },
      }
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getCareerOpenings = async () => {
  try {
    const res = await instance.get(
      environment === ENV_VARIABLES.prod
        ? API_ROUTES.jobOpenings
        : API_ROUTES.jobOpeningsTest
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const getJobDetailsById = async (
  jobID: string | string[] | undefined
) => {
  try {
    const res = await instance.get(
      `${
        environment === ENV_VARIABLES.prod
          ? API_ROUTES.jobPostDetails
          : API_ROUTES.jobPostDetailsTest
      }?jobId=${jobID}`
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

import { ENV_VARIABLES } from "../constants/common";
import { API_ROUTES } from "../constants/routes";
import axiosInstance from "./axios-instance";

const environment = process.env.NEXT_PUBLIC_ENV;
const baseURL = process.env.NEXT_PUBLIC_UNSUBSCRIBE_URL;
const instance = axiosInstance(baseURL);

export const GetInTouchForm = async (payload: any) => {
  try {
    const res = await instance.post(
      environment === ENV_VARIABLES.prod
        ? API_ROUTES.sendCoditasEnquiryMail
        : API_ROUTES.sendCoditasEnquiryMailTest,
      payload
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

import { INewLetterPayload, IUnSubscribe } from "@/components/footer/footer";
import { ENV_VARIABLES } from "../constants/common";
import { API_ROUTES } from "../constants/routes";
import axiosInstance from "./axios-instance";

const environment = process.env.NEXT_PUBLIC_ENV;
const baseURL = process.env.NEXT_PUBLIC_UNSUBSCRIBE_URL;
const instance = axiosInstance(baseURL);

export const subscribeNewsLetter = async (payload: INewLetterPayload) => {
  try {
    const res = await instance.post(
      environment === ENV_VARIABLES.prod
        ? API_ROUTES.sendCoditasSubscribeMail
        : API_ROUTES.sendCoditasSubscribeMailTest,
      payload
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const unSubscribe = async (userID: string | string[] | undefined) => {
  try {
    const res = await instance.put(
      `${
        environment === ENV_VARIABLES.prod
          ? API_ROUTES.unsubscribe
          : API_ROUTES.unsubscribe
      }/${userID}`
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

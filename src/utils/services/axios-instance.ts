import axios from "axios";
import { FORM_HEADERS } from "../constants/common";
import { ERROR_CODE } from "../constants/errors";

const axiosInstance = (baseURL?: string) => {
  const instance = axios.create({
    baseURL: baseURL || process.env.NEXT_PUBLIC_BASE_URL,
  });

  instance.interceptors.request.use((config) => {
    const temp: any = {
      "Content-Type": FORM_HEADERS.applicationJson,
      ...config.headers,
    };
    config.headers = temp;
    return config;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      if (
        error?.response?.status === ERROR_CODE?.UNAUTHORIZED_ERR ||
        error?.response.status === ERROR_CODE?.FORBIDDEN_ERR ||
        error?.response.status === ERROR_CODE?.NOT_ACCEPTABLE_ERR
      ) {
        originalRequest._retry = true;
        return error?.response;
      } else {
        return;
      }
    }
  );

  return instance;
};

export default axiosInstance;

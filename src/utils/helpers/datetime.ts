import { DATE_FORMAT } from "../constants/common";

export const getStringFromDate = (date: Date) => date.toDateString();

export const getDateFromString = (dateString: string) => new Date(dateString);

export const getForMattedDate = (date: Date) =>
  date?.toLocaleDateString(DATE_FORMAT?.LOCAlE_TO_STRING_FORMAT);

export const getForMattedDateFromString = (dateString: string) => {
  const date = getDateFromString(dateString);
  return date?.toLocaleDateString(DATE_FORMAT?.LOCAlE_TO_STRING_FORMAT);
};

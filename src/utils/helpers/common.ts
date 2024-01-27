import { sanitize } from "isomorphic-dompurify";
import withContainer from "@/hocs/withContainer";
import { DEFAULT_DEBOUNCE_DELAY, DEVICE_RATIO } from "../constants/common";

export const sanitizeHTML = (html: string): string => sanitize(html);
export const wrapComponentWithContainer = (props: any, component: any) =>
  withContainer(component)(props);

export const getDetilasById = (arr: any, id: number) =>
  arr.find((data: any) => data.id == id);

export const debounce = (
  func: (...args: any[]) => void,
  delay: number = DEFAULT_DEBOUNCE_DELAY
): ((...args: any[]) => void) => {
  // eslint-disable-next-line no-undef
  let timerId: NodeJS.Timeout | null;

  return (...args: any[]) => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      func(...args);
      timerId = null;
    }, delay);
  };
};

export const redirectToViewSection = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) {
    return;
  }
  const headerOffset = 64;
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

export const getCustomStyleForExtraSmallDevice = (
  windowDimensions: { width?: number },
  customClass: string
) => {
  return windowDimensions.width === DEVICE_RATIO.EXTRA_SMALL_DEVICE
    ? customClass
    : "";
};

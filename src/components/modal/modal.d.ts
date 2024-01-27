import { ReactNode } from "react";

export interface IModalType {
  children?: ReactNode;
  heading?: string;
  subText?: string;
  onClose?: () => void;
  customClass?: any;
  customHeadingClass?: any;
}

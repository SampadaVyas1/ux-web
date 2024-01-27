import { BaseSyntheticEvent, ReactElement, ReactNode } from "react";

export interface IStartIconProps {
  element: ReactElement<any | null>;
  className?: string;
}
type ButtonVariantType = "primary" | "secondary" | "tertiary" | "outlined";
export interface IButtonProps {
  className?: string;
  onClick?: (e: BaseSyntheticEvent) => void;
  startIconProps?: IStartIconProps;
  children: ReactNode;
  rest?: unknown;
  type?: any;
  variant?: ButtonVariantType;
  disabled?: boolean;
}

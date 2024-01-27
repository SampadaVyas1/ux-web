import { UseFormRegister } from "react-hook-form";
type InputProps = JSX.IntrinsicElements["input"];

export interface ITelInputProps extends InputProps {
  label: string;
  customContainerClass?: string;
  customInputClass?: string;
  errors?: any;
  register?: UseFormRegister;
  searchPlaceholder?: string;
  countryNotFoundText?: string;
  watch?: any;
  clearErrors?: any;
  getValues?: any;
  setErrors?: Function;
}

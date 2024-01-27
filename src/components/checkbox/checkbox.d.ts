type InputProps = JSX.IntrinsicElements["input"];

export interface ICheckboxProps extends InputProps {
  checkboxInfo?: string;
  register?: UseFormRegister;
  customStyle?: any;
}

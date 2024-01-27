type InputProps = JSX.IntrinsicElements["input"];

export interface IInputProps extends InputProps {
  type?: string;
  label?: string;
  customContainerClass?: string;
  customLabelClass?: string;
  customInputClass?: string;
  errors?: any;
  register?: any;
  getValues?: any;
  clearErrors?: any;
}

type InputProps = JSX.IntrinsicElements["input"];

export interface IFileUploaderProps extends InputProps {
  type?: string;
  label?: string;
  customContainerClass?: string;
  customInputClass?: string;
  sizeLimitText?: string;
  errors?: any;
  register?: any;
  setValue: any;
  watch: any;
  clearErrors: any;
}

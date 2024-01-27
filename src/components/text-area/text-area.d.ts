type TextAreaProps = JSX.IntrinsicElements["textarea"];

export interface ITextAreaProps extends TextAreaProps {
  label?: string;
  customContainerClass?: string;
  customTextAreaClass?: string;
  errors?: any;
  register?: any;
}

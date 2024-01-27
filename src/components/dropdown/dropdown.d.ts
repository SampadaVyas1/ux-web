type SelectProps = JSX.IntrinsicElements["select"];
interface optionType {
  label: string;
  value: string | number;
}

export interface IDropdownProps extends SelectProps {
  placeholder?: string;
  options: optionType[];
  customClass?: string;
  control?: any;
}

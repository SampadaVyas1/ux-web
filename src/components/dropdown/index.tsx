import { Controller } from "react-hook-form";
import Select from "react-select";
import { IDropdownProps } from "./dropdown";
import { customStyles, componentWrapper } from "./dropdown.styles";

const Dropdown = (props: IDropdownProps) => {
  const { name = "", placeholder, options = [], customClass, control } = props;
  return (
    <div className={customClass} style={componentWrapper}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <Select
              {...field}
              placeholder={placeholder}
              styles={customStyles}
              options={options}
            />
          );
        }}
      />
    </div>
  );
};

export default Dropdown;

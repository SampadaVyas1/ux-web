import React from "react";
import classes from "./input.module.scss";
import { IInputProps } from "./input";

const Input = (props: IInputProps) => {
  const {
    name = "",
    type = "text",
    errors,
    register,
    customContainerClass,
    customInputClass,
    getValues,
    clearErrors,
    ...rest
  } = props;
  const errorMsg = errors?.[name]?.message || "";

  const handleBlur = () => {
    type !== "checkbox"
      ? getValues(name) && errors
        ? null
        : !getValues(name) && errors
        ? clearErrors(name)
        : null
      : null;
  };
  return (
    <div
      className={`${classes.resetDefaultStyle} ${classes.componentWrapper} ${
        customContainerClass ?? ""
      }`}
    >
      <input
        className={`${classes.input} ${errorMsg && classes.errStateInput} ${
          customInputClass ?? ""
        }`}
        type={type}
        name={name}
        {...(register && register(name))}
        {...rest}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Input;

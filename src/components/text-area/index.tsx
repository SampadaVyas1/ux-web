import React from "react";
import classes from "./text-area.module.scss";
import { ITextAreaProps } from "./text-area";

const TextArea = (props: ITextAreaProps) => {
  const {
    name = "",
    errors,
    register,
    customContainerClass,
    customTextAreaClass,
    ...rest
  } = props;
  const errorMsg = errors?.[name]?.message || "";

  return (
    <div
      className={`${classes.resetDefaultStyle} ${classes.componentWrapper} ${
        customContainerClass ?? ""
      }`}
    >
      <textarea
        className={`${classes.textArea} ${
          errorMsg && classes.errStateTextArea
        } ${customTextAreaClass ?? ""}`}
        name={name}
        {...(register && register(name))}
        {...rest}
      />
    </div>
  );
};

export default TextArea;

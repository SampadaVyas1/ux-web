import Typography from "@/components/typography";
import { ICheckboxProps } from "./checkbox";
import Input from "@/components/input";
import classes from "./checkbox.module.scss";
import BigCircleCursor from "../big-circle-cursor";
const Checkbox = (props: ICheckboxProps) => {
  const {
    name = "",
    checkboxInfo = "I'm not a robot",
    register,
    customStyle,
    ...rest
  } = props;

  return (
    <label className={`${classes.componentWrapper} ${customStyle}`}>
      <BigCircleCursor>
        <Input
          customContainerClass={classes.customContainerClass}
          customInputClass={classes.customCheckbox}
          register={register}
          name={name}
          type={"checkbox"}
          {...rest}
        />
      </BigCircleCursor>

      {checkboxInfo && (
        <Typography variant="heading-4" customStyle={classes.info}>
          {checkboxInfo}
        </Typography>
      )}
    </label>
  );
};

export default Checkbox;

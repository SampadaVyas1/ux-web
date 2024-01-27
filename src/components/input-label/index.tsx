import Typography from "@/components/typography";
import classes from "./input-label.module.scss";

interface IInputLabelProps {
  label?: string;
  secondaryLabel?: string;
  isRequired?: boolean;
  isError?: boolean;
  customLabelClass?: string;
}
const InputLabel = (props: IInputLabelProps) => {
  const {
    label,
    secondaryLabel,
    isRequired = true,
    isError = false,
    customLabelClass,
  } = props;
  return (
    <Typography
      variant="input-label"
      customStyle={`${classes.labelContainer} ${isError && classes.errState} ${
        customLabelClass ?? ""
      }`}
    >
      {label && (
        <span>
          {label}
          {isRequired && <span className={classes.required}>*</span>}
        </span>
      )}
      {secondaryLabel && (
        <span className={classes.secondaryLabel}>{secondaryLabel}</span>
      )}
    </Typography>
  );
};

export default InputLabel;

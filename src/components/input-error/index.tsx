import Typography from "@/components/typography";
import classes from "./input-error.module.scss";

interface IInputErrorProps {
  errorMsg?: string;
}
const InputError = (props: IInputErrorProps) => {
  const { errorMsg } = props;
  return errorMsg ? (
    <Typography variant="error" customStyle={classes.errState}>
      {errorMsg}
    </Typography>
  ) : null;
};

export default InputError;

import Grid from "@/components/grid";
import classes from "./loader.module.scss";
import { ILoader } from "./loader";

const Loader = (props: ILoader) => {
  const { variant = "red", className, customWrapperClass } = props;
  return (
    <Grid fullWidth className={`${classes.container} ${customWrapperClass}`}>
      <Grid container>
        <Grid item>
          <span
            className={`${classes[variant]} ${classes.loader} ${
              className || ""
            }`}
          ></span>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Loader;

import { ComponentType } from "react";
import classes from "@/pages/globals.module.scss";

const withContainer = (WrappedComponent: ComponentType<any>) => {
  const containerChildren = (moreProps: any) => (
    <div className={classes.content}>
      <WrappedComponent {...moreProps} />
    </div>
  );
  return containerChildren;
};

export default withContainer;

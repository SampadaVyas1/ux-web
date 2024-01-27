import { ComponentType, useRef } from "react";
import useInView from "@/hooks/useInView";
import Grid from "@/components/grid";

const withIsInView = (
  WrappedComponent: ComponentType<any>,
  minHeight?: string
) => {
  return function WithIsInView(props: any) {
    const inViewRef = useRef(null);
    const inView = useInView(inViewRef, { threshold: [0, 1] });
    return (
      <Grid
        fullWidth
        ref={inViewRef}
        fullWidthStyle={{
          minHeight: minHeight && !inView ? minHeight : "initial",
        }}
      >
        <Grid container>{inView && <WrappedComponent {...props} />}</Grid>
      </Grid>
    );
  };
};

export default withIsInView;

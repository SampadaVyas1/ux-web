import { Fragment } from "react";
import Grid from "@/components/grid";
import TextAnimator from "@/components/text-animator";
import ScrollComponent from "@/shared-components/work-highlights";
import withContainer from "@/hocs/withContainer";
import { scrollComponentData } from "../contents/scroll-component.data";
import classes from "./scroll-comp-wrapper.module.scss";

const ScrollCompWrapper = () => {
  const { heading, clientHighlights } = scrollComponentData;
  return (
    <Fragment>
      <Grid fullWidth className={classes.heading}>
        <TextAnimator variant="heading-1" text={heading} />
      </Grid>
      <ScrollComponent clientHighlights={clientHighlights} />
    </Fragment>
  );
};

export default withContainer(ScrollCompWrapper);

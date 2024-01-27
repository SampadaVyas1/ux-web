import { Fragment } from "react";
import Grid from "@/components/grid";
import Typography from "@/components/typography";
import { IInfoCard } from "./infocard";
import classes from "./infocard.module.scss";

const InfoCard = ({
  title,
  content,
  className,
  onMouseLeave,
  onMouseEnter,
  onClick,
}: IInfoCard) => {
  return (
    <Fragment>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        <Grid
          item
          lg={5}
          md={4}
          sm={4}
          className={`${classes.infoCardWrapper} ${className}`}
        >
          <Typography variant="heading-2" customStyle={classes.title}>
            {title}
          </Typography>
          <Typography variant="body-2" customStyle={classes.content}>
            {content}
          </Typography>
        </Grid>
      </div>
    </Fragment>
  );
};

export default InfoCard;

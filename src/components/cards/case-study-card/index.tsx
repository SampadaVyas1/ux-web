import { Fragment } from "react";
import Grid from "@/components/grid";
import Typography from "@/components/typography";
import { ICardDetails, IDetails } from "./casestudy";
import classes from "./casestudy.module.scss";

const CaseStudyCard = (props: ICardDetails) => {
  const { cardDetails } = props;
  return (
    <Fragment>
      <Grid fullWidth>
        <Grid container className={classes.containerWrapper}>
          {cardDetails?.map((ele: IDetails, index: number) => (
            <Grid
              item
              sm={4}
              md={4}
              lg={4}
              key={index}
              className={classes.cardWrapper}
            >
              <div className={classes.iconWrapper}>
                <ele.icon />
              </div>
              <div className={classes.contentWrapper}>
                <Typography variant="heading-3" customStyle={classes.title}>
                  {ele?.title}
                </Typography>
                <Typography variant="body-2" customStyle={classes.description}>
                  {ele?.description}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default CaseStudyCard;

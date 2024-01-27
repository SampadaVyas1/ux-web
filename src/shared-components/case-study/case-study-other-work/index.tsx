import Grid from "@/components/grid";
import { OurWorkCard } from "@/components/cards";
import { IOtherWorkCard } from "@/components/cards/other-work-card/otherwork";
import { ICaseStudyOtherWork } from "./case-study-other-work";
import classes from "./case-study-other-work.module.scss";
import TextAnimator from "@/components/text-animator";

const CaseStudyOurWork = (props: ICaseStudyOtherWork) => {
  const { title, cardDetails } = props;
  return (
    <Grid fullWidth className={classes.ourWorkContainer}>
      <Grid container className={classes.contentWrapper}>
        <Grid item>
          <TextAnimator
            variant="heading-6"
            fontVariant="light"
            customStylingOnText={classes.title}
            text={title}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.cardContainer}>
        {cardDetails.map((data: IOtherWorkCard, index: number) => {
          return (
            <Grid
              item
              sm={4}
              md={4}
              lg={4}
              className={classes.cardContainer}
              key={index}
            >
              <OurWorkCard {...data} />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
export default CaseStudyOurWork;

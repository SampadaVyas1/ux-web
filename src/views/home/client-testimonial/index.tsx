import { Fragment } from "react";
import classes from "./testimonial.module.scss";
import { IClientTestimonia, ITestimonial } from "./testimonial";
import InfoChip from "@/components/info-chip";
import { InvertedComma } from "@/assets/svgs";
import TextHighlighter from "@/components/text-highlighter";
import Typography from "@/components/typography";
import Grid from "@/components/grid";
import { TESTIMONIAL_HIGHLIGHT_FIELDS } from "./testimonial.helper";
import TextAnimator from "@/components/text-animator";

const Testimonial = ({ clientTestimonialData }: ITestimonial) => {
  const { heading, clientTestimonial } = clientTestimonialData;

  const formatDescription = (description: string, type: string) => {
    if (type === "single") {
      const words = description.split(". ");
      return words.join(".<br/>");
    } else {
      return description;
    }
  };

  return (
    <Fragment>
      <Grid fullWidth className={classes.heading}>
        <TextAnimator variant="heading-1" text={heading} />
      </Grid>
      <Grid fullWidth className={classes.clientTestimonial}>
        {!!clientTestimonial?.length &&
          clientTestimonial?.map(
            (element: IClientTestimonia, index: number) => {
              const { name, title, description, image, type } = element;
              return (
                <div key={index} className={classes.card}>
                  <div className={classes.infoFrame}>
                    <InfoChip name={name} title={title} image={image} />
                    <InvertedComma className={classes.invertedComma} />
                  </div>
                  <Typography
                    variant="heading-2"
                    customStyle={classes.description}
                  >
                    <TextHighlighter
                      text={formatDescription(description, type)}
                      textHighlighterKeys={TESTIMONIAL_HIGHLIGHT_FIELDS}
                      className={classes.textHighLighter}
                    />
                  </Typography>
                </div>
              );
            }
          )}
      </Grid>
    </Fragment>
  );
};

export default Testimonial;

import Grid from "@/components/grid";
import { sanitizeHTML } from "@/utils/helpers/common";
import CustomSkeleton from "./custom-skeleton.helper";
import { jobDescriptionDetailsStyle } from "./job-description-details.style";

const JobDescriptionDetails = (props: any) => {
  const { jobDescription, loading } = props;
  const jobDescriptionHTML = `<div>${jobDescriptionDetailsStyle}${jobDescription}</div>`;

  return (
    <Grid fullWidth>
      <Grid container>
        <Grid item sm={4} md={8} lg={12}>
          {loading ? (
            <CustomSkeleton />
          ) : (
            <div
              dangerouslySetInnerHTML={{
                __html: sanitizeHTML(jobDescriptionHTML),
              }}
            />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default JobDescriptionDetails;

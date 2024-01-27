import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import JobHeroSection from "./job-description-hero-section";
import JobDescriptionDetails from "./job-description-details";
import { wrapComponentWithContainer } from "@/utils/helpers/common";
import { getCareerOpenings } from "@/utils/services/careers-form.service";
import {
  getBreadCrumbs,
  getJobDescriptionAsPerId,
  jobApplyRoute,
} from "./job-description.helper";
import classes from "./job-description.module.scss";
import TrackLines from "@/components/drone-animation/track-lines";

const JobDescription = () => {
  const [jobDescription, setJobDescription] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();
  const jobID = router.query?.["job-id"];

  const handleApplyNow = (jobID: string) => {
    router.push(`${jobApplyRoute}?job-id=${jobID}`);
  };

  const getCareerOpeningsList = useCallback(async () => {
    try {
      const response = await getCareerOpenings();
      setJobDescription(getJobDescriptionAsPerId(jobID, response?.data));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(true);
    }
  }, [jobID]);

  useEffect(() => {
    getCareerOpeningsList();
  }, [getCareerOpeningsList, loading]);

  return (
    <>
      <TrackLines customOpacity="0.3">
        <div className={classes.heroSectionWrapper}>
          {wrapComponentWithContainer(
            {
              breadcrumbs: getBreadCrumbs(
                jobDescription && jobDescription.title
              ),
              title: jobDescription?.title,
              city: jobDescription?.city,
              jobType: jobDescription?.jobType,
              jobLevel: jobDescription?.jobLevel,
              experience: jobDescription?.experience,
              jobId: jobDescription?.jobId,
              handleApplyNow: handleApplyNow,
              loading: jobDescription ? false : true,
            },
            JobHeroSection
          )}
        </div>

        <div className={classes.jobContentLayout}>
          {wrapComponentWithContainer(
            {
              jobDescription: jobDescription && jobDescription?.jobDescription,
              loading: jobDescription ? false : true,
            },
            JobDescriptionDetails
          )}
        </div>
      </TrackLines>
    </>
  );
};

export default JobDescription;

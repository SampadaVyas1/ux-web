import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Breadcrumbs from "@/components/breadcrumbs";
import { wrapComponentWithContainer } from "@/utils/helpers/common";
import Form from "@/components/stepper-form";
import { getJobDetailsById } from "@/utils/services/careers-form.service";
import { getBreadCrumbs } from "../job-description/job-description.helper";
import classes from "./job-apply.module.scss";
import {
  applyForTheJob,
  baseColor,
  highlightColor,
} from "@/utils/constants/common";
import SkeletonLayout from "@/components/skeleton";
import TrackLines from "@/components/drone-animation/track-lines";

const JobApply = () => {
  const [jobDesc, setJobDesc] = useState<object>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const jobID = router.query?.["job-id"];

  const [jobMatched]: any = jobDesc;

  const getJobDetails = useCallback(async () => {
    try {
      const response = await getJobDetailsById(jobID);
      setJobDesc(response?.data ? response.data : []);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }, [jobID]);

  const renderLoading = () => {
    return (
      <>
        {wrapComponentWithContainer(
          {
            baseColor: baseColor,
            highlightColor: highlightColor,
            width: "20rem",
          },
          SkeletonLayout
        )}
      </>
    );
  };

  useEffect(() => {
    getJobDetails();
  }, [getJobDetails, loading]);

  return (
    <>
      <TrackLines>
        <div className={classes.breadCrumbsWrapper}>
          {loading ? (
            renderLoading()
          ) : (
            <>
              {wrapComponentWithContainer(
                {
                  breadCrumbs: getBreadCrumbs(
                    jobMatched?.jobPostTitle
                      ? jobMatched.jobPostTitle
                      : jobID === "0" && applyForTheJob
                  ),
                },
                Breadcrumbs
              )}
            </>
          )}
        </div>
        <div>
          <Form jobId={jobID ? jobID : "0"}></Form>
        </div>
      </TrackLines>
    </>
  );
};

export default JobApply;

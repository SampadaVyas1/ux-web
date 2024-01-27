import JobDescription from "@/views/career/job-description";
import { parallaxDataJobDesciprion } from "@/views/career/parallax/parallaxJobDescription.data";
const JobDescriptionPage = () => {
  return <JobDescription />;
};

JobDescriptionPage.parallaxData = parallaxDataJobDesciprion;

export default JobDescriptionPage;

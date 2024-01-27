import CareersComp from "@/views/career";
import { parallaxDataCareers } from "@/views/career/parallax/parallax.data";
import withMetaInfo from "@/hocs/withMetaInfo";
import CareerImage from "@/assets/images/webp/career-hero-banner.webp";

const CareersPage = () => <CareersComp />;

export async function getStaticProps() {
  const metaTags = {
    title: "Join our UX team",
    description:
      "Explore exciting career opportunities in UX design and be part of a team that solves real-world challenges",
    imageURL: CareerImage.src,
  };
  return {
    props: {
      metaTags,
      parallaxData: parallaxDataCareers,
    },
  };
}

CareersPage.parallaxData = parallaxDataCareers;

export default withMetaInfo(CareersPage);

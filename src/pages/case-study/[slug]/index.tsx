import React from "react";
import {
  getCaseStudyDetails,
  dynamicPaths,
} from "@/views/case-study/case-study.helper";
import { ICaseStudyType } from "@/views/case-study/case-study";
import { parallaxDataCaseStudy } from "@/views/case-study/parallax/parallax.data";
import WebsiteMetaImage from "@/assets/images/website-meta-image.png";
import CaseStudy from "@/views/case-study";

const CaseStudyLayout = ({ caseStudy }: ICaseStudyType) => {
  return <CaseStudy caseStudy={caseStudy} />;
};

export async function getStaticProps({ params }: any) {
  const { slug } = params;
  const caseStudy = getCaseStudyDetails(slug);
  const metaTags = {
    title: "Explore our UI/UX Design Case Studies",
    description:
      "Read more about our outstanding UX projects where we've taken user experience to new heights through our expertise in UX design, UX research, UX writing, and Usability testing.",
    imageURL: WebsiteMetaImage.src,
  };

  return {
    props: {
      caseStudy,
      metaTags,
    },
  };
}

export async function getStaticPaths() {
  const paths = dynamicPaths.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}

CaseStudyLayout.parallaxData = parallaxDataCaseStudy;

export default CaseStudyLayout;

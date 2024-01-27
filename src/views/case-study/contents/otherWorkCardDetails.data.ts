import healthCareCaseStudyOne from "@/assets/images/webp/healthcare-case-study2.webp";
import healthCareCaseStudyTwo from "@/assets/images/webp/healthcare-case-study1.webp";
import healthCareCaseStudyThree from "@/assets/images/webp/healthcare-case-study3.webp";
import marTechCaseStudyOne from "@/assets/images/webp/mar-tech-case-study1.webp";
import bfsiCaseStudyOne from "@/assets/images/webp/bfsi-case-study-3.webp";
import bfsiCaseStudyTwo from "@/assets/images/webp/bfsi-case-study-1.webp";
import bfsiCaseStudyThree from "@/assets/images/webp/bfsi-case-study-2.webp";

import { CASE_STUDY_ROUTES } from "@/utils/constants/routes";
import { getDetilasById } from "@/utils/helpers/common";

export const workCardDetails = [
  {
    id: 101,
    image: bfsiCaseStudyTwo,
    title:
      "Optimizing booking experience that meets diverse customer requirements.",
    description: "BFSI",
    url: CASE_STUDY_ROUTES.JPMC,
  },
  {
    id: 102,
    image: bfsiCaseStudyThree,
    title: "Enhancing user efficiency for investment management platform.",
    description: "BFSI",
    url: CASE_STUDY_ROUTES.HDFC,
  },
  {
    id: 106,
    image: healthCareCaseStudyTwo,
    title: "Enhancing early detection of heart diseases with empathetic UX.",
    description: "Healthcare",
    url: CASE_STUDY_ROUTES.EKO,
  },
  {
    id: 103,
    image: healthCareCaseStudyOne,
    title:
      "Engaging platform for curated workouts, nutrition plans and performance tracking.",
    description: "Healthcare",
    url: CASE_STUDY_ROUTES.FITPAGE,
  },
  {
    id: 104,
    image: marTechCaseStudyOne,
    title:
      "Empowering sales excellence with an intuitive and simple user interface.",
    description: "Mar-Tech",
    url: CASE_STUDY_ROUTES.BASIX,
  },
  {
    id: 105,
    image: bfsiCaseStudyOne,
    title: "Simplifying finances with user-centric fintech solutions.",
    description: "BFSI",
    url: CASE_STUDY_ROUTES.ZEST,
  },
  {
    id: 107,
    image: healthCareCaseStudyThree,
    title: "Delivering seamless experience for clinicians and patients.",
    description: "Healthcare",
    url: CASE_STUDY_ROUTES.AMBRY,
  },
];

//ID: 107
export const ambryCaseStudyCardDetails = [
  getDetilasById(workCardDetails, 103),
  getDetilasById(workCardDetails, 104),
  getDetilasById(workCardDetails, 105),
];

//ID: 106,
export const ekoCaseStudyCardDetails = [
  getDetilasById(workCardDetails, 103),
  getDetilasById(workCardDetails, 104),
  getDetilasById(workCardDetails, 105),
];

//ID: 101
export const jpmcCaseStudyCardDetails = [
  getDetilasById(workCardDetails, 103),
  getDetilasById(workCardDetails, 104),
  getDetilasById(workCardDetails, 105),
];

//ID: 103,
export const fitpageCaseStudyCardDetails = [
  getDetilasById(workCardDetails, 106),
  getDetilasById(workCardDetails, 107),
  getDetilasById(workCardDetails, 104),
];

//ID: 104
export const basixCaseStudyCardDetails = [
  getDetilasById(workCardDetails, 103),
  getDetilasById(workCardDetails, 101),
  getDetilasById(workCardDetails, 105),
];

//ID: 105
export const zestCaseStudyCardDetails = [
  getDetilasById(workCardDetails, 103),
  getDetilasById(workCardDetails, 104),
  getDetilasById(workCardDetails, 106),
];

//ID: 102
export const hdfcCaseStudyCardDetails = [
  getDetilasById(workCardDetails, 103),
  getDetilasById(workCardDetails, 104),
  getDetilasById(workCardDetails, 105),
];

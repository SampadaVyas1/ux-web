import { CASE_STUDY_NAMES } from "@/utils/constants/common";
import { caseStudies } from "./case-study.data";
import TextHighlighter from "@/components/text-highlighter";
import {
  ambryCardDetails,
  basixCardDetails,
  ekoCardDetails,
  fitpageCardDetails,
  hdfcCardDetails,
  jpmcCardDetails,
  zestCardDetails,
} from "./contents/challengeCardDetails.data";

import {
  ambryCaseStudyCardDetails,
  basixCaseStudyCardDetails,
  ekoCaseStudyCardDetails,
  fitpageCaseStudyCardDetails,
  hdfcCaseStudyCardDetails,
  jpmcCaseStudyCardDetails,
  zestCaseStudyCardDetails,
} from "./contents/otherWorkCardDetails.data";
import {
  ambryOutcomeList,
  basixOutcomeList,
  ekoOutcomeList,
  fitpageOutcomeList,
  hdfcOutcomeList,
  jpmcOutcomeList,
  zestOutcomeList,
} from "./contents/outcomeCardDetails.data";

export const OTHER_WORK_CARD = "OTHER_WORK_CARD";
export const CHALLENGES_CARD = "CHALLENGES_CARD";
export const OUTCOME_CARD = "OUTCOME_CARD";

export const wireframeCaseStudies = [
  CASE_STUDY_NAMES.jpmc,
  CASE_STUDY_NAMES.fitpage,
  CASE_STUDY_NAMES.hdfc,
  CASE_STUDY_NAMES.zest,
];

export const dynamicPaths = [
  CASE_STUDY_NAMES.ambry,
  CASE_STUDY_NAMES.eko,
  CASE_STUDY_NAMES.jpmc,
  CASE_STUDY_NAMES.fitpage,
  CASE_STUDY_NAMES.basix,
  CASE_STUDY_NAMES.hdfc,
  CASE_STUDY_NAMES.zest,
];

export const getCaseStudyDetails = (caseStudyName: string) => {
  for (const key in caseStudies) {
    if (key === caseStudyName) {
      return caseStudies[key];
    }
  }
  return null;
};

const challengeCardDetails = {
  [CASE_STUDY_NAMES.ambry]: ambryCardDetails,
  [CASE_STUDY_NAMES.eko]: ekoCardDetails,
  [CASE_STUDY_NAMES.jpmc]: jpmcCardDetails,
  [CASE_STUDY_NAMES.fitpage]: fitpageCardDetails,
  [CASE_STUDY_NAMES.basix]: basixCardDetails,
  [CASE_STUDY_NAMES.hdfc]: hdfcCardDetails,
  [CASE_STUDY_NAMES.zest]: zestCardDetails,
};

const otherCaseStudyCardDetails = {
  [CASE_STUDY_NAMES.ambry]: ambryCaseStudyCardDetails,
  [CASE_STUDY_NAMES.eko]: ekoCaseStudyCardDetails,
  [CASE_STUDY_NAMES.jpmc]: jpmcCaseStudyCardDetails,
  [CASE_STUDY_NAMES.fitpage]: fitpageCaseStudyCardDetails,
  [CASE_STUDY_NAMES.basix]: basixCaseStudyCardDetails,
  [CASE_STUDY_NAMES.hdfc]: hdfcCaseStudyCardDetails,
  [CASE_STUDY_NAMES.zest]: zestCaseStudyCardDetails,
};

const outcomeCardDetails = {
  [CASE_STUDY_NAMES.ambry]: ambryOutcomeList,
  [CASE_STUDY_NAMES.eko]: ekoOutcomeList,
  [CASE_STUDY_NAMES.jpmc]: jpmcOutcomeList,
  [CASE_STUDY_NAMES.fitpage]: fitpageOutcomeList,
  [CASE_STUDY_NAMES.basix]: basixOutcomeList,
  [CASE_STUDY_NAMES.hdfc]: hdfcOutcomeList,
  [CASE_STUDY_NAMES.zest]: zestOutcomeList,
};

export const getCaseStudyCardDetails = (name: string, cardType: string) => {
  switch (cardType) {
    case OTHER_WORK_CARD:
      return otherCaseStudyCardDetails[name];
    case CHALLENGES_CARD:
      return challengeCardDetails[name];
    case OUTCOME_CARD:
      return outcomeCardDetails[name];
  }
};

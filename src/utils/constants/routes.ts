export const APP_ROUTES = {
  HOME: "home",
  ABOUT_US: "about",
  WORK: "work",
  CAREERS: "careers",
  LETS_TALK: "lets-talk",
};

export const CASE_STUDY_ROUTES = {
  AMBRY: "/case-study/ambry",
  ZEST: "/case-study/zest",
  EKO: "/case-study/eko",
  FITPAGE: "/case-study/fitpage",
  JPMC: "/case-study/jpmc",
  HDFC: "/case-study/hdfc",
  BASIX: "/case-study/basix",
};

export const PUBLIC_ROUTES = {
  LINKED_IN: "https://www.linkedin.com/in",
  INSTAGRAM: "https://www.instagram.com/coditas_hq/",
  TWITTER: "https://twitter.com/coditashq",
  YOUTUBE: "https://www.youtube.com/@Coditas_Solutions",
};

export const API_ROUTES = {
  sendCoditasEnquiryMailTest: "ux/contactUs",
  sendCoditasEnquiryMail: "ux/contactUs",
  sendCoditasSubscribeMailTest: "ux/newsLetterSubscription",
  sendCoditasSubscribeMail: "ux/newsLetterSubscription",
  applyJobFormTest: `/api/v1/apply/submit-application`,
  jobOpeningsTest: "/api/v1/job-openings/get-openings",
  jobPostDetailsTest: "api/v1/job-openings/get-postingTitle-details",
  applyJobForm: `/api/v2/apply/submit-application`,
  jobOpenings: "/api/v2/job-openings/get-openings",
  jobPostDetails: "api/v2/job-openings/get-postingTitle-details",
  unsubscribe: "/ux/newsLetterUnsubscribe",
};

export const APPLY_JOB_ROUTE = {
  noOpeningRoute: "/careers/job-apply?job-id=0",
  jobDescription: "/careers/job-description",
};

export const DEFAULT_ROUTE = "/";

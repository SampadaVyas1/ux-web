import { CASE_STUDY_NAMES } from "@/utils/constants/common";
import { CASE_STUDY_ROUTES, APP_ROUTES } from "@/utils/constants/routes";
import zestVisualDesign from "@/assets/images/zest-visual-design.png";
import zestWireFrames from "@/assets/images/zest-wire-frames.png";

export const zest = {
  caseStudyName: CASE_STUDY_NAMES.zest,
  heroSection: {
    heading: "{{fintech}} {{evolution}} from Credit to Connection",
    subHeading:
      "A Journey of Transition from Credit Provider to User-Centric Financial Solution.",
    textHighlighter: {
      fintech: "Fintech",
      evolution: "Evolution",
    },
    records: [
      {
        title: "Platform",
        content: "Web & Mobile Application",
      },
      {
        title: "Industry",
        content: "BFSI",
      },
      {
        title: "Duration",
        content: "8 Months",
      },
    ],
    breadCrumbs: [
      {
        label: "Work",
        url: `/${APP_ROUTES?.WORK}`,
      },
      {
        label: "Fintech Evolution from Credit to Connection",
        url: `/${CASE_STUDY_ROUTES.ZEST}`,
      },
    ],
  },
  overview: {
    title: "Overview",
    content:
      "The client, a leading consumer-lending company, wanted to transition from a credit provider to a comprehensive financial services provider through user-friendly applications featuring convenient self-service options and fostering loyalty by creating seamless and convenient experiences.",
  },
  objectiveDetails: {
    objectiveTitle: "Objectives",
    projectDescription:
      "A strategic initiative aimed at enhancing customer interaction and financial engagement, driving loan retention, and streamlining customer support.",
    objectives: [
      {
        description:
          "{{customerEngagement}} to foster repeat-loans and simplify support through self-service features.",
        count: "01",
        highLighterText: {
          customerEngagement: "Elevating customer engagement",
        },
      },
      {
        description:
          "Empowering customers with mobile and web applications, enabling {{seamlessInteractions}}.",
        count: "02",
        highLighterText: {
          seamlessInteractions: "seamless interactions across devices",
        },
      },
      {
        description:
          "Enriching experience by {{interactions}} at the user's convenience.",
        count: "03",
        highLighterText: {
          interactions: "facilitating independent interactions",
        },
      },
      {
        description:
          "{{customerLoyalty}} and operational efficiency through advanced digital solutions.",
        count: "04",
        highLighterText: {
          customerLoyalty: "Driving customer loyalty",
        },
      },
    ],
  },
  challenges: {
    title: "Understanding the Challenges",
  },
  solutions: {
    title: "Solution",
    details:
      "We implemented a streamlined navigation system to create an intuitive and friendly application, empowering users with all fintech features at their fingertips.",
    keyPoints: [
      {
        description:
          "Our inspiration stemmed from a deep comprehension of {{marketDynamics}}.",
        highLighterText: {
          marketDynamics: "market dynamics, goals, and competitive terrain",
        },
      },
      {
        description:
          "Crafting meticulous user personas and identifying use cases to {{diverseScenarios}}.",
        highLighterText: {
          diverseScenarios:
            "create tailored solutions aligned with diverse scenarios",
        },
      },
      {
        description:
          "A {{designSystem}} that harnessed reusable components, enhancing efficiency and consistency throughout the journey",
        highLighterText: {
          designSystem: "comprehensive design system",
        },
      },
    ],
  },
  otherWork: {
    title: "Other Work",
  },
  typography: {
    title: "Colours & Typography",
    fontFamilyTitle: "Font Family",
    fontFamilyVariant: "Montserrat",
    labelFontWeights: "Bold, Semibold & Regular",
    colorItemOne: {
      customStyles: "caribbean-green",
      colorNameOnCard: "#01CBAA",
    },
    colorItemTwo: {
      customStyles: "neon-blue",
      colorNameOnCard: "#5259FF",
    },
    colorItemThree: {
      customStyles: "jasper-red",
      colorNameOnCard: "#DD3C3C",
    },
    colorItemFour: {
      customStyles: "purple-navy",
      colorNameOnCard: "#3F4168",
    },
  },
  visualDesigns: {
    title: "Visual Designs",
    imageSrc: zestVisualDesign,
  },
  wireFrames: {
    title: "Wire-frames",
    imageSrc: zestWireFrames,
  },
  outcome: {
    title: "Outcome",
    content:
      "A new, enriching UI has brought about a rapid increase in user growth. The application nurtures over 3000 minutes of running content related to health and fitness with podcast listeners across 26 countries.",
  },
};

import { CASE_STUDY_NAMES } from "@/utils/constants/common";
import { APP_ROUTES, CASE_STUDY_ROUTES } from "@/utils/constants/routes";
import fitPageVisualDesign from "@/assets/images/fit-page-visual-design.png";
import fitPageWireFrames from "@/assets/images/fit-page-wire-frames.png";

export const fitpage = {
  caseStudyName: CASE_STUDY_NAMES.fitpage,
  heroSection: {
    heading:
      "An Engaging {{fitness}} {{content}} {{andKey}} {{training}} {{experience}}",
    subHeading:
      "Curated Workouts, Nutrition Plans, and Performance Tracking with Fitness Companion App.",
    textHighlighter: {
      fitness: "Fitness",
      content: "Content",
      andKey: "&",
      training: "Training",
      experience: "Experience",
    },
    records: [
      {
        title: "Platform",
        content: "Web & Mobile Application",
      },
      {
        title: "Industry",
        content: "Healthcare",
      },
      {
        title: "Duration",
        content: "6 months",
      },
    ],
    breadCrumbs: [
      {
        label: "Work",
        url: `/${APP_ROUTES?.WORK}`,
      },
      {
        label: "An Engaging Fitness Content & Training Experience",
        url: `/${CASE_STUDY_ROUTES.FITPAGE}`,
      },
    ],
  },
  overview: {
    title: "Overview",
    content:
      "The client envisioned a comprehensive and engaging platform-independent solution that would provide personalized workouts, chart out nutrition plans, and educate users with videos, podcasts, and articles about endurance fitness and the associated lifestyle.",
  },
  objectiveDetails: {
    objectiveTitle: "Objectives",
    projectDescription:
      "A digital product that would take users on a journey to explore content, access health insights, manage their fitness activities, and view performance reports through a stimulating design flow.",
    objectives: [
      {
        description:
          "Implementing a mobile-first approach for {{responsiveDesign}}.",
        count: "01",
        highLighterText: {
          responsiveDesign: "responsive design across all devices",
        },
      },
      {
        description:
          "Adhering to WCAG 2.0’s AA Standards to achieve {{accessibleUI}}.",
        count: "02",
        highLighterText: {
          accessibleUI: " an accessible UI",
        },
      },
      {
        description:
          "User-friendly interface that {{diverseNeeds}} of fitness enthusiasts.",
        count: "03",
        highLighterText: {
          diverseNeeds: "addresses the diverse needs",
        },
      },
      {
        description:
          "Seamless {{thirdParty}} with Garmin Watch and Apple Health.",
        count: "04",
        highLighterText: {
          thirdParty: "third-party integrations",
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
      "Product redesign with an interactive interface, superior browsing experience and productive task flow, while maintaining close coordination among 8+ teams for usability research and design reviews.",
    keyPoints: [
      {
        description:
          "{{multiProduct}} that allows users to purchase multiple services in a single transaction.",
        highLighterText: {
          multiProduct: "Multi-product checkout experience",
        },
      },
      {
        description:
          "{{nuclearComposite}} that supports a high level of customisation based on dynamic needs.",
        highLighterText: {
          nuclearComposite: "Nuclear and composite component creation",
        },
      },
      {
        description:
          "A {{comprehensiveDesign}} defining component usability, design language, and style guide for a consistent brand experience.",
        highLighterText: {
          comprehensiveDesign: "comprehensive design system",
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
    imageSrc: fitPageVisualDesign,
  },
  wireFrames: {
    title: "Wire-frames",
    imageSrc: fitPageWireFrames,
  },
  outcome: {
    title: "Outcome",
    content:
      "A new, enriching UI has brought about a rapid increase in user growth. The application nurtures over 3000 minutes of running content related to health and fitness with podcast listeners across 26 countries.",
  },
};

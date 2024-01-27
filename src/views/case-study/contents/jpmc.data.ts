import { CASE_STUDY_NAMES } from "@/utils/constants/common";
import {
  APP_ROUTES,
  CASE_STUDY_ROUTES,
  PUBLIC_ROUTES,
} from "@/utils/constants/routes";
import jpmcVisualDesign from "@/assets/images/jpmc-visual-design.png";
import jpmcWireFrames from "@/assets/images/jpmc-wire-frames.png";

export const jpmc = {
  caseStudyName: CASE_STUDY_NAMES.jpmc,
  heroSection: {
    heading:
      "{{travel}} {{loyalty}} {{tech}} {{platform}} Revamp for a Global Financial Service Provider",
    subHeading: "Optimizing Booking Experience with a Streamlined User Flow.",
    textHighlighter: {
      travel: "Travel",
      loyalty: "Loyalty",
      tech: "Tech",
      platform: "Platform",
    },
    records: [
      {
        title: "Platform",
        content: "Web Platform",
      },
      {
        title: "Industry",
        content: "BFSI",
      },
      {
        title: "Duration",
        content: "7 Years",
      },
    ],
    breadCrumbs: [
      {
        label: "Work",
        url: `/${APP_ROUTES?.WORK}`,
      },
      {
        label:
          "Travel Loyalty Tech Platform Revamp for a Global Financial Service Provider",
        url: `/${CASE_STUDY_ROUTES.JPMC}`,
      },
    ],
  },
  overview: {
    title: "Overview",
    content:
      "The client needed to remodel an existing application to adapt to diverse customer domains and extend their loyalty programs to end-users. The previous version’s task flow posed a complicated structure and was less promising than the industry counterparts. The new one would be built using a micro-front-end architecture with a streamlined flow.",
  },
  objectiveDetails: {
    objectiveTitle: "Objectives",
    projectDescription:
      "The app would support healthcare providers with AI-enabled stethoscopes and high-fidelity tele-auscultation to offer patients access to early cardiac and pulmonary disease detection. We first needed to understand the shortcomings of the existing UI.",
    objectives: [
      {
        description:
          "Adopting a {{mobileApproach}} for responsive design across all screen sizes.",
        count: "01",
        highLighterText: {
          mobileApproach: "mobile-first approach",
        },
      },
      {
        description:
          "Ensuring an {{accessibleUI}} by adhering to WCAG 2.0’s AA Standards.",
        count: "02",
        highLighterText: {
          accessibleUI: "accessible UI",
        },
      },
      {
        description:
          "Creating a {{robustDesign}} that would cater to various use cases.",
        count: "03",
        highLighterText: {
          robustDesign: "robust design system",
        },
      },
      {
        description:
          "Simplifying user journey across activities involving {{loyaltyPoint}}.",
        count: "04",
        highLighterText: {
          loyaltyPoint: "loyalty point redemption and management",
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
      "We prioritized feature design based on impact and complexity, aligning with the demanding timeline to ensure a smooth development process.",
    keyPoints: [
      {
        description:
          "Comprehensive stakeholder interviews and user research for {{insights}} and their fitness needs.",
        highLighterText: {
          insights: "insights into different age groups",
        },
      },
      {
        description:
          "Access to engaging visual content with {{cohesiveDesign}}.",
        highLighterText: {
          cohesiveDesign: "cohesive design language and consistent style",
        },
      },
      {
        description: "{{mediaTemplates}} for user activities and achievements.",
        highLighterText: {
          mediaTemplates: "Personalized social media templates",
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
    fontFamilyVariant: "Proxima Nova",
    labelFontWeights: "Regular & Semibold",
    colorItemOne: {
      customStyles: "forest-green",
      colorNameOnCard: "#238738",
    },
    colorItemTwo: {
      customStyles: "medium-electric-blue",
      colorNameOnCard: "#0A57A1",
    },
    colorItemThree: {
      customStyles: "gamboge",
      colorNameOnCard: "#D99B22",
    },
    colorItemFour: {
      customStyles: "cadmium-red",
      colorNameOnCard: "#D9222A",
    },
  },
  visualDesigns: {
    title: "Visual Designs",
    imageSrc: jpmcVisualDesign,
  },
  wireFrames: {
    title: "Wire-frames",
    imageSrc: jpmcWireFrames,
  },
  outcome: {
    title: "Outcome",
    content:
      "The new design offers an elevated but simplified booking experience. The foundation of a design system unifies product and development teams, leading to a versatile and consistent application that meets diverse customer requirements and driving a global loyalty ecosystem.",
  },
};

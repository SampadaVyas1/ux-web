import { CASE_STUDY_NAMES } from "@/utils/constants/common";
import { APP_ROUTES, CASE_STUDY_ROUTES } from "@/utils/constants/routes";
import ekoVisualDesign from "@/assets/images/eko-visual-design.png";

export const eko = {
  caseStudyName: CASE_STUDY_NAMES.eko,
  heroSection: {
    heading:
      "{{transformative}} {{mobile}} {{app}} {{experience}} for Digital Cardiovascular Care Solutions",
    subHeading:
      "Enhancing Early Detection for AI-Enabled Stethoscope Application with Empathetic UX.",
    textHighlighter: {
      transformative: "Transformative",
      mobile: "Mobile",
      app: "App",
      experience: "Experience",
    },
    records: [
      {
        title: "Platform",
        content: "Mobile app (Android, iOS)",
      },
      {
        title: "Industry",
        content: "Healthcare",
      },
      {
        title: "Duration",
        content: "3+ Years",
      },
    ],
    breadCrumbs: [
      {
        label: "Work",
        url: `/${APP_ROUTES?.WORK}`,
      },
      {
        label:
          "Transformative Mobile App Experience for Digital Cardiovascular Care Solutions",
        url: `/${CASE_STUDY_ROUTES.EKO}`,
      },
    ],
  },
  overview: {
    title: "Overview",
    content:
      "The client initially questioned the necessity of mobile apps to accomplish their primary goal. As their vision of revolutionizing healthcare evolved, they realized their product transformation would remain incomplete without dedicated apps. However, the existing app's underwhelming UX resulted in low ratings on Android and iOS stores. To address this pressing issue, they recognized the need for a dynamic upgrade to their interface, aiming to elevate the overall user experience for their customers.",
  },
  objectiveDetails: {
    objectiveTitle: "Objectives",
    projectDescription:
      "The app would support healthcare providers with AI-enabled stethoscopes and high-fidelity tele-auscultation to offer patients access to early cardiac and pulmonary disease detection. We first needed to understand the shortcomings of the existing UI.",
    objectives: [
      {
        description:
          "Understanding the {{usagePatterns}} through user research and user feedback analysis.",
        count: "01",
        highLighterText: {
          usagePatterns: "user's mental model and usage patterns",
        },
      },
      {
        description:
          "Conducting {{usabilityTest}} to improve the app’s usability.",
        count: "02",
        highLighterText: {
          usabilityTest: "usability tests and heuristic evaluations",
        },
      },
      {
        description:
          "Establishing {{userPersona}}, mapping out {{userJourney}}, and designing the {{infoArchitecture}}.",
        count: "03",
        highLighterText: {
          userPersona: "user personas",
          userJourney: "user journeys",
          infoArchitecture: "information architecture",
        },
      },
      {
        description:
          "Taking the {{mobileApproach}} to create a responsive design across all devices.",
        count: "04",
        highLighterText: {
          mobileApproach: "mobile-first approach",
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
      "Prioritizing usability and user experience, we established usability standards for all our design components and developed a consistent design language and style guide for the product.",
    keyPoints: [
      {
        description:
          "A {{designSystem}} that ensured a uniform user experience across the product.",
        highLighterText: {
          designSystem: "design system",
        },
      },
      {
        description:
          "An extensive design process was followed to create a {{cohesiveExp}}.",
        highLighterText: {
          cohesiveExp: "cohesive and memorable user experience",
        },
      },
      {
        description:
          "Establishing a {{vision}} and enabling the development team to implement design assets effectively.",
        highLighterText: {
          vision: "hand-off process for consistency in the design vision",
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
      customStyles: "jungle-green",
      colorNameOnCard: "#10B391",
    },
    colorItemTwo: {
      customStyles: "pale-pink",
      colorNameOnCard: "#FFE1E2",
    },
    colorItemThree: {
      customStyles: "pastel-red",
      colorNameOnCard: "#FF6D70",
    },
    colorItemFour: {
      customStyles: "zinc",
      colorNameOnCard: "#AEB4BC",
    },
  },
  visualDesigns: {
    title: "Visual Designs",
    imageSrc: ekoVisualDesign,
  },
  outcome: {
    title: "Outcome",
    content:
      "The redesigned user interface garnered significant respect and recognition from stakeholders. The enhanced product design has proven exceptionally effective, resulting in seamless and efficient app performance. Users now find it effortless to navigate features, input data, and access services, instilling newfound confidence in the app's capabilities.",
  },
};

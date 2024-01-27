import { CASE_STUDY_NAMES } from "@/utils/constants/common";
import ambryVisualDesign from "@/assets/images/ambry-visual-design.png";
import {
  APP_ROUTES,
  CASE_STUDY_ROUTES,
  PUBLIC_ROUTES,
} from "@/utils/constants/routes";

export const ambry = {
  caseStudyName: CASE_STUDY_NAMES.ambry,
  heroSection: {
    heading:
      "{{human}}{{centered}} {{healthcare}} Transformation for a Clinical Genetic Diagnosis Solution Provider",
    subHeading:
      "A Case Study of User Experience Upgrade and Consistent Visual Design Establishment.",
    textHighlighter: {
      human: "Human",
      centered: "-Centered",
      healthcare: "Healthcare",
    },
    records: [
      {
        title: "Platform",
        content: "Web App",
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
          "Human-Centered Healthcare Transformation for a Clinical Genetic Diagnosis Solution Provider",
        url: `/${CASE_STUDY_ROUTES.AMBRY}`,
      },
    ],
  },

  overview: {
    title: "Overview",
    content:
      "The client’s healthcare program aims to leverage digital technology to integrate a comprehensive suite of tools within existing healthcare workflows. It identifies high-risk patients, facilitates genetic testing, provides education, and connects patients to genetic counseling, enabling healthcare providers to stratify patients by risk, promoting standardized, proactive, and equitable care.",
  },
  objectiveDetails: {
    objectiveTitle: "Objectives",
    projectDescription:
      "With a key focus on user experience improvements and visual design consistency, the client sought to place themselves at the forefront of transforming healthcare system operations, leading to better patient outcomes and enhanced clinical decision-making.",
    objectives: [
      {
        description:
          "Overall {{uxEnhancements}} that facilitates efficient navigation and intuitive interactions.",
        count: "01",
        highLighterText: {
          uxEnhancements: "UX enhancement with a friendly UI",
        },
      },
      {
        description:
          "Seamless {{introductionFeature}} to improve the functionality and capabilities of the platform",
        count: "02",
        highLighterText: {
          introductionFeature: "introduction of new features",
        },
      },
      {
        description:
          "Optimize usability and streamline workflows through {{enhancedProduct}} with intuitive information architecture.",
        count: "03",
        highLighterText: {
          enhancedProduct: "enhanced product structure",
        },
      },
      {
        description:
          "Developing a {{cohesiveProgram}} that maintains consistency across various components.",
        count: "04",
        highLighterText: {
          cohesiveProgram: "visually cohesive health program",
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
      "Driven by extensive research, user-centered ideation, and design thinking process, we ensured that each step led us closer to a groundbreaking, HIPAA-compliant healthcare product. By embracing innovation and adhering to the highest standards, we delivered an impactful and seamless experience for clinicians and patients.",
    keyPoints: [
      {
        description:
          "A {{designSystem}} that would serve as a single source of truth for future enhancements.",
        highLighterText: {
          designSystem: "design system",
        },
      },
      {
        description:
          "{{redisgnedContent}} for consistent overall experience across platforms.",
        highLighterText: {
          redisgnedContent: "Redesigned 4 products and 30+ UI components",
        },
      },
      {
        description:
          "{{oneStopDashboard}} integrated with all new features for healthcare providers to conduct operational activities seamlessly.",
        highLighterText: {
          oneStopDashboard: "One-stop dashboard",
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
    fontFamilyVariant: "Helvetica Now Text",
    labelFontWeights: "Extra bold, Bold, Medium & Regular",
    colorItemOne: {
      customStyles: "asparagus",
      colorNameOnCard: "#65964D",
    },
    colorItemTwo: {
      customStyles: "slate-grey",
      colorNameOnCard: "#667085",
    },
    colorItemThree: {
      customStyles: "cerulean",
      colorNameOnCard: "#0079A4",
    },
    colorItemFour: {
      customStyles: "alice-blue",
      colorNameOnCard: "#F1FAFE",
    },
  },
  visualDesigns: {
    title: "Visual Designs",
    imageSrc: ambryVisualDesign,
  },
  outcome: {
    title: "Outcome",
    content:
      "Complete design process conducted to revamp the platform which integrates seamlessly into existing workflows to drive pre-test education, genetic testing, result delivery, and post-test counseling, making rule-based care for patients truly effective with an enriched experience.",
  },
};

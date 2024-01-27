import { CASE_STUDY_NAMES } from "@/utils/constants/common";
import {
  APP_ROUTES,
  CASE_STUDY_ROUTES,
  PUBLIC_ROUTES,
} from "@/utils/constants/routes";
import hdfcVisualDesign from "@/assets/images/hdfc-visual-design.png";
import hdfcWireFrames from "@/assets/images/hdfc-wire-frames.png";

export const hdfc = {
  caseStudyName: CASE_STUDY_NAMES.hdfc,
  heroSection: {
    heading:
      "{{simplified}} {{investment}} {{management}} {{with}} {{aKey}} {{retirement}} {{portal}} for an Indian Life Insurance Service Provider",
    subHeading:
      "Enhancing User Efficiency for a Diverse Customer Base through Tailored Solutions and Intuitive Design.",
    textHighlighter: {
      simplified: "Simplified",
      investment: "Investment",
      management: "Management",
      with: "with",
      aKey: "a",
      retirement: "Retirement",
      portal: "Portal",
    },
    records: [
      {
        title: "Platform",
        content: "Responsive web application",
      },
      {
        title: "Industry",
        content: "BFSI",
      },
      {
        title: "Duration",
        content: "1.3 Years",
      },
    ],
    breadCrumbs: [
      {
        label: "Work",
        url: `/${APP_ROUTES?.WORK}`,
      },
      {
        label:
          "Simplified Investment Management with a Retirement Portal for an Indian Life Insurance Service Provider",
        url: `/${CASE_STUDY_ROUTES.HDFC}`,
      },
    ],
  },
  overview: {
    title: "Overview",
    content:
      "The client sought for a unified dashboard for a personalized retirement portal to eliminate the complexity of managing multiple dashboards. Their vision was to offer customers an easy-to-use application that streamlines their investment plans and maintains a comprehensive record of current assets, ensuring stability in an otherwise volatile retirement market.",
  },
  objectiveDetails: {
    objectiveTitle: "Objectives",
    projectDescription:
      "Delivering consumers a tailored end-to-end solution for retirement plans and investments, granting a clear overview of all their investments across various products within a single platform.",
    objectives: [
      {
        description:
          "Designing a solution to address customers' needs while {{applicationFramework}}.",
        count: "01",
        highLighterText: {
          applicationFramework:
            "fitting within the existing application framework",
        },
      },
      {
        description:
          "Creating a {{designSystem}} for a more consistent and user-friendly experience across the platform.",
        count: "02",
        highLighterText: {
          designSystem: "new component library and design system",
        },
      },
      {
        description:
          "{{redesigning}} for a few of the products offered on the platform, simplifying the data collection process.",
        count: "03",
        highLighterText: {
          redesigning: "Redesigning the buying experience",
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
      "We designed a one-stop solution for the client to effectively deliver their retirement planning and associated services to a range of customers with streamlined data consolidation and visualization.",
    keyPoints: [
      {
        description:
          "A {{singleDesign}} integrated seamlessly with the existing application framework without compromising functionality.",
        highLighterText: {
          singleDesign: "single comprehensive dashboard",
        },
      },
      {
        description:
          "A {{robustLibrary}} and scalable design system that is flexible and extensible to adapt to future changes.",
        highLighterText: {
          robustLibrary: "robust component library",
        },
      },
      {
        description:
          "A {{brandNewExp}} for customers to fill in their details accurately and hassle-free.",
        highLighterText: {
          brandNewExp: "brand new buying experience",
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
    fontFamilyVariant: "Inter",
    labelFontWeights: "Bold, Medium & Regular",
    colorItemOne: {
      customStyles: "emerald-green",
      colorNameOnCard: "#2CBF61",
    },
    colorItemTwo: {
      customStyles: "sandy-brown",
      colorNameOnCard: "#F1A06A",
    },
    colorItemThree: {
      customStyles: "anti-flash-white",
      colorNameOnCard: "#F5F8FA",
    },
    colorItemFour: {
      customStyles: "lapis-lazuli",
      colorNameOnCard: "#005E9E",
    },
  },
  visualDesigns: {
    title: "Visual Designs",
    imageSrc: hdfcVisualDesign,
  },
  wireFrames: {
    title: "Wire-frames",
    imageSrc: hdfcWireFrames,
  },
  outcome: {
    title: "Outcome",
    content:
      "A unified dashboard eliminated the challenge of dealing with multiple dashboards, making it cost-effective for the client to maintain the portal and enabling their customers to enjoy the benefits of paid retiral services in one place.",
  },
};

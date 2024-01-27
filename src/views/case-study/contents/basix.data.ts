import { CASE_STUDY_NAMES } from "@/utils/constants/common";
import basixVisualDesign from "@/assets/images/eko-visual-design.png";
import {
  APP_ROUTES,
  CASE_STUDY_ROUTES,
  PUBLIC_ROUTES,
} from "@/utils/constants/routes";

export const basix = {
  caseStudyName: CASE_STUDY_NAMES.basix,
  heroSection: {
    heading:
      "{{aKey}} {{ux}} {{journey}} {{to}} {{productivity}} {{and}} {{engagement}} for a Sales Force Technology Company",
    subHeading:
      "Empowering Sales Excellence with an Intuitive but Simplified User Interface.",
    textHighlighter: {
      aKey: "A",
      ux: "UX",
      journey: "Journey",
      to: "to",
      productivity: "Productivity",
      and: "and",
      engagement: "Engagement",
    },
    records: [
      {
        title: "Platform",
        content: "Web Platform",
      },
      {
        title: "Industry",
        content: "Mar-Tech",
      },
      {
        title: "Duration",
        content: "5 Years",
      },
    ],
    breadCrumbs: [
      {
        label: "Work",
        url: `/${APP_ROUTES?.WORK}`,
      },
      {
        label:
          "A UX Journey to Productivity and Engagement for a Sales Force Technology Company",
        url: `/${CASE_STUDY_ROUTES.BASIX}`,
      },
    ],
  },
  overview: {
    title: "Overview",
    content:
      "The client approached us intending to enhance overall business success by strengthening customer relationships, optimizing sales performance, boosting efficiency, fostering collaboration, and empowering data-driven decision-making. It called for a need to design a sales application that would serve 100+ active users who rely on it for their day-to-day work.",
  },
  objectiveDetails: {
    objectiveTitle: "Objectives",
    projectDescription:
      "Designing 3 separate portals for investor outreach, internal reporting, and client management while ensuring end-users could engage with the platform throughout their working hours without experiencing cognitive load.",
    objectives: [
      {
        description:
          "The {{outreachPortal}} by matching company stories with the right investment audience. ",
        count: "01",
        highLighterText: {
          outreachPortal:
            "outreach portal would be designed to guide sales professionals",
        },
      },
      {
        description:
          "The {{reportingPortal}} and allow users to regularly share data with the client, helping them make informed decisions.",
        count: "02",
        highLighterText: {
          reportingPortal:
            "reporting portal would eliminate manual reporting processes",
        },
      },
      {
        description:
          "A third {{checkData}}, understand their audience, and analyze activities to plan their next steps.",
        count: "03",
        highLighterText: {
          checkData:
            "portal would be designed for users to check data on any device",
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
      "Setting usability standards for design components, we created a consistent design language and style guide for the client and to improve usability and visual coherence of the platform while maintaining cognitive load balance.",
    keyPoints: [
      {
        description:
          "A {{meticulousArchitecture}} that catered to the specific needs and preferences of end-users.",
        highLighterText: {
          meticulousArchitecture:
            "meticulously crafted information architecture",
        },
      },
      {
        description:
          "A {{revampedFlows}} for sales professionals to navigate effortlessly.",
        highLighterText: {
          revampedFlows: "revamped UI with upgraded user flows",
        },
      },
      {
        description:
          "A {{robustDesign}}, enabling the creation of a visually aesthetic interface while maintaining functional efficiency.",
        highLighterText: {
          robustDesign: "robust design system",
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
    fontFamilyVariant: "Roboto",
    labelFontWeights: "Bold, Medium & Regular",
    colorItemOne: {
      customStyles: "indigo-dye",
      colorNameOnCard: "#094168",
    },
    colorItemTwo: {
      customStyles: "alice-white",
      colorNameOnCard: "#F0F5F9",
    },
    colorItemThree: {
      customStyles: "pale-aqua",
      colorNameOnCard: "#C5D5DE",
    },
    colorItemFour: {
      customStyles: "blanced-almond",
      colorNameOnCard: "#FDE9CF",
    },
  },
  visualDesigns: {
    title: "Visual Designs",
    imageSrc: basixVisualDesign,
  },
  outcome: {
    title: "Outcome",
    content:
      "A visually aesthetic interface resulted in a powerful tool that boosted productivity and enhanced the client’s brand image. With improved information architecture and intuitive interactions, users could accomplish tasks more quickly and efficiently and were motivated to spend more time on the platform.",
  },
};

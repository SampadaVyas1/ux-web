import {
  ICardComponent,
  ICardItem,
} from "@/components/cards/number-with-list/number-with-list";

const cardsDetails: ICardItem[] = [
  {
    title: `Inspiration`,
    count: `01`,
    bulletPoints: [
      "Stakeholder Interviews",
      "User Research",
      "Competitive Analysis",
      "UX Audit",
    ],
  },
  {
    title: "Ideation",
    count: "02",
    bulletPoints: [
      "Information Architecture",
      "Low & High Fidelity Wireframes",
      "UI Design & UX Writing",
      "Interaction Design",
    ],
  },
  {
    title: "Implementation",
    count: "03",
    bulletPoints: [
      "Design Prototyping",
      "Usability Testing and Iterations",
      "Design-Dev Handoff",
      "UI QA",
    ],
  },
];

export const numberedCardData: {
  heading: string;
  leftInfoText: string;
  rightInfoText: string;
  cardContent: ICardComponent;
} = {
  heading: `We Deliver Human-Centric Products`,
  leftInfoText: `Such magic, much wow!`,
  rightInfoText: `This is Awesome!`,
  cardContent: {
    cardsDetails: cardsDetails,
  },
};

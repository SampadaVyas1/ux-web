import workHightlightsJpmc from "@/assets/images/webp/work-highlights-jpmc.webp";
import workHighlightsAmbry from "@/assets/images/webp/work-highlights-ambry.webp";
import workHighlightsHdfc from "@/assets/images/webp/work-highlights-hdfc.webp";
import { CASE_STUDY_ROUTES } from "@/utils/constants/routes";

export const scrollComponentData = {
  heading: "Work Highlights",
  clientHighlights: [
    {
      title: `Optimizing booking experience that meets diverse customer requirements.`,
      description: `Enhancing user efficiency for investment management platform.`,
      image: workHightlightsJpmc,
      url: CASE_STUDY_ROUTES.JPMC,
    },
    {
      title: `Upgrading user experience for clinical genetic diagnosis solution provider.`,
      description: `A Case Study of User Experience Upgrade and Consistent Visual Design Establishment.`,
      image: workHighlightsAmbry,
      url: CASE_STUDY_ROUTES.AMBRY,
    },
    {
      title: `Enhancing user efficiency for investment management platform.`,
      description: `Enhancing User Efficiency for a Diverse Customer Base through Tailored Solutions and Intuitive Design.`,
      image: workHighlightsHdfc,
      url: CASE_STUDY_ROUTES.HDFC,
    },
  ],
};

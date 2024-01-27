import { ITrustedBySection } from "../trusted-by-section/trusted-by-section";
import jpmCardBanner from "@/assets/images/webp/jpMorgan-card-banner.webp";
import kmCardBanner from "@/assets/images/webp/km-card-banner.webp";
import hdfcCardBanner from "@/assets/images/webp/hdfc-card-banner.webp";
import jpmcLogo from "@/assets/images/webp/jpmc-logo.webp";
import konicaMLogo from "@/assets/images/webp/konica-m-logo.webp";
import hdfcLogo from "@/assets/images/webp/hdfc-logo.webp";
import { CASE_STUDY_ROUTES } from "@/utils/constants/routes";

export const trustedByData: ITrustedBySection = {
  heading: "Trusted by",
  items: [
    {
      tiltCard: {
        image: jpmCardBanner,
        textOnImage: `Transforming JPMC's Loyalty Experience`,
        link: CASE_STUDY_ROUTES.JPMC,
      },
      logo: jpmcLogo,
    },
    {
      tiltCard: {
        image: kmCardBanner,
        textOnImage: `Konica Minolta's Success Story`,
        link: CASE_STUDY_ROUTES.AMBRY,
      },
      logo: konicaMLogo,
    },
    {
      tiltCard: {
        image: hdfcCardBanner,
        textOnImage: `How we Moved fast with HDFC`,
        link: CASE_STUDY_ROUTES.HDFC,
        customStyleOnImageText: "hdfcCardText",
      },
      logo: hdfcLogo,
    },
  ],
};

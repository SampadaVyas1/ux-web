import {
  LinkedIn,
  TwitterIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/assets/svgs";
import { PUBLIC_ROUTES } from "@/utils/constants/routes";

export const socialMediaIcons = [
  {
    logo: LinkedIn,
    url: PUBLIC_ROUTES.LINKED_IN,
  },
  {
    logo: TwitterIcon,
    url: PUBLIC_ROUTES.TWITTER,
  },
  {
    logo: YoutubeIcon,
    url: PUBLIC_ROUTES.YOUTUBE,
  },
  {
    logo: InstagramIcon,
    url: PUBLIC_ROUTES.INSTAGRAM,
  },
];

export const unsubscribeContent = {
  title: "Unsubscribe?",
  content:
    "We understand your inbox can get cluttered, and we respect your choice. This action will unsubscribe you from our list, and you will no longer receive our valuable UX insights and updates. We're here if you change your mind.",
};

export const unsubscribeSuccessContent = {
  title: "You’re unsubscribed",
  content:
    "You have been unsubscribed from our list. Thank you for being a part of our community. If you wish to reconnect in future, visit our website to subscribe again.",
};

import { ICrumbs } from "@/components/breadcrumbs/breadcrumbs";
import { IInfoCard } from "@/components/cards/info-card/infocard";
import { IInfoCounterItem } from "@/components/info-counter/info-counter";

export interface ICardContent {
  infoCard: IInfoCard;
  imageSrc: string;
}
export interface IHeroProps {
  customClass?: string;
  customImageClass?: string;
  heading?: string;
  subHeading?: string;
  videoSrc?: string;
  cardContent?: ICardContent;
  infoCounterList?: IInfoCounter[];
  getPlayingInfo?: (boolean) => void;
  contentCustomClass?: string;
  customTitleClass?: string;
  customImageContainerClass?: string;
  customInfoClass?: string;
  isReadCursorEnable?: boolean;
  url?: string;
  customInfoCounterClass?: string;
}

import { IRecord } from "@/common/statistics/statistics";
import { ICrumbs } from "@/components/breadcrumbs/breadcrumbs";

export interface ICSHeroProps {
  customClass?: string;
  heading?: string;
  subHeading?: string;
  records?: IRecord[];
  breadCrumbs?: ICrumbs[];
}

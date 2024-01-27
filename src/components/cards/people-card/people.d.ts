import { StaticImageData } from "next/image";

export interface IPeopleCard {
  name: string;
  designation: string;
  profileImg: StaticImageData;
  hoverImg: StaticImageData;
  linkedInUrl?: string;
}

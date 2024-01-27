import { ITiltCardComponent } from "@/components/cards/tilt-card/tilt-card";

export interface ITrustedByItem {
  tiltCard: ITiltCardComponent;
  logo: StaticImageData;
}

export interface ITrustedBySection {
  heading: string;
  items: ITrustedByItem[];
}

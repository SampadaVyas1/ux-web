import { ReactElement } from "react";

export interface IDetails {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ICardDetails {
  cardDetails: IDetails[];
}

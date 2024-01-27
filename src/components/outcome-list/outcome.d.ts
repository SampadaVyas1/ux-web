export interface IOutcomeListDetails {
  count: string;
  text?: string;
  title?: string;
  subTitle?: string;
  textColor?: string;
}

export interface IOutcomeList {
  outcomeListDetails: IOutcomeListDetails[];
  textType: string;
  customClass?: string;
}

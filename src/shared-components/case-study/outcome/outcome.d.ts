import { IOutcomeListDetails } from "@/components/outcome-list/outcome";

export interface IOutcome {
  title: string;
  content: string;
  outcomeList: IOutcomeListDetails[];
}

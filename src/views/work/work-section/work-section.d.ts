import { IOtherWorkCard } from "@/components/cards/other-work-card/otherwork";
import { IFormItemType } from "@/components/form-field-wrapper/formField";
import * as yup from "yup";

export interface IWorkSection {
  title: string;
  cardDetails: IOtherWorkCard[];
  ModalFormTextData: { [key: string]: string };
  ModalFormData: IFormItemType[];
  MORE_CASE_STUDY_INITIAL_VALUES: { [key: string]: string };
  MORE_CASE_STUDY_SCHEMA: yup.Object;
}

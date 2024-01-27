import { IFormItemType } from "@/components/form-field-wrapper/formField";

export interface ISideForm {
  formFields: IFormItemType[];
  schema: any;
  initialValues: any;
}
export interface SideFormPayloadType {
  email: string;
  message: string;
  name: string;
}

import { IFormItemType } from "../form-field-wrapper/formField";

export interface IFormType {
  schema?: any;
  initialValues?: any;
  formFields?: IFormItemType[];
  heading?: string;
  subText?: string;
  onHandleSubmitForm?: any;
}

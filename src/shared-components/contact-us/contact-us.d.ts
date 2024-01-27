import { IFormItemType } from "@/components/form-field-wrapper/formField";

export interface IContactUsForm {
  formFields: IFormItemType[];
  schema: any;
  initialValues: any;
}
export interface ContactUsPayloadType {
  check: string;
  designation: string;
  email: string;
  message: string;
  mobile: string;
  name: string;
}

import { FieldType } from "@/utils/constants/common";
import { CONTACT_US_FORM } from "../lets-talk/contact-us-form.helper";

export const ModalFormTextData = {
  heading: "Want to read more case studies?",
  subText:
    "Share your details and we'll send our detailed case studies to you.",
};

export const ModalFormData = [
  {
    id: 1,
    type: FieldType.text,
    label: CONTACT_US_FORM.name,
    placeholder: CONTACT_US_FORM.namePlaceholder,
    name: "name",
    isRequired: true,
  },
  {
    id: 2,
    type: FieldType.text,
    label: CONTACT_US_FORM.email,
    placeholder: CONTACT_US_FORM.emailPlaceholder,
    name: "email",
    isRequired: true,
  },
];

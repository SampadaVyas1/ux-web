import { FieldType } from "@/utils/constants/common";

export const FOOTER_FORM = {
  email: "",
  emailPlaceholder: "Enter your email address",
};

export const FOOTER_FORM_FIELDS = {
  id: 1,
  type: FieldType.text,
  label: FOOTER_FORM.email,
  placeholder: FOOTER_FORM.emailPlaceholder,
  name: "email",
  isRequired: true,
};

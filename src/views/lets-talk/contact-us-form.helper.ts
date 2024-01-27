import { FieldType } from "@/utils/constants/common";

export const CONTACT_US_FORM = {
  description: `Fill in the details below, and we'll get back to you soon.`,
  title: `Let's Talk!`,
  submit: "SUBMIT",
  name: "Full Name",
  namePlaceholder: "Enter your full name",
  mobile: "Phone Number",
  mobilePlaceholder: "Enter your phone number",
  email: "Email Address",
  emailPlaceholder: "Enter your email address",
  designation: "Designation",
  designationPlaceholder: "Enter your designation",
  message: "Message",
  messageplaceholder: "Enter your message...",
};

export const CONTACT_US_FIELDS = [
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
  {
    id: 3,
    type: FieldType.phone,
    label: CONTACT_US_FORM.mobile,
    placeholder: CONTACT_US_FORM.mobilePlaceholder,
    name: "mobile",
    isRequired: true,
  },
  {
    id: 4,
    type: FieldType.text,
    label: CONTACT_US_FORM.designation,
    placeholder: CONTACT_US_FORM.designationPlaceholder,
    name: "designation",
    isRequired: false,
  },
  {
    id: 5,
    type: FieldType.textArea,
    label: CONTACT_US_FORM.message,
    placeholder: CONTACT_US_FORM.messageplaceholder,
    name: "message",
    isRequired: false,
    maxLength: 120,
  },
];

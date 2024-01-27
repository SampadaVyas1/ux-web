import * as yup from "yup";

export const FOOTER_FORM_INITIAL_VALUES = {
  email: "",
};

export const FOOTER_FORM_SCHEMA = yup.object({
  email: yup
    .string()
    .required("Email address is required")
    .email("Enter a valid email address.")
    .matches(
      /^[a-z0-9_.+-]+@[a-z.-]+\.[a-z]{2,}$/,
      "Enter a valid email address."
    )
    .min(3, "Email address must be at least 3 characters long")
    .max(320, "Email address must not exceed 320 characters")
    .matches(/^\S+$/, "Email address should not contain spaces")
    .matches(
      /^[\w.%+-]+@[\w.-]+$/,
      "Email address should not contain most special characters"
    ),
});

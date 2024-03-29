import * as yup from "yup";

export const MORE_CASE_STUDY_INITIAL_VALUES = {
  name: "",
  email: "",
};

export const MORE_CASE_STUDY_SCHEMA = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must not exceed 50 characters")
    .matches(
      /^[^0-9]+$/,
      "Invalid input. Use only alphabetic characters & try again."
    )
    .matches(
      /^[a-zA-Z\s'-]+$/,
      "Only letters, spaces, hyphens, and apostrophes are allowed"
    )
    .matches(
      /^([A-Za-z'-]+ )+[A-Za-z'-]+$|^[A-Za-z'-]+$/,
      "Only single space is allowed"
    )
    .matches(/^[^@#$%^&*!]+$/, "Names should not include special symbols")
    .test(
      "no-leading-trailing-spaces",
      "Name should not have leading or trailing spaces",
      (value) => {
        if (value) {
          return value.trim() === value;
        }
        return true;
      }
    ),
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

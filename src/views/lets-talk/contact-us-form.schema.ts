import { phoneNumberHelper } from "@/utils/helpers/phone-input";
import * as yup from "yup";

export const CONTACT_US_INITIAL_VALUES = {
  name: "",
  mobile: "+91",
  email: "",
  designation: "",
  message: "",
  check: "",
};

export const CONTACT_US_SCHEMA = yup.object({
  name: yup
    .string()
    .required("Name is required")
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
    )
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must not exceed 50 characters"),
  mobile: yup
    .string()
    .trim()
    .required("Mobile number is required")
    .test("mobileNumber is required", "Dial code is required", (value) => {
      if (value) {
        const [dialCode] = value.trim().split(" ");
        if (!dialCode.length) {
          return false;
        }
      }
      return true;
    })
    .test("mobileNumber is required", "Mobile number is required", (value) => {
      if (value) {
        const [dialCode, mobileNumber] = value.trim().split(" ");
        if (dialCode.length && !mobileNumber?.length) {
          return false;
        }
      }
      return true;
    })
    .test(
      "only contain numeric characters",
      "Mobile number should only contain numeric characters",
      (value) => phoneNumberHelper(value, /^[0-9]+$/)
    )
    .test("size", "Mobile number must be between 7 and 15 digits", (value) => {
      if (value) {
        const [dialCode, mobileNumber] = value.trim().split(" ");
        if (dialCode.length && dialCode !== "+91") {
          const data = phoneNumberHelper(value, /^\d{7,15}$/);
          return data;
        }
      }
      return true;
    })
    .test("length", "Mobile number must be of 10 digits", (value) => {
      if (value) {
        const [dialCode, mobileNumber] = value.trim().split(" ");
        if (dialCode.length && dialCode == "+91") {
          const data = phoneNumberHelper(value, /^\d{10}$/);
          return data;
        }
      }
      return true;
    })
    .test(
      "size",
      "Mobile number should not contain any special characters, spaces, or punctuation",
      (value) => phoneNumberHelper(value, /^[\d]+$/)
    )
    .test("input", "Mobile number is invalid", (value) =>
      phoneNumberHelper(value, /^(?!^(?:0+|1+)$)\d+$/)
    ),
  email: yup
    .string()
    .required("Email address is required")
    .email("Enter a valid email address.")
    .matches(
      /^[a-z0-9_.+-]+@[a-z.-]+\.[a-z]{2,}$/,
      "Enter a valid email address."
    )
    .matches(/^\S+$/, "Email address should not contain spaces")
    .matches(
      /^[\w.%+-]+@[\w.-]+$/,
      "Email address should not contain most special characters"
    )
    .min(3, "Email address must be at least 3 characters long")
    .max(320, "Email address must not exceed 320 characters"),
  designation: yup
    .string()
    .optional()
    .max(50, "Position must not exceed 50 characters")
    .test(
      "/^[a-zA-Zs'-]+$/",
      "Invalid input. Use only alphabetic characters & try again.",
      (value) => {
        if (value) {
          const regex = /^[a-zA-Z\s'-]+$/;
          return regex.test(value);
        }
        return true;
      }
    )
    .test(
      "/^([A-Za-z'-]+ )+[A-Za-z'-]+$|^[A-Za-z'-]+$/",
      "Only single space is allowed",
      (value) => {
        if (value) {
          const regex = /^([A-Za-z'-]+ )+[A-Za-z'-]+$|^[A-Za-z'-]+$/;
          return regex.test(value);
        }
        return true;
      }
    )
    .test(
      "/^[^0-9]+$/",
      "Position should not contain numeric characters",
      (value) => {
        if (value) {
          const regex = /^[^0-9]+$/;
          return regex.test(value);
        }
        return true;
      }
    )
    .test(
      "/^[^@#$%^&*!]+$/",
      "Position should not include special symbols",
      (value) => {
        if (value) {
          const regex = /^[^@#$%^&*!]+$/;
          return regex.test(value);
        }
        return true;
      }
    )
    .test(
      "no-leading-trailing-spaces",
      "Position should not have leading or trailing spaces",
      (value) => {
        if (value) {
          return value.trim() === value;
        }
        return true;
      }
    ),
  message: yup
    .string()
    .matches(/.{1,}/, {
      excludeEmptyString: true,
      message: "Message must be at least 1 character long",
    })
    .notRequired()
    .test(
      "test-ctype",
      "Please enter at least 120 characters.",
      (value: any) => {
        if (value?.length != 0 && value?.length <= 120) {
          return false;
        } else {
          return true;
        }
      }
    )
    .test(
      "test-ctype",
      "Message must not exceed 1000 characters",
      (value: any) => {
        if (value?.length != 0 && value?.length >= 1000) {
          return false;
        } else {
          return true;
        }
      }
    ),
  check: yup.string().optional(),
});

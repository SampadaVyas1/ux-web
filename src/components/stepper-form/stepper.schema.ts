import { phoneNumberHelper } from "@/utils/helpers/phone-input";
import * as yup from "yup";

export const STEP1_INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  mobile: "",
  email: "",
  totalExperience: "",
  city: "",
};
export const STEP2_INITIAL_VALUES = {
  currentEmployer: "",
  lastWorkingDay: "",
  currentJobTitle: "",
  currentSalary: "",
  noticePeriod: { label: "0-30", value: 30 },
  resume: [],
};
export const APPLY_JOB_SCHEMA1 = yup
  .object({
    firstName: yup
      .string()
      .trim()
      .required("First Name is required")
      .matches(
        /^[a-zA-Z\s'-]+$/,
        "Invalid input. Use only alphabetic characters & try again."
      )
      .matches(
        /^([A-Za-z'-]+ )+[A-Za-z'-]+$|^[A-Za-z'-]+$/,
        "Only single space is allowed"
      )
      .matches(/^[^0-9]+$/, "Names should not contain numeric characters")
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
      .min(2, "First Name must be at least 2 characters long")
      .max(50, "First Name must not exceed 50 characters"),
    lastName: yup
      .string()
      .trim()
      .required("Last Name is required")
      .matches(
        /^[a-zA-Z\s'-]+$/,
        "Invalid input. Use only alphabetic characters & try again."
      )
      .matches(
        /^([A-Za-z'-]+ )+[A-Za-z'-]+$|^[A-Za-z'-]+$/,
        "Only single space is allowed"
      )
      .matches(/^[^0-9]+$/, "Names should not contain numeric characters")
      .matches(/^[^@#$%^&*!]+$/, "Names should not include special symbols")
      .test(
        "no-leading-trailing-spaces",
        "Last Name should not have leading or trailing spaces",
        (value) => {
          if (value) {
            return value.trim() === value;
          }
          return true;
        }
      )
      .min(2, "Last Name must be at least 2 characters long")
      .max(50, "Last Name must not exceed 50 characters"),
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
      .test(
        "mobileNumber is required",
        "Mobile number is required",
        (value) => {
          if (value) {
            const [dialCode, mobileNumber] = value.trim().split(" ");
            if (dialCode.length && !mobileNumber?.length) {
              return false;
            }
          }
          return true;
        }
      )
      .test(
        "only contain numeric characters",
        "Mobile number should only contain numeric characters",
        (value) => phoneNumberHelper(value, /^[0-9]+$/)
      )
      .test(
        "size",
        "Mobile number must be between 7 and 15 digits",
        (value) => {
          if (value) {
            const [dialCode, mobileNumber] = value.trim().split(" ");
            if (dialCode.length && dialCode !== "+91") {
              const data = phoneNumberHelper(value, /^\d{7,15}$/);
              return data;
            }
          }
          return true;
        }
      )
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
      .trim()
      .required("Email address is required")
      .email("Enter a valid email address.")
      .matches(
        /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address format"
      )
      .matches(/^\S+$/, "Email address should not contain spaces")
      .matches(
        /^[\w.%+-]+@[\w.-]+$/,
        "Email address should not contain most special characters"
      )
      .min(3, "Email address must be at least 3 characters long")
      .max(320, "Email address must not exceed 320 characters"),
    totalExperience: yup
      .string()
      .trim()
      .required("Experience is required")
      .matches(/^[0-9.]+$/, "Experience should only contain numeric characters")
      .matches(
        /^(\d{1,2}?\.\d{1,2}|\d+)$/,
        "Only up to 2 decimal places are allowed."
      )
      .matches(
        /^[\d.]+$/,
        "Experience should not contain any special characters, spaces, or punctuation"
      )
      .max(5, "Experience must not exceed 5 characters"),
    city: yup
      .string()
      .trim()
      .required("Location is required")
      .matches(
        /^[a-zA-Z\s'-]+$/,
        "Invalid input. Use only alphabetic characters & try again."
      )
      .matches(
        /^([A-Za-z'-]+ )+[A-Za-z'-]+$|^[A-Za-z'-]+$/,
        "Only single space is allowed"
      )
      .matches(/.{1,}/, {
        excludeEmptyString: true,
        message: "Location must be at least 1 character long",
      })
      .max(50, "Message must not exceed 50 characters"),
  })
  .required();

export const APPLY_JOB_SCHEMA2 = yup.object({
  currentEmployer: yup
    .string()
    .trim()
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
    .max(50, "Company name must not exceed 50 characters")
    .test(
      "no-leading-trailing-spaces",
      "Designation should not have leading or trailing spaces",
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
      "Company name should not contain numeric characters",
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
      "Company name should not include special symbols",
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
      "Company name should not have leading or trailing spaces",
      (value) => {
        if (value) {
          return value.trim() === value;
        }
        return true;
      }
    ),
  currentJobTitle: yup
    .string()
    .trim()
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
  currentSalary: yup.string().optional(),
  lastWorkingDay: yup
    .string()
    .required("Last working date should not be empty"),
  resume: yup
    .mixed()
    .required("File is required")
    .test("fileRequired", "Resume is required", (fileList: any) => {
      const [fileData, ...rest] = fileList;
      const value = fileData;
      if (!value) {
        return false;
      }
      return true;
    })
    .test("fileSize", "File size is too large", (fileList: any) => {
      const [fileData, ...rest] = fileList;
      const value = fileData;
      if (value) {
        return value.size <= 5 * 1024 * 1024; // 5MB in bytes
      }
      return true;
    })
    .test("fileType", "Only PDF files are allowed", (fileList: any) => {
      const [fileData, ...rest] = fileList;
      const value = fileData;
      if (value) {
        return value.type === "application/pdf";
      }
      return true;
    }),
});

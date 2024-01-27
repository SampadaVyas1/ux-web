import { FieldType } from "@/utils/constants/common";
import { FORM_SECTION } from "@/views/career/stepper-form-helper";

export const OPTIONS_ARRAY = [
  { label: "0-30", value: 30 },
  { label: "30-60", value: 60 },
  { label: "60-90", value: 90 },
];

export const APPLY_JOB_FORM_FIELDS1 = [
  {
    id: 1,
    type: FieldType.text,
    label: FORM_SECTION.FNAME?.LABEL,
    placeholder: FORM_SECTION.FNAME?.PLACEHOLDER,
    name: "firstName",
    isRequired: true,
  },
  {
    id: 2,
    type: FieldType.text,
    label: FORM_SECTION.LNAME?.LABEL,
    placeholder: FORM_SECTION.LNAME?.PLACEHOLDER,
    name: "lastName",
    isRequired: true,
  },
  {
    id: 3,
    type: FieldType.text,
    label: FORM_SECTION.EMAIL?.LABEL,
    placeholder: FORM_SECTION.EMAIL?.PLACEHOLDER,
    name: "email",
    isRequired: true,
  },
  {
    id: 4,
    type: FieldType.phone,
    label: FORM_SECTION.MOB?.LABEL,
    placeholder: FORM_SECTION.MOB?.PLACEHOLDER,
    name: "mobile",
    isRequired: true,
  },
  {
    id: 5,
    type: FieldType.text,
    label: FORM_SECTION.EXP?.LABEL,
    placeholder: FORM_SECTION.EXP?.PLACEHOLDER,
    name: "totalExperience",
    isRequired: true,
  },
  {
    id: 6,
    type: FieldType.text,
    label: FORM_SECTION.LOCATION?.LABEL,
    placeholder: FORM_SECTION.LOCATION?.PLACEHOLDER,
    name: "city",
    isRequired: true,
  },
];
export const APPLY_JOB_FORM_FIELDS2 = [
  {
    id: 1,
    type: FieldType.text,
    label: FORM_SECTION.COMPANY?.LABEL,
    placeholder: FORM_SECTION.COMPANY?.PLACEHOLDER,
    name: "currentEmployer",
    isRequired: false,
  },
  {
    id: 2,
    type: FieldType.text,
    label: FORM_SECTION?.POSITION?.LABEL,
    placeholder: FORM_SECTION.POSITION?.PLACEHOLDER,
    name: "currentJobTitle",
    isRequired: false,
  },
  {
    id: 3,
    type: FieldType.salary,
    label: FORM_SECTION.SALARY?.LABEL,
    placeholder: FORM_SECTION.SALARY?.PLACEHOLDER,
    name: "currentSalary",
    isRequired: false,
  },
  {
    id: 4,
    type: FieldType.dropdownField,
    label: FORM_SECTION.NOTICE_PERIOD?.LABEL,
    placeholder: FORM_SECTION.NOTICE_PERIOD?.PLACEHOLDER,
    name: "noticePeriod",
    isRequired: true,
  },
  {
    id: 5,
    type: FieldType.date,
    label: FORM_SECTION.LAST_WORKING_DAY?.LABEL,
    placeholder: FORM_SECTION.LAST_WORKING_DAY?.PLACEHOLDER,
    name: "lastWorkingDay",
    isRequired: true,
  },
  {
    id: 6,
    type: FieldType.file,
    label: FORM_SECTION.RESUME?.LABEL,
    placeholder: FORM_SECTION.RESUME?.PLACEHOLDER,
    name: "resume",
    isRequired: true,
    secondaryLabel: FORM_SECTION.RESUME?.SECONDARY_LABEL,
  },
];

import { optionType } from "@/components/dropdown/dropdown";

export interface IStepper {
  jobId?: string | string[] | undefined;
}
export interface IFormItemType {
  id: number;
  type: string;
  label: string;
  placeholder: string;
  name: string;
  isRequired: boolean;
}
export interface ITypeOfFormTwo {
  company: string | undefined;
  position: string | undefined;
}

export interface IStepItem {
  step: number;
  register: UseFormRegister;
  handleSubmit: any;
  options?: optionType[];
  errors: any;
  setValue: any;
  watch: any;
  clearErrors: any;
  formFields: IFormItemType[];
  nextBtnDisabled: boolean;
  prevBtnDisabled: boolean;
  handlePrevStep: () => void;
  handleSubmitForm: any;
  handleSalaryChange?: () => void;
  control?: any;
  setIsReCAPTCHASelected: (arg: boolean) => any;
  isReCAPTCHASelected?: boolean;
  getValues?: any;
  loader?: boolean;
  setErrors?: Funcion;
}

export interface IStepPayloadTwo {
  currentEmployer: string;
  currentJobTitle: string;
  currentSalary: string;
  noticePeriod: { label: string; value: string };
  lastWorkingDay: string;
  resume: FileList;
}
export interface IStepPayloadOne {
  email: string;
  firstName: string;
  lastName: string;
  totalExperience: string;
  mobile: string;
  city: string;
}
export interface IStepperFormPayload extends IStepPayloadOne {
  resumeFilename: string;
  currentEmployer: string;
  currentJobTitle: string;
  currentSalary: string;
  jobId: string | string[] | undefined;
  lastWorkingDay: string;
  noticePeriod: { label: string; value: string };
}

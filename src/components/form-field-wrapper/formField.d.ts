import React from "react";
import { Register } from "react-hook-form";
import { optionType } from "@/components/dropdown/dropdown";

export interface IFormItemType {
  id: number;
  type: string;
  label: string;
  placeholder: string;
  name: string;
  isRequired: boolean;
  secondaryLabel?: string;
}
export interface IFormWrapper {
  label: string;
  isRequired: boolean;
  isError: boolean;
  fieldData: IFormItemType;
  clearErrors?: any;
  watch?: any;
  errors?: any;
  setValue?: any;
  register: Register;
  control?: any;
  salary?: string;
  options?: optionType[];
  getValues?: any;
  handleSalaryChange?: () => void;
  customInputClass?: string;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  disableField?: boolean;
  setErrors?: Function;
}

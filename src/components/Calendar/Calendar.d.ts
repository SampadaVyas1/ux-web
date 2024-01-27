export interface ICalendar {
  name: string;
  customContainerClass?: string;
  customInputClass?: string;
  errors?: any;
  register?: any;
  searchPlaceholder?: string;
  countryNotFoundText?: string;
  watch?: any;
  clearErrors?: any;
  getValues?: any;
  setErrors?: Function;
  setValue: Function;
  disabled?: boolean;
}
export interface ICalendarBody {
  decreaseMonth: () => void;
  increaseMonth: () => void;
  date: Date;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}

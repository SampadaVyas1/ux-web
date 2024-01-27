import DatePicker from "react-datepicker";
import CalendarBody from "./CalendarBody";
import { DATE_FORMAT } from "@/utils/constants/common";
import "react-datepicker/dist/react-datepicker.css";
import classes from "./Calendar.module.scss";
import { CalenderIcon } from "@/assets/svgs";
import {
  getDateFromString,
  getForMattedDateFromString,
  getStringFromDate,
} from "@/utils/helpers/datetime";
import { ICalendar } from "./Calendar";

const Calendar = (props: ICalendar) => {
  const {
    name,
    errors,
    register,
    customContainerClass,
    customInputClass,
    getValues,
    clearErrors,
    watch,
    setValue,
    ...rest
  } = props;

  const selectedDate = watch(name);

  const errorMsg = errors?.[name]?.message || "";

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(minDate.getDate() + 90);

  const handleChange = (date: Date) =>
    setValue(name, getStringFromDate(date), { shouldValidate: true });

  return (
    <div
      className={`${classes.componentWrapper} ${customContainerClass ?? ""}`}
    >
      <DatePicker
        customInput={
          <div
            className={`${classes.input} ${errorMsg && classes.errStateInput} ${
              customInputClass ?? ""
            }`}
          >
            <CalenderIcon />
            <span>
              {!selectedDate
                ? DATE_FORMAT?.DATE_FORMAT_PLACEHOLDER
                : getForMattedDateFromString(selectedDate)}
            </span>
          </div>
        }
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <CalendarBody
            decreaseMonth={decreaseMonth}
            increaseMonth={increaseMonth}
            date={date}
            prevMonthButtonDisabled={prevMonthButtonDisabled}
            nextMonthButtonDisabled={nextMonthButtonDisabled}
          />
        )}
        wrapperClassName="datepicker"
        className="form-control"
        dateFormat={DATE_FORMAT?.DATE_FORMAT_VALUE}
        selected={selectedDate ? getDateFromString(selectedDate) : null}
        calendarStartDay={0}
        minDate={minDate}
        maxDate={maxDate}
        onChange={handleChange}
        filterDate={(date) => {
          return date.getDay() !== 0 && date.getDay() !== 6;
        }}
        disabledKeyboardNavigation
        {...rest}
      />
    </div>
  );
};
export default Calendar;

import { ICalendarBody } from "./Calendar";
import { MONTHS } from "@/utils/constants/common";
import classes from "./Calendar.module.scss";
import { ChevronIcon } from "@/assets/svgs";

const CalendarBody = (props: ICalendarBody) => {
  const {
    decreaseMonth,
    increaseMonth,
    date,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  } = props;
  const handleIncreaseMonth =
    (increaseMonth: () => void) => (e: React.SyntheticEvent) => {
      e.preventDefault();
      increaseMonth();
    };
  const handleDecreaseMonth =
    (decreaseMonth: () => void) => (e: React.SyntheticEvent) => {
      e.preventDefault();
      decreaseMonth();
    };
  return (
    <div className={classes.customHeaderContainer}>
      <div className={classes.monthHeader}>
        <button
          onClick={handleDecreaseMonth(decreaseMonth)}
          disabled={prevMonthButtonDisabled}
          className={classes.leftBtn}
          type="button"
        >
          <ChevronIcon />
        </button>
        <div className={classes.monthName}>
          {MONTHS[date.getMonth()]} {date.getFullYear()}
        </div>
        <button
          onClick={handleIncreaseMonth(increaseMonth)}
          className={classes.rightBtn}
          disabled={nextMonthButtonDisabled}
        >
          <ChevronIcon />
        </button>
      </div>
    </div>
  );
};
export default CalendarBody;

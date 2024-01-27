import { StylesConfig } from "react-select";

const midnightBlue = "#1a1e25";
const darkSlateGrey = "#282e37";
const blueGrey700 = "#2c393f";
const lightGrey100 = "#DDD";
const grey100 = "#777";

const inputField = {
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: "150%",
};

export const componentWrapper = {
  width: "100%",
};

export const customStyles: StylesConfig = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    outline: "none",
    boxShadow: "none",
    maxHeight: "3rem",
    backgroundColor: midnightBlue,
    borderRadius: "0.25rem",
    border: `1px solid ${blueGrey700}`,
    "&:hover": {
      backgroundColor: state.isFocused ? midnightBlue : darkSlateGrey,
    },
  }),
  container: (baseStyles) => ({
    ...baseStyles,
    boxShadow: "none",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    ...inputField,
    color: lightGrey100,
    border: "none",
    backgroundColor: state.isSelected ? darkSlateGrey : midnightBlue,
    "&:hover": {
      backgroundColor: darkSlateGrey,
    },
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    ...inputField,
    color: lightGrey100,
  }),

  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: midnightBlue,
  }),

  menuList: (baseStyles) => ({
    ...baseStyles,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: "0.25rem",
    backgroundColor: midnightBlue,
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: "0.75rem",
    textOverflow: "ellipsis",
    maxWidth: "14rem",
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    ...inputField,
    margin: 0,
    padding: 0,
    color: lightGrey100,
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    ...inputField,
    color: grey100,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
    paddingRight: "0.75rem",
  }),
};

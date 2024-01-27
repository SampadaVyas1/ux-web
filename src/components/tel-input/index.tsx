import React, {
  BaseSyntheticEvent,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { ITelInputProps } from "./tel-input";
import classes from "./tel-input.module.scss";

const TelInput = (props: ITelInputProps) => {
  const [mobNumberWithoutDialCode, setMobNumberWithoutDialCode] = useState("");
  const {
    name = "tel-input",
    placeholder = "Enter your phone number",
    searchPlaceholder = "Search your country",
    countryNotFoundText = "Not Found",
    errors,
    register,
    customContainerClass,
    customInputClass,
    watch,
    getValues,
    clearErrors,
    setErrors,
    ...rest
  } = props;
  const [errorMsg, setErrorMsg] = useState(errors?.[name]?.message || "");
  const [selectedCountry, setSelectedCountry] = useState("91");
  const [mobileNumber, setMobileNumber] = useState(watch(name));
  const [value, setValue] = useState();
  const handleBlur = () => {
    if (!mobNumberWithoutDialCode) {
      clearErrors(name);
      setErrorMsg("");
    }
  };

  const {
    onChange: onChangeOfRegister,
    onBlur,
    ...restRegister
  } = register(name);
  const changeHandler = (
    value: string,
    country: any,
    event: BaseSyntheticEvent
  ) => {
    const { dialCode = "", format = "" } = country;
    const dialCodeSign = format.charAt(0);

    let phoneNumber = value.replace(dialCode, "");
    setMobNumberWithoutDialCode(phoneNumber);
    if (selectedCountry !== dialCode) {
      setSelectedCountry(dialCode);
      clearErrors(name);
      setErrorMsg("");
      setErrors?.(name, {
        type: "required",
        message: "Mobile number is required",
      });
      setMobNumberWithoutDialCode("");
      phoneNumber = "";
    }
    phoneNumber = `${dialCodeSign}${dialCode} ${phoneNumber}`;
    setMobileNumber(phoneNumber);
    onChangeOfRegister(event);
  };

  const handleValue = useCallback(() => {
    setValue(mobileNumber);
  }, [mobileNumber]);

  useEffect(() => {
    handleValue();
  }, [handleValue, mobileNumber]);

  return (
    <div
      className={` ${classes.componentContainer} ${customContainerClass ?? ""}`}
    >
      <PhoneInput
        onChange={changeHandler}
        containerClass={`${classes.phoneInputContainer} ${
          errorMsg && classes.errStateContainer
        } ${customInputClass ?? ""}`}
        inputClass={classes.phoneInput}
        buttonClass={classes.dropdownBtn}
        dropdownClass={classes.dropdownContainer}
        searchClass={classes.searchContainer}
        value={value}
        inputProps={{
          name: { name },
          ...restRegister,
          ...rest,
          className: classes.input,
          autoComplete: "off",
        }}
        placeholder={placeholder}
        country="in"
        disableCountryCode={false}
        autoFormat={true}
        enableClickOutside={true}
        countryCodeEditable={false}
        enableSearch={true}
        searchPlaceholder={searchPlaceholder}
        searchNotFound={countryNotFoundText}
        disableCountryGuess={false}
        onBlur={handleBlur}
      />
      {errorMsg && <div className={classes.errorMsg}>{errorMsg}</div>}
    </div>
  );
};

export default memo(TelInput);

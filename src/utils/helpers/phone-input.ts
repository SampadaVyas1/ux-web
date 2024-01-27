export const mobileNumberRegexValidator = (value: string, regex: RegExp) => {
  if (value) {
    const [, mobileNumber] = value.trim().split(" ");
    if (mobileNumber) {
      return regex.test(mobileNumber);
    }
  }
  return false;
};

export const phoneNumberHelper = (value: any, regex: RegExp) => {
  const [countryCode, ...rest] = value.split(" ");
  const contactNumber = rest.join("").replace(/[^0-9]/g, "");
  const result = `${countryCode} ${contactNumber}`;
  return mobileNumberRegexValidator(result, regex);
};

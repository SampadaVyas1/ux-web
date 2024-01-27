import React, { useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { IRecaptchaWrapper } from "./recaptcha";
import { DisabledCaptcha, SelectedCheckBox } from "@/assets/svgs";
import classes from "./recaptcha.module.scss";
import { Fragment } from "react";
import Typography from "@/components/typography";
import BigCircleCursor from "../big-circle-cursor";
import { MouseContext } from "@/context/mouseContext/mouseContext";
import { CURSOR_TYPE } from "../big-circle-cursor/cursor-type.helper";

const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY || "";

const RecaptchaWrapper = (props: IRecaptchaWrapper) => {
  const { setIsSelected, selected } = props;
  const { cursorChangeHandler } = useContext(MouseContext);

  const handleRecaptchaChange = (value: any) => {
    if (value) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  };

  return (
    <div onClick={handleRecaptchaChange} className={classes.captchaWrapper}>
      <Fragment>
        {!selected ? (
          <BigCircleCursor
            className={classes.fieldCheckBox}
            onClick={() => cursorChangeHandler(CURSOR_TYPE.DOTCURSOR)}
          >
            <DisabledCaptcha className={classes.checkbox} />
          </BigCircleCursor>
        ) : (
          <div className={classes.fieldCheckBox}>
            <SelectedCheckBox className={classes.checkbox} />
          </div>
        )}
      </Fragment>
      <Typography variant="input-label">I’m not a robot</Typography>
      <ReCAPTCHA
        theme="light"
        size="invisible"
        sitekey={reCaptchaKey}
        onChange={handleRecaptchaChange}
        className={classes.captcha}
      />
    </div>
  );
};

export default RecaptchaWrapper;

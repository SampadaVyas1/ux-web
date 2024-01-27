import { Fragment, memo } from "react";
import FormFieldWrapper from "@/components/form-field-wrapper";
import RecaptchaWrapper from "@/components/recaptcha";
import Grid from "@/components/grid";
import Button from "@/components/button";
import { BUTTON_TEXT } from "@/utils/constants/common";
import { IFormItemType, IStepItem } from "./stepper";
import classes from "./stepper-form.module.scss";
import BigCircleCursor from "../big-circle-cursor";
import Loader from "../loader";

const StepItem = ({
  step,
  register,
  handleSubmit,
  options,
  errors,
  setValue,
  watch,
  clearErrors,
  formFields,
  nextBtnDisabled,
  prevBtnDisabled,
  handlePrevStep,
  handleSubmitForm,
  handleSalaryChange,
  control,
  getValues,
  setIsReCAPTCHASelected,
  isReCAPTCHASelected = false,
  loader,
  setErrors,
}: IStepItem) => {
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} autoComplete="off">
      <Grid item sm={4} md={8} lg={12}>
        <Grid container className={classes.formInputs}>
          {formFields?.map((item: IFormItemType, index: number) => {
            return (
              <Grid item sm={4} md={4} lg={4} key={index}>
                <FormFieldWrapper
                  label={item?.label}
                  isRequired={item?.isRequired}
                  isError={errors}
                  fieldData={item}
                  clearErrors={clearErrors}
                  watch={watch}
                  errors={errors}
                  setValue={setValue}
                  register={register}
                  control={control}
                  handleSalaryChange={handleSalaryChange}
                  key={index}
                  getValues={getValues}
                  options={options}
                  setErrors={setErrors}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <div className={classes.btnContainer}>
        {step == 1 && (
          <RecaptchaWrapper
            selected={isReCAPTCHASelected}
            setIsSelected={setIsReCAPTCHASelected}
          />
        )}
        <div className={classes.btnWrapper}>
          <BigCircleCursor>
            <Button
              type="button"
              variant="secondary"
              onClick={handlePrevStep}
              className={classes.button}
              disabled={prevBtnDisabled}
            >
              {BUTTON_TEXT?.back}
            </Button>
          </BigCircleCursor>
          <BigCircleCursor
            Element={Button}
            type="submit"
            className={classes.button}
            disabled={nextBtnDisabled}
          >
            {step == 0 ? (
              BUTTON_TEXT?.next
            ) : (
              <Fragment>
                {loader ? (
                  <Loader
                    className={classes.loaderWrapper}
                    variant="white"
                    customWrapperClass={classes.containerWrapper}
                  />
                ) : (
                  BUTTON_TEXT?.submit
                )}
              </Fragment>
            )}
          </BigCircleCursor>
        </div>
      </div>
    </form>
  );
};

export default memo(StepItem);

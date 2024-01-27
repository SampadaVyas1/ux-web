import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormFieldWrapper from "@/components/form-field-wrapper";
import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import { ContactUsPayloadType, IContactUsForm } from "./contact-us";
import {
  DEFAULT_DEBOUNCE_DELAY,
  ERROR_TOAST_TYPE,
  TOAST_DATA,
  TOAST_TYPE,
} from "@/utils/constants/common";
import { GetInTouchForm } from "@/utils/services/lets-talk.service";
import classes from "./contactus.module.scss";
import { debounce } from "@/utils/helpers/common";
import showToast from "@/components/toast";
import TextAnimator from "@/components/text-animator";
import { TextAnimatorWithMinHeight } from "@/components/text-animator";
import BigCircleCursor from "@/components/big-circle-cursor";
import Loader from "@/components/loader";
import { ERROR_CODE } from "@/utils/constants/errors";

const ContactUsForm = (props: IContactUsForm) => {
  const { formFields, schema, initialValues } = props;
  const [isBtnEnabled, setIsBtnEnabled] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isFieldDisable, setIsFieldDisable] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
    watch,
    reset,
    clearErrors,
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  const handleFormSubmission = (data: ContactUsPayloadType) => {
    try {
      GetInTouchForm({ ...data, formType: "uxDesign" })
        .then((res) => {
          if (res?.status == ERROR_CODE?.CREATED) {
            reset();
            showToast(
              TOAST_TYPE,
              TOAST_DATA?.CONTACT_US_TITLE,
              TOAST_DATA?.CONTACT_US_MSG
            );
            setIsFieldDisable(false);
            setLoading(false);
          } else {
            showToast(
              ERROR_TOAST_TYPE,
              TOAST_DATA?.ERROR_TOAST_TITLE,
              TOAST_DATA?.ERROR_TOAST_MSG
            );
            setLoading(false);
            setIsFieldDisable(false);
          }
        })
        .catch((error) => {
          showToast(
            ERROR_TOAST_TYPE,
            TOAST_DATA?.ERROR_TOAST_TITLE,
            TOAST_DATA?.ERROR_TOAST_MSG
          );
          setLoading(false);
          setIsFieldDisable(false);
        });
    } catch (error) {
      showToast(
        ERROR_TOAST_TYPE,
        TOAST_DATA?.ERROR_TOAST_TITLE,
        TOAST_DATA?.ERROR_TOAST_MSG
      );
      setLoading(false);
      setIsFieldDisable(false);
    }
  };

  const debouncedHandleFormSubmission = debounce(
    (data: ContactUsPayloadType) => {
      handleFormSubmission(data);
    },
    DEFAULT_DEBOUNCE_DELAY
  );

  const handleSubmitForm = (values: ContactUsPayloadType) => {
    const { mobile, check } = values;
    const newMobile = mobile.replace(/[+\s]/g, "");
    setIsBtnEnabled(true);
    setIsFieldDisable(true);
    const data = {
      ...values,
      mobile: newMobile,
      check,
      formType: "uxDesign",
    };
    setLoading(true);
    debouncedHandleFormSubmission(data);
  };

  useEffect(() => {
    setIsBtnEnabled(!isDirty || !isValid);
  }, [isDirty, isValid]);

  return (
    <div className={classes.outerWrapper}>
      <div className={classes.formContentLayout}>
        <TextAnimatorWithMinHeight variant="heading-1" text={"Let's Talk!"} />
        <TextAnimatorWithMinHeight
          variant="body-2"
          customStylingOnText={classes.subText}
          text={`Fill in the details below, and we'll get back to you soon.`}
        />
      </div>
      <div>
        <form onSubmit={handleSubmit(handleSubmitForm)} autoComplete="off">
          <div className={classes.wrapper}>
            {formFields?.map((item, index: number) => {
              return (
                <div key={index}>
                  <FormFieldWrapper
                    label={item?.label}
                    isRequired={item?.isRequired}
                    isError={false}
                    fieldData={item}
                    clearErrors={clearErrors}
                    watch={watch}
                    errors={errors}
                    setValue={setValue}
                    register={register}
                    key={index}
                    getValues={getValues}
                    disableField={isFieldDisable}
                  />
                </div>
              );
            })}
          </div>
          <div className={classes.checkBoxField}>
            <Checkbox
              register={register}
              name={"check"}
              checkboxInfo={`Get a call back`}
              customStyle={classes.checkBoxWrapper}
            />
          </div>
          <div className={classes.btnContainer}>
            <BigCircleCursor
              Element={Button}
              type="submit"
              disabled={isBtnEnabled}
              className={classes.submitBtn}
            >
              {loading ? (
                <Loader
                  className={classes.loaderWrapper}
                  variant="white"
                  customWrapperClass={classes.containerWrapper}
                />
              ) : (
                `Submit`
              )}
            </BigCircleCursor>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactUsForm;

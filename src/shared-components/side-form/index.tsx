import { Fragment, memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Grid from "@/components/grid";
import CustomImage from "@/components/image";
import Typography from "@/components/typography";
import FormFieldWrapper from "@/components/form-field-wrapper";
import Button from "@/components/button";
import withContainer from "@/hocs/withContainer";
import ContactUsSideImg from "@/assets/images/webp/contact-us.webp";
import ContactUsSideImgMob from "@/assets/images/side-form-banner-mob.png";
import { DeviceType } from "@/utils/enum";
import useWindowUtil from "@/hooks/useWindowUtil";
import { ISideForm, SideFormPayloadType } from "./side-form";
import { GetInTouchForm } from "@/utils/services/lets-talk.service";
import {
  DEFAULT_DEBOUNCE_DELAY,
  ERROR_TOAST_TYPE,
  TIME_INTERVAL,
  TOAST_DATA,
  TOAST_TYPE,
} from "@/utils/constants/common";
import classes from "./side-form.module.scss";
import showToast from "@/components/toast";
import {
  debounce,
  getCustomStyleForExtraSmallDevice,
} from "@/utils/helpers/common";
import BigCircleCursor from "@/components/big-circle-cursor";
import TrackLines from "@/components/drone-animation/track-lines";
import Loader from "@/components/loader";
import { ERROR_CODE } from "@/utils/constants/errors";

const ContactUsSideForm = (props: ISideForm) => {
  const { formFields, schema, initialValues } = props;
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
  const [isBtnEnable, setIsBtnEnable] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { deviceType, windowDimensions } = useWindowUtil();

  const isMobileDevice = deviceType === DeviceType.MOBILE;

  const handleFormSubmission = (data: SideFormPayloadType) => {
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
            setLoading(false);
          } else {
            reset();
            showToast(
              ERROR_TOAST_TYPE,
              TOAST_DATA?.ERROR_TOAST_TITLE,
              TOAST_DATA?.ERROR_TOAST_MSG
            );
            setLoading(false);
          }
        })
        .catch((error) => {
          reset();
          showToast(
            ERROR_TOAST_TYPE,
            TOAST_DATA?.ERROR_TOAST_TITLE,
            TOAST_DATA?.ERROR_TOAST_MSG
          );
          setLoading(false);
        });
    } catch (error) {
      showToast(
        ERROR_TOAST_TYPE,
        TOAST_DATA?.ERROR_TOAST_TITLE,
        TOAST_DATA?.ERROR_TOAST_MSG
      );
      setLoading(false);
    }
  };
  const debouncedHandleFormSubmission = debounce(
    (data: SideFormPayloadType) => {
      handleFormSubmission(data);
    },
    DEFAULT_DEBOUNCE_DELAY
  );

  const handleSubmitForm = (values: SideFormPayloadType) => {
    setIsBtnEnable(true);
    debouncedHandleFormSubmission(values);
    setLoading(true);
  };
  const customStyleForExtraSmallDevice = getCustomStyleForExtraSmallDevice(
    windowDimensions,
    classes.customInputClass
  );

  useEffect(() => {
    setIsBtnEnable(!isDirty || !isValid);
  }, [isDirty, isValid]);
  return (
    <Fragment>
      <Grid item sm={4} md={4} lg={6} className={classes.imageWrapper}>
        <div className={classes.leftSection}>
          <CustomImage
            src={isMobileDevice ? ContactUsSideImgMob : ContactUsSideImg}
            alt="Banner"
            customClass={classes.imageContainer}
          />
          <div className={classes.infoText}>
            <Typography
              variant="heading-1"
              customStyle={classes.headingText}
            >{`Let's Talk`}</Typography>
            <Typography variant="body-2" customStyle={classes.subText}>
              {`Let's collaborate to build and scale together!`}
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item sm={4} md={5} lg={6}>
        <div className={classes.form}>
          <form onSubmit={handleSubmit(handleSubmitForm)} autoComplete="off">
            <div className={classes.formInputs}>
              {formFields?.map((item, index: number) => {
                return (
                  <div key={index}>
                    <FormFieldWrapper
                      label={item?.label}
                      isRequired={item?.isRequired}
                      isError={false}
                      fieldData={item}
                      customInputClass={customStyleForExtraSmallDevice}
                      clearErrors={clearErrors}
                      watch={watch}
                      errors={errors}
                      getValues={getValues}
                      setValue={setValue}
                      register={register}
                    />
                  </div>
                );
              })}
            </div>
            <div className={classes.btnContainer}>
              <BigCircleCursor
                Element={Button}
                type="submit"
                disabled={isBtnEnable}
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
      </Grid>
    </Fragment>
  );
};
export default memo(withContainer(ContactUsSideForm));

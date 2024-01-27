import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Stepper from "@/components/stepper";
import {
  IStepPayloadOne,
  IStepPayloadTwo,
  IStepper,
  IStepperFormPayload,
} from "./stepper";
import StepItem from "./step-item";
import {
  APPLY_JOB_SCHEMA1,
  APPLY_JOB_SCHEMA2,
  STEP1_INITIAL_VALUES,
  STEP2_INITIAL_VALUES,
} from "./stepper.schema";
import {
  APPLY_JOB_FORM_FIELDS1,
  APPLY_JOB_FORM_FIELDS2,
  OPTIONS_ARRAY,
} from "./stepper-form.helper";
import { ApplyJobForm } from "@/utils/services/careers-form.service";
import classes from "./stepper-form.module.scss";
import showToast from "../toast";
import {
  DEFAULT_DEBOUNCE_DELAY,
  ERROR_TOAST_TYPE,
  TOAST_DATA,
  TOAST_TYPE,
} from "@/utils/constants/common";
import TrackLines from "@/components/drone-animation/track-lines";
import TextAnimator from "../text-animator";
import { useRouter } from "next/router";
import Modal from "../modal";
import Button from "../button";
import { ERROR_CODE } from "@/utils/constants/errors";
import BigCircleCursor from "../big-circle-cursor";
import { APPLY_JOB_ROUTE, APP_ROUTES } from "@/utils/constants/routes";
import { debounce } from "@/utils/helpers/common";
import { getForMattedDateFromString } from "@/utils/helpers/datetime";

const Form = (props: IStepper) => {
  const { jobId = "" } = props;
  const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(false);
  const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(true);
  const [step, setStep] = useState<number>(0);
  const [_payloadStep1, setPayloadStep1] = useState(STEP1_INITIAL_VALUES);
  const [_isReCAPTCHASelectedStep1, setIsReCAPTCHASelectedStep1] =
    useState<boolean>(false);
  const [isReCAPTCHASelectedStep2, setIsReCAPTCHASelectedStep2] =
    useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [pendingRoute, setPendingRoute] = useState("");
  const [confirmedNavigation, setConfirmedNavigation] = useState(false);
  const [_unsavedChanges, setUnsavedChanges] = useState(false);
  const [isBackBtn, setIsBackBtn] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
    reset,
    watch,
    clearErrors,
    getValues: getValues1,
    setError,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(APPLY_JOB_SCHEMA1),
    defaultValues: STEP1_INITIAL_VALUES,
  });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2, isDirty: isDirty2, isValid: isValid2 },
    setValue: setValue2,
    watch: watch2,
    reset: reset2,
    clearErrors: clearErrors2,
    control,
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(APPLY_JOB_SCHEMA2),
    defaultValues: STEP2_INITIAL_VALUES,
  });

  const handleSubmitForm = (values: IStepPayloadOne) => {
    setStep(step + 1);
    if (step + 1 == 1) {
      reset2({ ...getValues() }, { keepDirty: true, keepErrors: true });
    }
    setPayloadStep1(values);
    setUnsavedChanges(true);
  };

  const handlePrevStep = () => {
    if (step == 1) {
      setStep(0);
      reset(_payloadStep1, {
        keepDirty: true,
        keepErrors: false,
        keepIsValid: true,
      });
    }
    const isFormEdited = isDirty || isDirty2;
    if (step == 0) {
      if (isFormEdited) {
        setShowModal(true);
        setIsBackBtn(true);
      } else {
        if (jobId == "0") {
          router.push(`/${APP_ROUTES?.CAREERS}`);
        } else {
          router.push(`${APPLY_JOB_ROUTE.jobDescription}?job-id=${jobId}`);
        }
      }
    }
  };
  const handleResetForm = () => {
    reset();
    reset2();
    setNextBtnDisabled(true);
    setIsReCAPTCHASelectedStep2(false);
  };
  const handleFormSubmission = (
    data: IStepperFormPayload,
    resume: FileList
  ) => {
    try {
      ApplyJobForm(data, resume)
        .then((res) => {
          if (res?.data?.statusCode == ERROR_CODE?.CREATED) {
            handleResetForm();
            setStep(0);
            showToast(
              TOAST_TYPE,
              TOAST_DATA?.TOAST_TITLE_JOB_FORM,
              TOAST_DATA?.TOAST_MSG_JOB_FORM
            );
            setLoading(false);
            router.push(`/${APP_ROUTES?.CAREERS}`);
          } else if (res?.data?.alreadyApplied) {
            showToast(
              TOAST_TYPE,
              TOAST_DATA?.DUPLICATE_APPLICATION_TITLE,
              TOAST_DATA?.DUPLICATE_APPLICATION_MSG
            );
            setLoading(false);
            setNextBtnDisabled(false);
          } else {
            showToast(
              ERROR_TOAST_TYPE,
              TOAST_DATA?.ERROR_TOAST_TITLE,
              TOAST_DATA?.ERROR_TOAST_MSG
            );
            setLoading(false);
            setNextBtnDisabled(false);
          }
        })
        .catch((error) => {
          showToast(
            ERROR_TOAST_TYPE,
            TOAST_DATA?.ERROR_TOAST_TITLE,
            TOAST_DATA?.ERROR_TOAST_MSG
          );
          setLoading(false);
          setNextBtnDisabled(false);
        });
    } catch (error) {
      showToast(
        ERROR_TOAST_TYPE,
        TOAST_DATA?.ERROR_TOAST_TITLE,
        TOAST_DATA?.ERROR_TOAST_MSG
      );
      setLoading(false);
      setNextBtnDisabled(false);
    }
  };

  const debouncedHandleFormSubmission = debounce(
    (data: IStepperFormPayload, resume: FileList) => {
      handleFormSubmission(data, resume);
    },
    DEFAULT_DEBOUNCE_DELAY
  );

  const handleSubmitForm2 = (values: IStepPayloadTwo) => {
    setUnsavedChanges(true);
    setNextBtnDisabled(true);
    setLoading(true);
    const { currentSalary, resume } = values;
    const fileData = resume[0];
    const [dialCode, mobileNumber] = _payloadStep1?.mobile.trim().split(" ");
    const newSalary = currentSalary?.replace(/,/g, "");
    const payload = {
      ..._payloadStep1,
      mobile: mobileNumber,
      ...values,
      lastWorkingDay: getForMattedDateFromString(values.lastWorkingDay),
      currentSalary: newSalary,
      resumeFilename: fileData?.name,
      jobId: jobId,
    };
    debouncedHandleFormSubmission(payload, resume);
  };

  const handleNextButtonState = useCallback(() => {
    const isStep1Valid = !isValid;
    const isStep0Valid = !isValid2 || !isReCAPTCHASelectedStep2;
    setNextBtnDisabled(step == 0 ? isStep1Valid : isStep0Valid);
  }, [isValid, isValid2, isReCAPTCHASelectedStep2, step]);

  useEffect(() => {
    handleNextButtonState();
  }, [handleNextButtonState]);

  const handleForm = (stepCount: number) => {
    switch (stepCount) {
      case 0:
        return (
          <StepItem
            step={step}
            formFields={APPLY_JOB_FORM_FIELDS1}
            nextBtnDisabled={nextBtnDisabled}
            prevBtnDisabled={prevBtnDisabled}
            clearErrors={clearErrors}
            watch={watch}
            errors={errors}
            getValues={getValues1}
            setValue={setValue}
            register={register}
            handleSubmit={handleSubmit}
            handleSubmitForm={handleSubmitForm}
            handlePrevStep={handlePrevStep}
            setIsReCAPTCHASelected={setIsReCAPTCHASelectedStep1}
            setErrors={setError}
          />
        );
      case 1:
        return (
          <StepItem
            step={step}
            formFields={APPLY_JOB_FORM_FIELDS2}
            nextBtnDisabled={nextBtnDisabled}
            prevBtnDisabled={prevBtnDisabled}
            options={OPTIONS_ARRAY}
            clearErrors={clearErrors2}
            watch={watch2}
            errors={errors2}
            setValue={setValue2}
            register={register2}
            control={control}
            getValues={getValues}
            handleSubmit={handleSubmit2}
            handleSubmitForm={handleSubmitForm2}
            handlePrevStep={handlePrevStep}
            setIsReCAPTCHASelected={setIsReCAPTCHASelectedStep2}
            isReCAPTCHASelected={isReCAPTCHASelectedStep2}
            loader={loading}
          />
        );
    }
  };

  const handleGoBack = () => {
    if (step == 0 && isBackBtn) {
      setConfirmedNavigation(true);
      if (jobId == "0") {
        router.push(`/${APP_ROUTES?.CAREERS}`);
      } else {
        router.push(`${APPLY_JOB_ROUTE.jobDescription}?job-id=${jobId}`);
      }
      setIsBackBtn(false);
    } else {
      setConfirmedNavigation(true);
      setShowModal(false);
      router.push(`${pendingRoute}`);
      setPendingRoute("");
    }
  };

  const handleCancel = () => {
    setShowModal(false);
  };

  const handleRouteChange = useCallback(
    (url: string) => {
      const isFormEdited = isDirty || isDirty2;
      if (!confirmedNavigation && isFormEdited) {
        setShowModal(true);
        setPendingRoute(url);
        window.history.pushState({}, "", router.asPath);
        router.events.emit("routeChangeError");
        throw "Abort route change. Please ignore this error.";
      }
    },
    [router, confirmedNavigation, isDirty, isDirty2]
  );
  const onBeforeUnload = useCallback(
    (e: BeforeUnloadEvent) => {
      if (isDirty || isDirty2) {
        e.preventDefault();
        setShowModal(true);
        e.returnValue = "";
        if (window.performance) {
          if (performance.navigation.type == 1) {
            setShowModal(false);
            setPendingRoute(router?.asPath);
            window.history.pushState({}, "", router.asPath);
          }
        }
        return;
      }
    },
    [isDirty, isDirty2, router.asPath]
  );

  useEffect(() => {
    window.addEventListener("beforeunload", onBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, [isDirty, isDirty2, onBeforeUnload]);

  useEffect(() => {
    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [handleRouteChange, router.events]);

  return (
    <div className={classes.outerWrapper}>
      <div className={`content ${classes.wrapper}`}>
        <TextAnimator
          variant="body-1"
          text={"Fill out the form"}
          customStylingOnText={classes.heading}
        />
        <TextAnimator
          variant="body-3"
          text={"Help us with the following details"}
          customStylingOnText={classes.subText}
        />
        <div className={classes.stepper}>
          <Stepper
            activeStep={step}
            values={[{ text: "1" }, { text: "2" }]}
            basicHeading="Basic Details"
            workHeading="Work Details"
          />
        </div>
        {handleForm(step)}
        {showModal && (
          <Modal
            customClass={classes.modalContainer}
            onClose={handleCancel}
            customHeadingClass={classes.modalHeader}
            heading="You will lose all the information entered till now. Do you want
                to go back?"
          >
            <div className={classes.btnWrapper}>
              <BigCircleCursor>
                <Button
                  variant="secondary"
                  onClick={handleCancel}
                  className={classes.cancelButton}
                >
                  Cancel
                </Button>
              </BigCircleCursor>
              <BigCircleCursor>
                <Button onClick={handleGoBack} className={classes.goBackButton}>
                  Go Back
                </Button>
              </BigCircleCursor>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};
export default Form;

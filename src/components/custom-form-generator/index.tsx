import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Typography from "@/components/typography";
import FormFieldWrapper from "@/components/form-field-wrapper";
import Button from "@/components/button";
import { IFormType } from "./custom-form-generator";
import classes from "./custom-form-generator.module.scss";
import BigCircleCursor from "@/components/big-circle-cursor";

const FormComponent = (props: IFormType) => {
  const {
    heading,
    subText,
    schema,
    initialValues,
    formFields,
    onHandleSubmitForm,
  } = props;
  const [isBtnEnabled, setIsBtnEnabled] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
    watch,
    reset,
    clearErrors,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  const handleFormData = (values: any) => {
    reset();
    onHandleSubmitForm?.(values);
  };

  useEffect(() => {
    setIsBtnEnabled(!isDirty || !isValid);
  }, [isDirty, isValid]);

  return (
    <div className={classes.formWrapper}>
      <Typography variant="heading-3">{heading}</Typography>
      <Typography variant="heading-4" customStyle={classes.subtext}>
        {subText}
      </Typography>
      <form onSubmit={handleSubmit(handleFormData)} autoComplete="off">
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
                />
              </div>
            );
          })}
        </div>
        <div className={classes.btnContainer}>
          <BigCircleCursor
            Element={Button}
            type="submit"
            disabled={isBtnEnabled}
            className={classes.customBtn}
          >
            Submit
          </BigCircleCursor>
        </div>
      </form>
    </div>
  );
};
export default FormComponent;

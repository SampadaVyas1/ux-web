import InputError from "@/components/input-error";
import InputLabel from "@/components/input-label";
import Input from "@/components/input";
import FileUploader from "@/components/file-uploader";
import Dropdown from "@/components/dropdown";
import TextArea from "@/components/text-area";
import Container from "@/components/container";
import TelInput from "@/components/tel-input";
import { FieldType, HUNDREDS_SEPARATOR_FORMAT } from "@/utils/constants/common";
import { IFormItemType, IFormWrapper } from "./formField";
import classes from "./form-field.module.scss";
import Calendar from "@/components/Calendar";

const FormFieldWrapper = (props: IFormWrapper) => {
  const {
    label,
    isRequired,
    isError,
    fieldData,
    clearErrors,
    watch,
    errors,
    setValue,
    register,
    control,
    options,
    getValues,
    customInputClass,
    onKeyDown,
    disableField,
    setErrors,
  } = props;

  const handleSalaryChange = (e: React.BaseSyntheticEvent) => {
    e.target.value = e.target.value.replace(/[^0-9.]/g, "");
    e.target.value = new Intl.NumberFormat(HUNDREDS_SEPARATOR_FORMAT).format(
      e.target.value
    );
    setValue(e.target.name, e.target.value);
    return e.target.value;
  };

  const renderFormField = (field: IFormItemType) => {
    const { type } = field;
    switch (type) {
      case FieldType?.date:
        return (
          <Calendar
            register={register}
            errors={errors}
            name={field?.name}
            watch={watch}
            getValues={getValues}
            clearErrors={clearErrors}
            disabled={disableField}
            setErrors={setErrors}
            setValue={setValue}
          />
        );
      case FieldType?.file:
        return (
          <FileUploader
            clearErrors={clearErrors}
            watch={watch}
            name={field?.name}
            register={register}
            errors={errors}
            setValue={setValue}
          />
        );
      case FieldType?.textArea:
        return (
          <TextArea
            rows={4}
            register={register}
            placeholder={field?.placeholder}
            required={field?.isRequired}
            name={field?.name}
            label={field?.label}
            disabled={disableField}
          />
        );
      case FieldType?.dropdownField:
        return (
          <Dropdown
            name={field?.name}
            control={control}
            options={options || []}
          />
        );
      case FieldType?.salary:
        return (
          <Input
            register={register}
            placeholder={field?.placeholder}
            required={field?.isRequired}
            type={field?.type}
            name={field?.name}
            getValues={getValues}
            clearErrors={clearErrors}
            onChange={handleSalaryChange}
          />
        );
      case FieldType?.phone:
        return (
          <TelInput
            label={field?.label}
            register={register}
            errors={errors}
            name={field?.name}
            watch={watch}
            getValues={getValues}
            clearErrors={clearErrors}
            disabled={disableField}
            setErrors={setErrors}
          />
        );
      default:
        return (
          <Input
            register={register}
            placeholder={field?.placeholder}
            required={field?.isRequired}
            type={field?.type}
            name={field?.name}
            getValues={getValues}
            clearErrors={clearErrors}
            customContainerClass={classes.inputField}
            customInputClass={customInputClass}
            errors={errors}
            onKeyDown={onKeyDown}
            disabled={disableField}
          />
        );
    }
  };

  return (
    <Container className={classes.inputWrapper}>
      <InputLabel
        label={label}
        isRequired={isRequired}
        isError={errors?.[fieldData?.name]?.message ? true : false}
        secondaryLabel={fieldData?.secondaryLabel}
      />
      <div>{renderFormField(fieldData)}</div>
      <div className={classes.errorText}>
        <InputError errorMsg={errors[fieldData?.name]?.message} />
      </div>
    </Container>
  );
};
export default FormFieldWrapper;

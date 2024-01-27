import { memo, Fragment, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormFieldWrapper from "@/components/form-field-wrapper";
import withContainer from "@/hocs/withContainer";
import Grid from "@/components/grid";
import Button from "@/components/button";
import {
  columnOneList,
  columnTwoList,
  renderFooterList,
} from "./footer-helper";
import BackToTop from "@/components/back-to-top";
import { SendIcon, CoditasLogo } from "@/assets/svgs";
import classes from "./footer.module.scss";
import { FOOTER_FORM_FIELDS as formFields } from "./footer-form.helper";
import {
  FOOTER_FORM_SCHEMA as schema,
  FOOTER_FORM_INITIAL_VALUES as initialValues,
} from "./footer-form.schema";
import {
  DEFAULT_DEBOUNCE_DELAY,
  ERROR_TOAST_TYPE,
  KEY_CODES,
  TOAST_DATA,
  TOAST_TYPE,
} from "@/utils/constants/common";
import { INewsLetterType } from "./footer";
import showToast from "../toast";
import { debounce } from "@/utils/helpers/common";
import Typography from "../typography";
import { useRouter } from "next/router";
import BigCircleCursor from "@/components/big-circle-cursor";
import { subscribeNewsLetter } from "@/utils/services/news-letter.service";
import { ERROR_CODE } from "@/utils/constants/errors";
import Loader from "@/components/loader";

const FooterList = () => {
  const { push } = useRouter();
  const [columns, updateColumnExpandStatus] = useState<Array<string>>([]);
  const [isBtnEnable, setIsBtnEnable] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
    watch,
    reset,
    getValues,
    clearErrors,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: initialValues,
  });

  const handleFormSubmission = (data: INewsLetterType) => {
    try {
      subscribeNewsLetter({ ...data, formType: "uxNewsletter" })
        .then((res) => {
          if (res?.data?.status == ERROR_CODE?.CREATED) {
            reset();
            showToast(
              TOAST_TYPE,
              TOAST_DATA?.SUBSCRIBED_TITLE,
              TOAST_DATA?.SUBSCRIBED_MSG
            );
            setLoading(false);
          } else if (res?.data?.status == ERROR_CODE?.DUPLICATE) {
            reset();
            showToast(
              TOAST_TYPE,
              TOAST_DATA?.NEWSLETTER_DUPLICATE_TITLE,
              TOAST_DATA?.NEWSLETTER_DUPLICATE_MSG
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
      reset();
      showToast(
        ERROR_TOAST_TYPE,
        TOAST_DATA?.ERROR_TOAST_TITLE,
        TOAST_DATA?.ERROR_TOAST_MSG
      );
      setLoading(false);
    }
  };
  const debouncedHandleFormSubmission = debounce((data: INewsLetterType) => {
    handleFormSubmission(data);
  }, DEFAULT_DEBOUNCE_DELAY);

  const handleSubmitForm = (values: INewsLetterType) => {
    setIsBtnEnable(true);
    setLoading(true);
    debouncedHandleFormSubmission(values);
  };

  useEffect(() => {
    setIsBtnEnable(!isDirty || !isValid);
  }, [isDirty, isValid]);

  const toggleListView = (currentColumnId: string) => {
    const resultIndex = columns.findIndex((_obj) => _obj === currentColumnId);
    if (resultIndex !== -1) {
      columns.splice(resultIndex, 1);
      updateColumnExpandStatus([...columns]);
    } else {
      updateColumnExpandStatus([...columns, currentColumnId]);
    }
  };

  const handleNavigation = () => {
    const parallaxWrapper = document.getElementById("parallaxWrapper");
    if (parallaxWrapper) {
      parallaxWrapper.scrollTop = 0;
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    push("/");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode == KEY_CODES?.ENTER && !isBtnEnable) {
      setIsBtnEnable(false);
    }
  };

  return (
    <Fragment>
      <Grid item sm={4} md={8} lg={3} className={classes.footerInfo}>
        <div className={classes.coditasFooter}>
          <BigCircleCursor
            Element={CoditasLogo}
            onClick={handleNavigation}
            className={classes.coditasLogo}
          />
          <Typography customStyle={classes.companyLogoDesc}>
            Code is art, Code is us
          </Typography>
        </div>
        <Typography customStyle={classes.copyRightDec}>
          © 2023 Coditas. All rights reserved.
        </Typography>
      </Grid>
      <Grid item sm={4} md={2} lg={2} className={classes.footerInfo}>
        {renderFooterList(
          "footerPagesColumn",
          "Company",
          columnOneList,
          toggleListView,
          columns
        )}
      </Grid>
      <Grid item sm={4} md={3} lg={3} className={classes.footerInfo}>
        {renderFooterList(
          "footerVerticalsColumn",
          "Other Verticals",
          columnTwoList,
          toggleListView,
          columns
        )}
      </Grid>
      <Grid
        item
        sm={4}
        md={3}
        lg={4}
        className={`${classes.subScribeGridItem}`}
      >
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          autoComplete="off"
          className={classes.footerListTitle}
        >
          <Typography
            customStyle={classes.newsLetterSubscriptionTitle}
            fontVariant="medium"
          >
            Subscribe to our newsletter:
          </Typography>

          <div className={classes.footerFormWrapper}>
            <FormFieldWrapper
              label={formFields?.label}
              isRequired={formFields?.isRequired}
              isError={false}
              fieldData={formFields}
              clearErrors={clearErrors}
              watch={watch}
              errors={errors}
              setValue={setValue}
              register={register}
              getValues={getValues}
              customInputClass={classes.emailField}
              onKeyDown={handleKeyDown}
            />
            <BigCircleCursor
              Element={Button}
              type="submit"
              disabled={isBtnEnable}
              className={classes.newsletterIcon}
            >
              {loading ? (
                <Loader className={classes.loaderWrapper} variant="white" />
              ) : (
                <SendIcon />
              )}
            </BigCircleCursor>
          </div>
        </form>
      </Grid>
      <Grid className={classes.backToTop} fullWidth>
        <BackToTop />
      </Grid>
    </Fragment>
  );
};

export default memo(withContainer(FooterList));

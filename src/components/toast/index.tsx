import React, { Fragment } from "react";
import toast from "react-hot-toast";
import Typography from "@/components/typography";

import { ToastType } from "@/utils/enum";
import { IToast, type } from "./toast";
import { CloseIcon, GreenTick, ErrorIcon } from "@/assets/svgs";
import classes from "./toast.module.scss";

const Toast = ({ type, title, message }: IToast) => {
  return (
    <Fragment>
      <div className={classes.toastWrapper}>
        <div className={classes.contentLayout}>
          <div className={classes.titleLayout}>
            {type === ToastType.success ? (
              <GreenTick className={classes.icon} />
            ) : (
              <ErrorIcon className={classes.icon} />
            )}
            <Typography variant="heading-5" customStyle={classes.title}>
              {title}
            </Typography>
          </div>
          <CloseIcon
            className={classes.icon}
            onClick={() => {
              toast.remove();
            }}
          />
        </div>
        <Typography variant="heading-4" customStyle={classes.message}>
          {message}
        </Typography>
      </div>
    </Fragment>
  );
};

export default function showToast(type: type, title: string, message: string) {
  toast.custom(<Toast type={type} title={title} message={message} />);
}

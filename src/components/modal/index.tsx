import { CloseIcon } from "@/assets/svgs";
import Typography from "@/components/typography";
import { IModalType } from "./modal";
import classes from "./modal.module.scss";
import { useEffect } from "react";
import BigCircleCursor from "../big-circle-cursor";

const Modal = (props: IModalType) => {
  const {
    heading,
    subText,
    onClose,
    children,
    customClass,
    customHeadingClass,
  } = props;

  const updateModalStyle = (
    ele = document.body,
    overflow = "",
    top = "",
    touchAction = ""
  ) => {
    const modal = document.getElementById("modal");
    ele.style.overflow = overflow;
    ele.style.touchAction = touchAction;
    if (modal) {
      modal.style.top = top;
    }
    return ele;
  };

  useEffect(() => {
    const body = document.body;
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
    body.style.top = window.scrollX + "px";

    return () => {
      body.style.overflow = "";
      body.style.touchAction = "";
      body.style.top = "";
    };
  }, []);

  const preventClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <div className={classes.backdrop} onClick={onClose} id="modal">
      <div
        className={`${classes.modalWrapper} ${customClass}`}
        onClick={preventClick}
      >
        <div className={classes.heading}>
          <Typography
            variant="body-2"
            customStyle={`${customHeadingClass}`}
            fontVariant="light"
          >
            {heading}
          </Typography>
          <BigCircleCursor>
            <CloseIcon onClick={onClose} className={classes.closeIcon} />
          </BigCircleCursor>
        </div>
        <div>
          <Typography variant="body-2">{subText}</Typography>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};
export default Modal;

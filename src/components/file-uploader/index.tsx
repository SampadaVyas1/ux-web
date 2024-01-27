import React, { useEffect, useRef, useState } from "react";
import { CONTENT_TYPES } from "@/utils/constants/common";
import classes from "./file-uploader.module.scss";
import { IFileUploaderProps } from "./file-uploader";
import {
  FileUpload,
  ErrorIcon,
  TransparentBackgroundTick,
  DeleteIcon,
} from "@/assets/svgs";
import BigCircleCursor from "../big-circle-cursor";

const FileUploader = (props: IFileUploaderProps) => {
  const {
    name = "",
    register,
    errors,
    watch,
    setValue,
    clearErrors,
    customContainerClass,
    customInputClass,
    ...rest
  } = props;
  const errorMsg = errors?.[name]?.message || "";
  const inputData = watch(name);
  const [fileData, setFileData] = useState<any>({});
  const inputRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const firstFile = inputData?.[0] || {};
    setFileData(firstFile);
  }, [inputData]);

  const deleteHandler = () => {
    setValue(name, []);
    clearErrors(name);
  };

  return (
    <div
      className={`${classes.resetDefaultStyle} ${classes.componentWrapper} ${
        customContainerClass ?? ""
      }`}
    >
      <div
        className={`${classes.inputFieldWrapper} ${
          errorMsg && classes.errStateInput
        }`}
      >
        {fileData?.size ? (
          <div className={classes.fileDetails}>
            <div className={classes.fileName}>
              {errorMsg ? <ErrorIcon /> : <TransparentBackgroundTick />}
              <span className={classes.name}>{fileData.name}</span>
            </div>

            <BigCircleCursor
              className={classes.fileUploader}
              onClick={deleteHandler}
            >
              <DeleteIcon
                onClick={deleteHandler}
                className={classes.deleteIcon}
              />
            </BigCircleCursor>
          </div>
        ) : (
          <div className={classes.inputWrapper}>
            <input
              name={name}
              className={`${classes.input} ${customInputClass ?? ""}`}
              type="file"
              id="file_upload"
              accept={CONTENT_TYPES.PDF}
              {...(register && register(name))}
              {...rest}
              ref={(e) => {
                register(name).ref(e);
                inputRef.current = e;
              }}
            />
            <div className={classes.fileUploadSection}>
              <span className={classes.placeholder}>Upload PDF only</span>

              <BigCircleCursor className={classes.fileUploader}>
                <FileUpload
                  className={classes.fileUploader}
                  onClick={() => {
                    inputRef.current && inputRef.current.click();
                  }}
                />
              </BigCircleCursor>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;

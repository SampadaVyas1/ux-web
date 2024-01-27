import React from "react";
import Image from "next/image";
import { IImageProps } from "./image";
import styles from "./image.module.scss";

const CustomImage = ({
  src,
  alt,
  shape = "",
  customClass,
  onMouseEnter,
  onMouseLeave,
  onClick,
  ...props
}: IImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      {...props}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      className={`${styles[shape]} ${customClass}`}
    />
  );
};

export default CustomImage;

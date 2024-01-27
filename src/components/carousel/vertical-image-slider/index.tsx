import { useEffect, useRef, useState, useCallback } from "react";
import classes from "./image-slider.module.scss";
import Image from "next/image";
import { IImage, IImageSlider } from "./image-slider";

const ImageSlider = (props: IImageSlider) => {
  const containerRef = useRef<any>(null);
  const { clientHighlights, onClick } = props;

  const [activeIndex, setActiveIndex] = useState(2);

  const getImageData = useCallback(() => {
    return clientHighlights[(activeIndex + 1) % clientHighlights.length]?.image;
  }, [activeIndex, clientHighlights]);

  const handleOnclick = (url: string) => {
    onClick && onClick(url);
  };

  const renderSlides = useCallback(() => {
    const currentContainerRef = containerRef?.current;
    if (currentContainerRef && currentContainerRef?.children?.[activeIndex]) {
      currentContainerRef?.children?.[activeIndex]?.classList.add(
        classes.active
      );
    }
    const timeout = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % clientHighlights.length);
    }, 5000);
    return {
      timeout,
      currentContainerRef,
    };
  }, [activeIndex, clientHighlights.length]);

  useEffect(() => {
    const { currentContainerRef, timeout } = renderSlides();
    return () => {
      clearTimeout(timeout);
      currentContainerRef?.children?.[activeIndex]?.classList.remove(
        classes.active
      );
    };
  }, [clientHighlights, activeIndex, containerRef, renderSlides]);

  return (
    <div
      className={classes.imageSlider}
      ref={containerRef}
      onClick={() => {
        handleOnclick(
          clientHighlights[(activeIndex + 1) % clientHighlights.length]?.url
        );
      }}
    >
      {!!clientHighlights.length &&
        clientHighlights?.map((element: IImage, index: number) => (
          <Image
            className={`${classes.image}`}
            src={element?.image?.src}
            alt=""
            width={element?.image?.width}
            height={element?.image?.height}
            key={index}
          />
        ))}
      {/* This image component is used to show default backdrop image*/}
      <Image
        className={`${classes.image}`}
        src={getImageData()?.src}
        alt=""
        width={getImageData()?.width}
        height={getImageData()?.height}
      />
    </div>
  );
};

export default ImageSlider;

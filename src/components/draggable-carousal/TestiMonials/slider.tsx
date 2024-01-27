import React, { useState, useEffect, useRef, useCallback } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import CustomImage from "@/components/image";
import EmployeeTestimony1 from "@/assets/images/webp/employee1.webp";
import EmployeeTestimony2 from "@/assets/images/webp/employee2.webp";
import EmployeeTestimony3 from "@/assets/images/webp/employee3.webp";
import { ISlidesProps } from "../carousal";
import classes from "../carousal.module.scss";

const ImageSlider = ({ setIndex }: ISlidesProps) => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius] = useState(2);
  const [showNavigation] = useState(false);
  const [configOption] = useState(config.gentle);
  const [interval] = useState(5000);
  const autoPlayIntervalRef = useRef<any>(null);

  const slides = [
    {
      key: 1,
      content: (
        <CustomImage
          src={EmployeeTestimony1}
          alt="Employee"
          customClass={classes.empImg}
        />
      ),
    },
    {
      key: 2,
      content: (
        <CustomImage
          src={EmployeeTestimony2}
          alt="Employee"
          customClass={classes.empImg}
        />
      ),
    },
    {
      key: 3,
      content: (
        <CustomImage
          src={EmployeeTestimony3}
          alt="Employee"
          customClass={classes.empImg}
        />
      ),
    },
  ].map((slide, index) => ({
    ...slide,
    onClick: () => setGoToSlide(index),
  }));

  const nextSlide = useCallback(() => {
    setGoToSlide((currentSlide) => (currentSlide + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    autoPlayIntervalRef.current = setInterval(nextSlide, interval);

    return () => {
      clearInterval(autoPlayIntervalRef.current);
    };
  }, [interval, nextSlide]);

  useEffect(() => {
    setIndex?.(goToSlide);
  }, [goToSlide, setIndex]);

  return (
    <div className={classes.slidesWrapper}>
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showNavigation}
        animationConfig={configOption}
      />
    </div>
  );
};
export default ImageSlider;

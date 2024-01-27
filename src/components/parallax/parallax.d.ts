import { Component, ReactNode } from "react";

export interface IParallaxData {
  shape: StaticImageData;
  position: string;
  customClass?: string;
}
export interface IParallax {
  parallaxData: any;
  children?: any;
  id?: string;
}

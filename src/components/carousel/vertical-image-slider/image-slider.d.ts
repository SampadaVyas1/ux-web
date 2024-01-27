import { Component } from "react";
export interface IImage {
  image: StaticImageData;
  url: string;
}
export interface IImageSlider {
  clientHighlights: IImage[];
  onClick?: (url: string) => void;
}

import { Component } from "react";

export interface IClientTestimonia {
  name: string;
  title: string;
  description: string;
  image: StaticImageData;
  type: string;
}

export interface ITestimonial {
  clientTestimonialData: {
    heading: string;
    clientTestimonial: IClientTestimonia[];
  };
}

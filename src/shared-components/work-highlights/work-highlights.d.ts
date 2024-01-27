import { Component } from "react";

export interface IScrollComponent {
  clientHighlights: {
    title: string;
    description: string;
    image: StaticImageData;
    url: string;
  }[];
}

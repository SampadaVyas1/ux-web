import { Component } from "react";

export interface IText {
  title: string;
  description: string;
  url: string;
}

export interface IScrollComponent {
  clientHighlights: IText[];
  onClick: (url: string) => void;
}

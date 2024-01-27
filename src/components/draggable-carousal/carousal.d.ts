import { StaticImageData } from "next/image";

export interface ICarousalType {
  list: {
    id: number;
    image: StaticImageData;
    designation: string;
    name: string;
    text: string;
  }[];
}
export interface ISlidesProps {
  setIndex: Function;
}

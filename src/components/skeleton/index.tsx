import Skeleton from "react-loading-skeleton";
import { ISkeletonLayout } from "./skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLayout = (props: ISkeletonLayout) => {
  return <Skeleton {...props} />;
};

export default SkeletonLayout;

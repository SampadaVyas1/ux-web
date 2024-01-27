import { Fragment } from "react";
import Image from "next/image";
import { IDronenimationType } from "./drone-animation";
import rightGreenDrone from "@/assets/images/right-green-drone.png";
import rightWhiteDrone from "@/assets/images/right-white-drone.png";
import leftGreenDrone from "@/assets/images/left-green-drone.png";
import pinkDrone from "@/assets/images/pink-drone.png";
import leftWhiteDrone from "@/assets/images/left-white-drone.png";

const DroneAnimation = ({ type, classes = "" }: IDronenimationType) => {
  return (
    <Fragment>
      {type === "rightWhiteDrone" && (
        <Image src={rightWhiteDrone} alt="" className={classes} />
      )}
      {type === "leftWhiteDrone" && (
        <Image src={leftWhiteDrone} alt="" className={classes} />
      )}
      {type === "leftGreenDrone" && (
        <Image src={leftGreenDrone} alt="" className={classes} />
      )}
      {type === "rightGreenDrone" && (
        <Image src={rightGreenDrone} alt="" className={classes} />
      )}
      {type === "leftPinkDrone" && (
        <Image src={pinkDrone} alt="" className={classes} />
      )}
    </Fragment>
  );
};

export default DroneAnimation;

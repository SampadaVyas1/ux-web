import { useContext, useState } from "react";
import Image from "next/image";
import { IPeopleCard } from "./people";
import { TiltCardComponent } from "..";
import Typography from "@/components/typography";
import LinkedInIcon from "@/assets/images/linked-in-icon.png";
import classes from "./people.module.scss";
import { MouseContext } from "@/context/mouseContext/mouseContext";
import { CURSOR_TYPE } from "@/components/big-circle-cursor/cursor-type.helper";

const PeopleCard = (props: IPeopleCard) => {
  const { name, designation, profileImg, hoverImg, linkedInUrl } = props;
  const { cursorChangeHandler } = useContext(MouseContext);

  const [isHovered, setIsHovered] = useState(false);
  const handleHoverEnter = () => {
    cursorChangeHandler(CURSOR_TYPE.NOCUSTOMCURSOR);
    setIsHovered(true);
  };
  const handleHoverLeave = () => {
    cursorChangeHandler(CURSOR_TYPE.DOTCURSOR);
    setIsHovered(false);
  };

  const handleOpenProfile = () => {
    window.open(linkedInUrl, "_blank");
  };

  const renderCustomButton = () => {
    return (
      <div className={classes.linkedInBtn} onClick={handleOpenProfile}>
        <Typography variant="input-label">Open</Typography>
        <Image src={LinkedInIcon} alt="linkedIn icon" />
      </div>
    );
  };

  return (
    <div className={classes.cardWrapper}>
      <TiltCardComponent
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        image={isHovered ? hoverImg : profileImg}
        textOnImage=""
        onClick={handleOpenProfile}
        className={classes.profileImage}
        isCustomBtn={true}
        tiltCustomButton={renderCustomButton()}
      />
      <Typography variant="" customStyle={classes.personName}>
        {name}
      </Typography>
      <Typography variant="body-6" customStyle={classes.personDesignation}>
        {designation}
      </Typography>
    </div>
  );
};
export default PeopleCard;

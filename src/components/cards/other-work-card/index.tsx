import { Fragment, useContext } from "react";
import Typography from "@/components/typography";
import { IOtherWorkCard } from "./otherwork";
import classes from "./otherworkcard.module.scss";
import { TiltCardComponent } from "..";
import { useRouter } from "next/router";
import { MouseContext } from "@/context/mouseContext/mouseContext";
import { CURSOR_TYPE } from "@/components/big-circle-cursor/cursor-type.helper";

const OtherWorkCard = (props: IOtherWorkCard) => {
  const { image, title, description, wrapperClass, url } = props;

  const { push } = useRouter();
  const { cursorChangeHandler } = useContext(MouseContext);

  const onEnter = () => {
    cursorChangeHandler(CURSOR_TYPE.NOCUSTOMCURSOR);
  };
  const onLeave = () => {
    cursorChangeHandler(CURSOR_TYPE.DOTCURSOR);
  };

  const renderCustomButton = () => {
    return (
      <Typography variant={"input-label"} customStyle={classes.cursorText}>
        Read
      </Typography>
    );
  };

  const handleReadMore = () => push(url);

  return (
    <Fragment>
      <div className={`${classes.cardWrapper} ${wrapperClass}`}>
        <div className={classes.imageContainerWrapper}>
          <TiltCardComponent
            image={image}
            className={classes.mainTiltCardContainer}
            textOnImage=""
            isCustomBtn={true}
            onClick={handleReadMore}
            tiltCustomButton={renderCustomButton()}
            customStylingOnImage={classes.customCardImage}
            customStyleImageContainer={classes.imageContainer}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          />
        </div>
        <div className={classes.contentWrapper}>
          <Typography variant="body-2" customStyle={classes.title}>
            {title}
          </Typography>
          <Typography variant="body-5" customStyle={classes.description}>
            {description}
          </Typography>
        </div>
      </div>
    </Fragment>
  );
};

export default OtherWorkCard;

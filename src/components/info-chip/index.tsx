import CustomImage from "@/components/image";
import classes from "./info.module.scss";
import { IInfoChip } from "./info";
import Typography from "@/components/typography";
import useWindowUtil from "@/hooks/useWindowUtil";
import { getCustomStyleForExtraSmallDevice } from "@/utils/helpers/common";

const InfoChip = (props: IInfoChip) => {
  const { name, title, image } = props;
  const { windowDimensions } = useWindowUtil();

  const customStyleForExtraSmallDevice = getCustomStyleForExtraSmallDevice(
    windowDimensions,
    classes.customInfoChip
  );

  return (
    <div className={classes.chipWrapper}>
      <div className={`${classes.infoChip} ${customStyleForExtraSmallDevice}`}>
        <div className={classes.gradientBorder}>
          <div className={classes.imageScale}>
            <CustomImage
              src={image}
              alt={""}
              shape={"round"}
              customClass={classes.avatar}
            />
          </div>
        </div>
        <div className={classes.chipData}>
          <Typography variant="button-text" customStyle={classes.name}>
            {name}
          </Typography>
          <Typography variant="button-text" customStyle={classes.title}>
            {title}
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default InfoChip;

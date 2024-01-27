import { UpArrowIcon } from "@/assets/svgs";
import classes from "./backTop.module.scss";
import Typography from "@/components/typography";
import BigCircleCursor from "@/components/big-circle-cursor";

const BackToTop = ({ className }: { className?: string }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`${classes.backToTopWrapper} ${className || ""}`}
      onClick={scrollToTop}
    >
      <Typography variant="heading-4" customStyle={classes.content}>
        Back to Top
      </Typography>
      <BigCircleCursor className={classes.arrowWrapper} onClick={scrollToTop}>
        <UpArrowIcon />
      </BigCircleCursor>
    </div>
  );
};

export default BackToTop;

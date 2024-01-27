import { memo } from "react";
import FooterList from "./footer-list";
import FooterBgEllipse from "@/assets/images/footer-bg-ellipse.png";
import classes from "./footer.module.scss";
import Image from "next/image";

const FooterComp = () => {
  return (
    <div className={classes.footerWrapper}>
      <FooterList />
      <Image src={FooterBgEllipse} alt="" className={classes.footerBgEllipse} />
    </div>
  );
};

export default memo(FooterComp);

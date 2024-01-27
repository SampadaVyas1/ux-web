import { memo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Grid from "@/components/grid";
import withContainer from "@/hocs/withContainer";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { UNSUBSCRIBE, COPYRIGHT_TEXT } from "@/utils/constants/common";
import { unSubscribe } from "@/utils/services/news-letter.service";
import { ERROR_CODE } from "@/utils/constants/errors";
import {
  socialMediaIcons,
  unsubscribeContent,
  unsubscribeSuccessContent,
} from "./unsubscribe.helper";
import { ISocialMedia } from "./unsubscribe";
import { CoditasLogo } from "@/assets/svgs";
import classes from "./unsubscribe.module.scss";
import TrackLines from "@/components/drone-animation/track-lines";
import BigCircleCursor from "@/components/big-circle-cursor";
import Loader from "@/components/loader";

const Unsubscribe = () => {
  const [unsubscribeStatus, setUnsubscribeStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const userID = router.query?.["id"];

  const updateUnsubscribeStatus = async () => {
    setLoading(!loading);
    try {
      const res = await unSubscribe(userID);
      if (res?.status === ERROR_CODE.OK_STATUS) {
        setUnsubscribeStatus(!unsubscribeStatus);
        setLoading(!loading);
      }
    } catch (e) {
      console.error(e);
      setUnsubscribeStatus(false);
      setLoading(!loading);
    }
  };

  return (
    <Grid fullWidth>
      <TrackLines height="80%" customGridClass="formGrids">
        <Grid container className={classes.wrapperContainer}>
          <Grid item sm={4} md={8} lg={12}>
            <div className={classes.pageLayout}>
              <div className={classes.compLogoWrapper}>
                <CoditasLogo />
              </div>
              <div className={classes.contentWrapper}>
                <Typography variant="body-2" customStyle={classes.title}>
                  {unsubscribeStatus
                    ? unsubscribeSuccessContent?.title
                    : unsubscribeContent?.title}
                </Typography>
                <Typography variant="heading-4" customStyle={classes.content}>
                  {unsubscribeStatus
                    ? unsubscribeSuccessContent.content
                    : unsubscribeContent.content}
                </Typography>
              </div>
              <div className={classes.subContentWrapper}>
                {!unsubscribeStatus && (
                  <BigCircleCursor
                    Element={Button}
                    type="submit"
                    className={classes.buttonWrapper}
                    onClick={updateUnsubscribeStatus}
                  >
                    {loading ? (
                      <Loader
                        className={classes.loaderWrapper}
                        variant="white"
                        customWrapperClass={classes.containerWrapper}
                      />
                    ) : (
                      `${UNSUBSCRIBE}`
                    )}
                  </BigCircleCursor>
                )}
                <div
                  className={
                    !unsubscribeStatus
                      ? classes.separator
                      : classes.customSeparator
                  }
                ></div>
                <div className={classes.socialMediaWrapper}>
                  <Typography
                    variant="heading-5"
                    customStyle={classes.companyText}
                  >
                    {COPYRIGHT_TEXT}
                  </Typography>
                  <div className={classes.iconWrapper}>
                    {socialMediaIcons.map(
                      (ele: ISocialMedia, index: number) => (
                        <BigCircleCursor
                          Element={Link}
                          href={ele.url}
                          className={classes.iconLayout}
                          key={index}
                          target="_blank"
                        >
                          <ele.logo />
                        </BigCircleCursor>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </TrackLines>
    </Grid>
  );
};

export default memo(withContainer(Unsubscribe));

import { useRouter } from "next/router";
import { useState, Fragment, useEffect, useCallback, useContext } from "react";
import Grid from "@/components/grid";
import BigCircleCursor from "@/components/big-circle-cursor";
import Typography from "@/components/typography";
import Loader from "@/components/loader";
import Button from "@/components/button";
import { HiringCard } from "@/components/cards";
import { VIEW_MORE, VIEW_LESS } from "@/utils/constants/common";
import { TiltCardComponent } from "@/components/cards";
import { IHiringCard } from "@/components/cards/hiring-card/hiringcard";
import { APPLY_JOB_ROUTE } from "@/utils/constants/routes";
import NoOpenings from "../no-openings";
import classes from "./hiring-now.module.scss";
import TextAnimator from "@/components/text-animator";
import { MouseContext } from "@/context/mouseContext/mouseContext";
import { CURSOR_TYPE } from "@/components/big-circle-cursor/cursor-type.helper";
import useWindowUtil from "@/hooks/useWindowUtil";
import { getCustomStyleForExtraSmallDevice } from "@/utils/helpers/common";

const HiringNow = (props: any) => {
  const { title, hiringDetails, loading } = props;
  const [loadMoreOpenings, setMoreOpenings] = useState<boolean>(false);
  const [hiringCards, setHiringCards] = useState<any>([]);
  const { windowDimensions } = useWindowUtil();

  const customStyleForExtraSmallDevice = getCustomStyleForExtraSmallDevice(
    windowDimensions,
    classes.customStyleForExtraSmallDevice
  );

  const router = useRouter();
  const { cursorChangeHandler } = useContext(MouseContext);

  const onEnter = () => {
    cursorChangeHandler(CURSOR_TYPE.NOCUSTOMCURSOR);
  };
  const onLeave = () => {
    cursorChangeHandler(CURSOR_TYPE.DOTCURSOR);
  };

  const showHiringDetails = useCallback(() => {
    loadMoreOpenings
      ? setHiringCards(hiringDetails)
      : setHiringCards(hiringDetails?.slice(0, 4));
  }, [hiringDetails, loadMoreOpenings]);

  const renderCustomButton = () => {
    return (
      <Typography variant={"input-label"} customStyle={classes.cursorText}>
        Apply
      </Typography>
    );
  };

  useEffect(() => {
    showHiringDetails();
  }, [loadMoreOpenings, showHiringDetails]);

  const handleHiringCard = () => {
    setMoreOpenings(!loadMoreOpenings);
  };

  const handleJobRedirection = (jobID: string) => {
    router.push(`${APPLY_JOB_ROUTE.jobDescription}?job-id=${jobID}`);
  };

  useEffect(() => {
    showHiringDetails();
  }, [loadMoreOpenings, showHiringDetails]);
  return (
    <Fragment>
      {!loading && !hiringDetails.length ? (
        <NoOpenings />
      ) : (
        <Grid item lg={12} md={8} sm={4}>
          <Grid container className={classes.hiringNowWrapper}>
            {loading ? (
              <div className={classes.loaderWrapper}>
                <Loader variant="white" />
              </div>
            ) : (
              <>
                <Grid container>
                  <Grid item lg={12}>
                    <TextAnimator
                      variant={"heading-1"}
                      fontVariant="light"
                      customStyle={classes.title}
                      text={title}
                    />
                  </Grid>
                </Grid>
                <div className={classes.cardsWrapper}>
                  {hiringCards?.map((ele: IHiringCard, index: number) => (
                    <TiltCardComponent
                      key={index}
                      className={`${classes.tiltCard} ${customStyleForExtraSmallDevice}`}
                      isCustomBtn={true}
                      tiltCustomButton={renderCustomButton()}
                      onMouseEnter={onEnter}
                      onMouseLeave={onLeave}
                      customGradientClass={classes.customGradientClass}
                    >
                      <HiringCard
                        jobTitle={ele.jobTitle}
                        jobDescription={ele.jobDescription}
                        jobType={ele.jobType}
                        jobLocation={ele.jobLocation}
                        vacancy={ele.vacancy ? ele.vacancy : 1}
                        handleJobRedirection={handleJobRedirection}
                        jobId={ele.jobId}
                      />
                    </TiltCardComponent>
                  ))}
                </div>
              </>
            )}
            {hiringDetails?.length > 6 && (
              <div className={classes.btnWrapper}>
                <BigCircleCursor>
                  <Button
                    type="submit"
                    onClick={handleHiringCard}
                    className={classes.customBtn}
                  >
                    {loadMoreOpenings ? VIEW_LESS : VIEW_MORE}
                  </Button>
                </BigCircleCursor>
              </div>
            )}
          </Grid>
        </Grid>
      )}
    </Fragment>
  );
};

export default HiringNow;

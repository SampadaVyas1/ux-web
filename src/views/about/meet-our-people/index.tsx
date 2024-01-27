import { useCallback, useEffect, useState } from "react";
import Grid from "@/components/grid";
import { PeopleCard } from "@/components/cards";
import Button from "@/components/button";
import useWindowUtil from "@/hooks/useWindowUtil";
import { IMeetOurPeople, IPeopleType } from "./meet-our-people";
import { DeviceType } from "@/utils/enum";
import { VIEW_LESS, VIEW_MORE } from "@/utils/constants/common";
import classes from "./meet-our-people.module.scss";
import TextAnimator from "@/components/text-animator";
import { redirectToViewSection } from "@/utils/helpers/common";

const MeetOurPeople = (props: IMeetOurPeople) => {
  const { data } = props;
  const [isBtnClicked, setIsBtnClicked] = useState(true);
  const [cardsData, setCardsData] = useState(data);
  const { deviceType } = useWindowUtil();
  const isMobileDevice = deviceType === DeviceType.MOBILE;

  const handleButtonClick = () => {
    setIsBtnClicked(!isBtnClicked);
    !isBtnClicked && redirectToViewSection("meet-our-people");
  };

  const handleCardList = useCallback(() => {
    if (isMobileDevice) {
      if (isBtnClicked) {
        setCardsData(data?.slice(0, 4));
      } else {
        setCardsData(data);
      }
    } else {
      setCardsData(data);
    }
  }, [data, isBtnClicked, isMobileDevice]);

  useEffect(() => {
    handleCardList();
  }, [handleCardList, isBtnClicked, isMobileDevice]);

  return (
    <div className={classes.wrapper}>
      <Grid sm={4} md={8} lg={12}>
        <div className={classes.headingWrapper}>
          <TextAnimator
            text={"Meet our People!"}
            variant={"heading-1"}
            customStylingOnText={classes.heading}
          />
        </div>
        <div className={classes.peopleContainer}>
          {cardsData?.map((item: IPeopleType, index: number) => {
            return (
              <div key={index}>
                <PeopleCard {...item} />
              </div>
            );
          })}
        </div>
        <div className={classes.btnContainer}>
          <Button onClick={handleButtonClick}>
            {isBtnClicked ? VIEW_MORE : VIEW_LESS}
          </Button>
        </div>
      </Grid>
    </div>
  );
};
export default MeetOurPeople;

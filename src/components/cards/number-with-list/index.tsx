import React, { Fragment, useEffect, useState } from "react";
import classes from "./number-with-list.module.scss";
import { BulletPoint, BulletPointGray } from "@/assets/svgs";
import { ICardComponent, ICardItem } from "./number-with-list";
import Typography from "@/components/typography/index";

const NumberWithList = (props: ICardComponent) => {
  const { cardsDetails, titleVariant, customStyle } = props;
  const [toggleBulletIcon, setToggleBulletIcon] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setToggleBulletIcon((prevState) => !prevState);
    }, 1800);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Fragment>
      {cardsDetails?.map((element: ICardItem, index: number) => {
        const { title, count, bulletPoints } = element;
        return (
          <div
            className={classes.cardContainer}
            key={index}
            style={customStyle}
          >
            <div className={classes.cardContent}>
              <Typography customStyle={classes.count} fontVariant="light">
                {count}
              </Typography>

              <div className={classes.contentDetails}>
                <Typography
                  variant={titleVariant ? titleVariant : "body-1"}
                  customStyle={classes.title}
                  fontVariant="medium"
                >
                  {title}
                </Typography>
                <div className={classes.bulletPoints}>
                  {!!bulletPoints.length &&
                    bulletPoints?.map((point: string, idx: number) => (
                      <div className={classes.bulletPoint} key={idx}>
                        <div className={classes.bulletImage}>
                          {toggleBulletIcon ? (
                            <BulletPointGray className={classes.bulletGray} />
                          ) : (
                            <BulletPoint className={classes.bulletGray} />
                          )}
                        </div>
                        <Typography
                          variant="body-2"
                          customStyle={classes.keyPoints}
                        >
                          {point}
                        </Typography>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};

export default NumberWithList;

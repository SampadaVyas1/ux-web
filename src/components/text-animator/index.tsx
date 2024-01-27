import { memo, useCallback, useEffect, useState } from "react";
import classes from "./text-animator.module.scss";
import { ITextAnimator } from "./text-animator";
import Typography from "@/components/typography/index";
import Grid from "@/components/grid";
import withIsInView from "@/hocs/isInView";
import {
  calculateAnimatedTransform,
  calculateTextAnimationValues,
} from "@/utils/helpers/text-animation";

const TextAnimator: React.FC<ITextAnimator> = (props) => {
  const { text, typeOfText, variant, fontVariant, customStylingOnText } = props;

  const { wordArray, verticalTranslationDistance } =
    calculateTextAnimationValues(text);

  const [currentWordTranslationY, setCurrentWordTranslationY] =
    useState<number>(verticalTranslationDistance);

  const animateText = useCallback(
    (
      timestamp: number,
      startTime: number,
      translateY: number,
      targetY: number
    ) => {
      const { newTransformValue, timeElapsed } = calculateAnimatedTransform(
        timestamp,
        startTime,
        translateY,
        targetY
      );
      setCurrentWordTranslationY(newTransformValue);
      if (timeElapsed < 1000) {
        requestAnimationFrame((newTimestamp) =>
          animateText(newTimestamp, startTime, translateY, targetY)
        );
      }
    },
    []
  );

  const getAnimationFrame = useCallback(() => {
    const startTime = performance.now();
    const targetY = 0;

    return requestAnimationFrame((timestamp) =>
      animateText(timestamp, startTime, verticalTranslationDistance, targetY)
    );
  }, [animateText, verticalTranslationDistance]);

  useEffect(() => {
    const divAnimationId = getAnimationFrame();
    return () => {
      cancelAnimationFrame(divAnimationId);
    };
  }, [getAnimationFrame]);

  return (
    <Grid fullWidth>
      {wordArray?.map((word: string, index: number) => (
        <span
          key={index}
          className={classes.animatingText}
          style={{
            animationDelay: `${index * 0.1}s`,
            transform: `translateY(${currentWordTranslationY}px)`,
          }}
        >
          <Typography
            fontVariant={fontVariant}
            variant={
              variant
                ? variant
                : typeOfText === "subHeading"
                ? "body-1"
                : typeOfText === "description"
                ? "body-2"
                : "body-2"
            }
            customStyle={`${customStylingOnText ?? ""} ${
              index < wordArray.length - 1 && classes.wordSpacing
            }`}
          >
            {word}
          </Typography>
        </span>
      ))}
    </Grid>
  );
};
export const TextAnimatorWithMinHeight = memo(
  withIsInView(TextAnimator, "3rem")
);
export default memo(withIsInView(TextAnimator));

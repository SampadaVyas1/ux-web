export const calculateTextAnimationValues = (content: string = "") => {
  const wordArray = content?.split(" ");
  const verticalTranslationDistance = wordArray.length * 20;
  return {
    verticalTranslationDistance: verticalTranslationDistance,
    wordArray: wordArray,
  };
};

export const easeOutQuad = (
  currentTime: number,
  startValue: number,
  changeInValue: number,
  duration: number
) => {
  currentTime /= duration;
  return -changeInValue * currentTime * (currentTime - 2) + startValue;
};

export const calculateAnimatedTransform = (
  timestamp: number,
  startTime: number,
  translateY: number,
  targetY: number
) => {
  const timeElapsed = timestamp - startTime;

  const newTransformValue = easeOutQuad(
    timeElapsed,
    translateY,
    targetY - translateY,
    1000
  );
  return {
    newTransformValue: newTransformValue,
    timeElapsed: timeElapsed,
  };
};

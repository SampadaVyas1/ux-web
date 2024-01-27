import { memo, useMemo } from "react";
import AutoAnimate from "@/shared-components/auto-animate";
import NumberWithList from "@/components/cards/number-with-list";
import { numberedCardData } from "../contents/numbered-card.data";
import withIsInView from "@/hocs/isInView";
import useWindowUtil from "@/hooks/useWindowUtil";
import { DEVICE_RATIO } from "@/utils/constants/common";

const NumberedCardWrapper = () => {
  const { heading, cardContent, ...rest } = numberedCardData;
  const { windowDimensions } = useWindowUtil();
  const getCustomStyle = useMemo(() => {
    const windowWidth = windowDimensions.width ?? DEVICE_RATIO.MOBILE;
    return windowWidth <= DEVICE_RATIO.SMALL_DEVICE
      ? {
          width: `${windowWidth - 72}px`,
        }
      : undefined;
  }, [windowDimensions]);

  return (
    <AutoAnimate {...rest}>
      <NumberWithList {...cardContent} customStyle={getCustomStyle} />
    </AutoAnimate>
  );
};

export default memo(withIsInView(NumberedCardWrapper));

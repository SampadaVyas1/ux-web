import { useState, useEffect, useCallback } from "react";
import { DeviceType } from "@/utils/enum";
import { DEVICE_RATIO } from "@/utils/constants/common";

const getWindowDimensions = () => {
  if (typeof window === "undefined") return {};
  const { innerWidth: width } = window;
  return {
    width,
  };
};

const getDeviceType = () => {
  if (typeof window === "undefined") return DeviceType.DESKTOP;
  const { innerWidth: width } = window;

  if (width <= DEVICE_RATIO.MOBILE) {
    return DeviceType.MOBILE;
  } else if (width >= DEVICE_RATIO.MOBILE + 1 && width <= DEVICE_RATIO.TABLET) {
    return DeviceType.TAB;
  } else {
    return DeviceType.DESKTOP;
  }
};

const useWindowUtil = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [deviceType, setDeviceType] = useState("");

  const handleResize = useCallback(() => {
    setWindowDimensions(getWindowDimensions());
    setDeviceType(getDeviceType());
  }, []);

  useEffect(() => {
    const iswDomWindowEnabled = typeof window !== "undefined";
    handleResize();
    iswDomWindowEnabled && window.addEventListener("resize", handleResize);

    return () => {
      iswDomWindowEnabled && window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return {
    windowDimensions,
    deviceType,
  };
};

export default useWindowUtil;

import Button from "@/components/button";
import { useRouter } from "next/router";
import { APP_ROUTES } from "@/utils/constants/routes";
import classes from "./navbar.module.scss";
import BigCircleCursor from "@/components/big-circle-cursor";
import { DeviceType } from "@/utils/enum";
import useWindowUtil from "@/hooks/useWindowUtil";
import { BaseSyntheticEvent, Fragment } from "react";
import { useContext, useEffect, useState } from "react";
import { MouseContext } from "@/context/mouseContext/mouseContext";
import Typography from "../typography";
import { CURSOR_TYPE } from "../big-circle-cursor/cursor-type.helper";
import Image from "next/image";

export const RenderNavItems = ({
  navItem,
  className,
  isHovered,
}: {
  navItem: string;
  className: string;
  isHovered?: boolean;
}) => {
  const { push, pathname } = useRouter();
  const { cursorChangeHandler } = useContext(MouseContext);
  const [isMounted, setIsMounted] = useState(false);

  const { deviceType } = useWindowUtil();
  const isMobileDevice = deviceType === DeviceType.MOBILE;
  const isDesktopDevice = deviceType === DeviceType.DESKTOP;

  useEffect(() => {
    if (!isMounted) {
      cursorChangeHandler(CURSOR_TYPE.DOTCURSOR);
    }
    setIsMounted(true);
  }, [cursorChangeHandler, isMounted]);

  const isHomeRoute = navItem === APP_ROUTES.HOME;
  const isMenuItemEqualsToRoute = isHomeRoute
    ? pathname?.trim() === "/"
    : pathname?.split("/").includes(navItem);
  const isCaseStudyActive = pathname?.includes("case-study");

  const handleNavigation = (e: BaseSyntheticEvent) => {
    const targetRoute = APP_ROUTES.HOME === navItem ? "/" : `/${navItem}`;
    if (isMenuItemEqualsToRoute) {
      e.preventDefault();
    } else {
      push(targetRoute);
    }
  };

  const activeConditionDesktop = isDesktopDevice
    ? isMenuItemEqualsToRoute && !isHovered
    : isMenuItemEqualsToRoute;

  const activeConditionCaseStudy = isDesktopDevice
    ? isCaseStudyActive && !isHovered
    : isCaseStudyActive;

  const renderNavItem = (
    <Typography
      customStyle={activeConditionDesktop ? classes.activeNavItem : className}
      onClick={handleNavigation}
    >
      <BigCircleCursor className={classes.navItemBigCircleContainer}>
        {navItem}
      </BigCircleCursor>
    </Typography>
  );

  switch (navItem) {
    case APP_ROUTES.LETS_TALK:
      return (
        <BigCircleCursor Element="div">
          <Button
            onClick={handleNavigation}
            startIconProps={{
              element: (
                <Image
                  src={"/hand-wave.svg"}
                  alt=""
                  width={29}
                  height={29}
                  loading="eager"
                />
              ),
              className: classes.icon,
            }}
            className={classes.letsTalkBtnIcon}
          >
            <Typography
              variant={isMobileDevice ? "body-6" : "button-text"}
              customStyle={classes.letsTalkBtnText}
            >
              {`let's talk`}
            </Typography>
          </Button>
        </BigCircleCursor>
      );
    case APP_ROUTES.WORK:
      return isCaseStudyActive ? (
        <Typography
          customStyle={
            activeConditionCaseStudy ? classes.activeNavItem : className
          }
          onClick={handleNavigation}
        >
          <BigCircleCursor className={classes.navItemBigCircleContainer}>
            {navItem}
          </BigCircleCursor>
        </Typography>
      ) : (
        renderNavItem
      );
    default:
      return renderNavItem;
  }
};

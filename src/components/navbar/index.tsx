import { BaseSyntheticEvent, memo, useState } from "react";
import { useRouter } from "next/router";
import classes from "./navbar.module.scss";
import Container from "@/components/container";
import useWindowUtil from "@/hooks/useWindowUtil";
import { DeviceType } from "@/utils/enum";
import FullWidthNavBar from "./navbar";
import NavBarDrawer from "./navbar-drawer";
import { DEFAULT_ROUTE } from "@/utils/constants/routes";

const NavBarComp = () => {
  const { push, pathname } = useRouter();
  const { deviceType } = useWindowUtil();
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const isMobileOrTabDevice =
    deviceType === DeviceType.MOBILE || deviceType === DeviceType.TAB;

  const handleNavigation = (e: BaseSyntheticEvent) => {
    const isHome = pathname?.trim() === DEFAULT_ROUTE;
    if (isHome) {
      e.preventDefault();
    } else {
      push(DEFAULT_ROUTE);
    }
  };

  return (
    <nav
      className={`${classes.nav} ${
        isMobileOrTabDevice && toggleMenu ? classes.navDrawerWrapper : ""
      }`}
    >
      <Container className={classes.containerWrapper}>
        {deviceType ? (
          isMobileOrTabDevice ? (
            <NavBarDrawer
              {...{
                handleNavigation,
                toggleMenu,
                setToggleMenu,
                handleToggleMenu,
              }}
            />
          ) : (
            <FullWidthNavBar {...{ handleNavigation }} />
          )
        ) : null}
      </Container>
    </nav>
  );
};

export default memo(NavBarComp);

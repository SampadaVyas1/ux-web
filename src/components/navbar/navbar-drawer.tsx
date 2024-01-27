import {
  Fragment,
  memo,
  BaseSyntheticEvent,
  useEffect,
  useCallback,
} from "react";
import Grid from "@/components/grid";
import classes from "./navbar.module.scss";
import { CloseIcon, MenuIcon, CoditasLogo } from "@/assets/svgs";
import { RenderNavItems } from "./navbar.helper";
import withContainer from "@/hocs/withContainer";
import { APP_ROUTES } from "@/utils/constants/routes";
import Button from "../button";
import { useRouter } from "next/router";
import Typography from "../typography";
import useWindowUtil from "@/hooks/useWindowUtil";
import { DeviceType } from "@/utils/enum";
import Image from "next/image";

const NavBarDrawer = ({
  handleNavigation,
  toggleMenu,
  setToggleMenu,
  handleToggleMenu,
}: {
  handleNavigation: (e: BaseSyntheticEvent) => void;
  toggleMenu: boolean;
  setToggleMenu: (flag: boolean) => void;
  handleToggleMenu: () => void;
}) => {
  const { deviceType } = useWindowUtil();
  const isMobileDevice = deviceType === DeviceType.MOBILE;
  const routes = Object.values(APP_ROUTES).filter(
    (item) => item !== APP_ROUTES.LETS_TALK
  );
  const letsTalkRoute = APP_ROUTES.LETS_TALK;
  const { push } = useRouter();

  const toggleNav = () => {
    handleToggleMenu();
  };

  const handleFormNavigation = () => {
    push(`/${letsTalkRoute}`);
  };

  const setScrollStyle = (overflow = "", touchAction = "") => {
    const body = document.body;
    body.style.overflow = overflow;
    body.style.touchAction = touchAction;
  };

  const handlecroll = useCallback(() => {
    if (toggleMenu) {
      setScrollStyle("hidden", "none");
    } else {
      setScrollStyle();
    }
  }, [toggleMenu]);

  useEffect(() => {
    handlecroll();
    return () => setScrollStyle();
  }, [toggleMenu, handlecroll]);

  return (
    <Fragment>
      <Fragment>
        <Grid item sm={2} md={4} lg={6} className={classes.companyLogo}>
          <CoditasLogo
            className={classes.logo}
            onClick={(e: BaseSyntheticEvent) => {
              handleNavigation(e);
              setToggleMenu(false);
            }}
          />
        </Grid>
        <Grid item sm={2} md={4} lg={6} className={classes.drawerIcon}>
          <div className={classes.mobileMenuAndHamBurgerWrapper}>
            <Button
              onClick={handleFormNavigation}
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
            {toggleMenu ? (
              <CloseIcon onClick={toggleNav} />
            ) : (
              <>
                <MenuIcon onClick={toggleNav} />
              </>
            )}
          </div>
        </Grid>
      </Fragment>
      {toggleMenu && (
        <div className={classes.menuListDropDownWrapper}>
          <ul className={classes.menuListDevice}>
            {routes?.map((route: string, index: number) => (
              <li
                className={classes.items}
                onClick={handleToggleMenu}
                key={index}
              >
                <RenderNavItems navItem={route} className={classes.itemText} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default memo(withContainer(NavBarDrawer));

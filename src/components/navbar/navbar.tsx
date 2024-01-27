import { memo, Fragment, BaseSyntheticEvent, useState } from "react";
import Grid from "@/components/grid";
import classes from "./navbar.module.scss";
import { CoditasLogo } from "@/assets/svgs";
import { APP_ROUTES } from "@/utils/constants/routes";
import { RenderNavItems } from "./navbar.helper";
import withContainer from "@/hocs/withContainer";
import BigCircleCursor from "@/components/big-circle-cursor";

const FullWidthNavBar = ({
  handleNavigation,
}: {
  handleNavigation: (e: BaseSyntheticEvent) => void;
}) => {
  const routes = Object.values(APP_ROUTES);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Fragment>
      <Grid item sm={2} md={4} lg={6} className={classes.companyLogo}>
        <BigCircleCursor
          Element={CoditasLogo}
          onClick={handleNavigation}
          className={classes.logo}
        />
      </Grid>
      <Grid item sm={2} md={4} lg={6}>
        <ul className={classes.menuContainer}>
          {routes?.map((route: string, index: number) => (
            <li
              key={index}
              onMouseLeave={() => setIsHovered(false)}
              onMouseEnter={() =>
                route != APP_ROUTES.LETS_TALK && setIsHovered(true)
              }
            >
              <RenderNavItems
                navItem={route}
                className={
                  APP_ROUTES.CAREERS === route
                    ? `${classes.menuItems} ${classes.careersMenuItem}`
                    : classes.menuItems
                }
                isHovered={isHovered}
              />
            </li>
          ))}
        </ul>
      </Grid>
    </Fragment>
  );
};

export default memo(withContainer(FullWidthNavBar));

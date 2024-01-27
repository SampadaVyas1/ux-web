import { Fragment } from "react";
import classes from "./footer.module.scss";
import { ExternalLinkIcon, MinusIcon, PlusIcon } from "@/assets/svgs";
import { APP_ROUTES } from "@/utils/constants/routes";
import Link from "next/link";
import { IFooterListObj } from "./footer";
import { CODITAS } from "@/utils/constants/public-routes";
import BigCircleCursor from "@/components/big-circle-cursor";
import Typography from "../typography";

const isExapnded = (columnId: string, columns: Array<string>) => {
  const isIdExists = columns.find((_obj) => _obj === columnId);
  if (isIdExists) return classes.activeList;
  else return false;
};

export const columnOneList = [
  {
    label: APP_ROUTES.HOME,
    route: "/",
  },
  {
    label: APP_ROUTES.ABOUT_US,
    route: `/${APP_ROUTES.ABOUT_US}`,
  },
  {
    label: APP_ROUTES.WORK,
    route: `/${APP_ROUTES.WORK}`,
  },
  {
    label: APP_ROUTES.CAREERS,
    route: `/${APP_ROUTES.CAREERS}`,
  },
];

export const columnTwoList = [
  {
    label: "Coditas UX",
    route: `${process.env.NEXT_PUBLIC_CODITAS_WEBSITE}${CODITAS.UX_DESIGN}`,
  },
  {
    label: "Coditas Healthcare",
    route: `${process.env.NEXT_PUBLIC_CODITAS_WEBSITE}${CODITAS.HEALTHCARE}`,
    icon: <ExternalLinkIcon />,
  },
  {
    label: "Coditas DevOps",
    route: `${process.env.NEXT_PUBLIC_CODITAS_WEBSITE}${CODITAS.DEVOPS}`,
    icon: <ExternalLinkIcon />,
  },
  {
    label: "Coditas Data Science",
    route: `${process.env.NEXT_PUBLIC_CODITAS_WEBSITE}${CODITAS.DATA_SCIENCE}`,
    icon: <ExternalLinkIcon />,
  },
];

export const renderFooterList = (
  listToggleViewType: string,
  listTitle: string,
  dataList: Array<IFooterListObj>,
  toggleListView: (data: string) => void,
  columns: Array<string>
) => {
  return (
    <Fragment>
      <div
        className={classes.footerListTitle}
        onClick={() => toggleListView(listToggleViewType)}
      >
        <Typography variant="medium">{listTitle}</Typography>
        {isExapnded(listToggleViewType, columns) ? (
          <MinusIcon className={classes.accordionCTA} />
        ) : (
          <PlusIcon className={classes.accordionCTA} />
        )}
      </div>
      <div
        className={`${classes.footerListItemsContainer} ${isExapnded(
          listToggleViewType,
          columns
        )}`}
      >
        {!!dataList?.length &&
          dataList.map((routeObj: IFooterListObj, index: number) => (
            <BigCircleCursor
              Element={Link}
              href={routeObj?.route}
              className={classes.footerListItems}
              key={index}
              target={
                Object.values(APP_ROUTES).includes(routeObj?.label)
                  ? ""
                  : "_blank"
              }
            >
              {routeObj?.label}
              {routeObj?.icon || ""}
            </BigCircleCursor>
          ))}
      </div>
    </Fragment>
  );
};

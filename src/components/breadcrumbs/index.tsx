import Link from "next/link";
import { IBreadcrumbs, ICrumbs } from "./breadcrumbs";
import classes from "./breadcrumbs.module.scss";
import BigCircleCursor from "@/components/big-circle-cursor";

const Breadcrumbs = (props: IBreadcrumbs) => {
  const { breadCrumbs } = props;

  return (
    <div className={classes.componentWrapper}>
      {breadCrumbs.map((crumb: ICrumbs, index: number) => {
        return (
          <li
            key={crumb.label}
            className={`${classes.crumb} ${
              index === breadCrumbs.length - 1 && classes.activeCrumb
            }`}
          >
            {crumb.url ? (
              <Link
                href={crumb.url && crumb.url}
                className={classes.customLink}
              >
                {breadCrumbs.length !== index + 1 ? (
                  <BigCircleCursor Element={"span"}>
                    {crumb.label}
                  </BigCircleCursor>
                ) : (
                  crumb.label
                )}
              </Link>
            ) : (
              <span className={classes.customLink}>{crumb.label}</span>
            )}
          </li>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;

import React from "react";
import classes from "./list.module.scss";
import { IListProps } from "./list";
import Typography from "@/components/typography/index";

const List: React.FC<IListProps> = (props) => {
  const {
    listItems,
    listTitle,
    itemTextVariant,
    listTitleVariant,
    customStyleOnTitle,
    customStyleOnListItems,
  } = props;
  return (
    <div className={classes.listContainer}>
      <Typography
        variant={listTitleVariant ? listTitleVariant : "body-3"}
        customStyle={`${classes.listTitle} ${customStyleOnTitle}`}
      >
        {listTitle}
      </Typography>
      <ul className={classes.list}>
        {!!listItems.length &&
          listItems?.map((listitem, index) => (
            <li key={index} className={classes.item}>
              <Typography
                variant={itemTextVariant ? itemTextVariant : "input-label"}
                customStyle={`${classes.listcontent} ${customStyleOnListItems}`}
              >
                {listitem.item}
              </Typography>
              {!!listitem.icon && listitem.icon}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;

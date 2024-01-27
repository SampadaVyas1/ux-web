import React, { Fragment } from "react";
import classes from "./number-with-description.module.scss";
import Typography from "../typography";
import TextHighlighter from "../text-highlighter";
import { IObjectives } from "./number-with-description";

const ObjectivesDescription: React.FC<{ objectives: IObjectives[] }> = ({
  objectives,
}) => {
  return (
    <Fragment>
      {!!objectives.length &&
        objectives.map((item: IObjectives, idx: number) => {
          return (
            <div key={idx} className={classes.objectiveItemContainer}>
              <Typography variant="heading-6" customStyle={classes.number}>
                {item.count}
              </Typography>
              <Typography
                variant={
                  item.customVariantOnDescription
                    ? item.customVariantOnDescription
                    : "body-2"
                }
                customStyle={classes.description}
              >
                <TextHighlighter
                  text={item.description}
                  textHighlighterKeys={item.highLighterText}
                />{" "}
              </Typography>
            </div>
          );
        })}
    </Fragment>
  );
};

export default ObjectivesDescription;

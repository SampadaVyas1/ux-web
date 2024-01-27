import { Fragment } from "react";
import Grid from "@/components/grid";
import Typography from "@/components/typography";
import { IPlatform, IRecord } from "./statistics";
import styles from "./statistics.module.scss";

const Statistics = (props: IPlatform) => {
  const { records, customClass } = props;
  return (
    <Fragment>
      <Grid item sm={4} md={8} lg={12} className={customClass}>
        <Grid container className={styles.containerWrapper}>
          {records?.map((ele: IRecord, index: number) => (
            <Grid item sm={4} md={2} lg={3} key={index}>
              <div className={styles.contentWrapper}>
                <Typography variant="heading-5" customStyle={styles.title}>
                  {ele?.title}
                </Typography>
                <Typography variant="body-2" customStyle={styles.content}>
                  {ele?.content}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Statistics;

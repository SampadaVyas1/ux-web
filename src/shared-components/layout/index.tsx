import { Fragment, useCallback, useEffect, useState } from "react";
import NavBarComp from "@/components/navbar";
import Grid from "@/components/grid";
import Footer from "@/components/footer";
import classes from "./layout.module.scss";
import Parallax from "@/components/parallax";
import Drones from "@/components/drone-animation/drones";
import CursorPointer from "@/components/cursor-pointer";
import { Router } from "next/router";
import SplashComponent from "@/components/splash";

const LayoutComp = ({ parallaxData, children }: any) => {
  const [loading, setLoading] = useState(false);

  const handleChangeRoutingStart = () => setLoading(true);
  const handleChangeRoutingComplete = () => setLoading(false);

  const handleRoutingChange = useCallback(() => {
    Router.events.on("routeChangeStart", handleChangeRoutingStart);
    Router.events.on("routeChangeComplete", handleChangeRoutingComplete);
    Router.events.on("routeChangeError", handleChangeRoutingComplete);

    return () => {
      Router.events.off("routeChangeStart", handleChangeRoutingStart);
      Router.events.off("routeChangeComplete", handleChangeRoutingComplete);
      Router.events.off("routeChangeError", handleChangeRoutingComplete);
    };
  }, []);

  useEffect(() => {
    handleRoutingChange();
  }, [handleRoutingChange]);

  const getDrones = useCallback(() => {
    return <Drones />;
  }, []);
  const layoutContent = useCallback(
    () => (
      <Grid container className={classes.layoutContainer}>
        <Grid item sm={4} md={8} lg={12}>
          {children}
        </Grid>
        <Grid item sm={4} md={8} lg={12} className={classes.footerCompItem}>
          <Footer />
        </Grid>
      </Grid>
    ),
    [children]
  );

  return (
    <Fragment>
      {loading ? (
        <SplashComponent />
      ) : (
        <Fragment>
          <Grid container>
            <Grid item sm={4} md={8} lg={12}>
              <NavBarComp />
            </Grid>
          </Grid>
          <Parallax parallaxData={parallaxData}>
            {layoutContent()}
            {getDrones()}
            <CursorPointer />
          </Parallax>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LayoutComp;

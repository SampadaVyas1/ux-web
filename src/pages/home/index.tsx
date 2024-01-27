import { parallaxData } from "@/views/home/parallax/parallax.data";
import { useEffect } from "react";
import HomePagComp from "@/views/home";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return <HomePagComp />;
};

HomePage.parallaxData = parallaxData;

export default HomePage;

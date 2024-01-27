import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import LayoutComp from "@/shared-components/layout";
import "@/styles/_base.scss";
import MouseContextProvider from "@/context/mouseContext/mouseContext";
import CustomToaster from "@/components/toast/custom-toaster";
import { IParallaxData } from "@/components/parallax/parallax";
import Head from "next/head";
import WebsiteMetaImage from "@/assets/images/website-meta-image.png";
import "@/styles/CustomDatePicker.scss";

interface ComponentWithTitle extends AppProps {
  Component: AppProps["Component"] & {
    title?: string;
    parallaxData?: IParallaxData[];
  };
}

function App({ Component, pageProps }: ComponentWithTitle) {
  return (
    <>
      <Head>
        <title>Creating Intuitive User Experience</title>
        <meta
          name="description"
          content="Turn your imaginative ideas into reality through our exceptional services in UX research, UX design, UI design, UX writing, UX audit, and Usability testing"
        />
        <meta name="image" content={WebsiteMetaImage.src} />
        <meta property="og:image" content={WebsiteMetaImage.src} />
        <meta
          property="og:title"
          content="Creating Intuitive User Experience"
        />
        <meta
          property="og:description"
          content="Turn your imaginative ideas into reality through our exceptional services in UX research, UX design, UI design, UX writing, UX audit, and Usability testing"
        />
      </Head>
      <MouseContextProvider>
        <ParallaxProvider scrollAxis="vertical">
          <LayoutComp
            parallaxData={pageProps?.parallaxData || Component?.parallaxData}
            key={Component}
          >
            <Component {...pageProps} />
          </LayoutComp>
        </ParallaxProvider>
        <CustomToaster />
      </MouseContextProvider>
    </>
  );
}
export default App;

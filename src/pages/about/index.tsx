import withMetaInfo from "@/hocs/withMetaInfo";
import AboutUsComp from "@/views/about";
import { parallaxDataAboutUs } from "@/views/about/parallax/parallax.data";
import AboutUsImage from "@/assets/images/webp/about-us-hero-banner.webp";

const AboutUsPage = () => <AboutUsComp />;

export async function getStaticProps() {
  const metaTags = {
    title: " Intuix's core beliefs and vision",
    description:
      "Discover our diverse team, shared vision, and core beliefs driving exceptional digital interactions on the web and mobile.",
    imageURL: AboutUsImage.src,
  };
  return {
    props: {
      metaTags,
      parallaxData: parallaxDataAboutUs,
    },
  };
}

AboutUsPage.parallaxData = parallaxDataAboutUs;

export default withMetaInfo(AboutUsPage);

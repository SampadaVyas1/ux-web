import withMetaInfo from "@/hocs/withMetaInfo";
import WebsiteMetaImage from "@/assets/images/website-meta-image.png";
import { parallaxDataLetsTalk } from "@/views/lets-talk/parallax/parallax.data";
import CommunicationComp from "@/views/lets-talk";

const LetsTalkPage = () => <CommunicationComp />;

export async function getStaticProps() {
  const metaTags = {
    title: "Let's talk and collaborate",
    description:
      "We would love to know more about your idea and what we can build together.",
    imageURL: WebsiteMetaImage.src,
  };
  return {
    props: {
      metaTags,
      parallaxData: parallaxDataLetsTalk,
    },
  };
}

LetsTalkPage.parallaxData = parallaxDataLetsTalk;

export default withMetaInfo(LetsTalkPage);

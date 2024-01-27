import withMetaInfo from "@/hocs/withMetaInfo";
import { parallaxDataWorkPage } from "@/views/work/parallax/parallax.data";
import WorkImage from "@/assets/images/webp/workBanner.webp";
import WorkComp from "@/views/work";

const WorkPage = () => <WorkComp />;

export async function getStaticProps() {
  const metaTags = {
    title: "Explore our Finest Work",
    description:
      "Discover our best UI/UX design projects in healthcare, fintech, real estate, and other industries",
    imageURL: WorkImage.src,
  };
  return {
    props: {
      metaTags,
      parallaxData: parallaxDataWorkPage,
    },
  };
}

WorkPage.parallaxData = parallaxDataWorkPage;

export default withMetaInfo(WorkPage);

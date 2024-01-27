import { ComponentType, Fragment } from "react";
import Head from "next/head";

const withMetaInfo = (WrappedComponent: ComponentType<any>) => {
  const containerChildren = (moreProps: any) => (
    <Fragment>
      <Head>
        <title>{moreProps?.metaTags?.title}</title>
        <meta name="description" content={moreProps?.metaTags?.description} />
        <meta name="image" content={moreProps?.metaTags?.imageURL} />
        <meta property="og:title" content={moreProps?.metaTags?.title} />
        <meta
          property="og:description"
          content={moreProps?.metaTags?.description}
        />
        <meta property="og:image" content={moreProps?.metaTags?.imageURL} />
      </Head>
      <WrappedComponent {...moreProps} />
    </Fragment>
  );
  return containerChildren;
};

export default withMetaInfo;

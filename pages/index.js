import Head from "next/head";
import ImagePreview from "../components/Global/ImagePreview";
import Content from "../components/Landing/Content/Content";
import MainContent from "../components/Landing/Content/MainContent";
import Product from "../components/Landing/Content/Product";
import Layout from "../components/Landing/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Website Undangan Pernikahan" />
        <meta name="keywords" content="BridesVow, Undangan, Menikah" />
        <meta name="author" content="Radifan Fariz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BridesVow</title>
      </Head>
      <Layout>
        <MainContent>
          <ImagePreview />
        </MainContent>
        <Content />
        <Product />
      </Layout>
    </>
  );
}

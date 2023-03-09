import Head from "next/head";
import ConfirmForm from "../../components/Form/Confrimation/ConfirmForm";
import Layout from "../../components/Global/Layout";

const ConfirmationPage = () => {

  return (
    <ConfirmForm />
  );
};

ConfirmationPage.getLayout = function getLayout(page) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Website Undangan Pernikahan" />
        <meta name="keywords" content="BridesVow, Undangan, Menikah" />
        <meta name="author" content="Radifan Fariz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BridesVow - Confirmation</title>
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default ConfirmationPage;

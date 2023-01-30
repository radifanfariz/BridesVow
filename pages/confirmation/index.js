import ConfirmForm from "../../components/Form/Confrimation/ConfirmForm";
import HelpButton from "../../components/Global/HelpButton";
import Layout from "../../components/Global/Layout";

const ConfirmationPage = () => {
  return (
    <>
      <ConfirmForm />
      <HelpButton />
    </>
  );
};

ConfirmationPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ConfirmationPage;

import BridesForm from "../../components/Form/Brides/BridesForm";
import HelpButton from "../../components/Global/HelpButton";
import Layout from "../../components/Global/Layout";

const BridesPage = () => {
  return (
    <>
      <BridesForm />
      <HelpButton />
    </>
  );
};

BridesPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default BridesPage;

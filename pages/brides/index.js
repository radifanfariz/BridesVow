import BridesForm from "../../components/Form/Brides/BridesForm";
import { createContext } from "react";
import SlugForm from "../../components/Form/Brides/SlugForm";
import { withLoginSessionSsr } from "../../utils/withSession";
import { getDataUndanganIdByOrderId } from "../../adapters/auth";
import Layout from "../../components/Dashboard/Layout";
import { useState } from "react";

export const DataContext = createContext(null)

const BridesPage = ({ data }) => {

  // console.log(data)

  return (
    data.undanganId && data.undanganSlug ?
      <>
        <BridesForm undanganId={data.undanganId} undanganSlug={data.undanganSlug} />
      </>
      :
      <>
        <SlugForm undanganId={data.undanganId} />
      </>
  );
};

BridesPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = withLoginSessionSsr(
  async ({ req, res }) => {
    if (!req.session.data) {
      return {
        redirect: {
          destination: '/auth/login',
          permanent: false,
        },
      }
    }

    let data = {};
    try {
      data["orderId"] = req.session.data.orderId;
      const dataUndangan = await getDataUndanganIdByOrderId(req.session.data.orderId)
      data["undanganId"] = dataUndangan.data.dataUndangans.data[0].id
      data["undanganSlug"] = dataUndangan.data.dataUndangans.data[0].attributes.Slug
    } catch (error) {
      data["undanganId"] = null
      data["undanganSlug"] = null
    }
    return {
      props: { data }
    }
  }
)

export default BridesPage;

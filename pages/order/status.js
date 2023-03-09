import Layout from "../../components/Global/Layout";
import { getDataOrder } from "../../adapters";
import SuccessPayment from "../../components/Form/Order/SuccessPayment";
import WaitingPayment from "../../components/Form/Order/WaitingPayment";
import Head from "next/head";


const OrderStatus = ({ data }) => {

    return (
        (data.IsPaid) ?
            <SuccessPayment data={data} /> :
            <WaitingPayment data={data} />
    )
}

export async function getServerSideProps({ query }) {
    const { orderId } = query;
    const res = await getDataOrder(orderId)
    const data = res.data.pemesanans.data[0]?.attributes
    // console.log("Test: " + Object.keys(data))

    if (!data) {
        return {
            notFound: true,
        }
    }


    return {
        props: {
            data
        }
    }
}

OrderStatus.getLayout = function getLayout(page) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="description" content="Opo IKI" />
                <meta name="keywords" content="BridesVow, Undangan, Menikah" />
                <meta name="author" content="Radifan Fariz" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>BridesVow - Payment Status</title>
            </Head>
            <Layout>{page}</Layout>
        </>
    );
};

export default OrderStatus
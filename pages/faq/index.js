import Head from "next/head";
import { getDataFaq } from "../../adapters";
import Faq from "../../components/Faq/Faq";
import Layout from "../../components/Global/Layout";

export default function FaqPage({ data }) {
    return (
        <Faq data={data} />
    )
}

export async function getStaticProps() {
    const res = await getDataFaq()
    const data = []
    res.data.faqs.data.map((item) => {
        data.push({
            kategori: item.attributes.Kategori,
            faqs: item.attributes.Faq
        })
    })
    return {
        props: {
            data
        }
    }
}

FaqPage.getLayout = function getLayout(page) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="description" content="Website Undangan Pernikahan" />
                <meta name="keywords" content="BridesVow, Undangan, Menikah" />
                <meta name="author" content="Radifan Fariz" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>BridesVow - FAQ</title>
            </Head>
            <Layout>{page}</Layout>
        </>
    );
}
import Head from "next/head";
import { getDataPaketUndangan } from "../../adapters";
import Collections from "../../components/Collections/Collections";
import Layout from "../../components/Global/Layout";

export default function CollectionPage({ data }) {
    console.log(data)
    return (
        <Collections data={data} />
    )
}

export async function getStaticProps() {
    const res = await getDataPaketUndangan()
    const data = []
    res.data.paketUndangans.data.map((item) => {
        data.push({
            id: item.id,
            paket_undangan: {
                nama: item.attributes.Nama,
                harga: item.attributes.Harga,
                fitur: item.attributes.Fitur,
                template_undangan: item.attributes.template_undangans.data.map((item) => {
                    return (
                        {
                            id: item.id,
                            data: {
                                nama: item.attributes.Nama,
                                slug: item.attributes.Slug,
                                isCreatorChoice: item.attributes.IsCreatorChoice,
                                template_id: item.attributes.TemplateID,
                                url: item.attributes.Gambar.data.attributes.url
                            }

                        }
                    )
                })
            }
        })
    })
    return {
        props: {
            data
        }
    }
}

CollectionPage.getLayout = function getLayout(page) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="description" content="Website Undangan Pernikahan" />
                <meta name="keywords" content="BridesVow, Undangan, Menikah" />
                <meta name="author" content="Radifan Fariz" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>BridesVow - Collections</title>
            </Head>
            <Layout>{page}</Layout>
        </>
    );
}
import Head from "next/head";
import ImagePreview from "../components/Landing/Decor/ImagePreview";
import Content from "../components/Landing/Content/Content";
import MainContent from "../components/Landing/Content/MainContent";
import Product from "../components/Landing/Content/Product";
import Layout from "../components/Landing/Layout";
import { getDataPaketUndangan } from "../adapters";

export default function LandingPage({ dataPaket, dataTemplate }) {
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
          <ImagePreview data={dataTemplate} />
        </MainContent>
        <Content />
        <Product data={dataPaket} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const res = await getDataPaketUndangan()
  const dataPaket = {}
  const dataTemplate = []
  res.data.paketUndangans.data.map((item) => {
    switch (item.attributes.Nama) {
      case "Gold":
        dataPaket["gold"] = {
          id: item.id,
          nama: item.attributes.Nama,
          harga: item.attributes.Harga,
          fitur: item.attributes.Fitur
        }
        break;
      case "Platinum":
        dataPaket["platinum"] = {
          id: item.id,
          nama: item.attributes.Nama,
          harga: item.attributes.Harga,
          fitur: item.attributes.Fitur
        }
        break;
      case "Diamond":
        dataPaket["diamond"] = {
          id: item.id,
          nama: item.attributes.Nama,
          harga: item.attributes.Harga,
          fitur: item.attributes.Fitur
        }
        break;

      default:
        break;
    }

    item.attributes.template_undangans.data.map((item) => {
      return (
        dataTemplate.push(
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
      )
    })
  })
  return {
    props: {
      dataPaket,
      dataTemplate
    }
  }
}



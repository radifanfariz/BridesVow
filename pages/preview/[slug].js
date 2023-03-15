import { getDefaultContents } from "../../adapters/defaultContents";
import { templateAllDefault } from "../../templates/templateAll";
import Custom404 from "../404";

// export async function getStaticProps({ params }) {
//   try {
//     const { slug } = params;

//     const data = JSON.parse(JSON.stringify(getDefaultContents(slug)));

//     return {
//       notFound: false,
//       props: { data, slug },
//       revalidate: 10,
//     };
//   } catch (err) {
//     return {
//       notFound: true,
//       revalidate: 10,
//     };
//   }
// }

// export async function getStaticPaths() {
//   try {
//     const paths = Object.keys(templateAllDefault).map((item) => ({
//       params: { slug: item },
//     }));

//     return {
//       paths,
//       fallback: "blocking",
//     };
//   } catch (err) {
//     return {
//       paths: [],
//       fallback: "false",
//     };
//   }
// }

export async function getServerSideProps({ params }) {
  try {

    const { slug } = params;

    const data = JSON.parse(JSON.stringify(getDefaultContents(slug)));

    return {
      notFound: false,
      props: { data, slug },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
}

const Preview = ({ data, slug }) => {
  try {
    const getTemplateDefault = templateAllDefault[slug];
    return getTemplateDefault(data);
  } catch (error) {
    return <Custom404 />;
  }
};

export default Preview;

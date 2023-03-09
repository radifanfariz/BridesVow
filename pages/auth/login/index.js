import LoginForm from "../../../components/Form/Auth/LoginForm";
import Layout from "../../../components/Global/Layout";
import { withLoginSessionSsr } from "../../../utils/withSession";
import Head from "next/head";

export default function LoginPage() {
    return (
        <LoginForm/>
    )
}

LoginPage.getLayout = function getLayout(page){
  return (
    <>
        <Head >
            <meta charSet="UTF-8" />
            <meta name="description" content="Website Undangan Pernikahan" />
            <meta name="keywords" content="BridesVow, Undangan, Menikah" />
            <meta name="author" content="Radifan Fariz" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>BridesVow - Login</title>
        </Head>
        <Layout>{page}</Layout>
    </>
);
}

export const getServerSideProps = withLoginSessionSsr(
    async ({ req, res }) => {
      const data = req.session.data
  
      if (data) {
        return {
          redirect: {
            destination: '/brides',
            permanent: false,
          },
        }
      }
      return {
        props: { }
      }
    }
  )
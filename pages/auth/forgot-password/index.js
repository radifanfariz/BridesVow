import Layout from "../../../components/Global/Layout";
import ForgotForm from "../../../components/Form/Auth/ForgotForm";
import OtpForm from "../../../components/Form/Auth/OtpForm";
import { withForgetPasswordSessionSsr } from "../../../utils/withSession";
import { useState } from "react";
import Head from "next/head";

const ForgotPasswordPage = ({ data }) => {

    console.log(data)
    const [session, setSession] = useState(data)

    return (session ?
        (
            <>
                <OtpForm session={session} setSession={setSession} />
            </>
        )
        :
        (
            <>
                <ForgotForm setSession={setSession} />
            </>
        ))
}

ForgotPasswordPage.getLayout = function getLayout(page) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="description" content="Website Undangan Pernikahan" />
                <meta name="keywords" content="BridesVow, Undangan, Menikah" />
                <meta name="author" content="Radifan Fariz" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>BridesVow - Forgot Password</title>
            </Head>
            <Layout>{page}</Layout>
        </>
    );
}

export const getServerSideProps = withForgetPasswordSessionSsr(
    async ({ req, res }) => {
        const data = req.session.data

        if (!data) {
            return {
                props: {}
            }
        }
        return {
            props: { data }
        }
    }
)

export default ForgotPasswordPage
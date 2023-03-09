import { FormProvider, useForm } from "react-hook-form";
import HelpButton from "../../../components/Global/HelpButton";
import RegisterForm from "../../../components/Form/Auth/RegisterForm";
import Layout from "../../../components/Global/Layout";
import Head from "next/head";


////under development
export default function RegisterPage() {
    const methods = useForm()
    return (
        <>
            <section className="flex justify-center px-2 font-[poppins]">
                <FormProvider {...methods}>
                    <form action="" className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-xl bg-white">
                        <RegisterForm />
                    </form>
                </FormProvider>
                <HelpButton />
            </section>
        </>
    )
}

RegisterPage.getLayout = function getLayout(page) {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="description" content="Website Undangan Pernikahan" />
                <meta name="keywords" content="BridesVow, Undangan, Menikah" />
                <meta name="author" content="Radifan Fariz" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>BridesVow - Register</title>
            </Head>
            <Layout>{page}</Layout>
        </>
    );
}
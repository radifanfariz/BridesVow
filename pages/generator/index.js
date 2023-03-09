import { FormProvider, useForm } from "react-hook-form";
import HelpButton from "../../components/Global/HelpButton";
import SingleUpload from "../../components/Global/SingleUpload";
import Layout from "../../components/Global/Layout";
import Head from "next/head";


///under development
const GeneratorPage = () => {
  const methods = useForm();

  return (
    <>
      <FormProvider {...methods}>
        <div className="h-screen">
          <div className="relative top-28">
            <section>
              <div className="flex flex-col justify-center items-center py-10 font-[poppins] font-bold">
                <span className="text-xl">Upload File</span>
                <span className="text-xs">
                  upload file spreadsheet nama yang mau diundang (format .xlsx)
                </span>
              </div>
            </section>
            <section>
              <SingleUpload
                name={"generator"}
                required={true}
                accept={{
                  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                    [".xlsx"],
                }}
              />
              <div className="flex justify-center pt-7">
                <button className="btn btn-sm rounded-full w-40 bg-[#003153]">
                  Upload
                </button>
              </div>
            </section>
          </div>
          <HelpButton />
        </div>
      </FormProvider>
    </>
  );
};

GeneratorPage.getLayout = function getLayout(page) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Website Undangan Pernikahan" />
        <meta name="keywords" content="BridesVow, Undangan, Menikah" />
        <meta name="author" content="Radifan Fariz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BridesVow - Generator</title>
      </Head>
      <Layout>{page}</Layout>
    </>
  );
};

export default GeneratorPage;

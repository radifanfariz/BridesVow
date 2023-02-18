import { FormProvider, useForm } from "react-hook-form";
import ConfirmForm from "../../components/Form/Confrimation/ConfirmForm";
import HelpButton from "../../components/Global/HelpButton";
import Layout from "../../components/Global/Layout";
import { QueryClient, useMutation } from "react-query";
import { createDataConfirmation } from "../../adapters";

const ConfirmationPage = () => {
  const methods = useForm()
  const queryClient = new QueryClient()

  const { mutateAsync, isLoading } = useMutation(createDataConfirmation, {
    onSuccess: data => {
      console.log(data)
      const message = "'SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n'" + JSON.stringify(data)
      alert(message)
    },
    onError: () => {
      alert("there was an error")
    },
    onSettled: () => {
      queryClient.invalidateQueries('create')
    }
  })

  const onSubmit = async (data) => {
    const bodyFormData = new FormData()
    const dataConfirmation = {
      "Nama_Pemilik_Rekening": data.namaPemilikRekening,
      "Nama_Pemesan": data.namaPemesan,
      "OrderID": data.orderId,
      "publishedAt": new Date().toISOString(),
      "Email": data.email,
      "No_HP": data.noWa,
      "Pesan": data.pesan
    }
    bodyFormData.append("data", JSON.stringify(dataConfirmation))
    bodyFormData.append("files.Bukti_Pembayaran", data.fotoBukti[0])
    // alert('SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n' + JSON.stringify(dataConfirmation));
    // alert('SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n' + data.fotoBukti);
    // console.log(data.fotoBukti[0])
    await mutateAsync(bodyFormData);
  }
  return (
    <>
      <section className="flex justify-center px-2 font-[poppins]">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-xl bg-white">
            <ConfirmForm />
          </form>
        </FormProvider>
        <HelpButton />
      </section>
    </>
  );
};

ConfirmationPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default ConfirmationPage;

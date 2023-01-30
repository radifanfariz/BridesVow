import OrderForm from "../../components/Form/Order/OrderForm"
import OrderView from "../../components/Form/Order/OrderView"
import HelpButton from "../../components/Global/HelpButton"
import { QueryClient, useMutation } from 'react-query'
import { createDataOrder, getDataPaketUndangan } from "../../adapters"
import { FormProvider, useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/router"
import { orderFormSchema } from "../../models/formValidationSchema"
import { yupResolver } from "@hookform/resolvers/yup"
import Layout from "../../components/Global/Layout"


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
            data,
        }
    }
}

const OrderPage = ({ data }) => {

    const formOptions = { resolver: yupResolver(orderFormSchema) }

    // get funtions to build form with useForm() hook
    const methods = useForm(formOptions)

    const [dataOrderForm, setDataOrderForm] = useState({
        paket:"Null",
        template:"Null",
        harga:0,
    })

    const [totalHarga,setTotalHarga] = useState(999999)

    const queryClient = new QueryClient()

    const router =  useRouter()

    const { mutate, isLoading } = useMutation(createDataOrder, {
        onSuccess: data => {
            console.log(data)
            const message = "'SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n'" + JSON.stringify(data)
            alert(message)
            // router.push("/")
        },
        onError: () => {
            alert("there was an error")
        },
        onSettled: () => {
            queryClient.invalidateQueries('create')
        }
    })

    // const onSubmit = (data) => {
    //     const order = {
    //         ...data
    //     }
    //     mutate(order)
    // }

    const onSubmit = (data) => {
        // display form data on success
        const dataOrderPost = {
            Nama:data.nama,
            No_HP:data.noHP,
            Email:data.email,
            Kota:data.kota,
            Alamat:data.alamat,
            Total_Bayar:totalHarga,
            template_undangan: data.template
        }

        mutate(dataOrderPost);
        // alert('SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n' + JSON.stringify(dataOrderPost));
    }


    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <div className="flex flex-col xl:flex-row justify-center">
                        <OrderForm data={data} onSubmit={onSubmit} setDataOrderForm={setDataOrderForm}/>
                        <OrderView dataOrderForm={dataOrderForm} setTotalHarga={setTotalHarga}/>
                    </div>
                </form>
            </FormProvider>
            <HelpButton />
        </>
    )
}

OrderPage.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };

export default OrderPage
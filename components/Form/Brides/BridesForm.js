import { FormProvider, useForm } from "react-hook-form"
import { dataPengantinForms } from "../../../models/formModels"
import Form from "../../Global/Form"
import { yupResolver } from '@hookform/resolvers/yup';
import { bridesFormSchema } from "../../../models/formValidationSchema";

const BridesForm = () => {
    const formOptions = { resolver: yupResolver(bridesFormSchema) }

    // get funtions to build form with useForm() hook
    const methods = useForm(formOptions)

    /* -----cant setValue from this-------- */
    // const {setValue} = methods
    /*---------------------------------------*/

    const onSubmit = (data) => {
        // display form data on success

        alert('SUCCESS!! ( ͡🔥 ͜ʖ ͡🔥)\n\n' + JSON.stringify(data, null, 4));
        return false
    }
    const onError = (errors, e) => {
        alert('ERRORS!! ( ͡╥ ͜ʖ ͡╥)');
        console.log(errors, e);
    }
    return (
        <>
            <section className="flex justify-center px-2 font-[poppins]">
                <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit, onError)} className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-3xl bg-white">
                        <div className="flex justify-center">
                            <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Data Pengantin</span>
                        </div>
                        <span className="divider"></span>
                        <Form formStructure={dataPengantinForms} />
                        <div className="flex justify-center mt-2">
                            <button type="submit" className="btn sm:btn-wide w-full bg-[#003153] text-white">Submit</button>
                        </div>
                    </form>
                </FormProvider>
            </section>
        </>
    )
}

export default BridesForm
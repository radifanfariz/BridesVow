import { dataPengantinForms } from "../../../models/formModels"
import Form from "../../Global/Form"

const BridesForm = () => {
    return (
        <>
            <section className="flex justify-center px-2 font-[poppins]">
                <form action="" className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-3xl bg-white">
                    <div className="flex justify-center">
                        <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Data Pengantin</span>
                    </div>
                    <span className="divider"></span>
                    <Form formStructure={dataPengantinForms}/>
                    <div className="flex justify-center mt-2">
                        <button className="btn sm:btn-wide w-full bg-[#003153] text-white">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default BridesForm
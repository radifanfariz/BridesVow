import { FormProvider, useForm } from "react-hook-form"
import { BsWhatsapp } from "react-icons/bs"
import { MdAlternateEmail } from "react-icons/md"
import SingleUpload from "../../Global/SingleUpload"

const ConfirmForm = () => {

    const methods = useForm()


    return (
        <>
            <section className="flex justify-center px-2 font-[poppins]">
                <FormProvider {...methods}>
                    <form action="" className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-3xl bg-white">
                        <div className="flex justify-center">
                            <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Confirmation</span>
                        </div>
                        <span className="divider"></span>
                        <div className="form-control w-full">
                            <div>
                                <label className="label">
                                    <span className="label-text font-bold text-black">Order ID{<span className="text-red-600">*</span>}</span>
                                </label>
                                <input type="text" placeholder="Order ID" className="input input-bordered w-full max-w-md bg-white text-black" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-bold text-black">Nama Pemesan{<span className="text-red-600">*</span>}</span>
                                </label>
                                <input type="text" placeholder="Nama Pemesan" className="input input-bordered w-full max-w-md bg-white text-black" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-bold text-black">Nama Pemilik Rekening{<span className="text-red-600">*</span>}</span>
                                </label>
                                <input type="text" placeholder="Nama Pemilik Rekening" className="input input-bordered w-full max-w-md bg-white text-black" required />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-bold text-black">Nomor WA{<span className="text-red-600">*</span>}</span>
                                </label>
                                <div className="w-full max-w-md">
                                    <label className="input-group">
                                        <span><BsWhatsapp /></span>
                                        <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="0822123456" className="input input-bordered w-full bg-white text-black" required />
                                    </label>
                                </div>
                            </div>
                            <div className="relative">
                                <label className="label">
                                    <span className="label-text font-bold text-black">Alamat E-mail</span>
                                </label>
                                <div className="w-full max-w-md">
                                    <label className="input-group">
                                        <span><MdAlternateEmail /></span>
                                        <input type="email" placeholder="info@site.com" className="input input-bordered w-full bg-white text-black" required />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-bold text-black">Messages</span>
                                </label>
                                <textarea className="textarea textarea-bordered w-full max-w-md bg-white text-black" placeholder="Messages"></textarea>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-bold text-black">Upload Bukti Pembayaran</span>
                                </label>
                                <SingleUpload name={"fotoBukti"} required={true} width="w-72 min-w-68 md:w-[35rem]" />
                            </div>
                        </div>
                        <div className="flex justify-center mt-2">
                            <button className="btn sm:btn-wide w-full bg-[#003153] text-white">Confirm</button>
                        </div>
                    </form>
                </FormProvider>
            </section>
        </>
    )
}

export default ConfirmForm
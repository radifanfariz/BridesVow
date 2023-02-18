import { BsWhatsapp } from "react-icons/bs"
import { MdAlternateEmail } from "react-icons/md"
import SingleUpload from "../../Global/SingleUpload"
import { useFormContext } from "react-hook-form"

const ConfirmForm = () => {

    const { register } = useFormContext()

    return (
        <>
            <div className="flex justify-center">
                <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Confirmation</span>
            </div>
            <span className="divider"></span>
            <div className="form-control w-full flex items-center">
                <div className="w-full">
                    <label className="label">
                        <span className="label-text font-bold text-black">Order ID{<span className="text-red-600">*</span>}</span>
                    </label>
                    <input {...register('orderId')} type="text" placeholder="Order ID" className="input input-bordered w-full max-w-full bg-white text-black" required />
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text font-bold text-black">Nama Pemesan{<span className="text-red-600">*</span>}</span>
                    </label>
                    <input {...register('namaPemesan')} type="text" placeholder="Nama Pemesan" className="input input-bordered w-full max-w-full bg-white text-black" required />
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text font-bold text-black">Nama Pemilik Rekening{<span className="text-red-600">*</span>}</span>
                    </label>
                    <input {...register('namaPemilikRekening')} type="text" placeholder="Nama Pemilik Rekening" className="input input-bordered w-full max-w-full bg-white text-black" required />
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text font-bold text-black">Nomor WA{<span className="text-red-600">*</span>}</span>
                    </label>
                    <div className="w-full max-w-full">
                        <label className="input-group">
                            <span><BsWhatsapp /></span>
                            <input {...register('noWa')} type="tel" pattern="[0-9]{12}" placeholder="08221234567" className="input input-bordered w-full bg-white text-black" required />
                        </label>
                    </div>
                </div>
                <div className="relative w-full">
                    <label className="label">
                        <span className="label-text font-bold text-black">Alamat E-mail</span>
                    </label>
                    <div className="w-full max-w-full">
                        <label className="input-group">
                            <span><MdAlternateEmail /></span>
                            <input {...register('email')} type="email" placeholder="info@site.com" className="input input-bordered w-full bg-white text-black" required />
                        </label>
                    </div>
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text font-bold text-black">Messages</span>
                    </label>
                    <textarea {...register('pesan')} className="textarea textarea-bordered w-full max-w-full bg-white text-black" placeholder="Messages"></textarea>
                </div>
                <div className="w-full">
                    <label className="label">
                        <span className="label-text font-bold text-black">Upload Bukti Pembayaran</span>
                    </label>
                    <SingleUpload name={"fotoBukti"} required={true} width="w-full min-w-68 " />
                </div>
            </div>
            <div className="flex justify-center mt-2">
                <button className="btn sm:btn-wide w-full bg-[#003153] text-white">Confirm</button>
            </div>
        </>
    )
}

export default ConfirmForm
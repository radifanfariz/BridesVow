import Image from "next/image"
import { useEffect, useState } from "react"
import { useFormContext } from "react-hook-form"
import imageLoader from "../../../utils/imageLoader"
import { randomThreeNum } from "../../../utils/randomNum"

const OrderView = ({ dataOrderForm,setTotalHarga }) => {

    const [threeUniqueDigit, setThreeUniqueDigit] = useState(0)

    useEffect(() => {
        setThreeUniqueDigit(randomThreeNum())
    }, [])

    useEffect(()=>{
        const totalHarga=dataOrderForm.harga + threeUniqueDigit
        setTotalHarga(totalHarga)
    },[dataOrderForm])

    return (
        <>
            <section className="inline-flex justify-center xl:inline font-[poppins] text-black px-2">
                <div className="my-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-3xl bg-white">
                    <span className="flex justify-center font-bold text-xl">Pesanan Kamu</span>
                    <div className="text-sm">
                        <div className="flex justify-between font-bold">
                            <span>Produk</span>
                            <span>Subtotal</span>
                        </div>
                        <div className="divider mt-0"></div>
                        <div className="flex justify-between">
                            <span>{`${dataOrderForm.paket} - ${dataOrderForm.template}`}</span>
                            <span className="font-bold">{`Rp.${dataOrderForm.harga}`}</span>
                        </div>
                        <div className="flex justify-between pt-2">
                            <span>Kode Unik Pesanan</span>
                            <span className="font-bold">{`Rp.${threeUniqueDigit}`}</span>
                        </div>
                        <div className="divider my-0"></div>
                        <div className="flex justify-between pt-2 font-bold">
                            <span>Total</span>
                            <span className="font-bold">{`Rp.${threeUniqueDigit + dataOrderForm.harga}`}</span>
                        </div>
                        <div className="divider mt-2"></div>
                        <div className="flex flex-col pr-5">
                            <div className="label my-4">
                                <span className="font-bold">Metode Pembayaran</span>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="radio-1" className="radio" defaultChecked={true} />
                                <span className="label-text px-2 text-black">Bank Transfer - BNI</span>
                                <Image className='' src={"/static/wallet/bni.png"} loader={imageLoader} width={50} height={50} alt='template' objectFit="contain" />
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="radio-1" className="radio" />
                                <span className="label-text px-2 text-black">Dana</span>
                                <Image className='' src={"/static/wallet/dana.png"} loader={imageLoader} width={50} height={50} alt='template' objectFit="contain" />
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="radio-1" className="radio" />
                                <span className="label-text px-2 text-black">OVO</span>
                                <Image className='' src={"/static/wallet/ovo.png"} loader={imageLoader} width={50} height={50} alt='template' objectFit="contain" />
                            </div>
                        </div>
                        <div className="flex justify-center mt-2">
                            <button className="btn sm:btn-wide w-full bg-[#003153] text-white">Bayar</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderView
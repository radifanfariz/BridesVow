import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs"
import { MdAlternateEmail } from "react-icons/md"
import { useFormContext } from "react-hook-form";
import { randomThreeNum } from "../../../utils/randomNum";

const OrderForm = ({ data, onSubmit,setDataOrderForm }) => {

    // console.log(data)

    const isInit = typeof window !== 'undefined' ? true : false

    // const contents = {
    //     gallery: ["/static/landing/mokap1.png", "/static/landing/mokap2.png", "/static/landing/mokap3.png", "/static/landing/mokap4.png", "/static/landing/mokap1.png", "/static/landing/mokap2.png", "/static/landing/mokap3.png", "/static/landing/mokap4.png", "/static/landing/mokap2.png", "/static/landing/mokap3.png", "/static/landing/mokap4.png", "/static/landing/mokap1.png", "/static/landing/mokap2.png", "/static/landing/mokap3.png", "/static/landing/mokap4.png"]
    // }

    const { register, formState: { errors } } = useFormContext()

    const dataPaket = {
        gold:data[2],
        platinum:data[1],
        diamond:data[0]
    }

    const [namaPaket, setNamaPaket] = useState("")
    const [namaTemplate, setNamaTemplate] = useState("")

    const handleSelect = (event) => {
        setNamaPaket(event.target.value)
    }

    useEffect(() => {
        switch (namaPaket) {
            case "Gold":
                setDataOrderForm({
                    paket:namaPaket,
                    template:namaTemplate,
                    harga:dataPaket.gold.paket_undangan.harga
                })
                break;
            case "Platinum":
                setDataOrderForm({
                    paket:namaPaket,
                    template:namaTemplate,
                    harga:dataPaket.platinum.paket_undangan.harga
                })
                break;
            case "Diamond":
                setDataOrderForm({
                    paket:namaPaket,
                    template:namaTemplate,
                    harga:dataPaket.diamond.paket_undangan.harga
                })
                break;
            default:
                break;
        }
    },[namaPaket,namaTemplate])

    return (
        <>
            <section className="flex justify-center px-2 font-[poppins] ">
                <div className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-3xl bg-white">
                    <div className="flex justify-center">
                        <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Order</span>
                    </div>
                    <span className="divider"></span>
                    <div className="form-control w-full">
                        <div>
                            <label className="label">
                                <span className="label-text font-bold text-black">Pilihan Paket{<span className="text-red-600">*</span>}</span>
                            </label>
                            <select name="paket" {...register("paket")} defaultValue={"default"} onChange={handleSelect} className="select select-bordered w-full max-w-md bg-white text-black" required>
                                <option value={"default"} disabled>Pick one</option>
                                {data.map((item) => {
                                    switch (item.paket_undangan.nama) {
                                        case "Gold":
                                            return (
                                                <option key={item.paket_undangan.nama} value={item.paket_undangan.nama}>{`${item.paket_undangan.nama} (Rp.${item.paket_undangan.harga}) 🟡`}</option>
                                            )
                                            break;
                                        case "Platinum":
                                            return (
                                                <option key={item.paket_undangan.nama} value={item.paket_undangan.nama}>{`${item.paket_undangan.nama} (Rp.${item.paket_undangan.harga}) ⚪`}</option>
                                            )
                                            break;
                                        case "Diamond":
                                            return (
                                                <option key={item.paket_undangan.nama} value={item.paket_undangan.nama}>{`${item.paket_undangan.nama} (Rp.${item.paket_undangan.harga}) ⚫`}</option>
                                            )
                                            break;
                                        default:
                                            break;
                                    }
                                })}
                            </select>
                        </div>
                        <div className="flex">
                            <Swiper
                                centeredSlides={true}
                                centeredSlidesBounds={true}
                                mousewheel={true}
                                grabCursor={false} navigation={false} modules={[Pagination, Navigation, Mousewheel]}
                                spaceBetween={0} breakpoints={{
                                    // when window width is >= 320px
                                    320: {
                                        slidesPerView: 2,
                                        spaceBetween: 0
                                    },
                                    // when window width is >= 480px
                                    480: {
                                        slidesPerView: 2,
                                        spaceBetween: 0
                                    },
                                    // when window width is >= 640px
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 0
                                    },
                                }}
                                slidesPerView={1}
                                pagination={true} className="mySwiper">
                                {
                                    data.map((item) => {
                                        if (namaPaket == item.paket_undangan.nama) {
                                            return (
                                                item.paket_undangan.template_undangan.map((item) => {
                                                    // console.log(namaPaket)
                                                    return (
                                                        <SwiperSlide key={item.data.nama}>
                                                            <div className="flex flex-col pr-5">
                                                                <div className="label">
                                                                    <Image priority='true' layout='intrinsic' width={120} height={250} src={`https://1c9c-2001-448a-1069-1c33-bde2-cfd7-7451-18fa.ap.ngrok.io${item.data.url}`} alt='Template' objectFit='contain' />
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <label htmlFor={item.data.nama}>
                                                                        <input
                                                                            name="template"
                                                                            className="mr-2"
                                                                            {...register("template")}
                                                                            type="radio"
                                                                            value={item.id}
                                                                            onChange={()=>{
                                                                                setNamaTemplate(item.data.nama)
                                                                            }}
                                                                            required
                                                                        />
                                                                        {item.data.nama}
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    )
                                                }))
                                        }
                                    })
                                }
                            </Swiper>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-bold text-black">Nama Pemesan{<span className="text-red-600">*</span>}</span>
                            </label>
                            <input name="nama" {...register("nama")} type="text" placeholder="Nama" className="input input-bordered w-full max-w-md bg-white text-black" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-bold text-black">Nomor WA{<span className="text-red-600">*</span>}</span>
                            </label>
                            <div className="w-full max-w-md">
                                <label className="input-group">
                                    <span><BsWhatsapp /></span>
                                    <input name="noHP" {...register("noHP")} type="tel" pattern="[0-9]{12}" placeholder="08221234567" className="input input-bordered w-full bg-white text-black" required />
                                </label>
                            </div>
                        </div>
                        <div className="relative">
                            <label className="label">
                                <span className="label-text font-bold text-black">Alamat E-mail{<span className="text-red-600">*</span>}</span>
                            </label>
                            <div className="w-full max-w-md">
                                <label className="input-group">
                                    <span><MdAlternateEmail /></span>
                                    <input name="email" {...register("email")} type="email" placeholder="user@site.com" className="input input-bordered w-full bg-white text-black" required />
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-bold text-black">Kota/Kabupaten</span>
                            </label>
                            <input name="kota" {...register("kota")} type="text" placeholder="Type here" className="input input-bordered w-full max-w-md bg-white text-black" required/>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-bold text-black">Alamat Pemesan</span>
                            </label>
                            <textarea name="alamat" {...register("alamat")} className="textarea textarea-bordered w-full max-w-md bg-white text-black" placeholder="Alamat" required></textarea>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OrderForm
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import imageLoader from "../../../utils/imageLoader"
import { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs"
import { MdAlternateEmail } from "react-icons/md"

const OrderForm = () => {

    const contents = {
        gallery: ["/static/landing/mokap1.png", "/static/landing/mokap2.png", "/static/landing/mokap3.png", "/static/landing/mokap4.png", "/static/landing/mokap1.png", "/static/landing/mokap2.png", "/static/landing/mokap3.png", "/static/landing/mokap4.png", "/static/landing/mokap2.png", "/static/landing/mokap3.png", "/static/landing/mokap4.png", "/static/landing/mokap1.png", "/static/landing/mokap2.png", "/static/landing/mokap3.png", "/static/landing/mokap4.png"]
    }

    const [isPhone, setIsPhone] = useState(typeof window !== "undefined" && window.innerWidth <= 640)

    const updateMedia = () => {
        setIsPhone(window.innerWidth <= 640)
    }

    useEffect(() => {
        window.addEventListener("resize", updateMedia)
        return () => window.removeEventListener("resize", updateMedia)
    }, [isPhone])

    return (
        <>
            <section className="flex justify-center px-2 font-[poppins]">
                <form action="" className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-3xl bg-white">
                    <div className="flex justify-center">
                        <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Checkout</span>
                    </div>
                    <span className="divider"></span>
                    <div className="form-control w-full">
                        <div>
                            <label className="label">
                                <span className="label-text font-bold text-black">Pilihan Paket{<span className="text-red-600">*</span>}</span>
                            </label>
                            <select className="select select-bordered w-full max-w-md bg-white text-black" required>
                                <option disabled selected>Pick one</option>
                                <option value={"gold"}>Gold (Rp.129.000) 🟡</option>
                                <option value={"platinum"}>Platinum (Rp.299.000) ⚪</option>
                                <option value={"diamond"}>Diamond (Rp.399.000) ⚫</option>
                            </select>
                        </div>
                        <div className="flex">
                            <Swiper
                                centeredSlides={true}
                                centeredSlidesBounds={true}
                                mousewheel={true}
                                grabCursor={false} navigation={false} modules={[Pagination, Navigation, Mousewheel]}
                                spaceBetween={0} slidesPerView={isPhone ? 2 : 4}
                                pagination={true} className="mySwiper">
                                {contents.gallery.length > 0 && contents.gallery.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className="flex flex-col pr-5">
                                                <div className="label">
                                                    <Image priority='true' layout='intrinsic' width={120} height={250} loader={imageLoader} src={item} alt='BgTexture' objectFit='contain' objectPosition='' />
                                                </div>
                                                <div className="flex items-center">
                                                    <input type="radio" value={"chiangmai"} name="radio-1" className="radio" checked={true} />
                                                    <span className="label-text pl-2 text-black">Chiang-Mai</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-bold text-black">Nama Pemesan{<span className="text-red-600">*</span>}</span>
                            </label>
                            <input type="text" placeholder="Nama" className="input input-bordered w-full max-w-md bg-white text-black" required />
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
                                <span className="label-text font-bold text-black">Alamat E-mail{<span className="text-red-600">*</span>}</span>
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
                                <span className="label-text font-bold text-black">Kota/Kecamatan</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-md bg-white text-black" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-bold text-black">Alamat Pemesan</span>
                            </label>
                            <textarea className="textarea textarea-bordered w-full max-w-md bg-white text-black" placeholder="Alamat"></textarea>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default OrderForm
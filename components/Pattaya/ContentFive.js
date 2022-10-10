import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from 'next/image'
import BgBase from "../../public/static/2/galeri.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import MapsLocation from "./MapsLocation";


const ContentFive = () => {
    return (
        <main className="relative">
            <div className="absolute h-full w-full min-h-screen">
                <Image priority='true' className="" layout='fill' src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
                <MapsLocation></MapsLocation>
                <div className="flex flex-col justify-around h-[600px] relative">
                    <div className="flex justify-center text-[#FFFDE3] text-xl font-[adelia] mt-48 mb-10">Galeri Foto</div>
                    <div className="flex justify-center w-full mb-44">
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true} navigation={true} modules={[EffectCoverflow, Pagination, Navigation]}
                            spaceBetween={-80} slidesPerView={"auto"} coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            pagination={true} className="mySwiper">
                            <SwiperSlide>
                                <div className='w-72 h-[350px] relative ml-11'>
                                    <Image className='rounded-3xl' layout='fill' src="/static/1/gallery/1.jpg" alt='template' objectFit="cover" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-72 h-[350px] relative ml-11'>
                                    <Image className='rounded-3xl' layout='fill' src="/static/1/gallery/1.jpg" alt='template' objectFit="cover" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-72 h-[350px] relative ml-11'>
                                    <Image className='rounded-3xl' layout='fill' src="/static/1/gallery/1.jpg" alt='template' objectFit="cover" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </AnimationOnScroll>
        </main>
    )
}

export default ContentFive


{/* <SwiperSlide>
<div className='w-[280px] h-[350px] relative ml-14'>
    <Link href={""}>
        <a target={"_blank"}>
            <Image className='rounded-3xl' layout='fill' src="/static/1/gallery/1.jpg" alt='template' objectFit="cover" />
            <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">Click Preview</div>
        </a>
    </Link>
</div>
</SwiperSlide>
<SwiperSlide>
<div className='w-[300px] h-[350px] relative ml-14'>
    <Link href={""}>
        <a target={"_blank"}>
            <Image className='rounded-3xl' layout='fill' src="/static/1/gallery/1.jpg" alt='template' objectFit="cover" />
            <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">Click Preview</div>
        </a>
    </Link>
</div>
</SwiperSlide>
<SwiperSlide>
<div className='w-[300px] h-[350px] relative ml-14'>
    <Link href={""}>
        <a target={"_blank"}>
            <Image className='rounded-3xl' layout='fill' src="/static/1/gallery/1.jpg" alt='template' objectFit="cover" />
            <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">Click Preview</div>
        </a>
    </Link>
</div>
</SwiperSlide> */}
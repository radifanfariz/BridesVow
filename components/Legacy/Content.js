import Typed from 'react-typed'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Flower from '../public/static/12.png'
import Flower2 from '../public/static/15.png'
import Template from '../public/static/template.png'
import { useEffect, useState } from 'react';
import Router from 'next/router';
import Link from 'next/link';


const Content = () => {

    const [isDesktop, setDesktop] = useState(typeof window !== "undefined" && window.innerWidth >= 768)

    const updateMedia = () => {
        setDesktop(window.innerWidth > 768)
    }

    useEffect(() => {
        window.addEventListener("resize", updateMedia)
        return () => window.removeEventListener("resize", updateMedia)
    },[isDesktop])

    // const handleClick = (e, path) => {
    //     e.preventDefault()
    //     switch (path) {
    //         case "/preview/first":
    //             Router.push(path)
    //         default:
    //             Router.push("/")
    //     }
    // }

    return (
        <section className="w-full xl:w-max">
            <div className="flex justify-center">
                <div className="flex flex-col items-center">
                    <div className="flex flex-row justify-between items-center h-1/4 mt-24">
                        <div className="hidden xl:flex relative xl:right-[100px]">
                            <Image layout='fixed' src={Flower2.src} alt='avatar' width={500} height={500} />
                        </div>
                        <div className="w-full max-w-xl mt-16 px-10 py-10 text-center text-7xl font-extrabold font-['arial']">Create Your Own Wedding Web</div>
                        <div className="hidden xl:flex relative xl:left-[100px]">
                            <Image layout='fixed' src={Flower.src} alt='avatar' width={500} height={500} />
                        </div>
                    </div>
                    <div className="text-5xl font-['Consolas'] capitalize">
                        <Typed strings={[
                            'your wedding moments are priceless'
                        ]} typeSpeed={50} backSpeed={50} loop />

                    </div>
                    <div className="mt-12 mb-5 shadow-[5px_5px] shadow-yellow-500 rounded-lg">
                        <button className="bg-black hover:bg-slate-400 hover:-translate-y-1.5 text-4xl  text-white w-[300px] h-[80px] rounded-lg">Pesan</button>
                    </div>
                    <div className="flex max-w-7xl m-10">
                        <Swiper navigation={true} modules={[Navigation]} spaceBetween={-200} slidesPerView={isDesktop ? 3 : 1} className="mySwiper rounded-[100px] border-4">
                            <SwiperSlide>
                                <div className='w-[350px] h-[700px] relative ml-10 '>
                                    <Link href={"/preview/first"}>
                                        <a target={"_blank"}>
                                            <Image className='' layout='fill' src={Template.src} alt='template' />
                                            <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">Click Preview</div>
                                        </a>
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-[350px] h-[700px] relative ml-10'>
                                <Link href={"/preview/second"}>
                                        <a target={"_blank"}>
                                            <Image className='' layout='fill' src={Template.src} alt='template' />
                                            <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">Click Preview</div>
                                        </a>
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-[350px] h-[700px] relative ml-10'>
                                <Link href={"/preview/first"}>
                                        <a target={"_blank"}>
                                            <Image className='' layout='fill' src={Template.src} alt='template' />
                                            <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">Click Preview</div>
                                        </a>
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-[350px] h-[700px] relative ml-10'>
                                <Link href={"/preview/first"}>
                                        <a target={"_blank"}>
                                            <Image className='' layout='fill' src={Template.src} alt='template' />
                                            <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">Click Preview</div>
                                        </a>
                                    </Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='w-[350px] h-[700px] relative ml-10'>
                                <Link href={"/preview/first"}>
                                        <a target={"_blank"}>
                                            <Image className='' layout='fill' src={Template.src} alt='template' />
                                            <div className="hover:opacity-50 opacity-0 flex text-3xl relative justify-center items-center h-full font-semibold hover:bg-black hover:bg-opacity-25 rounded-3xl">Click Preview</div>
                                        </a>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Content

// onClick={(e) => {handleClick(e,'/preview/first')}} 

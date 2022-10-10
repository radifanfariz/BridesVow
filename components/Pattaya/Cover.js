import Image from 'next/image'
import { useState } from 'react'
import BgTexture from '../../public/static/2/cover.png'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { useRouter } from 'next/router'

const Cover = ({playMusicCallback,weddingDate}) => {
    const [open, setOpen] = useState("fixed w-full max-w-[400px] xl:max-w-[500px] z-50 animate-fall")

    const animateHeader = () => {
        setOpen("fixed w-full max-w-[400px] xl:max-w-[500px] z-50 animate-fly")
        setTimeout(() => {
            setOpen("hidden")
        }, 800)
        scrollToTop()
        playMusicCallback(true)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    return (
        <header className={open}>
            <div className="absolute h-full min-h-screen w-full flex flex-col justify-between">
                <Image layout='fill' priority='true' src={BgTexture.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <div className="flex flex-col h-full min-h-screen justify-center">
                <div className="flex z-10 justify-center items-center">
                    <div className="text-[20px] font-bold font-[montserrat-extrabold] tracking-[2px] text-white">Undangan Pernikahan</div>
                </div>
                <div className="flex z-10 justify-center items-center pt-5 text-white">
                    <div className="font-bold text-7xl text-center font-[playfair]">{"Pulan & Pulin"}</div>
                </div>
                <div className="flex z-10 justify-center items-center py-7 tracking-[7px] text-white">
                    <div className="font-bold text-2xl">
                        <span>{weddingDate.day}</span>
                        <span>.</span>
                        <span>{weddingDate.month}</span>
                        <span>.</span>
                        <span>{weddingDate.year}</span>
                    </div>
                </div>
                <div className="flex justify-center z-10">
                    <button className="bg-[#C9A663] w-[185px] h-[36px] hover:opacity-25 p-2 m-5 mt-4 rounded-full text-white border-[1px] border-black" onClick={animateHeader}>
                        <div className="flex justify-center">
                            <HiOutlineMailOpen />
                            <span className="pl-1 text-[12px] font-extrabold">
                                Buka Undangan
                            </span>
                        </div>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Cover

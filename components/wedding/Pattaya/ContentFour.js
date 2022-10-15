import Image from "next/image"
import BgTexture from "../../../public/static/1/bgtexture2.png"
import BgAtas from "../../../public/static/1/bgatasbiru.png"
import BgBawah from "../../../public/static/1/bgbawahbiru.png"
import ContentImage from "../../../public/static/1/content.jpg"
import ContentImage2 from "../../../public/static/1/content2.jpg"
import { AnimationOnScroll } from 'react-animation-on-scroll'

const ContentFour = () => {
    return (
        <main className="relative">
            <div className="absolute h-full w-full min-h-screen flex flex-col justify-between">
                <Image priority='true' className="" src={BgAtas.src} width={500} height={200} alt='BgTexture' />
                <Image priority='true' className="" src={BgBawah.src} width={500} height={200} alt='BgTexture' />
            </div>
            <div className="absolute top-10 h-[850px] w-full flex flex-col justify-center">
                <Image priority='true' width={500} height={1000} src={BgTexture.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInLeftBig">
                <div className="flex flex-col justify-around h-full min-h-screen relative py-20">
                    <div className="flex flex-col px-10 z-10">
                        <div className="flex w-full justify-center">
                            <div className="absolute mt-10 z-20 flex justify-center w-full font-bold text-white">Akad Nikah</div>
                        </div>
                        <div className="relative mt-5 flex items-start justify-center">
                            <div className="absolute z-10 opacity-50 w-[300px] h-[250px] rounded-tl-[4rem] rounded-br-[4rem] bg-black "></div>
                            <Image priority='true' className="rounded-tl-[4rem] rounded-br-[4rem]" width="300px" height="250px" src={ContentImage2.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
                        </div>
                    </div>
                    <div className="flex flex-col px-10 z-10">
                        <div className="flex w-full justify-center">
                            <div className="absolute mt-10 z-20 flex justify-center w-full font-bold text-white">Resepsi</div>
                        </div>
                        <div className="relative mt-5 flex items-start justify-center">
                            <div className="absolute z-10 opacity-50 w-[300px] h-[250px] rounded-tl-[4rem] rounded-br-[4rem] bg-black "></div>
                            <Image priority='true' className="rounded-tl-[4rem] rounded-br-[4rem]" width="300px" height="250px" src={ContentImage.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
        </main>
    )
}

export default ContentFour
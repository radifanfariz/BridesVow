import Image from "next/image"
import BgBase from "../../public/static/1/New/bgbiru.png"
import ContentImage from "../../public/static/1/content.jpg"
import ContentImage2 from "../../public/static/1/content2.jpg"
import { AnimationOnScroll } from 'react-animation-on-scroll'

const ContentFour = () => {
    return (
        <main className="relative">
            <div className="absolute">
                <Image priority='true' width={500} height={1500} src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                <div className="flex flex-col justify-around items-center h-full min-h-screen relative pb-32 pt-10">
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
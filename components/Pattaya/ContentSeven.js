import Image from "next/image"
import BgBase from "../../public/static/2/penutup.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'

const ContentSeven = () => {
    return (
        <main className="relative">
            {/* <div className="absolute h-full w-full min-h-screen flex flex-col justify-start">
                <Image priority='true' className="" src={BgBawah.src} width={500} height={200} alt='BgTexture' />
            </div> */}
            <div className="absolute h-full w-full flex flex-col justify-center">
                <Image priority='true' width={500} height={1200} src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
                <div className="flex flex-col justify-start h-[50%] relative">
                    <div className="flex justify-center pt-20 p-5">
                        <div className="text-center text-[12px] text-white font-[montserrat]">Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
                            Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
                            <span className="block mt-2 text-center"> Wassalamu’alaikum Wr. Wb. </span>
                        </div>
                    </div>
                    <div className="flex justify-center p-20 pt-10">
                        <div className="font-[adelia] text-[24px] text-white">Pulan & Pulin</div>
                    </div>
                </div>
            </AnimationOnScroll>
        </main>
    )
}

export default ContentSeven
import Image from "next/image"
import BgBase from "../../../public/static/1/New/bgbiru.png"
import Ava from "../../../public/static/1/avatar.jpg"
import Bunga from "../../../public/static/1/bunga5.png"
import Divider from "../../../public/static/1/garislove.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import imageLoader from "../../../utils/imageLoader"

const ContentSeven = ({contents}) => {
    return (
        <main className="relative">
            {/* <div className="absolute h-full w-full min-h-screen flex flex-col justify-start">
                <Image priority='true' className="" src={BgBawah.src} width={500} height={200} alt='BgTexture' />
            </div> */}
            <div className="absolute h-full w-full flex flex-col justify-center">
                <Image priority='true' width={500} height={1200} src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                <div className="flex flex-col justify-start h-[50%]">
                    <div className="flex justify-center p-24">
                        <Image layout="fixed" priority='true' className="rounded-full object-fit max-w-full h-auto" loader={imageLoader} src={contents.src} alt='avatar' width={200} height={200} />
                    </div>
                    <div className="absolute">
                        <div className="relative xl:left-[125px] left-[60px] top-[160px] transform-gpu">
                            <Image layout="fixed" priority='true' className="" src={Bunga.src} alt='bunga' width={250} height={200} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="font-[adelia] text-white">Terima kasih</div>
                    </div>
                    <div className="flex justify-center my-5">
                        <Image priority='true' className="" src={Divider.src} alt='bunga' width={800} height={30} />
                    </div>
                    <div className="flex justify-center mb-20">
                        <div className="font-bold text-white">{contents.cewekName} & {contents.cowokName}</div>
                    </div>
                </div>
            </AnimationOnScroll>
        </main>
    )
}

export default ContentSeven
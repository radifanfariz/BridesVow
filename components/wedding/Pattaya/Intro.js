import Image from 'next/image'
import Man from '../../../public/static/1/cowok.jpg'
import Woman from '../../../public/static/1/cewek.jpg'
import BgBase from '../../../public/static/2/mempelai.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'


const Content = () => {

    // const [animate, setAnimate] = useState("hidden")

    // useEffect(() => {
    //     let prevScrollpos = window.pageYOffset
    //     window.onscroll = () => {
    //         let currentScrollPos = window.pageYOffset;
    //         if (prevScrollpos < currentScrollPos) {
    //             setAnimate("animate-fall")
    //         }
    //     }
    // }, [])


    return (
        <main className="relative">
            <Image layout='fill' priority='true' src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            <div className="flex flex-col h-full min-h-screen justify-start">
                <div>
                    <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInLeftBig">
                        <div className="flex flex-col relative bottom-10">
                            <div className="flex justify-center relative top-20">
                                <div className="font-bold z-10 text-[#FFFDE3]">Calon Pengantin</div>
                            </div>
                                <div className="flex justify-between mt-20 relative">
                                    <div className="p-5">
                                        <Image priority='true' className="rounded-full max-w-full h-auto" src={Woman.src} alt='avatar' width={500} height={500} objectFit='cover' objectPosition='top' />
                                    </div>
                                    <div className="flex justify-end items-center p-10">
                                        <div className="text-[60px] font-['richard'] text-[#FFFDE3] my-2">Pulin</div>
                                    </div>
                                </div>
                            <div className="flex flex-col z-10 relative top-10">
                                <div className="flex flex-col font-[antonio] text-[#FFFDE3]">
                                    <div className="flex justify-center font-extrabold text-[22px]">Pulin Sianipar, S.Kom.</div>
                                    <div className="flex justify-center text-center">
                                        <div className="flex justify-center w-[70%]">putri dari Garox Panjaitan dan Mamank Pasaribu</div>
                                    </div>
                                </div>
                                <div className="flex justify-center">
                                    <div className="text-5xl text-[#FFFDE3] font-[richard] font-bold mt-5">{"&"}</div>
                                </div>
                            </div>
                            <div className="flex justify-between mt-20 relative">
                                    <div className="flex justify-end items-center p-10">
                                        <div className="text-[60px] font-['richard'] text-[#FFFDE3] my-2">Pulin</div>
                                    </div>
                                    <div className="p-5">
                                        <Image priority='true' className="rounded-full max-w-full h-auto" src={Man.src} alt='avatar' width={500} height={500} objectFit='cover' objectPosition='top' />
                                    </div>
                                </div>
                            <div className="flex flex-col z-10 relative">
                                <div className="flex flex-col text-[#FFFDE3] font-[antonio]">
                                    <div className="flex justify-center font-extrabold text-[22px]">Pulin Sianipar, S.Kom.</div>
                                    <div className="flex justify-center text-center">
                                        <div className="flex justify-center w-[70%]">putri dari Garox Panjaitan dan Mamank Pasaribu</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimationOnScroll>
                </div>
            </div>
        </main>
    )
}

export default Content
import Image from 'next/image'
import Bunga from '../../../public/static/1/bunga2.png'
import Man from '../../../public/static/1/cowok.jpg'
import Woman from '../../../public/static/1/cewek.jpg'
import BgBase from '../../../public/static/4/mempelai.png'
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
                    <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                        <div className="relative">
                            <div className="flex flex-col bottom-10">
                                <div className="flex justify-center relative top-20">
                                    <div className="z-10 text-black text-4xl font-[adela]">Calon Pengantin</div>
                                </div>
                                <div className="relative">
                                    <div className="flex justify-center p-28 pb-12">
                                        <div className="relative">
                                            <Image layout="fixed" priority='true' className="rounded-full" src={Woman.src} alt='avatar' width={150} height={150} objectFit='cover' objectPosition='top' />
                                        </div>
                                        <div className="flex justify-center items-end">
                                            <div className="text-3xl font-[richard] text-black font-bold">{"&"}</div>
                                        </div>
                                        <div className="relative">
                                            <Image layout="fixed" priority='true' className="rounded-full" src={Man.src} alt='avatar' width={150} height={150} objectFit='cover' objectPosition='top' />
                                        </div>
                                        <div className="absolute">
                                            <div className="relative top-[120px] left-[90px] transform-gpu">
                                                <Image priority='true' className="" src={Bunga.src} alt='bunga' width={100} height={60} />
                                            </div>
                                        </div>
                                        <div className="absolute">
                                            <div className="relative top-[120px] left-[-90px] transform-gpu">
                                                <Image priority='true' className="" src={Bunga.src} alt='bunga' width={100} height={60} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-20">
                                    <div className="bg-[#D9D9D9] bg-opacity-50 mx-10 py-5 rounded-xl">
                                        <div className="flex flex-col z-10">
                                            <div className="flex justify-center">
                                                <div className="text-4xl font-['paradise'] text-black my-2">Pulin</div>
                                            </div>
                                            <div className="flex flex-col font-[belgrano] capitalize">
                                                <div className="flex justify-center text-black font-extrabold">Pulin Sianipar, S.Kom.</div>
                                                <div className="flex justify-center text-center">'
                                                    <div className=" text-black w-[70%]">
                                                        <span className="block">putri dari</span>
                                                        <span>Bapak Garox Panjaitan</span>
                                                        <span> & </span>
                                                        <span>Ibu Mamank Pasaribu</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex justify-center">
                                                <div className="text-3xl font-[richard] text-black font-bold py-5">{"&"}</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col z-10">
                                            <div className="flex justify-center">
                                                <div className="text-4xl font-['paradise'] text-black my-2">Pulin</div>
                                            </div>
                                            <div className="flex flex-col font-[belgrano] capitalize">
                                                <div className="flex justify-center text-black font-extrabold">Pulin Sianipar, S.Kom.</div>
                                                <div className="flex justify-center text-center">'
                                                    <div className="text-black w-[70%]">
                                                        <span className="block">putra dari</span>
                                                        <span>Bapak Garox Panjaitan</span>
                                                        <span> & </span>
                                                        <span>Ibu Mamank Pasaribu</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
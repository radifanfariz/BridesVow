import Image from "next/image"
import Ring from "../../public/static/ring.svg"
import BgTexture from "../../public/static/1/bgtexture.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'

const ContentTwo = () => {
    return (
        <main className="">
            <div className="bg-[#2A5D87] py-8 px-4">
                <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                    <div className="flex flex-col justify-between relative items-center px-2 py-2 rounded-full">
                        <Image priority='true' className='flex rounded-full absolute' layout='fill' src={BgTexture.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
                        <div className="flex z-10">
                            <div className="flex justify-center w-[25px] mb-2">
                                <Image src={Ring.src} width={100} height={100} />
                            </div>
                        </div>
                        <div className="flex z-10">
                            <div className="flex text-xs text-center px-6 text-black font-[montserrat]">“Dan di antara tanda-tanda (kebesaran)-Nya
                                ialah Dia menciptakan pasangan-pasangan untukmu
                                dari jenismu sendiri, agar kamu cenderung dan merasa
                                tenteram kepadanya, dan Dia menjadikan di antaramu
                                rasa kasih dan sayang. Sungguh, pada yang demikian
                                itu benar-benar terdapat tanda-tanda
                                (kebesaran Allah) bagi kaum yang berpikir.”</div>
                        </div>
                        <div className="flex z-10">
                            <div className="flex text-sm mt-2 mb-2 text-black font-bold">{"( QS. Ar-Rum Ayat 21 )"}</div>
                        </div>
                    </div>
                </AnimationOnScroll>
            </div>
        </main>
    )
}

export default ContentTwo
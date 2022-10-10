import Image from "next/image"
import Ring from "../../public/static/ring.svg"
import BgTexture from "../../public/static/4/ayat.png"
import { AnimationOnScroll } from 'react-animation-on-scroll'

const ContentTwo = () => {
    return (
        <main className="relative">
            <Image priority='true' className="" layout='fill' src={BgTexture.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInUpBig">
                <div className="relative py-6 px-4">
                    <div className="flex flex-col justify-between relative items-center mx-5 px-2 py-2 rounded-3xl bg-[#D9D9D9]">
                        <div className="flex z-10">
                            <div className="flex justify-center w-[25px] mb-2">
                                <Image src={Ring.src} width={100} height={100} />
                            </div>
                        </div>
                        <div className="flex z-10">
                            <div className="flex text-sm text-center px-6 text-black font-[damion]">“Dan di antara tanda-tanda (kebesaran)-Nya
                                ialah Dia menciptakan pasangan-pasangan untukmu
                                dari jenismu sendiri, agar kamu cenderung dan merasa
                                tenteram kepadanya, dan Dia menjadikan di antaramu
                                rasa kasih dan sayang. Sungguh, pada yang demikian
                                itu benar-benar terdapat tanda-tanda
                                (kebesaran Allah) bagi kaum yang berpikir.”</div>
                        </div>
                        <div className="flex z-10">
                            <div className="flex text-sm mt-2 mb-2 text-black font-bold font-[damion]">{"( QS. Ar-Rum Ayat 21 )"}</div>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
        </main>
    )
}

export default ContentTwo
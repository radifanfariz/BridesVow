import Image from 'next/image'
import BgTexture from '../../../public/static/3/3mempelai.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const ContentTwo = () => {

    return (
        <header className="relative">
            <div className="absolute h-full min-h-screen w-full flex flex-col justify-between">
                <Image layout='fill' priority='true' src={BgTexture.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInLeftBig">
                <div className="flex flex-col h-full min-h-screen justify-center py-16">
                    <div className="flex z-10 justify-center items-center">
                        <div className="relative">
                            <div className="absolute top-10 right-[-165px] w-[330px] text-[#FFFDE3] text-[20px] text-center font-[damion] tracking-[2px]">
                                {
                                    `“ Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.”
                            (QS. Ar-Rum 21)`
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-[350px] z-10 justify-center items-center">
                        <div className="text-[30px] text-center text-[#FFFDE3] font-serif tracking-[2px]">
                            {
                                `Iyan Grimshaw`
                            }
                        </div>
                        <div className="text-[16px] w-[200px] mt-5 text-center text-[#FFFDE3] font-[belghrano] tracking-[2px]">
                            {
                                `Putri dari
                            Bapak Karl Grimshaw 
                            & Ibu Loco Grimshaw`
                            }
                        </div>
                    </div>
                    <div className="flex flex-col mt-5 z-10 justify-center items-center">
                        <div className="text-[30px] text-center text-[#FFFDE3] font-[richard] tracking-[2px]">
                            {
                                `&`
                            }
                        </div>
                        <div className="text-[30px] text-center text-[#FFFDE3] font-serif tracking-[2px]">
                            {
                                `Reggaro Kun`
                            }
                        </div>
                        <div className="text-[16px] w-[200px] mt-5 text-center text-[#FFFDE3] font-[belgrano] tracking-[2px]">
                            {
                                `Putra dari
                            Bapak Kun Twol 
                            & Ibu Kun Trisha`
                            }
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
        </header>
    )
}

export default ContentTwo
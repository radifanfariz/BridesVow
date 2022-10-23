import Image from 'next/image'
import BgTexture from '../../../public/static/2/akad.png'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const ContentTwo = () => {

    return (
        <header className="relative">
            <div className="absolute h-full min-h-[600px] w-full flex flex-col justify-between">
                <Image layout='fill' priority='true' src={BgTexture.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInLeftBig">
                <div className="flex flex-col h-full min-h-[600px] justify-center">
                    <div className="flex z-10 justify-center items-center">
                        <div className="absolute top-10 mt-20 w-[330px] text-[#FFFDE3] text-[20px] text-center font-[damion] tracking-[2px]">
                            {
                                `“ Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.”
                            (QS. Ar-Rum 21)`
                            }
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
        </header>
    )
}

export default ContentTwo
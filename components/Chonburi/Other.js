import Image from 'next/image'
import BgTexture from '../../public/static/3/2awal.png'

const Content = ({weddingDate}) => {

    return (
        <header className="relative">
            <div className="absolute h-full min-h-screen w-full flex flex-col justify-between">
                <Image layout='fill' priority='true' src={BgTexture.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
            </div>
            <div className="flex flex-col h-full min-h-screen justify-center">
                <div className="flex z-10 justify-center items-center">
                    <div className="text-[28px] text-white font-[damion] tracking-[2px]">
                        Pernikahan Dari
                    </div>
                </div>
                <div className="flex z-10 justify-center items-center pt-5">
                    <div className="font-bold text-[30px] text-white text-center font-[adelia]">{"Pulan & Pulin"}</div>
                </div>
                <div className="flex z-10 justify-center items-center py-7 tracking-[2px]">
                    <div className="font-bold text-2xl text-white font-[antonio]">
                        <span className='p-2'>{weddingDate.day}</span>
                        <span>{weddingDate.month}</span>
                        <span className='p-2'>{weddingDate.year}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Content
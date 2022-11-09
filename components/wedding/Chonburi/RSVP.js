import Image from 'next/image'
import BgBase from '../../../public/static/1/New/comments-bg.png'
import { database } from '../../../firebaseConsole'
import { collection, addDoc, getDocs, Timestamp, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const RSVP = ({ contents }) => {

    const dbInstance = collection(database, `rsvp_${contents.dbName}`)

    const [name, setName] = useState('')
    const [isHadir, setIsHadir] = useState(false)
    const [createdAt, setCreatedAt] = useState(Timestamp.now().toDate())
    const [userChoice, setUserChoice] = useState('tidakHadir')

    const [disabledClass, setDisabledClass] = useState('')

    const hadirFunc = (value) => {
        setUserChoice(value)
        if (value == 'tidakHadir') {
            setIsHadir(false)
        } else {
            setIsHadir(true)
        }
    }

    const addRSVP = () => {

        setName('')
        setIsHadir(false)
        setCreatedAt(Timestamp.now().toDate())

        let rsvpData = {
            name: name,
            isHadir: isHadir,
            createdAt: createdAt,
        }

        /* without database(firebase) */
        // setCommentItems([...commentItems, commentData])

        addDoc(dbInstance, rsvpData)
            .then(() => {
                setDisabledClass('pointer-events-none opacity-50')
            })
    }

    return (
        <>
            <section className="relative">
                <Image priority='true' layout='fill' src={BgBase.src} alt='BgTexture' objectFit='cover' objectPosition='center' />
                <AnimationOnScroll animateOnce={false} animateIn="animate__fadeInUpBig">
                    <div className={`flex flex-col items-center ${disabledClass} `}>
                        <div className="flex justify-center mt-8 z-10 rounded-xl">
                            <div className="text-lg font-[adelia] font-extrabold text-black">RSVP</div>
                        </div>
                        <div className="flex text-sm justify-center font-[montserrat] font-bold w-[270px] pt-5 text-center z-10">
                            <div className="text-black">Kedatangan Bapak/Ibu/Saudara/i sangat berarti bagi kami, mohon konfirmasi kehadiran Bapak/Ibu/Saudara/i.
                                Terima kasih.</div>
                        </div>
                        <div className="flex flex-col justify-center z-10 font-[montserrat] mx-5 my-5">
                            <div className="flex flex-col w-full p-5 pb-8 z-50">
                                <div className="flex">
                                    <input onChange={(e) => setName(e.target.value)} className="w-full px-5 py-2 rounded-xl" type="text" name="nama" id="nama" placeholder="Nama" value={name} />
                                </div>
                                <div className="flex items-center mt-5">
                                    <select name="" id="" className="rounded-xl p-2 w-full bg-white" defaultValue={userChoice} onChange={(e) => hadirFunc(e.target.value)}>
                                        <option value="hadir">Hadir</option>
                                        <option value="tidakHadir">Tidak Hadir</option>
                                    </select>
                                </div> 
                            </div>
                        </div>
                        <div className="flex justify-center">
                            {(name === '') ?
                                <button disabled className="bg-black bg-opacity-25 w-[200px] h-[30px] font-bold text-sm rounded-full text-white border-[1px] border-black">
                                    Disabled
                                </button> :
                                <button onClick={addRSVP} className="bg-black w-[200px] h-[30px] font-bold text-sm hover:bg-blue-200 rounded-full text-white border-[1px] border-black">
                                    Kirim
                                </button>
                            }
                        </div>
                        <div className="pb-10"></div>
                    </div>
                </AnimationOnScroll>
            </section>
        </>
    )
}

export default RSVP
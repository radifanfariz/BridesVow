import { BiTimeFive } from "react-icons/bi"
import { FaRegCalendarAlt } from "react-icons/fa"
import { useTimer } from "react-timer-hook"
import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import Image from "next/image";
import BgPhoto from '../../../public/static/1/bg2.jpg'
import Ring from '../../../public/static/1/ring.png'
import { GrClose } from "react-icons/gr";

const Countdown = ({ expiryTimestamp }) => {

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    const [days, setDays] = useState('')
    const [hours, setHours] = useState('')
    const [minutes, setMinutes] = useState('')
    const [seconds, setSeconds] = useState('')
    const timerObj = useTimer({ expiryTimestamp: expiryTimestamp, onExpire: () => setOpen(o => !o) })

  useEffect(() => {
    setDays(timerObj.days)
    setHours(timerObj.hours)
    setMinutes(timerObj.minutes)
    setSeconds(timerObj.seconds)
  },[timerObj.days, timerObj.hours, timerObj.minutes, timerObj.seconds]);

  const uniqueId = () => {
    return "id" + Math.random().toString(16).slice(2)
}

    return (
        <main className={"relative"}>
            <Image layout='fill' priority='true' src={BgPhoto.src} alt='BgPhoto' objectFit='cover' objectPosition='center' />
            <div className="flex flex-col justify-center pt-56 h-full min-h-screen">
                <div className="flex justify-center z-10">
                    <div className="text-lg text-center font-semibold text-white">Nantikan hari bahagia kami</div>
                </div>
                <div className="flex justify-center mt-4 z-10">
                    <div className="flex justify-center items-center text-white font-[paradise] text-5xl">
                        Pulan <span className="px-2"><Image priority='true' className="" width="80px" height="80px" src={Ring.src} alt='Ring' objectFit="contain" objectPosition="center" /></span> Pulin
                        </div>
                </div>
                <div className="flex justify-center z-10">
                    <div className="text-white text-lg mt-4">1 September 2022 | Pukul 08.00 WIB</div>
                </div>
                <div className="flex justify-center mt-3 z-10">
                    <div className="flex flex-col justify-center items-center mr-3 bg-[#FAEBCD] text-black h-[70px] w-[70px] rounded-2xl">
                        <span className="font-bold">{days}</span>
                        <span className="text-sm">Hari</span>
                    </div>
                    <div className="flex flex-col justify-center items-center mr-3 bg-[#FAEBCD] text-black h-[70px] w-[70px] rounded-2xl">
                        <span className="font-bold">{hours}</span>
                        <span className="text-sm">Jam</span>
                    </div>
                    <div className="flex flex-col justify-center items-center mr-3 bg-[#FAEBCD] text-black h-[70px] w-[70px] rounded-2xl">
                        <span className="font-bold">{minutes}</span>
                        <span className="text-sm">Menit</span>
                    </div>
                    <div className="flex flex-col justify-center items-center mr-3 bg-[#FAEBCD] text-black h-[70px] w-[70px] rounded-2xl">
                        <span className="font-bold">{seconds}</span>
                        <span className="text-sm">Detik</span>
                    </div>
                </div>
                <div className="flex flex-col justify-center z-10 font-[montserrat] mx-5 my-5">
                    <div className="flex justify-center">
                        <button onClick={() => setOpen(o => !o)} className="flex justify-center items-center bg-white w-[210px] h-[30px] font-bold text-xs hover:bg-blue-200 rounded-xl text-black border-[1px]">
                            <span className="pr-1"><FaRegCalendarAlt /></span>
                            <span>save the date</span>
                        </button>
                        <Popup open={open} closeOnDocumentClick onClose={closeModal} contentStyle={{ width: '350px' }}>
                            <div className="container">
                                <a className="close" onClick={closeModal}>
                                    <GrClose className='hover:opacity-25' />
                                </a>
                                <div className="font-bold text-center text-black">
                                    Selamat Hari Pernikahan 🤵‍♂️👰‍♀️
                                </div>
                            </div>
                        </Popup>
                    </div>
                </div>
            </div>
        </main >
    )
}

export default Countdown
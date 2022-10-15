import Image from 'next/image'
import Ava from '../../../public/static/1/avatar.jpg'
import Bunga from '../../../public/static/1/bunga.png'
import { HiOutlineMailOpen } from 'react-icons/hi'
import { useState } from 'react'

const styles = {
  wrapper: `flex flex-col relative justify-center item-between h-full min-h-sm max-h-[900px] bg-[url('../public/static/1/fotogelap.jpg')] bg-cover bg-center`,
  avaContainer: `flex justify-center p-20`,
  ava: `rounded-full object-fit max-w-full h-auto`,
  nameText: `text-xl text-white font-['Paradise'] text-[50px]`,
  kataText: `text-xl text-white font-['Montserrat'] my-8`,
  kataTextSec: `text-[10px] text-white text-center font-['Montserrat']`,
  btnUndangan: `bg-[#2a5d87] w-[185px] h-[36px] hover:bg-blue-200 p-2 m-5 mt-4 rounded-full text-white border-[1px] border-black`,
  btnText: `pl-1 text-[12px] font-extrabold`

}

const Header = () => {
  const [open,setOpen] = useState("fixed w-full max-w-[400px] z-50")


  return (
    <header className={open}>
      <div className="flex flex-col relative justify-center item-between h-full min-h-screen max-h-fit xl:w-full xl:max-w-[400px] bg-[url('../public/static/1/fotogelap.jpg')] bg-cover bg-center">
        <div className="flex flex-col relative justify-center bottom-16">
          <div className={styles.avaContainer}>
            <Image priority='true' className={styles.ava} src={Ava.src} alt='avatar' width={500} height={500} />
          </div>
          <div className="absolute left-[150px] mb-20  rotate-[180deg] transform-gpu">
            <Image priority='true' className="" src={Bunga.src} alt='bunga' width={200} height={200} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className={styles.nameText}>Pulan & Pulin</div>
            <div className={styles.kataText}>Kepada Bapak/Ibu/Saudara/i</div>
            <div className={styles.kataTextSec}>Kami Mengundang Anda Untuk Hadir di Acara Pernikahan Kami</div>
            <button className={styles.btnUndangan} onClick={() => setOpen("relative")}>
              <div className="flex justify-center">
                <HiOutlineMailOpen />
                <span className={styles.btnText}>
                  Buka Undangan
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
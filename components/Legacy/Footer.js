import Image from "next/image"
import Logo from "../public/static/bv_logo.svg"
import Ava from "../public/static/bg.jpg"
import { AiFillInstagram } from "react-icons/ai"
import { IoLogoWhatsapp } from "react-icons/io"
import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer>
                <section className="bg-white">
                    <div className="flex justify-center">
                        <span className="flex justify-center pb-10 bg-orange-200 rounded-t-none rounded-b-full w-[200px] h-[100px]">
                            <Image src={Logo.src} alt={"Logo"} width={50} height={50} />
                        </span>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex justify-between items-center px-10 pt-10">
                            <div className="flex flex-col">
                                <div className="flex justify-center pb-10 font-bold text-3xl">
                                    Founder
                                </div>
                                <div className="flex justify-start">
                                    <div className="w-6/12 px-5">
                                        <div className="flex justify-center p-1 font-semibold font-['consolas']">Name</div>
                                        <Image className="rounded-full object-cover max-w-full h-auto" src={Ava.src} alt={"Logo"} width={100} height={100} />
                                    </div>
                                    <div className="w-6/12 px-5">
                                        <div className="flex justify-center p-1 font-semibold font-['consolas']">Name</div>
                                        <Image className="rounded-full object-cover max-w-full h-auto" src={Ava.src} alt={"Logo"} width={100} height={100} />
                                    </div>
                                    <div className="w-6/12 px-5">
                                        <div className="flex justify-center p-1 font-semibold font-['consolas']">Name</div>
                                        <Image className="rounded-full object-cover max-w-full h-auto" src={Ava.src} alt={"Logo"} width={100} height={100} />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row px-5">
                                <div className="mx-4 text-5xl hover:opacity-25">
                                    <Link href={"#"}>
                                        <a><AiFillInstagram /></a>
                                    </Link>
                                </div>
                                <div className="text-5xl hover:opacity-25">
                                    <Link href={"#"}>
                                        <a><IoLogoWhatsapp /></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center font-semibold pt-20 pb-10 text-sm">Copyright © 2022 radifanfariz, Inc. All rights reserved.</div>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer
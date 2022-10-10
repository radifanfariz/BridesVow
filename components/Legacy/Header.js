import Image from "next/image"
import Logo from "../public/static/bv_logo.svg"
import Link from "next/link"

const Header = () => {
    return (
        <header className="shadow-lg shadow-black w-full fixed z-50">
            <nav className="flex justify-between items-center px-5 bg-white xl:p-0 p-5">
                <div className="p-4 pl-10">
                    <Link href={"/preview/first"}>
                        <a><Image className="" src={Logo.src} alt='avatar' width={50} height={50} /></a>
                    </Link>
                </div>
                <div className="flex place-items-center text-4xl xl:text-2xl xl:pr-10">
                    <Link href={"/"}>
                        <a className="font-bold px-3 py-2 mr-1 rounded-lg"><span className="hover:border-b-4 border-black">Home</span></a>
                    </Link>
                    <Link href={"/"}>
                        <a className="font-bold px-3 py-2 mr-1 rounded-lg"><span className="hover:border-b-4 border-black">Fitur</span></a>
                    </Link>
                    <Link href={"/"}>
                        <a className="font-bold px-3 py-2 mr-5 rounded-lg"><span className="hover:border-b-4 border-black">Harga</span></a>
                    </Link>
                    <div className="shadow-[5px_5px] shadow-yellow-500 rounded-lg">
                        <button className="bg-black hover:bg-slate-400 hover:-translate-y-1.5  text-white w-[200px] h-[80px] xl:w-[150px] xl:h-[50px] rounded-lg">Pesan</button>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
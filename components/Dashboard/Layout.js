import BridesVowIcon from "../../public/static/bridesvow.svg"
import Link from "next/link"
import Image from "next/image"
import SideBar from "./SideBar"
import HelpButton from "../Global/HelpButton"

const Layout = ({ children }) => {
    return (
        <>
            <div className="bg-[#EBF7FF] h-full min-h-screen relative">
                <SideBar />
                <main>
                    {children}
                    <HelpButton />
                </main>
            </div>
        </>
    )
}
export default Layout
import {RiWhatsappFill} from "react-icons/ri"

const HelpButton = () => {
    return (
        <>
            <div className="fixed top-0 lg:top-auto lg:bottom-0 right-0 p-5 z-50">
                <button className="btn btn-circle h-12 w-12 bg-[#25d366] text-white border-2 border-white text-3xl"><RiWhatsappFill/></button>
            </div>
        </>
    )
}

export default HelpButton
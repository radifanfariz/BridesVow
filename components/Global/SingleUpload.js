import Image from "next/image"
import imageLoader from "../../utils/imageLoader"

const SingleUpload = ({width="w-80 lg:w-[35rem]"}) => {
    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <input type="file" className="border-black border-2 hidden" required multiple />
                <div className={`border-dashed border-2 border-black rounded-xl bg-white ${width}`}>
                    <div className="flex justify-center pt-10">
                        <Image className='' src={"/static/other/upload.png"} loader={imageLoader} width={50} height={50} alt='template' objectFit="contain" />
                    </div>
                    <div className="flex flex-col justify-center items-center pb-10">
                        <span className="font-bold text-xs pb-3 text-black">drag and drop file here</span>
                        <span className="font-bold text-sm pb-3 text-black">OR</span>
                        <button className="btn btn-xs rounded-full w-32 bg-black text-white">Browse</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleUpload

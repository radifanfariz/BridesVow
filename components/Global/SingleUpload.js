import Image from "next/image"
import { forwardRef, useRef, useState } from "react"

const SingleUpload = forwardRef(({ rest, error, width = "w-80 lg:w-[35rem]", options }, ref) => {


    const [selectedFile, setSelectedFile] = useState()

    const inputFileRef = useRef(null)

    const {setValue} = options

    const handleClick = (event) => {
        event.preventDefault();
        inputFileRef.current.click()
        console.log("test: " + inputFileRef.current)
    }

    const handleChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            console.log("file: " + URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.files[0])
            setValue(event.target.name,event.target.files[0])
            // console.log("type: " + event.target.name)
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <input ref={(e) => {
                    ref(e)
                    inputFileRef.current = e
                }} {...rest} type="file" className="border-black border-2 hidden" accept=".jpg,.jpeg,.png" onChange={handleChange} />
                <div className={`border-dashed border-2 border-black rounded-xl bg-white ${width}`}>
                    <div className="flex flex-col items-center justify-center pt-10">
                        <Image className='' src={(selectedFile) ? URL.createObjectURL(selectedFile) : "/static/other/upload.png"} width={(selectedFile) ? 200 : 50} height={(selectedFile) ? 200 : 50} alt='template' objectFit="contain" />
                        <span className="font-bold text-xs pb-3 text-black">{(!selectedFile) ? "drag and drop file here" : selectedFile.name}</span>
                    </div>
                    <div className="flex flex-col justify-center items-center pb-10">
                        <span className="font-bold text-sm pb-3 text-black">{(!selectedFile) ? "OR" : ""}</span>
                        <button onClick={handleClick} className="btn btn-xs rounded-full w-32 bg-black text-white">Browse</button>
                    </div>
                </div>
            </div>
        </>
    )
})

export default SingleUpload

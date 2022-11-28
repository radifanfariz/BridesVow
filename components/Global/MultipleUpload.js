import Image from "next/image"
import { forwardRef, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
import imageLoader from "../../utils/imageLoader"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Mousewheel, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const MultiUpload = forwardRef(({ rest, error, width = "w-80 lg:w-[35rem]", options }, ref) => {


    const [selectedFile, setSelectedFile] = useState()
    const [arrayFiles, setArrayFiles] = useState([])
    const [isFilesDrag, setIsFilesDrag] = useState(false)

    const inputFileRef = useRef(null)

    const { setValue } = options

    const [isPhone, setIsPhone] = useState(typeof window !== "undefined" && window.innerWidth <= 640)

    const updateMedia = () => {
        setIsPhone(window.innerWidth <= 640)
    }

    useEffect(() => {
        window.addEventListener("resize", updateMedia)
        return () => window.removeEventListener("resize", updateMedia)
    }, [isPhone])

    useEffect(() => {
        document.addEventListener('dragleave', handleDragLeave)
    },[])

    const handleClick = (event) => {
        event.preventDefault();
        inputFileRef.current.click()
        console.log("test: " + inputFileRef.current)
    }

    const handleChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            console.log("file: " + URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.files)
            setArrayFiles(Object.values(event.target.files))
            // setValue(event.target.name,arrayFiles)
            console.log("selected: " + typeof selectedFile)

        }
    }

    const handleDrop = (event) => {
        console.log('File(s) dropped')
        setIsFilesDrag(false)
        // Prevent default behavior (Prevent file from being opened)
        event.preventDefault()
        if (event.dataTransfer.items) {
            [...event.dataTransfer.items].forEach((item, i) => {
                // If dropped items aren't files, reject them
                if (item.kind === 'file') {
                    const file = item.getAsFile()
                    console.log(`… file[${i}].name = ${file.name}`)
                }
            })
        } else {
            // Use DataTransfer interface to access the file(s)
            [...event.dataTransfer.files].forEach((file, i) => {
                console.log(`… file[${i}].name = ${file.name}`);
            });
        }
    }

    const handleDragEnter = (event) => {
        console.log('File(s) in drop zone');

        // Prevent default behavior (Prevent file from being opened)
        event.preventDefault();

        event.dataTransfer.dropEffect = "move"

        setIsFilesDrag(true)
    }
    const handleDragLeave = (event) => {
        console.log('File(s) in drag end');
        // if(event.target.window)
        setIsFilesDrag(false)
    }

    return (
        <>
            <div onDrop={handleDrop} onDragEnter={handleDragEnter} className="relative flex flex-col justify-center items-center">
                <div className={`${(isFilesDrag) ? 'visible' : 'invisible'} flex justify-center items-center w-full h-full rounded-xl bg-black text-white bg-opacity-70 absolute z-50`}>yeah, drop it</div>
                <input ref={(e) => {
                    ref(e)
                    inputFileRef.current = e
                }} {...rest} type="file" className="border-black border-2 hidden" accept=".jpg,.jpeg,.png" onChange={handleChange} multiple />
                <div id="test" className={`${(isFilesDrag) ? 'invisible' : 'visible'} border-dashed border-2 border-black rounded-xl bg-white ${width}`}>
                    {
                        (selectedFile?.length > 0) ?
                            <div className="flex">
                                <Swiper
                                    centeredSlides={true}
                                    centeredSlidesBounds={true}
                                    mousewheel={true}
                                    grabCursor={false} navigation={false} modules={[Pagination, Navigation, Mousewheel]}
                                    spaceBetween={10} slidesPerView={isPhone ? 2 : 4}
                                    pagination={true} className="mySwiper">
                                    {arrayFiles.map((item, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="flex flex-col items-center justify-center pt-10">
                                                    <Image className='' src={URL.createObjectURL(item)} width={250} height={250} alt='template' objectFit="contain" />
                                                    <span className="font-bold text-xs pb-3 text-black">{item.name}</span>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                            </div>
                            :
                            <div className="flex flex-col items-center justify-center pt-10">
                                <Image className='' src={"/static/other/upload.png"} width={50} height={50} alt='template' objectFit="contain" />
                                <span className="font-bold text-xs pb-3 text-black">{"drag and drop files here"}</span>
                            </div>
                    }
                    <div className="flex flex-col justify-center items-center pb-10">
                        <span className="font-bold text-sm pb-3 text-black">{(!selectedFile) ? "OR" : ""}</span>
                        <button onClick={handleClick} className="btn btn-xs rounded-full w-32 bg-black text-white">Browse</button>
                    </div>
                </div>
            </div>
        </>
    )
})

export default MultiUpload

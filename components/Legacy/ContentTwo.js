const ContentTwo = () => {
    return (
        <section className="w-full">
            <div className="text-7xl font-bold font-['consolas'] p-10 pl-20 bg-red-200">
                <span className="bg-white">Why BridesVow</span>
            </div>
            <div className="flex flex-col xl:w-full xl:flex-row justify-evenly items-center p-10 bg-red-200">
                <div className="w-1/2 xl:w-1/3 p-10">
                    <video playsInline={'playsinline'} autoPlay={"autoplay"} muted={"muted"} loop={true} >
                        <source src="https://d2qpgdqai6je3k.cloudfront.net/video/MoHash_Yield_animation_27.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="flex flex-col max-w-2xl xl:w-1/3 justify-center items-start">
                    <div className="text-6xl font-bold py-10">Berkualitas</div>
                    <div className="flex items-center text-5xl font-['consolas']">Kami menyediakan template yang bagusa dan berkualitas</div>
                </div>
            </div>
            <div className="flex flex-col xl:w-full xl:flex-row-reverse justify-evenly items-center p-10 bg-yellow-200">
                <div className="w-1/2 xl:w-1/3 p-10">
                    <video playsInline={'playsinline'} autoPlay={"autoplay"} muted={"muted"} loop={true} >
                        <source src="https://d2qpgdqai6je3k.cloudfront.net/video/mohash_stability_video_27.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="flex flex-col max-w-2xl w-11/12 justify-center items-start">
                    <div className="text-6xl font-bold py-10 ">Harga Bersahabat</div>
                    <div className="flex items-center text-5xl font-['consolas'] ">Kami menyediakan template yang bagusa dan berkualitas</div>
                </div>
            </div>
            <div className="flex flex-col xl:w-full xl:flex-row justify-evenly items-center p-10 pb-32 bg-orange-200">
                <div className="w-1/2 xl:w-1/3 p-10">
                    <video playsInline={'playsinline'} autoPlay={"autoplay"} muted={"muted"} loop={true} >
                        <source src="https://d2qpgdqai6je3k.cloudfront.net/video/mohash_sustainability_video_27.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="flex flex-col max-w-2xl w-11/12 justify-center items-start">
                    <div className="text-6xl font-bold py-10">Respon Cepat</div>
                    <div className="flex items-center text-5xl font-['consolas']">Kami menyediakan template yang bagusa dan berkualitas</div>
                </div>
            </div>
        </section>
    )
}

export default ContentTwo
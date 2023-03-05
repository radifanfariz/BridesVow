const env = process.env.NODE_ENV
const Collections = ({ data }) => {
    return (
        <section className="flex justify-center px-2 font-[poppins] text-black">
            <div className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-6xl bg-white">
                <div className="flex justify-center">
                    <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Koleksi Undangan</span>
                </div>
                <span className="divider"></span>
                {data.map((paketItem) => {
                    return (
                        <div key={paketItem.paket_undangan.nama} className="container py-10 mx-auto">
                            <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-gray-800">
                                {paketItem.paket_undangan.nama}
                            </h1>
                            <p className="mt-4 text-center text-gray-500 dark:text-gray-800">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
                                voluptatibus
                            </p>
                            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 place-content-center">
                                {paketItem.paket_undangan.template_undangan.map(((templateItem) => {
                                    return (
                                        (env == "development") ?
                                            <div key={templateItem.data.nama} className="mockup-phone m-0 grid place-items-center">
                                                <div className="camera"></div>
                                                <div className="display">
                                                    <a
                                                        href={`/preview/${templateItem.data.nama.toLowerCase()}`}
                                                        className="artboard artboard-demo phone-1 overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                                                        style={{
                                                            backgroundImage:
                                                                `url('http://localhost:1338${templateItem.data.url}')`
                                                        }}
                                                    >
                                                        <div className="flex flex-col justify-center items-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                                            <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                                                                {templateItem.data.nama}
                                                            </h2>
                                                            <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                                                                {templateItem.data.nama}
                                                            </p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            :
                                            <div key={templateItem.data.nama} className="mockup-phone m-0 grid place-items-center">
                                                <div className="camera"></div>
                                                <div className="display">
                                                    <a
                                                        href={`/preview/${templateItem.data.nama.toLowerCase()}`}
                                                        className="artboard artboard-demo phone-1 overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                                                        style={{
                                                            backgroundImage:
                                                                `url('${templateItem.data.url}')`
                                                        }}
                                                    >
                                                        <div className="flex flex-col justify-center items-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                                            <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                                                                {templateItem.data.nama}
                                                            </h2>
                                                            <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                                                                {templateItem.data.nama}
                                                            </p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                    )
                                }))}
                            </div>
                            <div className="flex justify-center mt-5">
                                <a className="btn btn-wide hover:bg-gray-500 text-white" href={`/order/?paket=${paketItem.paket_undangan.nama}`}>Order</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Collections
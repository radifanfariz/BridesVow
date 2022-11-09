import SingleUpload from "../../Global/SingleUpload"

const formStructure = [
    {
        title: "Data Pengantin Cewek",
        forms:
            [
                [
                    { text: "Nama Panggilan", },
                    { text: "Nama Lengkap", },
                ],
                [
                    { text: "Nama Ayah" },
                    { text: "Nama Ibu" },
                ],
                [
                    { photo: "Foto Sendiri" },
                ]
            ],

    },
    {
        title: "Data Pengantin Cowok",
        forms:
            [
                [
                    { text: "Nama Panggilan" },
                    { text: "Nama Lengkap" },
                ],
                [
                    { text: "Nama Ayah" },
                    { text: "Nama Ibu" },
                ],
                [
                    { photo: "Foto Sendiri" },
                ],
            ],

    },
    {
        title: "Acara Akad",
        forms:
            [
                [
                    { date: "Waktu" },
                    { text: "Lokasi" },
                ]
            ]
    },
    {
        title: "Acara Resepsi",
        forms:
            [
                [
                    { date: "Waktu" },
                    { text: "Lokasi" },
                ],
                [
                    { text: "Url Lokasi" },
                    { map: "Lokasi" },
                ]
            ]
    },
    {
        title: "Galeri Foto",
        forms:
            [
                [
                    { multiPhoto: "Foto" },
                ]
            ]
    },
    {
        title: "Amplop",
        forms:
            [
                [
                    { text: "Nama Penerima" },
                    { text: "No Rekening" },
                ],
                [
                    {
                        select:
                        {
                            title: "Platform Pembayaran",
                            options: [
                                "BCA",
                                "BNI",
                                "Mandiri",
                                "BRI",
                                "Gopay",
                                "OVO",
                                "DANA",
                                "ShopeePay"
                            ],
                        },

                    },
                ]
            ]
    },
    {
        title: "Hadiah",
        forms:
            [
                [
                    { text: "Nama Penerima" },
                    { text: "No HP" },
                ],
                [
                    { textArea: "Alamat Penerima" },
                ]
            ]
    },
    {
        title: "Pelengkap",
        forms: [
            [
                { text: "Url Music" },
            ],
            [
                { text: "Nama Ayat Suci" },
                { text: "Isi Ayat Suci" },
            ],
            [
                { textArea: "Perjalanan Cinta 1" },
                { textArea: "Perjalanan Cinta 2" },
            ],
            [
                { textArea: "Perjalanan Cinta 3" },
            ]
        ]
    },
]

const InputText = ({ item }) => {
    return (

        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{item}{<span className="text-red-600">*</span>}</span>
            </label>
            <input type="text" placeholder={item} className="input input-bordered flex w-full max-w-xs bg-white text-black" required />
        </div>

    )
}
const InputTextArea = ({ item }) => {
    return (

        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{item}{<span className="text-red-600">*</span>}</span>
            </label>
            <textarea className="textarea textarea-bordered w-full max-w-xs bg-white text-black" placeholder={item}></textarea>
        </div>

    )
}
const InputDate = ({ item }) => {
    return (
        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{item}{<span className="text-red-600">*</span>}</span>
            </label>
            <input type="text" placeholder={item} className="input input-bordered w-full max-w-xs bg-white text-black" required />
        </div>
    )
}
const SelectOptions = ({ items }) => {
    return (

        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{items?.title}{<span className="text-red-600">*</span>}</span>
            </label>
            <select className="select select-bordered w-full max-w-xs bg-white text-black" required>
                <option disabled selected>Pick one</option>
                {items?.options?.length > 0 && items.options?.map(subItem => {
                    return (
                        <option value={subItem}>{subItem}</option>
                    )
                })}
            </select>
        </div>
    )
}
const UploadPhoto = ({ item }) => {
    return (
        <div>
            <label className="label">
                <span className="label-text font-bold text-black">{item}</span>
            </label>
            <SingleUpload width="w-72 md:w-[35rem]" />
        </div>
    )
}
const UploadMultiPhoto = ({ item }) => {
    return (
        <div>
            <label className="label">
                <span className="label-text font-bold text-black">{item}</span>
            </label>
            <SingleUpload width="w-72 md:w-[35rem]" />
        </div>
    )
}

const BridesForm = () => {
    return (
        <>
            <section className="flex justify-center px-2 font-[poppins]">
                <form action="" className="mt-6 mb-0 xl:mb-6 space-y-4 rounded-lg p-8 xl:shadow-2xl w-full max-w-3xl bg-white">
                    <div className="flex justify-center">
                        <span className="font-[Poppins-Extrabold] font-bold text-xl bg-[#ebf7ff] px-5 py-2 rounded-full text-black border-2 border-black">Data Pengantin</span>
                    </div>
                    <span className="divider"></span>
                    {/* <div className="form-control w-full">
                        <div>
                            <label className="label">
                                <span className="label-text font-bold text-black">Order ID{<span className="text-red-600">*</span>}</span>
                            </label>
                            <input type="text" placeholder="Order ID" className="input input-bordered w-full max-w-md bg-white text-black" required />
                        </div>
                    </div> */}
                    {formStructure.length > 0 && formStructure.map(structure => {
                        let i = 1;
                        return (
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-black">{structure.title}</span>
                                </label>
                                <div className="form-control w-full p-5 bg-slate-300 rounded-3xl">
                                    {
                                        structure.forms.map(row => {
                                            return (
                                                <div className="flex flex-col md:flex-row justify-between md:justify-center items-center">
                                                    {row.map(col => {
                                                        for (let key in col) {
                                                            switch (key) {
                                                                case "text":
                                                                    console.log(col[key])
                                                                    return (
                                                                        <InputText item={col[key]} key={col[key]} />
                                                                    )
                                                                case "textArea":
                                                                    console.log(col[key])
                                                                    return (
                                                                        <InputTextArea item={col[key]} key={col[key]} />
                                                                    )
                                                                case "date":
                                                                    return (
                                                                        <InputDate item={col[key]} key={col[key]} />
                                                                    )
                                                                case "select":
                                                                    return (
                                                                        <SelectOptions items={col[key]} key={col[key]} />
                                                                    )
                                                                case "photo":
                                                                    return (
                                                                        <UploadPhoto item={col[key]} key={col[key]} />
                                                                    )
                                                                case "multiPhoto":
                                                                    return (
                                                                        <UploadMultiPhoto item={col[key]} key={col[key]} />
                                                                    )
                                                                default:
                                                                    return (
                                                                        <div className="flex justify-center pt-5">Something Went Wrong !</div>
                                                                    )
                                                            }
                                                        }
                                                    })}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })}
                    <div className="flex justify-center mt-2">
                        <button className="btn sm:btn-wide w-full bg-[#003153] text-white">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default BridesForm
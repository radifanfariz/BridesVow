import MapIframeGen from "./MapIframeGen"
import SingleUpload from "./SingleUpload"

const InputText = ({ label, placeholder, required }) => {
    return (

        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <input type="text" placeholder={placeholder} className="input input-bordered flex w-full max-w-xs bg-white text-black" required={required} />
        </div>

    )
}
const InputTextArea = ({ label, placeholder, required }) => {
    return (

        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <textarea className="textarea textarea-bordered w-full max-w-xs h-32 bg-white text-black" placeholder={placeholder} required={required}></textarea>
        </div>

    )
}
const InputDate = ({ label, placeholder, required }) => {
    return (
        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <input type="text" placeholder={placeholder} className="input input-bordered w-full max-w-xs bg-white text-black" required={required} />
        </div>
    )
}
const SelectOptions = ({ label, options, defaultValue, required }) => {
    return (

        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <select defaultValue={defaultValue.value} className="select select-bordered w-full max-w-xs bg-white text-black" required={required}>
                <option value={defaultValue.value} disabled>{defaultValue.label}</option>
                {options.length > 0 && options?.map(item => {
                    return (
                        <option value={item} key={item}>{item}</option>
                    )
                })}
            </select>
        </div>
    )
}
const UploadPhoto = ({ label, required }) => {
    return (
        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <SingleUpload width="w-72 min-w-68 md:w-[35rem]" required={required} />
        </div>
    )
}
const UploadMultiPhoto = ({ label, required }) => {
    return (
        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            {/* must be multiupload component */}
            <SingleUpload width="w-72 md:w-[35rem]" required={required} />
        </div>
    )
}
const InputMap = ({ label, required }) => {
    return (
        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <MapIframeGen />
        </div>
    )
}


const Form = ({formStructure}) => {
    return (
        <>
            {
                formStructure.length > 0 && formStructure.map((structure) => {
                    return (
                        <div className="form-control w-full" key={structure.key}>
                            <label className="label">
                                <span className="label-text font-bold text-black">{structure.title}</span>
                            </label>
                            <div className="form-control w-full p-5 bg-slate-300 rounded-3xl">
                                {
                                    structure.forms.map((form) => {
                                        return (
                                            <div className="flex flex-col md:flex-row justify-between md:justify-center items-start" key={form.key}>
                                                {form?.formType == "formGroup" && form?.children.map((item) => {
                                                    switch (item.formType) {
                                                        case "text":
                                                            return (
                                                                <InputText label={item.label} placeholder={item.placeholder} required={item.required} key={item.key} />
                                                            )
                                                        case "textArea":
                                                            return (
                                                                <InputTextArea label={item.label} placeholder={item.placeholder} required={item.required} key={item.key} />
                                                            )
                                                        case "date":
                                                            return (
                                                                <InputDate label={item.label} placeholder={item.placeholder} required={item.required} key={item.key} />
                                                            )
                                                        case "select":
                                                            return (
                                                                <SelectOptions label={item.label} options={item.options} defaultValue={item.defaultValue} required={item.required} key={item.key} />
                                                            )
                                                        case "photo":
                                                            return (
                                                                <UploadPhoto label={item.label} required={item.required} key={item.key} />
                                                            )
                                                        case "multiPhoto":
                                                            return (
                                                                <UploadMultiPhoto label={item.label} required={item.required} key={item.key} />
                                                            )
                                                        case "map":
                                                            return (
                                                                <InputMap label={item.label} required={item.required} key={item.key} />
                                                            )
                                                        default:
                                                            return (
                                                                <div className="flex justify-center pt-5" key={`error`}>Something Went Wrong !</div>
                                                            )
                                                    }
                                                })}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Form
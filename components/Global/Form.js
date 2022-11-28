import MapIframeGen from "./MapIframeGen"
import SingleUpload from "./SingleUpload"
import { useFormContext } from 'react-hook-form';
import MultiUpload from "./MultipleUpload";

const InputText = ({ name, label, placeholder, required, register, errors }) => {

    return (

        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <input name={name} {...register(name,{required: required})} type="text" placeholder={placeholder} className="input input-bordered flex w-full max-w-xs bg-white text-black" />
            {errors.name?.type === 'required' && <p role="alert">{label + " is required"}</p>}
        </div>

    )
}
const InputTextArea = ({ name,label, placeholder, required, register, errors }) => {
    return (

        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <textarea name={name} {...register(name,{required: required})} className="textarea textarea-bordered w-full max-w-xs h-32 bg-white text-black" placeholder={placeholder}></textarea>
            {errors.name?.type === 'required' && <p role="alert">{label + " is required"}</p>}
        </div>

    )
}
const InputDate = ({ name, label, placeholder, required, register, errors }) => {
    return (
        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <input {...register(name,{required: required})} type="text" placeholder={placeholder} className="input input-bordered w-full max-w-xs bg-white text-black" />
            {errors.name?.type === 'required' && <p role="alert">{label + " is required"}</p>}
        </div>
    )
}
const SelectOptions = ({ name, label, options, defaultValue, required, register, errors }) => {
    return (

        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <select name={name} {...register(name,{required: required})} defaultValue={defaultValue.value} className="select select-bordered w-full max-w-xs bg-white text-black">
                <option value={defaultValue.value} disabled>{defaultValue.label}</option>
                {options.length > 0 && options?.map(item => {
                    return (
                        <option value={item} key={item}>{item}</option>
                    )
                })}
            </select>
            {errors.name?.type === 'required' && <p role="alert">{label + " is required"}</p>}
        </div>
    )
}
const UploadPhoto = ({ name, label, required, register, errors, options }) => {
    const {ref, ...rest} = register(name)

    return (
        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <SingleUpload options={options} ref={ref} rest={rest} width="w-72 min-w-68 md:w-[35rem]" required={required} />
            {errors.name?.type === 'required' && <p role="alert">{label + " is required"}</p>}
        </div>
    )
}
const UploadMultiPhoto = ({ name, label, required, register, errors, options }) => {
    const {ref, ...rest} = register(name,{required: required})

    return (
        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            {/* must be multiupload component */}
            <MultiUpload options={options} ref={ref} rest={rest} width="w-72 md:w-[35rem]" required={required} />
            {errors.name?.type === 'required' && <p role="alert">{label + " is required"}</p>}
        </div>
    )
}
const InputMap = ({ name, label, required, register, errors }) => {
    return (
        <div className="w-full">
            <label className="label">
                <span className="label-text font-bold text-black">{label}{required ? <span className="text-red-600">*</span> : ""}</span>
            </label>
            <MapIframeGen />
            {errors.name?.type === 'required' && <p role="alert">{label + " is required"}</p>}
        </div>
    )
}


const Form = ({ formStructure }) => {
    
    const { register, formState: { errors }, ...rest } = useFormContext()

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
                                                                <InputText register={register} errors={errors} name={item.name} label={item.label} placeholder={item.placeholder} required={item.required} key={item.key} />
                                                            )
                                                        case "textArea":
                                                            return (
                                                                <InputTextArea register={register} errors={errors} name={item.name} label={item.label} placeholder={item.placeholder} required={item.required} key={item.key} />
                                                            )
                                                        case "date":
                                                            return (
                                                                <InputDate register={register} errors={errors} name={item.name} label={item.label} placeholder={item.placeholder} required={item.required} key={item.key} />
                                                            )
                                                        case "select":
                                                            return (
                                                                <SelectOptions register={register} errors={errors} name={item.name} label={item.label} options={item.options} defaultValue={item.defaultValue} required={item.required} key={item.key} />
                                                            )
                                                        case "photo":
                                                            return (
                                                                <UploadPhoto options={rest} register={register} errors={errors} name={item.name} label={item.label} required={item.required} key={item.key} />
                                                            )
                                                        case "multiPhoto":
                                                            return (
                                                                <UploadMultiPhoto options={rest} register={register} errors={errors} name={item.name} label={item.label} required={item.required} key={item.key} />
                                                            )
                                                        case "map":
                                                            return (
                                                                <InputMap register={register} errors={errors} name={item.name} label={item.label} required={item.required} key={item.key} />
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
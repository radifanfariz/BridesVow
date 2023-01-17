import { FormProvider, useForm } from "react-hook-form"
import Container from "../../components/Global/Container"
import HelpButton from "../../components/Global/HelpButton"
import SingleUpload from "../../components/Global/SingleUpload"

const Generator = () => {

    const methods = useForm()

    return (
        <>
            <FormProvider {...methods}>
                <div className="h-screen">
                    <Container>
                        <div className="relative top-28">
                            <section>
                                <div className="flex flex-col justify-center items-center py-10 font-[poppins] font-bold">
                                    <span className="text-xl">Upload File</span>
                                    <span className="text-xs">upload file spreadsheet nama yang mau diundang (format .xlsx)</span>
                                </div>
                            </section>
                            <section>
                                <SingleUpload name={"generator"} required={true} accept={{
                                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
                                }} />
                                <div className="flex justify-center pt-7">
                                    <button className="btn btn-sm rounded-full w-40 bg-[#003153]">Upload</button>
                                </div>
                            </section>
                        </div>
                        <HelpButton />
                    </Container>
                </div>
            </FormProvider>
        </>
    )
}

export default Generator
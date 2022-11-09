import AuthForm from "../../components/Form/Brides/AuthForm"
import BridesForm from "../../components/Form/Brides/BridesForm"
import Container from "../../components/Global/Container"
import HelpButton from "../../components/Global/HelpButton"

const BridesData = () => {
    return (
        <>
            {/* <main className="h-screen bg-[url('/static/other/background.png')] bg-cover">
                <div className="relative top-52">
                    <AuthForm />
                </div>
            </main> */}
            <main>
                <Container>
                    <BridesForm />
                    <HelpButton/>
                </Container>
            </main>
        </>
    )
}

export default BridesData
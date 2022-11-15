import OrderForm from "../../components/Form/Order/OrderForm"
import OrderView from "../../components/Form/Order/OrderView"
import Container from "../../components/Global/Container"
import HelpButton from "../../components/Global/HelpButton"

const Checkout = () => {
    return (
        <Container>
            <div className="flex flex-col xl:flex-row justify-center">
                <OrderForm />
                <OrderView />
            </div>
            <HelpButton />
        </Container>
    )
}

export default Checkout
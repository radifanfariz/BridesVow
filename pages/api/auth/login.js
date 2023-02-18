import { verify } from "jsonwebtoken";
import { login } from "../../../adapters/auth";
import { withLoginSessionRoute } from "../../../utils/withSession";

export default withLoginSessionRoute(loginSessionRoute);

const jwtSecret = process.env.STRAPI_JWT_SECRET

async function loginSessionRoute(req, res) {
    if (req.method === "POST") {
        const { identifier, password } = req.body
        const loginParams = {
                identifier: identifier,
                password: password,
                provider: "local"
        }
        try {
            const loginData = await login(loginParams)
                .then((res) => res.data.login)
            if (loginData) {
                req.session.data = {
                    jwt_payload: verify(loginData.jwt, jwtSecret),
                    orderId: loginData.user.username,
                    user: loginData.user
                }
                await req.session.save()
                return res.send({ ok: true })
            }
        } catch (error) {
            return res.status(403).send(error)
        }
        return res.status(403).send("")
    }
    return res.status(403).send("")
}
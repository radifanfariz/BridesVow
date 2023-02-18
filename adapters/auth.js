import axios from "axios";
import { getAuthParams, getDataUndanganIdByOrderIdParams, getLoginSessionParams, loginSessionDestroyParams } from "./authQueryParams";

export async function login(data){
    return await axios(getAuthParams(data))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}

/* CHECK DATA UNDANGAN ORDER ID */
export async function getDataUndanganIdByOrderId(orderId){
    return await axios(getDataUndanganIdByOrderIdParams(orderId))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}

/* CREATE SESSION */
export async function createSessionLogin(data){
    return await axios(getLoginSessionParams(data))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}

/* DELETE SESSION */
export async function deleteSessionLogin(){
    return await axios(loginSessionDestroyParams)
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        throw error
    })
}
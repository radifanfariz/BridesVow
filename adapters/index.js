import { dataUndanganParams,getDataUndanganParams, getDataOrderParams, dataTemplateUndanganParams, dataPaketUndanganParams } from "./queryParams";

// const URL = process.env.STRAPIBASEURL

// export async function getDataUndangan(slug=""){

//     /* in adapters/index.js at body part add 'JSON.stringify(json)' change 'data' to 'body' remove 'url' part */

//     const res = await fetch(`${URL}/graphql`,getDataUndanganParams(slug))
//     const data = await res.json()

//     return data
// }
// export async function getDataUndangan2(){


//      /* in adapters/index.js at body part add 'JSON.stringify(json)' change 'data' to 'body' remove 'url' part */
//     const res = await fetch(`${URL}/graphql`,dataUndanganParams)
//     const data = await res.json()

//     return data
// }

import axios from "axios";

/* GET */

export async function getDataUndangan(slug=""){

    return await axios(getDataUndanganParams(slug))
    .then(function (response) {
        const res = response.data; // Response received from the API
        // console.log("test API: ",res)
        return res
    })
    .catch(function (error) {
        console.error(error);
        return error
    });
}
export async function getDataUndanganPreview(){

    return await axios(dataUndanganParams)
    .then(function (response) {
        const res = response.data; // Response received from the API
        // console.log("test API: ",res)
        return res
    })
    .catch(function (error) {
        console.error(error);
        return error
    });
}
export async function getDataTemplateUndangan(){

    return await axios(dataTemplateUndanganParams)
    .then(function (response) {
        const res = response.data; // Response received from the API
        // console.log("test API: ",res)
        return res
    })
    .catch(function (error) {
        console.error(error);
        return error
    });
}
export async function getDataPaketUndangan(){

    return await axios(dataPaketUndanganParams)
    .then(function (response) {
        const res = response.data; // Response received from the API
        // console.log("test API: ",res)
        return res
    })
    .catch(function (error) {
        console.error(error);
        return error
    });
}


/* POST */

export async function createDataOrder(data){
    await axios(getDataOrderParams(data))
    .then((response) => {
        const res = response.data
        return res
    })
    .catch((error) => {
        console.error(error)
        return error
    })
}
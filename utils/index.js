import { dataUndanganParams, dataUndanganParams2, getDataUndanganParams } from "./queryParams";

const URL = process.env.STRAPIBASEURL

export async function getDataUndangan(slug=""){


    const res = await fetch(`${URL}/graphql`,getDataUndanganParams(slug))
    const data = await res.json()

    return data
}
export async function getDataUndangan2(){


    const res = await fetch(`${URL}/graphql`,dataUndanganParams2)
    const data = await res.json()

    return data
}
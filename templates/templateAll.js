import { getWeddingContents } from "../utils/contents";
import { getDefaultContents } from "../utils/defaultContents";
import ChiangMai from "./platinum/chiangmai";

export const templateAll = {
    'p01': (data) => {
        return <ChiangMai contents={getWeddingContents(data)} />
    },
    'p02': (data) => {
        return <ChiangMai contents={getDefaultContents("chiangmai")} />
    },
}

export const templateAllDefault = {
    "chiangmai": (data) => {
        return <ChiangMai contents={data} />
    },
    "pattaya": (data) => {
        return <ChiangMai contents={data} />
    },
    "chonburi": (data) => {
        return <ChiangMai contents={data} />
    },
    "songkhla": (data) => {
        return <ChiangMai contents={data} />
    },
}
import { getWeddingContents } from "../utils/contents";
import Chonburi from "./gold/Chonburi";
import Pattaya from "./gold/Pattaya";
import Songkhla from "./gold/Songkhla";
import ChiangMai from "./platinum/chiangmai";

export const templateAll = {
    'p01': (data) => {
        return <ChiangMai contents={getWeddingContents(data)} />
    },
    'p02': (data) => {
        return <Pattaya contents={getWeddingContents(data)} />
    },
    'p03': (data) => {
        return <Chonburi contents={getWeddingContents(data)} />
    },
    'p04': (data) => {
        return <Songkhla contents={getWeddingContents(data)} />
    },
}

export const templateAllDefault = {
    "chiangmai": (data) => {
        return <ChiangMai contents={data} />
    },
    "pattaya": (data) => {
        return <Pattaya contents={data} />
    },
    "chonburi": (data) => {
        return <Chonburi contents={data} />
    },
    "songkhla": (data) => {
        return <Songkhla contents={data} />
    },
}
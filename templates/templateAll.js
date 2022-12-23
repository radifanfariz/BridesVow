
import { getWeddingContents } from "../adapters/contents";
import Manila from "./diamond/Manila";
import Shanghai from "./diamond/Shanghai";
import Chonburi from "./gold/Chonburi";
import Pattaya from "./gold/Pattaya";
import Songkhla from "./gold/Songkhla";
import ChiangMai from "./platinum/ChiangMai";

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
    'p05': (data) => {
        return <Manila contents={getWeddingContents(data)} />
    },
    'p06': (data) => {
        return <Shanghai contents={getWeddingContents(data)} />
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
    "manila": (data) => {
        return <Manila contents={data} />
    },
    "shanghai": (data) => {
        return <Shanghai contents={data} />
    },
}
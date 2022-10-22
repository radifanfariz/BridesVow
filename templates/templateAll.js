import PreviewFourth from "../pages/preview/fourth";
import ChiangMai from "./platinum/chiangmai";

export const templateAll = {
    'p01': (data) => {
        return <ChiangMai data={data} />
    },
    'p02': (data) => {
        return <PreviewFourth data={data} />
    },
}
import Header from '../../components/landing/Header'
import { useRouter } from 'next/router'
import { async } from '@firebase/util'
import { getDataUndangan } from '../../utils';


export async function getStaticProps() {

    const data = await getDataUndangan()

    return {
        props: data,
        revalidate: 10,
    };
}

export async function getStaticPaths() {

    const data = await getDataUndangan()
    const actualData = data.data.dataUndangans.data

    const paths = actualData.map((item) => ({
        params: {slug: item.attributes.Slug},
    }))

    return {
        paths,
        fallback: 'blocking',
    };
}


const Preview = ({ link,data }) => {

    console.log(data)

    const router = useRouter()
    link = router.query.slug

    if (link === '1') {
        return (
            <Header></Header>
        )
    } else {
        return (
            <h1 className="bg-blue-400">{router.query.slug}</h1>

        )
    }
}

export default Preview


// export default function Preview(){
//     return (
//         <h1>Test</h1>
//     )
// }
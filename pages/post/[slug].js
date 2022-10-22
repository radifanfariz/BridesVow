import Header from '../../components/landing/Header'
import { useRouter } from 'next/router'
import { getDataUndangan, getDataUndangan2 } from '../../utils';
import ChiangMai from '../../templates/platinum/chiangmai';
import PreviewFourth from '../preview/fourth';
import { templateAll } from '../../templates/TemplateAll';


export async function getStaticProps({params}) {

    const { slug } = params

    const data = await getDataUndangan(slug)

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

    // const paths = [{
    //     params: {slug: "pulinpulan"}
    // },
    // ]

    return {
        paths,
        fallback: 'blocking',
    };
}


const Post = ({ data }) => {

    // console.log(`what: ${data.dataUndangans.data[0].attributes.template_undangan.data.attributes.TemplateID}`)

    const templateId = data.dataUndangans.data[0].attributes.template_undangan.data.attributes.TemplateID
    const getTemplate =  templateAll[templateId]
    
    return(
        getTemplate(data.dataUndangans.data[0].attributes)
    )

    // return(
    //     <ChiangMai data={data.dataUndangans.data[0].attributes} />
    // )

    // actualData.map((item) => {
    //     let condition = item.attributes.template_undangan.data.attributes.TemplateID;
    //     switch (condition) {
    //         case 'p01': return <ChiangMai data={item.attributes} />
            
    //         default: return <PreviewFourth/>
    //      }
    // })


    // const router = useRouter()
    // link = router.query.slug

    // if (link === '1') {
    //     return (
    //         <Header></Header>
    //     )
    // } else {
    //     return (
    //         <h1 className="bg-blue-400">{router.query.slug}</h1>

    //     )
    // }
}

export default Post


// export default function Preview(){
//     return (
//         <h1>Test</h1>
//     )
// }
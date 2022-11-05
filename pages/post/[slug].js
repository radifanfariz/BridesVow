
import { getDataUndangan } from '../../adapters';
import { templateAll } from '../../templates/TemplateAll';


export async function getStaticProps({ params }) {


    try {

        const { slug } = params

        const data = await getDataUndangan(slug)

        return {
            props: data,
            revalidate: 10,
        };
    } catch (err) {
        return {
            notFound: true,
            revalidate: 10,
        };
    }
}

export async function getStaticPaths() {

    try {

        const data = await getDataUndangan()
        const actualData = data.data.dataUndangans.data

        const paths = actualData.map((item) => ({
            params: { slug: item.attributes.Slug },
        }))

        return {
            paths,
            fallback: 'blocking',
        };

    } catch (err) {
        return {
            paths: [],
            fallback: 'false',
        };
    }
}


const Post = ({ data }) => {

    const templateId = data.dataUndangans.data[0].attributes.template_undangan.data.attributes.TemplateID
    const getTemplate = templateAll[templateId]

    return (
        getTemplate(data.dataUndangans.data[0].attributes)
    )
}

export default Post
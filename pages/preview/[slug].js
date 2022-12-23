import { getDefaultContents } from '../../adapters/defaultContents';
import { templateAllDefault } from '../../templates/templateAll';


export async function getStaticProps({params}) {

    try {

        const { slug } = params

        const data = JSON.parse(JSON.stringify(getDefaultContents(slug)))
    
        return {
            notFound: false,
            props: {data,slug},
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
        const paths = Object.keys(templateAllDefault).map((item) => ({
            params: {slug: item},
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


const Preview = ({ data, slug }) => {

    const getTemplateDefault = templateAllDefault[slug]

    return(
        getTemplateDefault(data)
    )
}

export default Preview
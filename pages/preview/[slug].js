import Header from '../../components/landing/Header'
import { useRouter } from 'next/router'


const Preview = ({link}) => {
    const router = useRouter()
    link = router.query.slug

    if(link === '1'){
        return(
            <Header></Header>
        )
    }else{
        return(
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
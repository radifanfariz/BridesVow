import Head from 'next/head'
import Image from 'next/image'
import Content from '../components/Landing/Content'
import Header from '../components/Landing/Header'
import Footer from '../components/Landing/Footer'
import ContentTwo from '../components/Landing/ContentTwo'
import ContentThree from '../components/Landing/ContentThree'
import ContentFour from '../components/Landing/ContentFour'

export default function Home() {

  return (
    <div className='w-full h-full xl:w-full' data-theme="cmyk">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Website Undangan Pernikahan" />
        <meta name="keywords" content="BridesVow, Undangan, Menikah" />
        <meta name="author" content="Radifan Fariz" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BridesVow</title>
      </Head>
      <Header></Header>
      <Content></Content>
      <ContentTwo></ContentTwo>
      <ContentThree></ContentThree>
      <ContentFour></ContentFour>
      <Footer></Footer>
    </div>
  )
}

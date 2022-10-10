import Head from 'next/head'
import Image from 'next/image'
import Content from '../components/Content'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContentTwo from '../components/ContentTwo'
import ContentThree from '../components/ContentThree'
import ContentFour from '../components/ContentFour'

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

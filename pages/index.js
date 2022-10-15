import Head from 'next/head'
import Image from 'next/image'
import Content from '../components/landing/Content'
import Header from '../components/landing/Header'
import Footer from '../components/landing/Footer'
import ContentTwo from '../components/landing/ContentTwo'
import ContentThree from '../components/landing/ContentThree'
import ContentFour from '../components/landing/ContentFour'

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

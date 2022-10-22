import Cover from '../../components/wedding/ChiangMai/Cover'
import Head from 'next/head'
import Content from '../../components/wedding/ChiangMai/Content'
import ContentTwo from '../../components/wedding/ChiangMai/ContentTwo'
import ContentThree from '../../components/wedding/ChiangMai/ContentThree'
import Comment from '../../components/wedding/ChiangMai/Comment'
import Countdown from '../../components/wedding/ChiangMai/Countdown'
import ContentFour from '../../components/wedding/ChiangMai/ContentFour'
import ContentFive from '../../components/wedding/ChiangMai/ContentFive'
import ContentSix from '../../components/wedding/ChiangMai/ContentSix'
import ContentSeven from '../../components/wedding/ChiangMai/ContentSeven'
import Footer from '../../components/wedding/ChiangMai/Footer'
import MusicComponent from '../../components/subComponents/MusicComponent'
import { useState } from 'react'
import formatDate from '../../utils/formatDate'

const CoverAndMusic = ({ data, date }) => {

    const coverContents = {
        cewekName: data.Pengantin_Wanita.Nama_Panggilan,
        cowokName: data.Pengantin_Pria.Nama_Panggilan,
        weddingDate: formatDate(date.wedding)
    }

    const musicUrl = data.Pelengkap.URL_Musik

    const [playMusic, setPlayMusic] = useState(false)
    const [isPlayerReady, setPlayerReady] = useState(false)

    return (
        <>
            <Cover isPlayerReady={isPlayerReady} playMusicCallback={setPlayMusic} contents={coverContents}></Cover>
            <MusicComponent playerReadyCallback={setPlayerReady} musicUrl={musicUrl} isMusicPlaying={playMusic} playMusicCallback={setPlayMusic}></MusicComponent>
        </>
    )

}

const MainContent = ({ data, date }) => {

    const countdownContents = {
        cewekName: data.Pengantin_Wanita.Nama_Panggilan,
        cowokName: data.Pengantin_Pria.Nama_Panggilan,
        weddingDate: formatDate(date.wedding),
        src: `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[0].attributes.url}`,
    }

    const firstContents = {
        cewek: {
            name: data.Pengantin_Wanita.Nama_Panggilan,
            fullName: data.Pengantin_Wanita.Nama_Lengkap,
            ayahName: data.Pengantin_Wanita.Nama_Ayah,
            ibuName: data.Pengantin_Wanita.Nama_Ibu,
            src: `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Pengantin_Wanita.Foto_Sendiri.data.attributes.url}`,
        },
        cowok: {
            name: data.Pengantin_Pria.Nama_Panggilan,
            fullName: data.Pengantin_Pria.Nama_Lengkap,
            ayahName: data.Pengantin_Pria.Nama_Ayah,
            ibuName: data.Pengantin_Pria.Nama_Ibu,
            src: `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Pengantin_Pria.Foto_Sendiri.data.attributes.url}`
        }
    }

    const secondContents = {
        ayatName: data.Pelengkap.Nama_AyatSuci,
        ayatContent: data.Pelengkap.Isi_AyatSuci,
    }

    const thirdContents = {
        perjalanan1: data.Pelengkap.Perjalanan_1,
        perjalanan2: data.Pelengkap.Perjalanan_2,
        perjalanan3: data.Pelengkap.Perjalanan_3,

    }

    const fourthContents = {
        akad: {
            date: formatDate(date.akad),
            address: data.Acara_Akad.Lokasi,
            src: `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[3].attributes.url}`
        },
        wedding: {
            date: formatDate(date.wedding),
            address: data.Acara_Resepsi.Lokasi,
            src: `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[2].attributes.url}`
        }
    }


    let gallery = []
    data.Galeri_Foto.Foto.data.map((item) => {
        gallery.push(`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.url}`)
    })

    const fifthContents = {
        locationUrl: data.Acara_Resepsi.URL_Lokasi,
        gallery: gallery,
    }


    let wallet = []
    data.Amplop.map((item) => {
        let platformName = item.Platform_Pembayaran.toLowerCase();
        wallet.push({
            name: item.Nama_Penerima, 
            number: item.No_Rekening, 
            src: `/static/wallet/${platformName}.png`
        })
    })
    const sixthContents = {
        walletContents: wallet,
        giftContents: {
            name: data.Hadiah.Nama_Penerima,
            number: data.Hadiah.No_HP,
            address: data.Hadiah.Alamat_Penerima,

        }
    }

    const seventhContents = {
        cewekName: data.Pengantin_Wanita.Nama_Panggilan,
        cowokName: data.Pengantin_Pria.Nama_Panggilan,
        src: `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[1].attributes.url}`
    }

    return (
        <>
            <Countdown contents={countdownContents} ></Countdown>
            <Content contents={firstContents}></Content>
            <ContentTwo contents={secondContents}></ContentTwo>
            <ContentThree contents={thirdContents}></ContentThree>
            <ContentFour contents={fourthContents}></ContentFour>
            <ContentFive contents={fifthContents}></ContentFive>
            <Comment></Comment>
            <ContentSix contents={sixthContents}></ContentSix>
            <ContentSeven contents={seventhContents}></ContentSeven>
        </>
    )
}

const ChiangMai = ({data}) => {
    const akadDate = new Date(data.Acara_Akad.Waktu)
    const weddingDate = new Date(data.Acara_Resepsi.Waktu)

    const date = {
        akad: akadDate,
        wedding: weddingDate,
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-full max-w-[400px] xl:max-w-[500px] outline outline-offset-[10px] outline-[6px] outline-[#2d2e34]">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="Website Undangan Pernikahan" />
                    <meta name="keywords" content="BridesVow, Undangan, Menikah" />
                    <meta name="author" content="Radifan Fariz" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>BridesVow - Template</title>
                </Head>
                <CoverAndMusic data={data} date={date}></CoverAndMusic>
                <MainContent data={data} date={date}></MainContent>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default ChiangMai
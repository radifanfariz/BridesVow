import Cover from '../../components/wedding/Chonburi/Cover'
import Head from 'next/head'
import Content from '../../components/wedding/Chonburi/Content'
import ContentTwo from '../../components/wedding/Chonburi/ContentTwo'
import ContentThree from '../../components/wedding/Chonburi/ContentThree'
import ContentFive from '../../components/wedding/Chonburi/ContentFive'
import Comment from '../../components/wedding/Chonburi/Comment'
import Countdown from '../../components/wedding/Chonburi/Countdown'
import ContentSeven from '../../components/wedding/Chonburi/ContentSeven'
import Footer from '../../components/wedding/Chonburi/Footer'
import ContentSix from '../../components/wedding/Chonburi/ContentSix'
import { useState } from 'react'
import MusicComponent from '../../components/subComponents/MusicComponent'
import ContentFour from '../../components/wedding/Chonburi/ContentFour'
import formatDate from '../../utils/formatDate'

const akadDate = new Date("September 29, 2022 13:15:00")
const weddingDate = new Date("November 20, 2022 12:15:00")

const CoverAndMusic = () => {

    const coverContents = {
        cewekName: "Pulin",
        cowokName: "Pulan",
        weddingDate: formatDate(weddingDate)
    }

    const musicUrl = "https://soundcloud.com/reminiscience/chopin-nocturne-op-9-no-2?si=8b120b1b0c874fff9169b9850f9aeeec&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"

    const [playMusic, setPlayMusic] = useState(false)
    const [isPlayerReady, setPlayerReady] = useState(false)

    return (
        <>
            <Cover isPlayerReady={isPlayerReady} playMusicCallback={setPlayMusic} contents={coverContents}></Cover>
            <MusicComponent playerReadyCallback={setPlayerReady} musicUrl={musicUrl} isMusicPlaying={playMusic} playMusicCallback={setPlayMusic}></MusicComponent>
        </>
    )

}


const MainContent = () => {

    const countdownContents = {
        cewekName: "Pulin",
        cowokName: "Pulan",
        weddingDate: formatDate(weddingDate),
        src: "/static/1/bg2.jpg",
    }

    const firstContents = {
        cewek: {
            name: "Pulin",
            fullName: "Pulin Sianipar S.Kom",
            ayahName: "Ayah Sianipar",
            ibuName: "Ibu Sihombing",
            src: "/static/1/cewek.jpg"
        },
        cowok: {
            name: "Pulan",
            fullName: "Pulan Sianipar S.Kom",
            ayahName: "Ayah Sianipar",
            ibuName: "Ibu Sihombing",
            src: "/static/1/cowok.jpg"
        }
    }

    const secondContents = {
        ayatName: "Ar-Rum Ayat 21",
        ayatContent: `“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”`
    }

    const thirdContents = {
        perjalanan1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex purus, rhoncus quis nisl non, pellentesque semper augue. Ut tempor justo in est scelerisque congue. In elit lacus, aliquam at nibh et, eleifend aliquet leo. Phasellus non pulvinar est. Phasellus pharetra erat gravida nisl ornare, eget consectetur lorem sagittis. Phasellus scelerisque justo sollicitudin sapien auctor sollicitudin. Vivamus porttitorcommodo.",
        perjalanan2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex purus, rhoncus quis nisl non, pellentesque semper augue. Ut tempor justo in est scelerisque congue. In elit lacus, aliquam at nibh et, eleifend aliquet leo. Phasellus non pulvinar est. Phasellus pharetra erat gravida nisl ornare, eget consectetur lorem sagittis. Phasellus scelerisque justo sollicitudin sapien auctor sollicitudin. Vivamus porttitorcommodo.",
        perjalanan3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex purus, rhoncus quis nisl non, pellentesque semper augue. Ut tempor justo in est scelerisque congue. In elit lacus, aliquam at nibh et, eleifend aliquet leo. Phasellus non pulvinar est. Phasellus pharetra erat gravida nisl ornare, eget consectetur lorem sagittis. Phasellus scelerisque justo sollicitudin sapien auctor sollicitudin. Vivamus porttitorcommodo.",

    }

    const fourthContents = {
        akad: {
            date: formatDate(akadDate),
            address: "Rumah Garox Jl. Samlekom Mamank, Kec. Ayb Guys, Chernobyl",
            src: "/static/1/content2.jpg"
        },
        wedding: {
            date: formatDate(weddingDate),
            address: "Jl. Yang Lurus no.99 (Depan Bakso Oppa)",
            src: "/static/1/content.jpg"
        }
    }

    const fifthContents = {
        locationUrl: "https://www.google.com/maps/place/Jl.+Gatot+Subroto,+Kota+Medan,+Sumatera+Utara/@3.5925103,98.6677857,17z/data=!3m1!4b1!4m5!3m4!1s0x303131dae67c572b:0x586f53a879fcfcfb!8m2!3d3.5925103!4d98.669969",
        gallery: ["/static/1/gallery/1.jpg", "/static/1/gallery/1.jpg", "/static/1/gallery/1.jpg"]
    }

    const sixthContents = {
        walletContents: [
            { name: "Putri Tanjung", number: "08635536262", src: "/static/wallet/bca.png" },
            { name: "Garox Tanjung", number: "08764664774", src: "/static/wallet/mandiri.png" },
        ],
        giftContents: {
            name: "Garox Tanjung",
            number: "086535553533",
            address: `Jl. Sisingamangaraja No. 1
            Kelurahan Pancuran Gerobak, 22524
            Kecamatan Sibolga Kota,
            Kota Sibolga,
            Provinsi Sumatera Utara,
            INDONESIA`

        }
    }

    const seventhContents = {
        cewekName: "Pulin",
        cowokName: "Pulan",
        src: "/static/1/avatar.jpg"
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

const PreviewThird = () => {

    return (
        <div className="flex justify-center">
            <div className="flex flex-col min-h-[740px] w-full max-w-[400px] xl:max-w-[500px] outline outline-offset-[10px] outline-[6px] outline-[#2d2e34]">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="Website Undangan Pernikahan" />
                    <meta name="keywords" content="BridesVow, Undangan, Menikah" />
                    <meta name="author" content="Radifan Fariz" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>BridesVow - Template</title>
                </Head>
                <CoverAndMusic></CoverAndMusic>
                <MainContent></MainContent>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default PreviewThird
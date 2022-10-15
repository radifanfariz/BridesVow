import Cover from '../../components/wedding/Pattaya/Cover'
import Head from 'next/head'
import Content from '../../components/wedding/Pattaya/Content'
import ContentTwo from '../../components/wedding/Pattaya/ContentTwo'
import ContentTwoJoint from '../../components/wedding/Pattaya/ContentTwoJoint'
import ContentThree from '../../components/wedding/Pattaya/ContentThree'
import ContentFive from '../../components/wedding/Pattaya/ContentFive'
import Comment from '../../components/wedding/Pattaya/Comment'
import Countdown from '../../components/wedding/Pattaya/Countdown'
import ContentSeven from '../../components/wedding/Pattaya/ContentSeven'
import Footer from '../../components/wedding/Pattaya/Footer'
import ContentSix from '../../components/wedding/Pattaya/ContentSix'
import { useState } from 'react'
import MusicComponent from '../../components/subComponents/MusicComponent'

const PreviewSecond = () => {

    const walletContents = [
        { name: "Putri Tanjung", number: "08635536262", src: "/static/wallet/bca.png" },
        { name: "Garox Tanjung", number: "08764664774", src: "/static/wallet/mandiri.png" },
    ]

    const giftContents = {
        name: "Garox Tanjung",
        number: "086535553533",
        address: `Jl. Sisingamangaraja No. 1
        Kelurahan Pancuran Gerobak, 22524
        Kecamatan Sibolga Kota,
        Kota Sibolga,
        Provinsi Sumatera Utara,
        INDONESIA`

    }

    const [playMusic, setPlayMusic] = useState(false)
    const [isPlayerReady, setPlayerReady] = useState(false)

    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-full max-w-[400px] xl:w-full xl:max-w-[500px] outline outline-offset-[10px] outline-[6px] outline-[#2d2e34]">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="Website Undangan Pernikahan" />
                    <meta name="keywords" content="BridesVow, Undangan, Menikah" />
                    <meta name="author" content="Radifan Fariz" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>BridesVow - Template</title>
                </Head>
                <Cover isPlayerReady={isPlayerReady} playMusicCallback={setPlayMusic} weddingDate={{ day: "01", month: "05", year: "2022" }}></Cover>
                <MusicComponent playerReadyCallback={setPlayerReady} musicUrl={"https://soundcloud.com/reminiscience/chopin-nocturne-op-9-no-2?si=8b120b1b0c874fff9169b9850f9aeeec&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} isMusicPlaying={playMusic} playMusicCallback={setPlayMusic}></MusicComponent>
                <Countdown expiryTimestamp={new Date(2022, 9, 30, 8, 0, 0, 0)}></Countdown>
                <Content></Content>
                <ContentTwo></ContentTwo>
                <ContentTwoJoint></ContentTwoJoint>
                <ContentThree></ContentThree>
                <ContentFive></ContentFive>
                <Comment></Comment>
                <ContentSix walletContents={walletContents} giftContents={giftContents}></ContentSix>
                <ContentSeven></ContentSeven>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default PreviewSecond
import Cover from '../../components/Chonburi/Cover'
import Head from 'next/head'
import Content from '../../components/Chonburi/Content'
import ContentTwo from '../../components/Chonburi/ContentTwo'
import ContentTwoJoint from '../../components/Chonburi/ContentTwoJoint'
import ContentThree from '../../components/Chonburi/ContentThree'
import ContentFour from '../../components/Chonburi/ContentFour'
import ContentFive from '../../components/Chonburi/ContentFive'
import MapsLocation from '../../components/Chonburi/MapsLocation'
import Comment from '../../components/Chonburi/Comment'
import Countdown from '../../components/Chonburi/Countdown'
import ContentSeven from '../../components/Chonburi/ContentSeven'
import Footer from '../../components/Chonburi/Footer'
import ContentSix from '../../components/Chonburi/ContentSix'
import { useState } from 'react'
import MusicComponent from '../../components/MusicComponent'

const PreviewThird = () => {

    const WalletContents = [
        { name: "Putri Tanjung", number: "08635536262", src: "/static/wallet/bca.png" },
        { name: "Garox Tanjung", number: "08764664774", src: "/static/wallet/mandiri.png" },
    ]

    const GiftContents = {
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
                <Cover playMusicCallback={setPlayMusic} weddingDate={{ day: "01", month: "05", year: "2022" }}></Cover>
                <MusicComponent musicUrl={"https://soundcloud.com/reminiscience/chopin-nocturne-op-9-no-2?si=8b120b1b0c874fff9169b9850f9aeeec&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"} isMusicPlaying={playMusic} playMusicCallback={setPlayMusic}></MusicComponent>
                <Countdown expiryTimestamp={new Date(2022, 9, 30, 8, 0, 0, 0)}></Countdown>
                <Content></Content>
                <ContentTwo></ContentTwo>
                <ContentTwoJoint></ContentTwoJoint>
                <ContentThree></ContentThree>
                {/* <ContentFour></ContentFour> */}
                <ContentFive></ContentFive>
                <Comment></Comment>
                <ContentSix WalletContents={WalletContents} GiftContents={GiftContents}></ContentSix>
                <ContentSeven></ContentSeven>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default PreviewThird
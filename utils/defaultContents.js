import { formatDate } from "./formatDate"


export const getDefaultContents = (slug) => {

    const contents = defaultContents[slug]

    if(!contents){
        const contents = defaultContents["chiangmai"]
        return contents
    }

    return contents
}

const akadDate = new Date("September 29, 2023 13:15:00")
const weddingDate = new Date("November 20, 2023 12:15:00")

const date = {
    akad: akadDate,
    wedding: weddingDate,
}

const defaultContents = {
    chiangmai: {
        cover: {
            cewekName: "Pulin",
            cowokName: "Pulan",
            weddingDate: formatDate(date.wedding)
        },
        musicUrl: "https://soundcloud.com/reminiscience/chopin-nocturne-op-9-no-2?si=8b120b1b0c874fff9169b9850f9aeeec&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",

        countdown: {
            cewekName: "Pulin",
            cowokName: "Pulan",
            weddingDate: formatDate(date.wedding),
            src: "/static/1/bg2.jpg",
        },

        intro: {
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
        },

        verse: {
            ayatName: "Ar-Rum Ayat 21",
            ayatContent: `“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”`
        },

        storyboards: {
            perjalanan1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex purus, rhoncus quis nisl non, pellentesque semper augue. Ut tempor justo in est scelerisque congue. In elit lacus, aliquam at nibh et, eleifend aliquet leo. Phasellus non pulvinar est. Phasellus pharetra erat gravida nisl ornare, eget consectetur lorem sagittis. Phasellus scelerisque justo sollicitudin sapien auctor sollicitudin. Vivamus porttitorcommodo.",
            perjalanan2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex purus, rhoncus quis nisl non, pellentesque semper augue. Ut tempor justo in est scelerisque congue. In elit lacus, aliquam at nibh et, eleifend aliquet leo. Phasellus non pulvinar est. Phasellus pharetra erat gravida nisl ornare, eget consectetur lorem sagittis. Phasellus scelerisque justo sollicitudin sapien auctor sollicitudin. Vivamus porttitorcommodo.",
            perjalanan3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex purus, rhoncus quis nisl non, pellentesque semper augue. Ut tempor justo in est scelerisque congue. In elit lacus, aliquam at nibh et, eleifend aliquet leo. Phasellus non pulvinar est. Phasellus pharetra erat gravida nisl ornare, eget consectetur lorem sagittis. Phasellus scelerisque justo sollicitudin sapien auctor sollicitudin. Vivamus porttitorcommodo.",

        },

        agenda: {
            akad: {
                date: formatDate(date.akad),
                address: "Rumah Garox Jl. Samlekom Mamank, Kec. Ayb Guys, Chernobyl",
                src: "/static/1/content2.jpg"
            },
            wedding: {
                date: formatDate(date.wedding),
                address: "Jl. Yang Lurus no.99 (Depan Bakso Oppa)",
                src: "/static/1/content.jpg"
            }
        },

        album: {
            locationUrl: "https://www.google.com/maps/place/Jl.+Gatot+Subroto,+Kota+Medan,+Sumatera+Utara/@3.5925103,98.6677857,17z/data=!3m1!4b1!4m5!3m4!1s0x303131dae67c572b:0x586f53a879fcfcfb!8m2!3d3.5925103!4d98.669969",
            gallery: ["/static/1/gallery/1.jpg", "/static/1/gallery/1.jpg", "/static/1/gallery/1.jpg"]
        },

        comment: {
            dbName:"user1",
        },

        giving: {
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
        },

        outro: {
            cewekName: "Pulin",
            cowokName: "Pulan",
            src: "/static/1/avatar.jpg"
        }
    },
}
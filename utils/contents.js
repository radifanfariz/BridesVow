import { formatDate } from "./formatDate"


export const getWeddingContents = (data) => {

    const akadDate = new Date(data.Acara_Akad.Waktu)
    const weddingDate = new Date(data.Acara_Resepsi.Waktu)

    const date = {
        akad: akadDate,
        wedding: weddingDate,
    }

    let gallery = []
    data.Galeri_Foto.Foto.data.map((item) => {
        gallery.push(`${process.env.NEXT_PUBLIC_IMAGE_URL}${item.attributes.url}`)
    })

    let wallet = []
    data.Amplop.map((item) => {
        let platformName = item.Platform_Pembayaran.toLowerCase();
        wallet.push({
            name: item.Nama_Penerima, 
            number: item.No_Rekening, 
            src: `/static/wallet/${platformName}.png`
        })
    })

    let countdownSrc = (data.Foto_Tambahan) ? (((data.Foto_Tambahan.Foto_Countdown.data)) ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Foto_Tambahan.Foto_Countdown.data.attributes.url}` : `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[0].attributes.url}`) : `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[0].attributes.url}`
    let akadSrc = (data.Foto_Tambahan) ? (((data.Foto_Tambahan.Foto_Akad.data)) ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Foto_Tambahan.Foto_Akad.data.attributes.url}` : `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[3].attributes.url}`) : `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[3].attributes.url}`
    let weddingSrc = (data.Foto_Tambahan) ? (((data.Foto_Tambahan.Foto_Resepsi.data)) ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Foto_Tambahan.Foto_Resepsi.data.attributes.url}` : `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[2].attributes.url}`) : `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[2].attributes.url}`
    let outroSrc = (data.Foto_Tambahan) ? (((data.Foto_Tambahan.Foto_Outro.data)) ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Foto_Tambahan.Foto_Outro.data.attributes.url}` : `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[4].attributes.url}`) : `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.Galeri_Foto.Foto.data[4].attributes.url}`

    const contents = {
        cover: {
            cewekName: data.Pengantin_Wanita.Nama_Panggilan,
            cowokName: data.Pengantin_Pria.Nama_Panggilan,
            weddingDate: formatDate(date.wedding)
        },
    
        musicUrl : data.Pelengkap.URL_Musik,

        countdown : {
            cewekName: data.Pengantin_Wanita.Nama_Panggilan,
            cowokName: data.Pengantin_Pria.Nama_Panggilan,
            weddingDate: formatDate(date.wedding),
            locationUrl: data.Acara_Resepsi.URL_Lokasi,
            src: countdownSrc,
        },
    
        intro : {
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
        },
    
        verse : {
            ayatName: data.Pelengkap.Nama_AyatSuci,
            ayatContent: data.Pelengkap.Isi_AyatSuci,
        },
    
        storyboards : {
            perjalanan1: data.Pelengkap.Perjalanan_1,
            perjalanan2: data.Pelengkap.Perjalanan_2,
            perjalanan3: data.Pelengkap.Perjalanan_3,
    
        },
    
        agenda : {
            akad: {
                date: formatDate(date.akad),
                address: data.Acara_Akad.Lokasi,
                src: akadSrc
            },
            wedding: {
                date: formatDate(date.wedding),
                address: data.Acara_Resepsi.Lokasi,
                src: weddingSrc
            }
        },
    
        album : {
            maps:{
                locationUrl: data.Acara_Resepsi.URL_Lokasi,
                iframe: data.Acara_Resepsi.Iframe_Lokasi,
            },
            gallery: gallery,
        },

        comment:{
            dbName: data.Slug,
        },
    
        giving : {
            walletContents: wallet,
            giftContents: {
                name: data.Hadiah.Nama_Penerima,
                number: data.Hadiah.No_HP,
                address: data.Hadiah.Alamat_Penerima,
    
            }
        },

        rsvp:{
            dbName: data.Slug,
        },
    
        outro : {
            cewekName: data.Pengantin_Wanita.Nama_Panggilan,
            cowokName: data.Pengantin_Pria.Nama_Panggilan,
            src: outroSrc
        }
    }

    return(
        contents
    )
}
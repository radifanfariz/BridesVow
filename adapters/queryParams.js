const URL = process.env.NEXT_PUBLIC_STRAPI_URL
const NEXT_URL = process.env.NEXT_PUBLIC_BASE_URL
const APIKEY = process.env.STRAPI_API_KEY

export const getDataUndanganParams = (slug, url, apikey = "b6255b6a277f1d924a0c8f447c9598bf844b8cdea5494761254d896d381efbae94510657cee77518f4655673f4fd2c1e80433d0be0ffd550e4929f0c7fa30874dfcea70b0a9365258a723651f913be5c9eac9c4c8a44e5bff443a21de0b682c7c1fb91761fe7a297430d3e41a24b1063302037b4f8a6bb8b18a88748d14e3fda") => {

  return {

    method: "post",
    url: `${url}/graphql`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${apikey}`
    },
    data: {
      query: `
     {
            dataUndangans (filters: {
              Slug:{
                contains: "${slug}"
              }
            })  {
              data {
                id
                attributes {
                  OrderID
                  Slug
                  template_undangan{
                    data{
                      attributes{
                        Nama
                        TemplateID
                      }
                    }
                  }
                  Pengantin_Wanita {
                    Nama_Panggilan
                    Nama_Lengkap
                    Nama_Ayah
                    Nama_Ibu
                    Foto_Sendiri {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  Pengantin_Pria {
                    Nama_Panggilan
                    Nama_Lengkap
                    Nama_Ayah
                    Nama_Ibu
                    Foto_Sendiri {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                  }
                  Acara_Akad{
                              Waktu
                    Lokasi
                  }
                  Acara_Resepsi{
                    Waktu
                    Lokasi
                    URL_Lokasi
                    Iframe_Lokasi
                  }
                  Galeri_Foto{
                    Foto{
                      data{
                        attributes{
                          url
                        }
                      }
                    }
                  }
                  Amplop{
                    Nama_Penerima
                    No_Rekening
                    Platform_Pembayaran
                  }
                  Hadiah{
                    Nama_Penerima
                    No_HP
                    Alamat_Penerima
                  }
                  Pelengkap{
                    Musik
                    URL_Musik
                    Nama_AyatSuci
                    Isi_AyatSuci
                    Perjalanan_1
                    Perjalanan_2
                    Perjalanan_3 
                  }
                  Foto_Tambahan{
                    Foto_Countdown{
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                    Foto_Akad{
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                    Foto_Resepsi{
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                    Foto_Outro{
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          

        `
    }
  }
}


export const dataUndanganParams = {
  method: "post",
  url: `${URL}/graphql`,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `bearer ${APIKEY}`
  },
  data: {
    query: `
     {
           dataUndangans {
             data {
               id
               attributes {
                 UndanganID
                 Slug
                 template_undangan{
                   data{
                     attributes{
                       Nama
                       TemplateID
                     }
                   }
                 }
                 Pengantin_Wanita {
                   Nama_Panggilan
                   Nama_Lengkap
                   Nama_Ayah
                   Nama_Ibu
                   Foto_Sendiri {
                     data {
                       id
                       attributes {
                         url
                       }
                     }
                   }
                 }
                 Pengantin_Pria {
                   Nama_Panggilan
                   Nama_Lengkap
                   Nama_Ayah
                   Nama_Ibu
                   Foto_Sendiri {
                     data {
                       id
                       attributes {
                         url
                       }
                     }
                   }
                 }
                 Acara_Akad{
                             Waktu
                   Lokasi
                 }
                 Acara_Resepsi{
                   Waktu
                   Lokasi
                   URL_Lokasi
                 }
                 Galeri_Foto{
                   Foto{
                     data{
                       attributes{
                         url
                       }
                     }
                   }
                 }
                 Amplop{
                   Nama_Penerima
                   No_Rekening
                   Platform_Pembayaran
                 }
                 Hadiah{
                   Nama_Penerima
                   No_HP
                   Alamat_Penerima
                 }
                 Pelengkap{
                   Musik
                   URL_Musik
                   Nama_AyatSuci
                   Isi_AyatSuci
                   Perjalanan_1
                   Perjalanan_2
                   Perjalanan_3 
                 }
                 Foto_Tambahan{
                  Foto_Countdown{
                    data {
                      id
                      attributes {
                        url
                      }
                    }
                  }
                  Foto_Akad{
                    data {
                      id
                      attributes {
                        url
                      }
                    }
                  }
                  Foto_Resepsi{
                    data {
                      id
                      attributes {
                        url
                      }
                    }
                  }
                }
               }
             }
           }
         }
         

       `
  }
}

export const dataTemplateUndanganParams = {
  method: "post",
  url: `${URL}/graphql`,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `bearer ${APIKEY}`
  },
  data: {
    query: `
    {
      templateUndangans {
        data {
          id
          attributes {
            Nama
            TemplateID
            Slug
            IsCreatorChoice
            paket_undangan {
              data {
                attributes {
                  Nama
                  Harga
                }
              }
            }
            Gambar {
              data {
                id
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
            

       `
  }
}

export const dataPaketUndanganParams = {
  method: "post",
  url: `${URL}/graphql`,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `bearer ${APIKEY}`
  },
  data: {
    query: `
    {
      paketUndangans{
        data{
          id
          attributes{
            Nama
            Fitur
            Harga
            template_undangans{
              data{
                id
                attributes{
                  TemplateID
                  Nama
                  Slug
                  IsCreatorChoice
                  Gambar{
                    data{
                      attributes{
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
            

       `
  }
}

export const getDataOrderParams = (orderId, url, apikey = "b6255b6a277f1d924a0c8f447c9598bf844b8cdea5494761254d896d381efbae94510657cee77518f4655673f4fd2c1e80433d0be0ffd550e4929f0c7fa30874dfcea70b0a9365258a723651f913be5c9eac9c4c8a44e5bff443a21de0b682c7c1fb91761fe7a297430d3e41a24b1063302037b4f8a6bb8b18a88748d14e3fda") => {

  return {

    method: "post",
    url: `${url}/graphql`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${apikey}`
    },
    data: {
      query: `
      query GetDataPemesanan($orderId: String!) {
        pemesanans(filters: { OrderID: { contains: $orderId } }) {
          data {
            id
            attributes {
              Nama
              No_HP
              Email
              Alamat
              Kota
              Metode_Pembayaran
              Total_Bayar
              IsPaid
              Status
              template_undangan {
                data {
                  attributes {
                    Nama
                    Gambar {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                    paket_undangan {
                      data {
                        attributes {
                          Nama
                        }
                      }
                    }
                    TemplateID
                  }
                }
              }
            }
          }
        }
      }
            

        `,
        variables: {
          orderId: orderId
        }
    }
  }
}

export const dataListPaymentParams = {

  method: "post",
  url: `${NEXT_URL}/api/payment/list`,
  headers: {
    "Content-Type": "application/json",
  },
  data: {}
}

export const getCreateDataOrderParams = (data, url, apikey = "b6255b6a277f1d924a0c8f447c9598bf844b8cdea5494761254d896d381efbae94510657cee77518f4655673f4fd2c1e80433d0be0ffd550e4929f0c7fa30874dfcea70b0a9365258a723651f913be5c9eac9c4c8a44e5bff443a21de0b682c7c1fb91761fe7a297430d3e41a24b1063302037b4f8a6bb8b18a88748d14e3fda") => {

  return {

    method: "post",
    url: `${url}/graphql`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${apikey}`
    },
    data: {
      query: `
      mutation CreatePemesanan($data: PemesananInput!){
        createPemesanan(
          data: $data
        ) {
          data {
            id
            attributes {
              Status
              IsPaid
              OrderID
              Nama
              No_HP
              Email
              Alamat
              Kota
              template_undangan {
                data {
                  attributes {
                    Nama
                    Gambar {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                    paket_undangan {
                      data {
                        attributes {
                          Nama
                        }
                      }
                    }
                    TemplateID
                  }
                }
              }
            }
          }
        }
      }
      
      
        `,
      variables: {
        data: data
      }
    }
  }
}
export const getDataOrderWithRecaptchaParams = ({ dataOrderPost, captchaValue }, url, apikey = "b6255b6a277f1d924a0c8f447c9598bf844b8cdea5494761254d896d381efbae94510657cee77518f4655673f4fd2c1e80433d0be0ffd550e4929f0c7fa30874dfcea70b0a9365258a723651f913be5c9eac9c4c8a44e5bff443a21de0b682c7c1fb91761fe7a297430d3e41a24b1063302037b4f8a6bb8b18a88748d14e3fda") => {

  console.log("ada apa " + captchaValue)
  return {

    method: "post",
    url: `${url}/graphql`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${apikey}`
    },
    data: {
      query: `
      mutation CreatePemesananByRecaptcha($data: PemesananInput!, $captchaValue: String!) {
        createPemesananByRecaptcha(data: $data,captchaValue: $captchaValue) {
          data {
            id
            attributes {
              Status
              IsPaid
              OrderID
              Nama
              No_HP
              Email
              Alamat
              Kota
              Total_Bayar
              Metode_Pembayaran
              Channel_Pembayaran
              template_undangan {
                data {
                  attributes {
                    Nama
                    Gambar {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                    paket_undangan {
                      data {
                        attributes {
                          Nama
                        }
                      }
                    }
                    TemplateID
                  }
                }
              }
            }
          }
        }
      }
      
      
      
        `,
      variables: {
        data: dataOrderPost,
        captchaValue: captchaValue
      }
    }
  }
}

export const getUpdateDataOrderParams = (id, data, url, apikey = "b6255b6a277f1d924a0c8f447c9598bf844b8cdea5494761254d896d381efbae94510657cee77518f4655673f4fd2c1e80433d0be0ffd550e4929f0c7fa30874dfcea70b0a9365258a723651f913be5c9eac9c4c8a44e5bff443a21de0b682c7c1fb91761fe7a297430d3e41a24b1063302037b4f8a6bb8b18a88748d14e3fda") => {

  return {

    method: "post",
    url: `${url}/graphql`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${apikey}`
    },
    data: {
      query: `
      mutation UpdatePemesanan($id: ID!, $data: PemesananInput!) {
        updatePemesanan(id: $id, data: $data) {
          data {
            id
            attributes {
              Status
              IsPaid
              OrderID
              Nama
              No_HP
              Email
              Alamat
              Kota
              template_undangan {
                data {
                  attributes {
                    Nama
                    Gambar {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                    paket_undangan {
                      data {
                        attributes {
                          Nama
                        }
                      }
                    }
                    TemplateID
                  }
                }
              }
            }
          }
        }
      }
      
      
      
        `,
      variables: {
        id: id,
        data: data
      }
    }
  }
}
export const getUpdateDataOrderByOrderIdParams = (orderId, data, url, apikey = "b6255b6a277f1d924a0c8f447c9598bf844b8cdea5494761254d896d381efbae94510657cee77518f4655673f4fd2c1e80433d0be0ffd550e4929f0c7fa30874dfcea70b0a9365258a723651f913be5c9eac9c4c8a44e5bff443a21de0b682c7c1fb91761fe7a297430d3e41a24b1063302037b4f8a6bb8b18a88748d14e3fda") => {

  return {

    method: "post",
    url: `${url}/graphql`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${apikey}`
    },
    data: {
      query: `
      mutation UpdatePemesananByOrderId($orderId: String!, $data: PemesananInput!) {
        updatePemesananByOrderId(orderId: $orderId, data: $data) {
          data {
            id
            attributes {
              Status
              IsPaid
              OrderID
              Nama
              No_HP
              Email
              Alamat
              Kota
              template_undangan {
                data {
                  attributes {
                    Nama
                    Gambar {
                      data {
                        id
                        attributes {
                          url
                        }
                      }
                    }
                    paket_undangan {
                      data {
                        attributes {
                          Nama
                        }
                      }
                    }
                    TemplateID
                  }
                }
              }
            }
          }
        }
      }
      
      
      
      
        `,
      variables: {
        orderId: orderId,
        data: data
      }
    }
  }
}

export const getForgotPasswordSessionParams = (data, url) => {

  return {

    method: "post",
    url: `${url}/api/forgotPasswordSession`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email: data.email,
      isOtpPage: data.isOtpPage
    }

  }
}

export const forgotPasswordSessionDestroyParams = {

  method: "post",
  url: `/api/forgotPasswordSessionDestroy`,
  headers: {
    "Content-Type": "application/json",
  }
}

export const getDataConfirmationParams = (bodyFormData, url, apikey = "b6255b6a277f1d924a0c8f447c9598bf844b8cdea5494761254d896d381efbae94510657cee77518f4655673f4fd2c1e80433d0be0ffd550e4929f0c7fa30874dfcea70b0a9365258a723651f913be5c9eac9c4c8a44e5bff443a21de0b682c7c1fb91761fe7a297430d3e41a24b1063302037b4f8a6bb8b18a88748d14e3fda") => {

  return {

    method: "post",
    url: `${url}/api/konfirmasis`,
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": `bearer ${apikey}`
    },
    data: bodyFormData

  }
}

export const getUpdateDataUndanganParams = (data, url, apikey = "b6255b6a277f1d924a0c8f447c9598bf844b8cdea5494761254d896d381efbae94510657cee77518f4655673f4fd2c1e80433d0be0ffd550e4929f0c7fa30874dfcea70b0a9365258a723651f913be5c9eac9c4c8a44e5bff443a21de0b682c7c1fb91761fe7a297430d3e41a24b1063302037b4f8a6bb8b18a88748d14e3fda") => {

  return {

    method: "put",
    url: `${url}/api/data-undangans/${data.id}`,
    headers: {
      "Content-Type": "multipart/form-data",
      "Authorization": `bearer ${apikey}`
    },
    data: data.bodyFormData

  }
}

export const getCreateDataUndanganParams = (data, url, apikey = "b6255b6a277f1d924a0c8f447c9598bf844b8cdea5494761254d896d381efbae94510657cee77518f4655673f4fd2c1e80433d0be0ffd550e4929f0c7fa30874dfcea70b0a9365258a723651f913be5c9eac9c4c8a44e5bff443a21de0b682c7c1fb91761fe7a297430d3e41a24b1063302037b4f8a6bb8b18a88748d14e3fda") => {

  return {

    method: "post",
    url: `${url}/api/data-undangans`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `bearer ${apikey}`
    },
    data: data

  }
}

export const getDataUndanganSessionParams = (data, url) => {

  return {

    method: "post",
    url: `${url}/api/dataUndanganSession`,
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      id: data.id,
      slug: data.slug,
      isDataUndanganFormPage: data.isDataUndanganFormPage
    }

  }
}

export const dataUndanganSessionDestroyParams = {

  method: "post",
  url: `/api/dataUndanganSessionDestroy`,
  headers: {
    "Content-Type": "application/json",
  }
}

export const getDataPaymentParams = (data, url) => {

  return {

    method: "post",
    url: `${url}/api/payment`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data

  }
}
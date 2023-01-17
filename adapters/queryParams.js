const URL = process.env.STRAPIBASEURL

export const getDataUndanganParams = (slug = "") => {
  return {

    method: "post",
    url: `${URL}/graphql`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "bearer a0b561b25959c26a101115a5875ce460ab4bd3814c21f70972c7a5e0d21f8e5a7647ef2569a900e0d9e2903dd6468e1514726f9d0bca3729a6890cb262aa0e16b218431202c87531aebd0b075c297f770c8dfdc11a7ec23335a93f87be86fd72f0ee4b77b27e394994e9b5a07d6e3f5384a28c543067786401b70c1a16a27286"
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
    "Authorization": "bearer a0b561b25959c26a101115a5875ce460ab4bd3814c21f70972c7a5e0d21f8e5a7647ef2569a900e0d9e2903dd6468e1514726f9d0bca3729a6890cb262aa0e16b218431202c87531aebd0b075c297f770c8dfdc11a7ec23335a93f87be86fd72f0ee4b77b27e394994e9b5a07d6e3f5384a28c543067786401b70c1a16a27286"
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
    "Authorization": "bearer a0b561b25959c26a101115a5875ce460ab4bd3814c21f70972c7a5e0d21f8e5a7647ef2569a900e0d9e2903dd6468e1514726f9d0bca3729a6890cb262aa0e16b218431202c87531aebd0b075c297f770c8dfdc11a7ec23335a93f87be86fd72f0ee4b77b27e394994e9b5a07d6e3f5384a28c543067786401b70c1a16a27286"
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
    "Authorization": "bearer a0b561b25959c26a101115a5875ce460ab4bd3814c21f70972c7a5e0d21f8e5a7647ef2569a900e0d9e2903dd6468e1514726f9d0bca3729a6890cb262aa0e16b218431202c87531aebd0b075c297f770c8dfdc11a7ec23335a93f87be86fd72f0ee4b77b27e394994e9b5a07d6e3f5384a28c543067786401b70c1a16a27286"
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

export const getDataOrderParams = (data) => {
  return {

    method: "post",
    url: `/graphql`,
    baseURL: `http://192.168.100.23:1338`,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "bearer a0b561b25959c26a101115a5875ce460ab4bd3814c21f70972c7a5e0d21f8e5a7647ef2569a900e0d9e2903dd6468e1514726f9d0bca3729a6890cb262aa0e16b218431202c87531aebd0b075c297f770c8dfdc11a7ec23335a93f87be86fd72f0ee4b77b27e394994e9b5a07d6e3f5384a28c543067786401b70c1a16a27286"
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
export const getDataUndanganParams = (slug = "") => {
  return {

    method: "post",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
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
    })
  }
}


export const dataUndanganParams = {
  method: "post",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
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
  })
}
export const dataPengantinForms = [
    {
        key: "dataCewek",
        title: "Data Pengantin Cewek",
        forms:
            [
                {
                    key: "formGroup_1",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"namaPanggilanCewek",
                            formType: "text",
                            label: "Nama Panggilan",
                            placeholder: "Nama Panggilan",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"namaLengkapCewek",
                            formType: "text",
                            label: "Nama Lengkap",
                            placeholder: "Nama Lengkap",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_2",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"namaAyahCewek",
                            formType: "text",
                            label: "Nama Ayah",
                            placeholder: "Nama Ayah",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"namaIbuCewek",
                            formType: "text",
                            label: "Nama Ibu",
                            placeholder: "Nama Ibu",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_3",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"fotoSendiriCewek",
                            formType: "photo",
                            label: "Foto Sendiri",
                            required: false
                        },
                    ]
                },
            ]
    },
    {
        key: "dataCowok",
        title: "Data Pengantin Cowok",
        forms:
            [
                {
                    key: "formGroup_1",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"namaPanggilanCowok",
                            formType: "text",
                            label: "Nama Panggilan",
                            placeholder: "Nama Panggilan",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"namaLengkapCowok",
                            formType: "text",
                            label: "Nama Lengkap",
                            placeholder: "Nama Lengkap",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_2",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"namaAyahCowok",
                            formType: "text",
                            label: "Nama Ayah",
                            placeholder: "Nama Ayah",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"namaIbuCowok",
                            formType: "text",
                            label: "Nama Ibu",
                            placeholder: "Nama Ibu",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_3",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"fotoSendiriCowok",
                            formType: "photo",
                            label: "Foto Sendiri",
                            required: false
                        },
                    ]
                },
            ]
    },
    {
        key: "dataAkad",
        title: "Data Acara Akad",
        forms:
            [
                {
                    key: "formGroup_1",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"waktuAkad",
                            formType: "date",
                            label: "Waktu",
                            placeholder: "Waktu",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"lokasiAkad",
                            formType: "textArea",
                            label: "Lokasi",
                            placeholder: "Lokasi",
                            required: true
                        },
                    ]
                },
            ]
    },
    {
        key: "dataResepsi",
        title: "Data Acara Resepsi",
        forms:
            [
                {
                    key: "formGroup_1",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"waktuResepsi",
                            formType: "date",
                            label: "Waktu",
                            placeholder: "Waktu",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"lokasiResepsi",
                            formType: "textArea",
                            label: "Lokasi",
                            placeholder: "Lokasi",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_2",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"urlLokasi",
                            formType: "textArea",
                            label: "Url Lokasi",
                            placeholder: "Url Lokasi",
                            required: false
                        },
                        {
                            key: "input_2",
                            name:"mapLokasi",
                            formType: "map",
                            label: "Map",
                            placeholder: "Map",
                            required:false
                        },
                    ]
                },
            ]
    },
    {
        key: "dataGaleri",
        title: "Data Galeri Foto",
        forms:
            [
                {
                    key: "formGroup_1",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"fotoGaleri",
                            formType: "multiPhoto",
                            label: "Foto",
                            placeholder: "Foto",
                            required: false
                        },
                    ]
                },
            ]
    },
    {
        key: "dataAmplop",
        title: "Data Amplop",
        forms:
            [
                {
                    key: "formGroup_1",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"namaPenerimaAmplop",
                            formType: "text",
                            label: "Nama Penerima",
                            placeholder: "Nama Penerima",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"noRekeningAmplop",
                            formType: "text",
                            label: "No Rekening",
                            placeholder: "No Rekening",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_2",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"platformPenerimaAmplop",
                            formType: "select",
                            label: "Platform Penerima",
                            defaultValue: {
                                label:"Pick One",
                                value:"default"
                            },
                            options: [
                                "BCA",
                                "BNI",
                                "Mandiri",
                                "BRI",
                                "Gopay",
                                "OVO",
                                "DANA",
                                "ShopeePay"
                            ],
                            required: false
                        },
                    ]
                },
            ]
    },
    {
        key: "dataHadiah",
        title: "Data Hadiah",
        forms:
            [
                {
                    key: "formGroup_1",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"namaPenerimaHadiah",
                            formType: "text",
                            label: "Nama Penerima",
                            placeholder: "Nama Penerima",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"noHpHadiah",
                            formType: "text",
                            label: "No HP",
                            placeholder: "No HP",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_2",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"alamatHadiah",
                            formType: "textArea",
                            label: "Alamat Penerima",
                            placeholder: "Alamat Penerima",
                            required: true
                        },
                    ]
                },
            ]
    },
    {
        key: "dataPelengkap",
        title: "Data Pelengkap",
        forms:
            [
                {
                    key: "formGroup_1",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"urlMusic",
                            formType: "text",
                            label: "Url Music (Soundcloud)",
                            placeholder: "Url Music",
                            required: false
                        },
                    ]
                },
                {
                    key: "formGroup_2",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"namaAyatSuci",
                            formType: "text",
                            label: "Nama Ayat Suci",
                            placeholder: "Nama Ayat Suci",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"isiAyatSuci",
                            formType: "textArea",
                            label: "Isi Ayat Suci",
                            placeholder: "Isi Ayat Suci",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_3",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"perjalanan1",
                            formType: "textArea",
                            label: "Perjalanan Cinta 1",
                            placeholder: "Perjalanan Cinta 1",
                            required: true
                        },
                        {
                            key: "input_2",
                            name:"perjalanan2",
                            formType: "textArea",
                            label: "Perjalanan Cinta 2",
                            placeholder: "Perjalanan Cinta 2",
                            required: true
                        },
                    ]
                },
                {
                    key: "formGroup_4",
                    formType: "formGroup",
                    children: [
                        {
                            key: "input_1",
                            name:"perjalanan3",
                            formType: "textArea",
                            label: "Perjalanan Cinta 3",
                            placeholder: "Perjalanan Cinta 3",
                            required: true
                        },
                    ]
                },
            ]
    },
]
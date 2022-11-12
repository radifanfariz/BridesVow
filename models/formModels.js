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
                            formType: "text",
                            label: "Nama Panggilan",
                            placeholder: "Nama Panggilan",
                            required: true
                        },
                        {
                            key: "input_2",
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
                            formType: "text",
                            label: "Nama Ayah",
                            placeholder: "Nama Ayah",
                            required: true
                        },
                        {
                            key: "input_2",
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
                            formType: "photo",
                            label: "Foto Sendiri",
                            required: true
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
                            formType: "text",
                            label: "Nama Panggilan",
                            placeholder: "Nama Panggilan",
                            required: true
                        },
                        {
                            key: "input_2",
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
                            formType: "text",
                            label: "Nama Ayah",
                            placeholder: "Nama Ayah",
                            required: true
                        },
                        {
                            key: "input_2",
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
                            formType: "photo",
                            label: "Foto Sendiri",
                            required: true
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
                            formType: "date",
                            label: "Waktu",
                            placeholder: "Waktu",
                            required: true
                        },
                        {
                            key: "input_2",
                            formType: "text",
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
                            formType: "date",
                            label: "Waktu",
                            placeholder: "Waktu",
                            required: true
                        },
                        {
                            key: "input_2",
                            formType: "text",
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
                            formType: "text",
                            label: "Url Lokasi",
                            placeholder: "Url Lokasi",
                            required: true
                        },
                        {
                            key: "input_2",
                            formType: "map",
                            label: "Map",
                            placeholder: "Map",
                            required:true
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
                            formType: "multiPhoto",
                            label: "Foto",
                            placeholder: "Foto",
                            required: true
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
                            formType: "text",
                            label: "Nama Penerima",
                            placeholder: "Nama Penerima",
                            required: true
                        },
                        {
                            key: "input_2",
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
                            formType: "select",
                            label: "Nama Penerima",
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
                            formType: "text",
                            label: "Nama Penerima",
                            placeholder: "Nama Penerima",
                            required: true
                        },
                        {
                            key: "input_2",
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
                            formType: "text",
                            label: "Url Music",
                            placeholder: "Url Music",
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
                            formType: "text",
                            label: "Nama Ayat Suci",
                            placeholder: "Nama Ayat Suci",
                            required: true
                        },
                        {
                            key: "input_1",
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
                            formType: "textArea",
                            label: "Perjalanan Cinta 1",
                            placeholder: "Perjalanan Cinta 1",
                            required: true
                        },
                        {
                            key: "input_1",
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
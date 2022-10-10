import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import loader from "../src/loader";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
                    <link rel='icon' href='/bridesvow.ico' />
                </Head>
                <head>
                    <style>
                        {loader}
                    </style>
                </head>
                <body>
                    <div id={'globalLoader'}>
                        <div className="loader">
                            <div />
                            <div />
                        </div>
                    </div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
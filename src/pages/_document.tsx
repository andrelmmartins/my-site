import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang='pt-br'>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet" />    
                <link rel='icon' type='image/png' href='/icon.png'/>
            </Head>

            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}
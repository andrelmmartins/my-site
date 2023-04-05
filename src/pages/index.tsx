import { NextPage } from "next"

import { Presentation } from '../presentation/home'
import Head from "next/head"

const Home : NextPage = () => {
    return (
        <>
            <Head>
                <title>Home @ André Martins</title>
            </Head>
            <Presentation/>
        </>
    )
} 

export default Home
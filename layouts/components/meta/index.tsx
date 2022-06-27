/* eslint-disable @next/next/no-title-in-document-head */
import Head from 'next/head'
import React from 'react'

type Props = {
    title: string
}

const Meta = ({ title }: Props) => {
    return <>
        <Head>
            <title>{title}</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    </>

}

export default Meta
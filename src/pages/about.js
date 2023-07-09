import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavBar />
      </main>
    </>
  )
}

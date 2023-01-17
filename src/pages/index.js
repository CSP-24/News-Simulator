import Head from 'next/head'
import styles from '@/styles/Home.module.css'

import TV from '@/components/tv'

export default function Home() {
  return (
    <>
      <Head>
        <title>News Simulator</title>
        <meta name="description" content="A nextjs simple app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <TV />
      </main>
    </>
  )
}

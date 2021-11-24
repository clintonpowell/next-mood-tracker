import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>It&apos;s a Mood</title>
        <meta name="description" content="Daily mood tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span>It&apos;s a <strong>Mood</strong></span>
        </h1>
      </main>
    </div>
  )
}

import CurrentMood from 'components/CurrentMood'
import NewMood from 'components/NewMood'
import { getEntries, getMoods } from 'data/dataHandlers'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Moods.module.css'

export default function Moods({ entries, moods }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>It&apos;s a Mood - enter your mood</title>
        <meta name="description" content="Daily mood tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CurrentMood entries={entries} moods={moods} />
        <NewMood moods={moods} entries={entries} />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const entries = await getEntries();
  const moods = await getMoods();

  return {
    props: {
      entries,
      moods
    }
  };
}
import Link from 'next/link';
import Head from 'next/head'
import CurrentMood from 'components/CurrentMood';
import MoodForm from 'components/MoodForm';
import { getEntries, getMoods } from 'data/dataHandlers';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home({ latest, moods, entries }) {
  const [latestState, setLatest] = useState(latest);

  function addedMood(entry) {
    setLatest(entry);
  }

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
        <div className={styles.form}>
          <MoodForm moods={moods} successCallback={addedMood}/>
          <CurrentMood entry={latestState} moods={moods} />
          {entries.length ? (
            <Link href="/history">
              <a className={`${styles.button} btn`}>See Mood History</a>
            </Link> )
            : null
          }
        </div>
      </main>
    </div>
  )
}


export async function getServerSideProps(context) {
  const {latest, entries} = await getEntries(0,1);
  const moods = await getMoods();

  return {
    props: {
      latest,
      moods,
      entries
    }
  };
}
import Head from 'next/head'
import { getMoods } from 'data/dataHandlers';
import styles from '../styles/MoodsList.module.css';
import home from '../styles/Home.module.css';

export default function Home({ moods }) {
  return (
    <div className={home.container}>
      <Head>
        <title>It&apos;s a Mood - Available Moods</title>
        <meta name="description" content="Daily mood tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={home.main}>
        <h2>Available Moods</h2>
        <ul className={styles.moods}>
          {moods.map(m => {
            return <li key={m.name} style={{backgroundColor: m.color}}>{m.name}</li>
          })}
        </ul>
      </main>
    </div>
  )
}


export async function getStaticProps(context) {
  const moods = await getMoods();

  return {
    props: {
      moods
    }
  };
}
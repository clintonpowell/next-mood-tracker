import CurrentMood from 'components/CurrentMood';
import MoodHistory from 'components/MoodHistory';
import Paging from 'components/Paging';
import { getEntries, getMoods } from 'data/dataHandlers';
import Head from 'next/head';
import { useState } from 'react';
import history from 'styles/History.module.css';
import home from 'styles/Home.module.css';

export default function Moods({ entries, moods, latest, pageCount, page, size }) {
  let [entriesState, setEntries] = useState(entries);

  return (
    <div className={home.container}>
      <Head>
        <title>It&apos;s a Mood - Mood History</title>
        <meta name="description" content="Daily mood tracking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={home.main}>
        <CurrentMood entry={latest} moods={moods} />
        <ul>
          {entriesState.map(e => <MoodHistory entry={e} moods={moods} key={e.date} />)}
        </ul>
        <Paging page={page} size={size} pageCount={pageCount} callback={setEntries} />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const {page, size, sort='desc'} = context.query;
  let pageInt = page ? parseInt(page) : 0;
  let sizeInt = size ? parseInt(size) : 5;
  const {latest, entries, pageCount } = await getEntries(pageInt, sizeInt, sort);
  const moods = await getMoods();

  return {
    props: {
      latest: latest,
      entries,
      page: pageInt,
      pageCount,
      moods,
      size: sizeInt,
      sort
    }
  };
}
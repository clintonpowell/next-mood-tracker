import utils from './utils';
import styles from 'styles/History.module.css';

export default function MoodHistory({ entry, moods }) {
  const mood = utils.getMood(entry, moods);
  const date = new Date(entry.date);

  return <li>
    <span className={styles.mood} style={{backgroundColor: mood.color}}></span> 
    <span className={styles.date}>({date.toLocaleDateString()} {date.toLocaleTimeString()}): </span>
    <span className={styles.comment}>{entry.content}</span>
  </li>
}
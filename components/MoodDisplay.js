import styles from 'styles/MoodDisplay.module.css';

export default function MoodDisplay({ mood }) {
  return (
    <div className={styles.mood} style={{backgroundColor: mood.color}}></div>
  );
}
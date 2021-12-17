import styles from 'styles/MoodDisplay.module.css';


export default function MoodButton({ mood, checked, onClick }) {
  return (
    <label onClick={onClick} className={`${styles.mood} ${styles.button} ${checked ? styles.selected: ''}`} style={{backgroundColor: mood.color}}>
      <input type="checkbox" checked={checked} readOnly={true} />
    </label>
  );
}
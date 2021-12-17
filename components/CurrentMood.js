import MoodDisplay from './MoodDisplay';
import utils from './utils';
import styles from 'styles/CurrentMood.module.css';

export default function CurrentMood({ entry, moods }) {
    if(!entry) {
        return <div>
            <h2>No moods entered</h2>
        </div>;
    }

    // determine sorting of entries
    const mood = utils.getMood(entry, moods);
    const date = new Date(entry.date);

    return (
        <div>
            <h2>Last mood on {date.toLocaleDateString()} at {date.toLocaleTimeString()}: </h2>
            <div className={styles.entry}>
                <MoodDisplay mood={mood} /> 
                <p>{entry.content || 'No comments added'}</p>
            </div>
            
        </div>
    )
}
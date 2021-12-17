import { useState } from 'react';
import { createEntry } from 'components/api';
import MoodButton from 'components/MoodButton';
import styles from 'styles/MoodForm.module.css';

export default function NewMood({ moods, successCallback }) {
    const [newEntry, updateEntryState] = useState({ mood: null, content: ''});
    const [formStatus, updateFormStatus] = useState('mood-select');
    const [error, updateError] = useState(null);

    function changeMood(mood) {
      updateEntryState({...newEntry, mood: mood.id});
    }
  
    function changeContent(content) {
      updateEntryState({...newEntry, content});
    }

    async function submitMood(e) {
        if(newEntry.mood == undefined) {
            updateFormStatus('error');
            updateError('Please select a mood!');
            return;
        }

        updateFormStatus('loading');
        const entry = await createEntry(newEntry);
        successCallback(entry);
        updateEntryState({ mood: null, content: ''});
        updateFormStatus('success');
    }

    const clearSuccess = () => updateFormStatus(null);

    return (
        <div className={styles.form}>
            <h2>What&apos;s your mood?</h2>
            <div className={styles.moods}>
                {moods.map(mood => {
                    return <MoodButton onClick={() => changeMood(mood)} key={mood.id} mood={mood} checked={newEntry.mood === mood.id} />;
                })}
            </div>
            <textarea className={styles.comments} onChange={(e) => changeContent(e.target.value)} value={newEntry.content}>
            </textarea>

            <button className={`${styles.submit} btn ${formStatus === 'loading' ? styles.loading : ''}`} disabled={formStatus === 'loading'} onClick={submitMood}>Submit</button>
            {formStatus === 'success' ? <div className={styles.success} onAnimationEnd={clearSuccess} onClick={clearSuccess}>Saved mood!</div> : null}
            {formStatus === 'error' ? <div className={styles.error} onAnimationEnd={clearSuccess} onClick={clearSuccess}>{error}</div> : null}
        </div>
    )
}
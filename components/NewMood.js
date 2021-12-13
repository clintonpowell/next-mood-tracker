import { useState } from "react";


export default function NewMood(props) {
    const [newEntry, updateEntryState] = useState({ mood: null, content: ''});

    function changeMood(moodKey) {
      updateEntryState({...newEntry, mood: props.moods[moodKey]});
    }
  
    function changeContent(content) {
      updateEntryState({...newEntry, content});
    }

    return (
        <div>
            <h2>What's your mood?</h2>
            <div className="moods-container">
                {Object.keys(props.moods).map(moodKey => {
                    return <button onClick={() => changeMood(moodKey)} className={`mood_${moodKey}`}>{moodKey}</button>;
                })}
            </div>
            <textarea onChange={(e) => changeContent(e.target.value)} value={newEntry.content}>
            </textarea>

        </div>
    )
}
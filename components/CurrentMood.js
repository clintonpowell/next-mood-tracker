export default function CurrentMood(props) {
    const entry = props.entries[props.entries.length-1];
    const mood = Object.keys(props.moods).find(key => entry.mood === props.moods[key]);

    return (
        <div>
            <h3>Last mood: {mood} on {new Date(entry.date).toLocaleDateString()}</h3>
            <div>Comment: {entry.content}</div>
        </div>
    )
}
function CoachNotes({ notes }) {
  if (!notes || notes.length === 0) return null;

  return (
    <div className="section">
      <h3>🧠 Coach Notes</h3>

      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default CoachNotes;
function Toolbox({ conversation }) {
  if (!conversation) {
    return (
      <div className="card">
        <h3>🧰 Toolbox</h3>
        <p>Select a roadmap to begin.</p>
      </div>
    );
  }

  // Always start with the Discovery stage for now.
  // Later we'll make this dynamic without changing this component much.
  const stage = conversation.stages
    ? conversation.stages.discovery
    : conversation;

  return (
    <div className="card">
      <h3>🧰 Toolbox</h3>

      <div className="section">
        <h4>💡 Coach Tip</h4>
        <p>{stage.coachTip}</p>
      </div>

      <div className="section">
        <h4>⚓ Tie Down</h4>
        <p>{stage.tieDown}</p>
      </div>

      <div className="section">
        <h4>🪜 Transition</h4>
        <p>{stage.transition}</p>
      </div>

      <div className="section">
        <h4>📝 Analogy</h4>
        <p>{stage.analogy}</p>
      </div>

      <hr />

      <h4>📝 Call Notes</h4>

      <textarea
        rows="10"
        placeholder="Type your notes here..."
      />
    </div>
  );
}

export default Toolbox;
function OpeningQuestion({ question }) {
  if (!question) return null;

  return (
    <div className="section">
      <h3>❓ Opening Question</h3>
      <p>{question}</p>
    </div>
  );
}

export default OpeningQuestion;
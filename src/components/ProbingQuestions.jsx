function ProbingQuestions({ questions }) {
  if (!questions || questions.length === 0) return null;

  return (
    <div className="section">
      <h3>🔍 Probing Questions</h3>

      <ul>
        {questions.map((question) => (
          <li key={question}>{question}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProbingQuestions;
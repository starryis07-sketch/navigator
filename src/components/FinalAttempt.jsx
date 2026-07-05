function FinalAttempt({ coaching }) {
  if (!coaching) return null;

  const favoriteTieDown =
    coaching.tieDowns?.find((item) => item.favorite);

  const favoriteAnalogy =
    coaching.analogies?.find((item) => item.favorite);

  const favoriteRebuttal =
    coaching.rebuttals?.find((item) => item.favorite);

  return (
    <div className="section">
      <h2>⭐ Final Attempt</h2>

      <p>
        Before processing the cancellation, make one final coaching attempt.
      </p>

      <hr />

      <h3>1️⃣ Recap & Empathy</h3>

      <p>
        "I completely understand why you're feeling this way, and I appreciate
        you taking the time to explain your concerns."
      </p>

      <hr />

      <h3>2️⃣ Favorite Tie Down</h3>

      {favoriteTieDown ? (
        <p>{favoriteTieDown.text}</p>
      ) : (
        <p>No favorite tie-down available.</p>
      )}

      <hr />

      <h3>🛑 Stop & Listen</h3>

      <p>Allow the customer to respond before moving forward.</p>

      <hr />

      <h3>3️⃣ Favorite Analogy</h3>

      {favoriteAnalogy ? (
        <p>{favoriteAnalogy.text}</p>
      ) : (
        <p>No favorite analogy available.</p>
      )}

      <hr />

      <h3>🛑 Stop & Listen</h3>

      <p>Listen for agreement, hesitation, or a new objection.</p>

      <hr />

      <h3>4️⃣ Favorite Rebuttal</h3>

      {favoriteRebuttal ? (
        <p>{favoriteRebuttal.text}</p>
      ) : (
        <p>No favorite rebuttal available.</p>
      )}

      <hr />

      <h3>🛑 Final Pause</h3>

      <p>
        If the customer is still declining after this final coaching attempt,
        proceed according to company policy.
      </p>
    </div>
  );
}

export default FinalAttempt;
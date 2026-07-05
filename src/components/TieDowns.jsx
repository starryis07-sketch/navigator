function TieDowns({ items = [] }) {
  if (items.length === 0) {
    return (
      <div className="section">
        <h3>💬 Tie-Down Questions</h3>
        <p>No tie-down questions available.</p>
      </div>
    );
  }

  const favorite = items.find((item) => item.favorite);
  const others = items.filter((item) => !item.favorite);

  return (
    <div className="section">
      <h3>💬 Tie-Down Questions</h3>

      {favorite && (
        <div className="section">
          <h4>⭐ Favorite</h4>

          <p>{favorite.text}</p>

          {favorite.note && (
            <p>
              <strong>Coach Tip:</strong> {favorite.note}
            </p>
          )}
        </div>
      )}

      {others.length > 0 && (
        <>
          <h4>Additional Tie-Downs</h4>

          <ul>
            {others.map((item) => (
              <li key={item.id}>
                {item.text}
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="section">
        <h4>🛑 Stop & Listen</h4>

        <p>
          Ask one tie-down question, then pause and allow the customer
          to respond before selecting another coaching strategy.
        </p>
      </div>
    </div>
  );
}

export default TieDowns;
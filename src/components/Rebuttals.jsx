function Rebuttals({ items = [] }) {
  if (items.length === 0) {
    return (
      <div className="section">
        <h3>🔄 Rebuttals</h3>
        <p>No rebuttals available.</p>
      </div>
    );
  }

  const favorite = items.find((item) => item.favorite);
  const others = items.filter((item) => !item.favorite);

  return (
    <div className="section">
      <h3>🔄 Rebuttals</h3>

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
          <h4>Additional Rebuttals</h4>

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
          Deliver one rebuttal, then stop and let the customer respond before
          moving to another coaching strategy.
        </p>
      </div>
    </div>
  );
}

export default Rebuttals;
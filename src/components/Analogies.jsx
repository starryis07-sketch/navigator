function Analogies({ items = [] }) {
  if (items.length === 0) {
    return (
      <div className="section">
        <h3>💡 Analogies</h3>
        <p>No analogies available.</p>
      </div>
    );
  }

  const favorite = items.find((item) => item.favorite);
  const others = items.filter((item) => !item.favorite);

  return (
    <div className="section">
      <h3>💡 Analogies</h3>

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
          <h4>Additional Analogies</h4>

          <ul>
            {others.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </>
      )}

      <div className="section">
        <h4>🛑 Stop & Listen</h4>

        <p>
          Use one analogy, then pause and allow the customer to respond before
          moving to another coaching strategy.
        </p>
      </div>
    </div>
  );
}

export default Analogies;
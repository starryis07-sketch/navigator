function CoachingModule({
  title,
  icon,
  items = [],
  stopMessage
}) {
  if (items.length === 0) {
    return (
      <div className="section">
        <h3>
          {icon} {title}
        </h3>

        <p>No coaching available.</p>
      </div>
    );
  }

  const favorite = items.find((item) => item.favorite);
  const others = items.filter((item) => !item.favorite);

  return (
    <div className="section">
      <h3>
        {icon} {title}
      </h3>

      {favorite && (
        <div className="section">
          <h4>⭐ Favorite</h4>

          <p>{favorite.text}</p>

          {favorite.whenToUse && (
            <>
              <strong>When To Use</strong>

              <p>{favorite.whenToUse}</p>
            </>
          )}

          {favorite.note && (
            <>
              <strong>Coach Tip</strong>

              <p>{favorite.note}</p>
            </>
          )}
        </div>
      )}

      {others.length > 0 && (
        <>
          <hr />

          <h4>Additional Options</h4>

          <ul>
            {others.map((item) => (
              <li key={item.id}>
                {item.text}
              </li>
            ))}
          </ul>
        </>
      )}

      <hr />

      <h4>🛑 Stop & Listen</h4>

      <p>{stopMessage}</p>
    </div>
  );
}

export default CoachingModule;
function SituationCoaching({ items = [] }) {
  if (items.length === 0) {
    return (
      <div className="section">
        <h3>🛠 Situation Coaching</h3>
        <p>No coaching situations available.</p>
      </div>
    );
  }

  return (
    <div className="section">
      <h3>🛠 Situation Coaching</h3>

      {items.map((item) => (
        <div key={item.id} className="section">
          <h4>{item.title}</h4>

          <p>
            <strong>When to Use</strong>
          </p>
          <p>{item.whenToUse}</p>

          <p>
            <strong>Recommended Approach</strong>
          </p>

          <ul>
            {item.recommendations.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>

          {item.avoid.length > 0 && (
            <>
              <p>
                <strong>Avoid</strong>
              </p>

              <ul>
                {item.avoid.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}

      <div className="section">
        <h4>🛑 Stop & Listen</h4>

        <p>
          Apply one coaching strategy, then allow the customer to respond
          before choosing another.
        </p>
      </div>
    </div>
  );
}

export default SituationCoaching;
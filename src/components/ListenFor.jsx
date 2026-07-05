function ListenFor({ items }) {
  if (!items || items.length === 0) {
    return (
      <div className="section">
        <h3>👂 Listen For</h3>
        <p>No specific listening points.</p>
      </div>
    );
  }

  return (
    <div className="section">
      <h3>👂 Listen For</h3>

      <ul>
        {items.map((item) => (
          <li key={item}>✓ {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListenFor;
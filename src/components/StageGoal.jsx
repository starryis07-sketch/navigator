function StageGoal({ goal }) {
  if (!goal) return null;

  return (
    <div className="section">
      <h3>🎯 Stage Goal</h3>
      <p>{goal}</p>
    </div>
  );
}

export default StageGoal;
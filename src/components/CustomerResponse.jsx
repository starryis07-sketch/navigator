function CustomerResponse({
  branches,
  onBranchClick,
  onOpenToolbox,
}) {
  return (
    <>
      <hr />

      <div className="section">
        <h3>Customer Response</h3>

        {branches.length > 0 ? (
          <div className="choiceButtons">
            {branches.map((branch) => (
              <button
                key={branch.id}
                onClick={() => onBranchClick(branch.nextStage)}
              >
                {branch.label}
              </button>
            ))}
          </div>
        ) : (
          <p>No additional responses available.</p>
        )}

        <hr />

        <h3>Need More Coaching?</h3>

        <p>
          If the customer is still declining after your coaching, open the
          Coaching Toolbox for additional strategies.
        </p>

        <button onClick={onOpenToolbox}>
          🛠 Open Coaching Toolbox
        </button>
      </div>
    </>
  );
}

export default CustomerResponse;
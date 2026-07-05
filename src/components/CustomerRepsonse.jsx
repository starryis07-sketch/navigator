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

        <hr />

        <h3>Still Declining?</h3>

        <button onClick={onOpenToolbox}>
          🛠 Open Coaching Toolbox
        </button>
      </div>
    </>
  );
}

export default CustomerResponse;
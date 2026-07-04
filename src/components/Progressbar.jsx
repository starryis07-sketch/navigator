function ProgressBar({ currentStage }) {
  const stages = [
    "discovery",
    "diagnosis",
    "education",
    "commitment",
    "resolution",
  ];

  const format = (stage) =>
    stage.charAt(0).toUpperCase() + stage.slice(1);

  return (
    <div className="progressRoadmap">
      {stages.map((stage, index) => (
        <div className="progressItem" key={stage}>
          <div
            className={
              currentStage === stage
                ? "circle active"
                : "circle"
            }
          />

          <span>{format(stage)}</span>

          {index < stages.length - 1 && (
            <div className="line"></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
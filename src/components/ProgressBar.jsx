function ProgressBar({ currentStage }) {
  const stages = [
    "discovery",
    "diagnosis",
    "education",
    "commitment",
    "resolution",
  ];

  const activeIndex = stages.indexOf(currentStage);

  return (
    <div className="progressRoadmap">
      {stages.map((stage, index) => (
        <div className="progressStep" key={stage}>
          <div
            className={`circle ${
              index < activeIndex
                ? "completed"
                : index === activeIndex
                ? "active"
                : ""
            }`}
          >
            {index < activeIndex ? "✓" : ""}
          </div>

          <span className="stageLabel">
            {stage.charAt(0).toUpperCase() + stage.slice(1)}
          </span>

          {index < stages.length - 1 && (
            <div
              className={`connector ${
                index < activeIndex ? "completed" : ""
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ProgressBar;
import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

function ConversationGuide({ conversation }) {
  const [currentStage, setCurrentStage] = useState("discovery");

  // Reset to Discovery whenever a different roadmap is selected
  useEffect(() => {
    setCurrentStage("discovery");
  }, [conversation]);

  if (!conversation) {
    return (
      <div className="card">
        <h3>🧭 Retention Roadmap</h3>
        <p>Choose a roadmap from the left to begin.</p>
      </div>
    );
  }

  const stage = conversation.stages[currentStage];

  return (
    <div className="card">
      <h2>{conversation.title}</h2>

      <ProgressBar currentStage={currentStage} />

      <div className="section">
        <h3>🎯 Recommended Question</h3>
        <p>{stage.question}</p>
      </div>

      <div className="section">
        <h3>🤔 Why Ask This?</h3>
        <p>{stage.why}</p>
      </div>

      <div className="section">
        <h3>👂 Listen For</h3>

        {stage.listenFor.length > 0 ? (
          <ul>
            {stage.listenFor.map((item) => (
              <li key={item}>✓ {item}</li>
            ))}
          </ul>
        ) : (
          <p>No specific listening points.</p>
        )}
      </div>

      {stage.branches.length > 0 && (
        <>
          <hr />

          <div className="section">
            <h3>Customer Response</h3>

            <div className="choiceButtons">
              {stage.branches.map((branch) => (
                <button
                  key={branch.id}
                  onClick={() => setCurrentStage(branch.nextStage)}
                >
                  {branch.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ConversationGuide;
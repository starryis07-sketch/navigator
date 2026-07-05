import { useState } from "react";

function ConversationGuide({ conversation }) {
  
   const [currentStage, setCurrentStage] = useState("discovery");

   const stage = conversation?.stages?.[currentStage];

  if (!conversation) {
    return (
      <div className="card">
        <h3>🧭 Retention Roadmap</h3>
        <p>Choose a roadmap from the left to begin.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>{conversation.title}</h2>

      <div className="roadmap">
        <span className="active">● Discovery</span>
        <span>○ Diagnosis</span>
        <span>○ Education</span>
        <span>○ Commitment</span>
        <span>○ Resolution</span>
      </div>

      <div className="section">
        <h3>🎯 Next Question</h3>
        <p>{stage.question}</p>
      </div>

      <div className="section">
        <h3>🤔 Why Ask This?</h3>
        <p>{stage.why}</p>
      </div>

      <div className="section">
        <h3>👂 Listen For</h3>

        <ul>
          {stage.listenFor.map((item) => (
            <li key={item}>✓ {item}</li>
          ))}
        </ul>
      </div>

      <hr />

      <div className="section">
        <h3>What Changed?</h3>

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

      {nextQuestion && (
        <div className="nextQuestion">
          <h3>➡ Next Question</h3>
          <p>This roadmap hasn't been converted to the new stage engine yet.</p>
        </div>
      )}
    </div>
  );
}

export default ConversationGuide;
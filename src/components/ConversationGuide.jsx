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

  // Support both old and new roadmap formats
  const goal = stage.goal;
  const openingQuestion = stage.openingQuestion || stage.question;
  const probingQuestions = stage.probingQuestions || [];
  const coachNotes = stage.coachNotes || [];

  return (
    <div className="card">
      <h2>{conversation.title}</h2>

      <ProgressBar currentStage={currentStage} />

      {goal && (
        <div className="section">
          <h3>🎯 Stage Goal</h3>
          <p>{goal}</p>
        </div>
      )}

      <div className="section">
        <h3>❓ Opening Question</h3>
        <p>{openingQuestion}</p>
      </div>

      <div className="section">
        <h3>🛑 Stop & Listen</h3>
        <p>
          Ask your question, then pause. Give the customer time to answer
          before asking another question.
        </p>
      </div>

      {probingQuestions.length > 0 && (
        <div className="section">
          <h3>🔍 Probing Questions</h3>

          <ul>
            {probingQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </div>
      )}

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

      {coachNotes.length > 0 && (
        <div className="section">
          <h3>🧠 Coach Notes</h3>

          <ul>
            {coachNotes.map((note) => (
              <li key={note}>• {note}</li>
            ))}
          </ul>
        </div>
      )}

      {stage.why && (
        <div className="section">
          <h3>🤔 Why Ask This?</h3>
          <p>{stage.why}</p>
        </div>
      )}

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
import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

import StageGoal from "./StageGoal";
import OpeningQuestion from "./OpeningQuestion";
import StopAndListen from "./StopAndListen";
import ProbingQuestions from "./ProbingQuestions";
import ListenFor from "./ListenFor";
import CoachNotes from "./CoachNotes";

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

  // Supports both Version 1.0 and Version 2.0 roadmaps
  const goal = stage.goal;
  const openingQuestion = stage.openingQuestion || stage.question;
  const probingQuestions = stage.probingQuestions || [];
  const coachNotes = stage.coachNotes || [];

  return (
    <div className="card">
      <h2>{conversation.title}</h2>

      <ProgressBar currentStage={currentStage} />

      <StageGoal goal={goal} />

      <OpeningQuestion question={openingQuestion} />

      <StopAndListen />

      <ProbingQuestions questions={probingQuestions} />

      <ListenFor items={stage.listenFor} />

      <CoachNotes notes={coachNotes} />

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
import { useState, useEffect } from "react";
import ProgressBar from "./ProgressBar";

import StageGoal from "./StageGoal";
import OpeningQuestion from "./OpeningQuestion";
import StopAndListen from "./StopAndListen";
import ProbingQuestions from "./ProbingQuestions";
import ListenFor from "./ListenFor";
import CoachNotes from "./CoachNotes";
import CustomerResponse from "./CustomerResponse";

function ConversationGuide({ conversation }) {
  const [currentStage, setCurrentStage] = useState("discovery");
  const [showToolbox, setShowToolbox] = useState(false);

  useEffect(() => {
    setCurrentStage("discovery");
    setShowToolbox(false);
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
        <CustomerResponse
          branches={stage.branches}
          onBranchClick={setCurrentStage}
          onOpenToolbox={() => setShowToolbox(true)}
        />
      )}

      {showToolbox && (
        <div className="section">
          <h2>🛠 Coaching Toolbox</h2>

          <p>
            The customer is still declining. Choose one coaching strategy
            before making another save attempt.
          </p>

          <div className="choiceButtons">
            <button>💬 Tie Downs</button>
            <button>💡 Analogies</button>
            <button>🔄 Rebuttals</button>
            <button>🛠 Situation Coaching</button>
          </div>

          <div className="section">
            <h3>🛑 Coaching Reminder</h3>

            <p>
              Choose one coaching tool, then stop and listen before selecting
              another strategy.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ConversationGuide;
import { useState } from "react";

import TieDowns from "./TieDowns";
import Analogies from "./Analogies";
import Rebuttals from "./Rebuttals";
import SituationCoaching from "./SituationCoaching";
import FinalAttempt from "./FinalAttempt";

function CoachingToolbox({ coaching }) {
  const [activeTool, setActiveTool] = useState(null);

  if (!coaching) return null;

  const tools = [
    {
      id: "tieDowns",
      label: "💬 Tie Downs",
      component: <TieDowns items={coaching.tieDowns} />
    },
    {
      id: "analogies",
      label: "💡 Analogies",
      component: <Analogies items={coaching.analogies} />
    },
    {
      id: "rebuttals",
      label: "🔄 Rebuttals",
      component: <Rebuttals items={coaching.rebuttals} />
    },
    {
      id: "situationCoaching",
      label: "🛠 Situation Coaching",
      component: (
        <SituationCoaching
          items={coaching.situationCoaching}
        />
      )
    },
    {
      id: "finalAttempt",
      label: "⭐ Final Attempt",
      component: (
        <FinalAttempt coaching={coaching} />
      )
    }
  ];

  return (
    <div className="section">
      {activeTool === null ? (
        <>
          <h2>🛠 Coaching Toolbox</h2>

          <p>Select one coaching strategy.</p>

          <div className="choiceButtons">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => setActiveTool(tool.id)}
              >
                {tool.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <button onClick={() => setActiveTool(null)}>
            ← Back to Coaching Toolbox
          </button>

          <hr />

          {tools.find(
            (tool) => tool.id === activeTool
          )?.component}
        </>
      )}
    </div>
  );
}

export default CoachingToolbox;
import { useState } from "react";
import TieDowns from "./TieDowns";

function CoachingToolbox({ coaching }) {
  const [activeTool, setActiveTool] = useState(null);

  if (!coaching) return null;

  if (activeTool === "tieDowns") {
    return (
      <div className="section">
        <button onClick={() => setActiveTool(null)}>
          ← Back to Coaching Toolbox
        </button>

        <TieDowns items={coaching.tieDowns} />
      </div>
    );
  }

  return (
    <div className="section">
      <h2>🛠 Coaching Toolbox</h2>

      <p>Select one coaching strategy.</p>

      <div className="choiceButtons">
        <button onClick={() => setActiveTool("tieDowns")}>
          💬 Tie Downs
        </button>

        <button disabled>
          💡 Analogies (Coming Soon)
        </button>

        <button disabled>
          🔄 Rebuttals (Coming Soon)
        </button>

        <button disabled>
          🛠 Situation Coaching (Coming Soon)
        </button>
      </div>
    </div>
  );
}

export default CoachingToolbox;
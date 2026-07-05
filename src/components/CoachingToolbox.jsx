import { useState } from "react";
import TieDowns from "./TieDowns";
import Analogies from "./Analogies";

function CoachingToolbox({ coaching }) {
  const [activeTool, setActiveTool] = useState(null);

  if (!coaching) return null;

  return (
    <div className="section">
      {activeTool === null && (
        <>
          <h2>🛠 Coaching Toolbox</h2>

          <p>Select one coaching strategy.</p>

          <div className="choiceButtons">
            <button onClick={() => setActiveTool("tieDowns")}>
              💬 Tie Downs
            </button>

            <button onClick={() => setActiveTool("analogies")}>
              💡 Analogies
            </button>

            <button disabled>
              🔄 Rebuttals (Coming Soon)
            </button>

            <button disabled>
              🛠 Situation Coaching (Coming Soon)
            </button>
          </div>
        </>
      )}

      {activeTool === "tieDowns" && (
        <>
          <button onClick={() => setActiveTool(null)}>
            ← Back to Coaching Toolbox
          </button>

          <TieDowns items={coaching.tieDowns} />
        </>
      )}

      {activeTool === "analogies" && (
        <>
          <button onClick={() => setActiveTool(null)}>
            ← Back to Coaching Toolbox
          </button>

          <Analogies items={coaching.analogies} />
        </>
      )}
    </div>
  );
}

export default CoachingToolbox;
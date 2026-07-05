import { useState } from "react";
import "./App.css";

import noreasongiven from "./data/noreasongiven";
import affordability from "./data/affordability";
import bankruptcy from "./data/bankruptcy";
import familyAssistance from "./data/familyAssistance";
import creditScore from "./data/creditScore";
import betterOffer from "./data/betterOffer";
import slowProgress from "./data/slowProgress";
import legalThreat from "./data/legalThreat";

import ConversationGuide from "./components/ConversationGuide";
import Toolbox from "./components/Toolbox";

const roadmaps = [
  
  {
    label: "No Reason Given",
    data: noreasongiven
  },
  {
    label: "I can't afford it",
    data: affordability
  },
  {
    label: "I'm considering bankruptcy",
    data: bankruptcy
  },
  {
    label: "My family will help",
    data: familyAssistance
  },
  {
    label: "I need my credit",
    data: creditScore
  },
  {
    label: "I want a better offer",
    data: betterOffer
  },
  {
    label: "This isn't working",
    data: slowProgress
  },
  {
    label: "I'm being sued",
    data: legalThreat
  }
];

function App() {
  const [conversation, setConversation] = useState(null);

  return (
    <div className="app">
      <header className="header">
        <h1>🧭 Navigator 1.0</h1>

        <input
          type="text"
          placeholder="Search conversations..."
        />
      </header>

      <div className="layout">

<aside className="sidebar">

  <h2>Customer Says...</h2>

  {roadmaps.map((roadmap) => (

    <button
      key={roadmap.label}
      onClick={() => setConversation(roadmap.data)}
    >
      {roadmap.label}
    </button>

  ))}

</aside>

        <main className="workspace">

          <h2>Welcome Pamela 👋</h2>

          <ConversationGuide
            conversation={conversation}
          />

        </main>

        <aside className="rightPanel">

          <Toolbox conversation={conversation} />

        </aside>

      </div>
    </div>
  );
}

export default App;
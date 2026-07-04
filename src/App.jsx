import { useState } from "react";
import "./App.css";

import affordability from "./data/affordability";
import bankruptcy from "./data/bankruptcy";

import ConversationGuide from "./components/ConversationGuide";
import Toolbox from "./components/Toolbox";

const roadmaps = [
  {
    label: "I can't afford it",
    data: affordability
  },
  {
    label: "I'm considering bankruptcy",
    data: bankruptcy
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

  <button>
    My family will help
  </button>

  <button>
    I need my credit
  </button>

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
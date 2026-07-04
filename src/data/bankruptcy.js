const bankruptcy = {
  title: "Considering Bankruptcy",

  stage: "Discovery",

  question:
    "Can you tell me what has you considering bankruptcy today?",

  why:
    "Understand the customer's motivation before comparing solutions.",

  listenFor: [
    "Chapter 7",
    "Chapter 13",
    "Attorney consultation",
    "Lawsuit",
    "Wage garnishment",
    "Repossession",
    "Foreclosure",
    "Medical debt",
    "Collection calls"
  ],

  branches: [
    {
      id: "chapter7",
      label: "I'm considering Chapter 7",
      nextQuestion:
        "What makes Chapter 7 feel like the best option for you?"
    },
    {
      id: "chapter13",
      label: "I'm considering Chapter 13",
      nextQuestion:
        "Are you trying to protect a home or another important asset?"
    },
    {
      id: "attorney",
      label: "I've already spoken with an attorney",
      nextQuestion:
        "What recommendation did the attorney give you?"
    },
    {
      id: "justThinking",
      label: "I'm just exploring options",
      nextQuestion:
        "What concerns are making bankruptcy seem like your best choice?"
    }
  ]
};

export default bankruptcy;
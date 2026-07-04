const affordability = {
  title: "Affordability",

  stages: {
    discovery: {
      stage: "Discovery",

      question: "What changed financially?",

      why:
        "Understand the cause before offering solutions.",

      listenFor: [
        "Income Loss",
        "Unexpected Expenses",
        "Medical Bills",
        "Car Repair",
        "Job Loss",
      ],

      coachTip:
        "Diagnose before educating. Don't recommend a solution until you understand the customer's situation.",

      tieDown:
        "Would you agree understanding all your options first would help you make the best decision?",

      transition:
        "Now that I understand what's changed financially, let's look at the options available to you.",

      analogy:
        "Think of this like visiting a doctor. Before recommending treatment, the doctor first understands what's causing the symptoms.",

      branches: [
        {
          id: "income",
          label: "Income Decreased",
          nextStage: "diagnosis",
        },
        {
          id: "expenses",
          label: "Expenses Increased",
          nextStage: "diagnosis",
        },
        {
          id: "both",
          label: "Both",
          nextStage: "diagnosis",
        },
      ],
    },

    diagnosis: {
      stage: "Diagnosis",

      question:
        "How long has this financial situation been affecting you?",

      why:
        "Determine whether the hardship is temporary or ongoing.",

      listenFor: [
        "Temporary hardship",
        "Permanent income loss",
        "Recent life event",
      ],

      coachTip:
        "Focus on understanding the customer's situation before discussing solutions.",

      tieDown:
        "Would you agree finding the right solution depends on understanding your situation completely?",

      transition:
        "Now let's explore the options that best fit your circumstances.",

      analogy:
        "Like mapping a route before beginning a trip.",

      branches: [
        {
          id: "continue",
          label: "Continue",
          nextStage: "education",
        },
      ],
    },
  },
};

export default affordability;
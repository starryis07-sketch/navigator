const affordability = {
  title: "Affordability",

  stages: {
    discovery: {
      question: "What changed financially?",

      why: "Understand the cause before discussing solutions.",

      coachTip:
        "Stay curious. Don't solve the problem yet.",

      tieDown:
        "Would you agree understanding what changed is the best place to start?",

      transition:
        "Thanks for explaining that.",

      analogy:
        "Think of it like a doctor diagnosing symptoms before prescribing treatment.",

      listenFor: [
        "Income Loss",
        "Unexpected Expenses",
        "Medical Bills",
        "Job Loss",
        "Car Repair",
      ],

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
      question:
        "How long has your income been affected?",

      why:
        "Determine whether the hardship is temporary or long-term.",

      coachTip:
        "Understand the timeline before discussing solutions.",

      tieDown:
        "Would you agree knowing whether this is temporary helps determine the best option?",

      transition:
        "That helps me understand your situation better.",

      analogy:
        "Like repairing a leak—you need to know if it's a drip or a burst pipe.",

      listenFor: [
        "Temporary",
        "Permanent",
        "Looking for Work",
      ],

      branches: [
        {
          id: "temporary",
          label: "Temporary",
          nextStage: "education",
        },

        {
          id: "permanent",
          label: "Permanent",
          nextStage: "education",
        },
      ],
    },

    education: {
      question:
        "Would it be okay if I shared an option that may help?",

      why:
        "Gain permission before presenting a solution.",

      coachTip:
        "People are more receptive when they choose to listen.",

      tieDown:
        "Would you be open to hearing one possibility?",

      transition:
        "Based on what you've shared...",

      analogy:
        "Think of this as looking at all the routes before choosing one.",

      listenFor: [],

      branches: [],
    },
  },
};

export default affordability;
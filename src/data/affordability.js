const affordability = {
  title: "Affordability",

  stages: {
    discovery: {
      question: "What changed financially?",

      why: "Understand the cause before discussing solutions.",

      coachTip:
        "Stay curious. Diagnose before offering solutions.",

      tieDown:
        "Would you agree understanding what changed is the best place to start?",

      transition:
        "Thanks for explaining that.",

      analogy:
        "Like a doctor diagnosing symptoms before prescribing treatment.",

      listenFor: [
        "Income Loss",
        "Unexpected Expenses",
        "Medical Bills",
        "Job Loss",
        "Car Repair"
      ],

      branches: [
        {
          id: "income",
          label: "Income Decreased",
          nextStage: "diagnosis"
        },
        {
          id: "expenses",
          label: "Expenses Increased",
          nextStage: "diagnosis"
        },
        {
          id: "both",
          label: "Both",
          nextStage: "diagnosis"
        }
      ]
    },

    diagnosis: {
      question: "How long has your income been affected?",

      why:
        "Determine whether the hardship is temporary or long-term.",

      coachTip:
        "Understand the timeline before discussing solutions.",

      tieDown:
        "Would you agree the length of the hardship helps determine the best option?",

      transition:
        "That helps me understand your situation.",

      analogy:
        "Like checking whether a flat tire needs air or replacing.",

      listenFor: [
        "Temporary",
        "Permanent",
        "Looking for Work"
      ],

      branches: [
        {
          id: "temporary",
          label: "Temporary",
          nextStage: "education"
        },
        {
          id: "permanent",
          label: "Permanent",
          nextStage: "education"
        }
      ]
    },

    education: {
      question:
        "Would it be okay if I shared an option that may help?",

      why:
        "Gain permission before presenting recommendations.",

      coachTip:
        "People are more receptive when they choose to listen.",

      tieDown:
        "Would you be open to hearing one possibility?",

      transition:
        "Based on what you've shared...",

      analogy:
        "Like looking at every route before starting a trip.",

      listenFor: [],

      branches: [
        {
          id: "continue",
          label: "Continue",
          nextStage: "commitment"
        }
      ]
    },

    commitment: {
      question:
        "If we can help address your biggest concern, would you be willing to continue working toward your financial goals with us?",

      why:
        "Gain commitment before completing the save.",

      coachTip:
        "Ask confidently. Don't assume the answer is no.",

      tieDown:
        "Does that sound fair?",

      transition:
        "Let's put that plan into action.",

      analogy:
        "You've already climbed most of the mountain—let's finish the last stretch.",

      listenFor: [
        "Agreement",
        "Remaining Concern",
        "Need More Information"
      ],

      branches: [
        {
          id: "accept",
          label: "Customer Agrees",
          nextStage: "resolution"
        }
      ]
    },

    resolution: {
      question:
        "Summarize the agreed plan and confirm the customer's next steps.",

      why:
        "End the call with clarity and confidence.",

      coachTip:
        "Recap everything and thank the customer.",

      tieDown:
        "Are you comfortable moving forward with this plan?",

      transition:
        "Excellent. Let's review what we've accomplished today.",

      analogy:
        "Like crossing the finish line after a long race.",

      listenFor: [],

      branches: []
    }
  }
};

export default affordability;
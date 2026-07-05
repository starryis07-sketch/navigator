const needMoreTime = {
  title: "Need More Time",

  stages: {
    discovery: {
      question:
        "Absolutely, I understand. Can you tell me what's making you feel like you need more time before moving forward?",

      why:
        "Discover what's preventing the customer from making a decision today.",

      coachTip:
        "Needing more time is usually a symptom—not the real objection.",

      tieDown:
        "Would you agree it's important we identify what's causing the hesitation?",

      transition:
        "Thank you for sharing that with me.",

      analogy:
        "It's like putting a trip on hold because you're unsure about the destination.",

      listenFor: [
        "Need to think",
        "Need to research",
        "Want to compare",
        "Talk to spouse",
        "Talk to family",
        "Overwhelmed",
        "Not ready",
        "Going to come back later"
      ],

      branches: [
        {
          id: "thinking",
          label: "Needs Time",
          nextStage: "diagnosis"
        },
        {
          id: "compare",
          label: "Shopping Around",
          nextStage: "diagnosis"
        },
        {
          id: "family",
          label: "Need To Talk To Someone",
          nextStage: "diagnosis"
        }
      ]
    },

    diagnosis: {
      question:
        "If you don't mind me asking, what are you hoping to learn or accomplish before making your final decision?",

      why:
        "Determine whether the customer has unanswered questions or another hidden objection.",

      coachTip:
        "Most customers asking for time still have an unanswered concern.",

      tieDown:
        "Would you say that's the biggest thing holding you back today?",

      transition:
        "That makes sense.",

      analogy:
        "Like waiting to buy a car until you've answered your biggest question.",

      listenFor: [
        "Credit",
        "Reviews",
        "Better Offer",
        "Family Advice",
        "Fear",
        "Buyer's Remorse",
        "Needs Reassurance"
      ],

      branches: [
        {
          id: "questions",
          label: "Has Questions",
          nextStage: "education"
        },
        {
          id: "hesitation",
          label: "Still Hesitant",
          nextStage: "education"
        }
      ]
    },

    education: {
      question:
        "Would it be okay if I answered those questions before you make your final decision?",

      why:
        "Offer value before the customer leaves without pressuring them.",

      coachTip:
        "Respect their pace while making sure they have accurate information.",

      tieDown:
        "Would that be helpful?",

      transition:
        "Let's make sure you have everything you need.",

      analogy:
        "Like finishing a puzzle—you want all the pieces before deciding.",

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
        "If we can answer your remaining questions today, would you feel comfortable making your decision instead of starting over later?",

      why:
        "Help the customer resolve today's concerns without unnecessary delay.",

      coachTip:
        "Avoid sounding pushy. Focus on helping them make an informed decision.",

      tieDown:
        "Does that sound fair?",

      transition:
        "Let's work through those questions together.",

      analogy:
        "Like finishing a book instead of stopping in the last chapter.",

      listenFor: [
        "Ready To Continue",
        "Still Needs Time"
      ],

      branches: [
        {
          id: "stay",
          label: "Continue Program",
          nextStage: "resolution"
        }
      ]
    },

    resolution: {
      question:
        "Summarize the conversation and confirm the customer's next step.",

      why:
        "End the call with a clear understanding of what happens next.",

      coachTip:
        "If they still need time, schedule a specific follow-up whenever possible instead of leaving it open-ended.",

      tieDown:
        "Does that plan work for you?",

      transition:
        "Thank you for taking the time to talk through everything today.",

      analogy:
        "Every journey starts with deciding on the next step.",

      listenFor: [],

      branches: []
    }
  }
};

export default needMoreTime;
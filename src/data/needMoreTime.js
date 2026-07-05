const needMoreTime = {
  title: "Need More Time",

  coaching: {
    tieDowns: [
      {
        id: "favorite",
        favorite: true,
        text:
          "If we answer your remaining questions today, would you feel comfortable making your decision today instead of starting over later?",
        note:
          "Use after you've identified that the customer simply needs reassurance or clarification."
      },
      {
        id: "clarity",
        text:
          "Would you agree it's better to make a fully informed decision than leave with unanswered questions?"
      },
      {
        id: "confidence",
        text:
          "If we can address your biggest concern today, would you feel more confident moving forward?"
      }
    ],

    analogies: [
      {
        id: "favorite",
        favorite: true,
        text:
          "It's like taking a road trip. A detour doesn't change your destination—it just means we find the best route forward.",
        note:
          "Great for customers who feel overwhelmed or hesitant."
      },
      {
        id: "car",
        text:
          "It's like buying a car. Most people don't wait because they need more time—they wait because they still have one unanswered question."
      },
      {
        id: "puzzle",
        text:
          "Think of it like finishing a puzzle. You want all the pieces before deciding what the picture looks like."
      },
      {
        id: "book",
        text:
          "It's like stopping a book during the last chapter. You're already close to the ending, so let's make sure you have the full story."
      }
    ],

    rebuttals: [
      {
        id: "favorite",
        favorite: true,
        text:
          "Most people who tell me they need more time are really looking for clarity rather than more days. Let's make sure we've answered everything before you decide.",
        note:
          "Avoid sounding pushy. Focus on resolving uncertainty."
      },
      {
        id: "questions",
        text:
          "Before you leave today, I'd like to make sure every question is answered so you can make the most informed decision possible."
      }
    ],

    situationCoaching: [
      {
        id: "spouse",
        title: "Needs To Talk To Spouse",

        whenToUse:
          "The customer wants someone else's input before deciding.",

        recommendations: [
          "Find out what concerns they expect their spouse to have.",
          "Offer to answer those questions now.",
          "If appropriate, schedule a follow-up when both can participate."
        ],

        avoid: [
          "Never discourage involving a spouse or family member."
        ]
      },

      {
        id: "shopping",
        title: "Shopping Around",

        whenToUse:
          "Customer wants to compare options before deciding.",

        recommendations: [
          "Ask what they're hoping to compare.",
          "Answer unanswered questions before they leave.",
          "Help them make an informed comparison."
        ],

        avoid: [
          "Do not criticize competitors."
        ]
      },

      {
        id: "overwhelmed",
        title: "Feeling Overwhelmed",

        whenToUse:
          "Customer is emotionally overloaded and hesitant.",

        recommendations: [
          "Slow the conversation down.",
          "Address one concern at a time.",
          "Confirm understanding before moving forward."
        ],

        avoid: [
          "Do not overload the customer with additional information."
        ]
      }
    ]
  },

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
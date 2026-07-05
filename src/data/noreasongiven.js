const noReasonGiven = {
  title: "No Reason Given",

  coaching: {
    tieDowns: [
      {
        id: "favorite",
        favorite: true,
        text:
          "Would you mind sharing a little more so I can make sure I'm giving you the most helpful information before we move forward?",
        note:
          "Use when the customer simply says they want to cancel without providing a reason."
      },
      {
        id: "understand",
        text:
          "Would you agree it's important that I understand what's changed before we decide on the next step?"
      },
      {
        id: "clarify",
        text:
          "If we can identify the real concern together, would that help us determine the best path forward?"
      },
      {
        id: "explore",
        text:
          "Can we spend just a couple of minutes making sure we aren't overlooking something important?"
      }
    ],

    analogies: [
      {
        id: "favorite",
        favorite: true,
        text:
          "It's like visiting a doctor. Before recommending a treatment, they first need to understand what's causing the symptoms.",
        note:
          "Excellent when the customer hasn't identified a reason."
      },
      {
        id: "roadmap",
        text:
          "It's hard to choose the best route until you know where you're trying to go."
      },
      {
        id: "toolbox",
        text:
          "Using the wrong tool won't solve the problem. First we need to identify exactly what's causing the concern."
      }
    ],

    rebuttals: [
      {
        id: "favorite",
        favorite: true,
        text:
          "I completely respect your decision. Before we finalize everything, I'd just like to understand what changed so I can be sure we're addressing the right concern.",
        note:
          "Remain calm and curious."
      },
      {
        id: "discovery",
        text:
          "Sometimes what starts as 'I just want to cancel' turns out to be a concern that's easy to address once we understand it."
      },
      {
        id: "clarification",
        text:
          "The better I understand what's changed, the more helpful I can be."
      }
    ],

    situationCoaching: [
      {
        id: "unknown",
        title: "No Reason Provided",

        whenToUse:
          "Customer refuses to provide a reason initially.",

        recommendations: [
          "Stay calm and curious.",
          "Use open-ended questions.",
          "Give the customer time to think."
        ],

        avoid: [
          "Don't assume the objection."
        ]
      },

      {
        id: "vague",
        title: "Vague Answers",

        whenToUse:
          "Customer gives general responses like 'I just don't want it anymore.'",

        recommendations: [
          "Ask follow-up questions.",
          "Clarify what changed.",
          "Listen for emotion or hesitation."
        ],

        avoid: [
          "Don't rush into education."
        ]
      },

      {
        id: "multiple",
        title: "Multiple Concerns",

        whenToUse:
          "Customer mentions several possible issues.",

        recommendations: [
          "Ask which concern is the biggest.",
          "Focus on one issue at a time.",
          "Guide the conversation."
        ],

        avoid: [
          "Don't try to solve everything at once."
        ]
      },

      {
        id: "hidden",
        title: "Hidden Objection",

        whenToUse:
          "You believe another roadmap is actually needed.",

        recommendations: [
          "Continue discovery.",
          "Identify the primary objection.",
          "Transition to the appropriate roadmap."
        ],

        avoid: [
          "Don't guess."
        ]
      }
    ]
  },

  stages: {
    discovery: {
      question:
        "I'd be happy to help. Can you tell me what has you considering cancellation today?",

      why:
        "The customer hasn't identified their primary concern yet.",

      coachTip:
        "Stay curious. Don't educate until you understand the real reason they're calling.",

      tieDown:
        "Would you mind sharing a little more so I can make sure I'm giving you the best information?",

      transition:
        "I appreciate you sharing that with me.",

      analogy:
        "Think of this like visiting a doctor—the symptoms help determine the right treatment.",

      listenFor: [
        "Affordability",
        "Bankruptcy",
        "Credit Score",
        "Better Offer",
        "Family Assistance",
        "Outside Advice",
        "Poor Reviews",
        "Moral Concerns",
        "Slow Progress",
        "Legal Threat",
        "Just Changed My Mind"
      ],

      branches: [
        {
          id: "financial",
          label: "Financial Concern",
          nextStage: "diagnosis"
        },
        {
          id: "trust",
          label: "Trust / Research",
          nextStage: "diagnosis"
        },
        {
          id: "other",
          label: "Still Unsure",
          nextStage: "diagnosis"
        }
      ]
    },

    diagnosis: {
      question:
        "What changed between the time you enrolled and today?",

      why:
        "Identify the event or concern that caused the customer to reconsider.",

      coachTip:
        "Use open-ended questions and allow the customer time to think.",

      tieDown:
        "Would you agree understanding what's changed will help us determine the best path forward?",

      transition:
        "That helps me understand what's on your mind.",

      analogy:
        "It's like tracing a problem back to where it started before trying to fix it.",

      listenFor: [
        "Signed up too quickly",
        "Spouse concerns",
        "Pastor advice",
        "Friend advice",
        "Poor online reviews",
        "Fear",
        "Overwhelmed",
        "No longer comfortable"
      ],

      branches: [
        {
          id: "identified",
          label: "Primary Concern Identified",
          nextStage: "education"
        }
      ]
    },

    education: {
      question:
        "Based on what you've shared, which of these best describes your primary concern?",

      why:
        "Identify the roadmap that best fits the customer's concern.",

      coachTip:
        "Don't solve the issue yet. Make sure you've identified the correct objection first.",

      tieDown:
        "Would you say that's the biggest reason you're considering cancellation?",

      transition:
        "Perfect. That gives us a good place to start.",

      analogy:
        "Like choosing the right tool before starting a repair.",

      listenFor: [],

      branches: [
        {
          id: "affordability",
          label: "Affordability",
          nextStage: "commitment"
        },
        {
          id: "bankruptcy",
          label: "Bankruptcy",
          nextStage: "commitment"
        },
        {
          id: "credit",
          label: "Credit Score",
          nextStage: "commitment"
        },
        {
          id: "family",
          label: "Family Assistance",
          nextStage: "commitment"
        },
        {
          id: "betterOffer",
          label: "Better Offer",
          nextStage: "commitment"
        },
        {
          id: "slowProgress",
          label: "Slow Progress",
          nextStage: "commitment"
        },
        {
          id: "legal",
          label: "Legal Threat",
          nextStage: "commitment"
        },
        {
          id: "outsideInfluence",
          label: "Outside Influence",
          nextStage: "commitment"
        }
      ]
    },

    commitment: {
      question:
        "Now that we've identified your primary concern, let's work through that together.",

      why:
        "Transition the conversation toward the appropriate objection roadmap.",

      coachTip:
        "This roadmap's purpose is discovery. Once the concern is identified, transition confidently.",

      tieDown:
        "Does that sound like the best place to begin?",

      transition:
        "Let's focus on that concern together.",

      analogy:
        "Now that we've found the right road, we can start the journey.",

      listenFor: [],

      branches: [
        {
          id: "continue",
          label: "Continue",
          nextStage: "resolution"
        }
      ]
    },

    resolution: {
      question:
        "Transition to the roadmap that matches the customer's primary concern.",

      why:
        "Ensure the conversation continues using the most appropriate coaching roadmap.",

      coachTip:
        "Eventually, this stage will automatically open the selected roadmap.",

      tieDown:
        "Let's work through that concern together.",

      transition:
        "We've identified the best place to focus.",

      analogy:
        "Like choosing the correct trail before beginning a hike.",

      listenFor: [],

      branches: []
    }
  }
};

export default noReasonGiven;
const bankruptcy = {
  title: "Considering Bankruptcy",

  coaching: {
    tieDowns: [
      {
        id: "favorite",
        favorite: true,
        text:
          "Before making a final decision, would you be open to comparing both options so you know which best fits your situation?",
        note:
          "Use after understanding why the customer is considering bankruptcy."
      },
      {
        id: "understand",
        text:
          "Would you agree it's important to understand both the advantages and limitations of bankruptcy before deciding?"
      },
      {
        id: "alternatives",
        text:
          "If bankruptcy isn't your only option, would you want to know what those alternatives are?"
      },
      {
        id: "compare",
        text:
          "Can you see why it's worth comparing every available solution before making a permanent financial decision?"
      }
    ],

    analogies: [
      {
        id: "favorite",
        favorite: true,
        text:
          "Choosing bankruptcy is like deciding to have surgery. Sometimes it's absolutely the right choice—but most people want a second opinion before making a permanent decision.",
        note:
          "Reinforces informed decision-making without discouraging bankruptcy."
      },
      {
        id: "roof",
        text:
          "It's like replacing an entire roof because of one leak. Sometimes a major solution is necessary, but it's worth making sure there isn't another effective option."
      },
      {
        id: "car",
        text:
          "Think of it like deciding whether to repair or replace a vehicle. The right decision depends on the complete picture."
      }
    ],

    rebuttals: [
      {
        id: "favorite",
        favorite: true,
        text:
          "Bankruptcy is an important option for some people. My goal isn't to talk you out of it—it's to make sure you understand every available option before making a final decision.",
        note:
          "Keep the conversation educational, never argumentative."
      },
      {
        id: "options",
        text:
          "Many customers initially believe bankruptcy is their only choice until they compare all of the available alternatives."
      },
      {
        id: "confidence",
        text:
          "If bankruptcy truly is the best solution for your situation, you'll be able to move forward with confidence knowing you explored every option."
      }
    ],

    situationCoaching: [
      {
        id: "attorney",
        title: "Already Spoke With an Attorney",

        whenToUse:
          "Customer has already received legal advice.",

        recommendations: [
          "Ask what they learned.",
          "Clarify any remaining questions.",
          "Respect legal advice.",
          "Focus on understanding the customer's goals."
        ],

        avoid: [
          "Never provide legal advice.",
          "Never discourage speaking with an attorney."
        ]
      },

      {
        id: "considering",
        title: "Considering Bankruptcy",

        whenToUse:
          "Customer is researching bankruptcy but hasn't committed.",

        recommendations: [
          "Understand what's driving the decision.",
          "Discuss available alternatives.",
          "Review progress already made."
        ],

        avoid: [
          "Avoid assuming bankruptcy is the only solution."
        ]
      },

      {
        id: "legalPressure",
        title: "Legal Pressure",

        whenToUse:
          "Customer mentions lawsuits, garnishments, or other legal concerns.",

        recommendations: [
          "Understand the urgency.",
          "Gather facts before educating.",
          "Remain empathetic and objective."
        ],

        avoid: [
          "Do not provide legal opinions."
        ]
      },

      {
        id: "freshStart",
        title: "Seeking a Fresh Start",

        whenToUse:
          "Customer is emotionally exhausted and wants relief.",

        recommendations: [
          "Acknowledge the emotional burden.",
          "Focus on the customer's long-term goals.",
          "Review all available options."
        ],

        avoid: [
          "Do not minimize their stress or frustration."
        ]
      }
    ]
  },

  stages: {
    discovery: {
      question:
        "Can you tell me what's leading you toward bankruptcy today?",

      why:
        "Understand the customer's motivation before discussing alternatives.",

      coachTip:
        "Don't assume affordability is the reason. Discover what's driving the decision.",

      tieDown:
        "Would you agree it's important we understand your situation before reviewing any options?",

      transition:
        "Thank you for sharing that with me.",

      analogy:
        "Like a financial checkup, we want to understand the full picture before discussing solutions.",

      listenFor: [
        "Outside debt",
        "Legal pressure",
        "Lawsuit",
        "Wage garnishment",
        "Foreclosure",
        "Repossession",
        "Emotional exhaustion"
      ],

      branches: [
        {
          id: "outsideDebt",
          label: "Outside Debt",
          nextStage: "diagnosis"
        },
        {
          id: "legal",
          label: "Legal Pressure",
          nextStage: "diagnosis"
        },
        {
          id: "freshStart",
          label: "Fresh Start",
          nextStage: "diagnosis"
        }
      ]
    },

    diagnosis: {
      question:
        "What are you hoping bankruptcy will accomplish for you?",

      why:
        "Identify the customer's desired outcome instead of assuming it.",

      coachTip:
        "Listen for whether they're seeking protection, simplicity, or payment relief.",

      tieDown:
        "Would you say that's your biggest priority right now?",

      transition:
        "That helps me understand what you're trying to accomplish.",

      analogy:
        "Before choosing a route, it's important to know the destination.",

      listenFor: [
        "Legal protection",
        "Outside debt",
        "Stop collections",
        "Peace of mind"
      ],

      branches: [
        {
          id: "protection",
          label: "Protection",
          nextStage: "education"
        },
        {
          id: "relief",
          label: "Debt Relief",
          nextStage: "education"
        }
      ]
    },

    education: {
      question:
        "Would it be okay if I reviewed the progress you've already made and any options that may still be available?",

      why:
        "Ensure the customer understands all available options before making a final decision.",

      coachTip:
        "Acknowledge their decision while making sure they're informed.",

      tieDown:
        "Would you be open to reviewing those options together?",

      transition:
        "Let's take a look at where you are today.",

      analogy:
        "Before changing course, it's worth checking how close you already are to your destination.",

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
        "If we can preserve the progress you've already made while supporting your overall plan, would that be worth exploring?",

      why:
        "Determine whether the customer is willing to consider available program options.",

      coachTip:
        "Present options without arguing against bankruptcy.",

      tieDown:
        "Would that be beneficial to you?",

      transition:
        "Let's review what may be possible.",

      analogy:
        "You've already invested in this journey—let's make sure you receive the benefit of that progress.",

      listenFor: [
        "Open to Options",
        "Still Wants Bankruptcy"
      ],

      branches: [
        {
          id: "accept",
          label: "Review Options",
          nextStage: "resolution"
        }
      ]
    },

    resolution: {
      question:
        "Summarize the agreed plan and confirm the customer's next steps.",

      why:
        "End the conversation with clarity and confidence.",

      coachTip:
        "Confirm expectations and thank the customer for their time.",

      tieDown:
        "Does that sound like the best next step?",

      transition:
        "I'm glad we were able to review your options together.",

      analogy:
        "Like finishing a roadmap, everyone should know the next destination.",

      listenFor: [],

      branches: []
    }
  }
};

export default bankruptcy;
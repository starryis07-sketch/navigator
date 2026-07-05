const moralEthical = {
  title: "Moral & Ethical Concerns",

  coaching: {
    tieDowns: [
      {
        id: "favorite",
        favorite: true,
        text:
          "Would it be okay if we reviewed how the program works so you can decide whether it aligns with your personal values?",
        note:
          "Use after the customer explains their moral or ethical concern."
      },
      {
        id: "understanding",
        text:
          "Would you agree it's important to fully understand your options before making a decision?"
      },
      {
        id: "values",
        text:
          "If we can answer your questions honestly, would that help you determine whether this program aligns with your beliefs?"
      },
      {
        id: "informed",
        text:
          "Can we take a few minutes to make sure you're making the most informed decision possible?"
      }
    ],

    analogies: [
      {
        id: "favorite",
        favorite: true,
        text:
          "It's like reading the entire contract before signing it. Understanding all the details helps you decide whether it's the right choice for you.",
        note:
          "Focus on informed decision-making rather than persuasion."
      },
      {
        id: "compass",
        text:
          "Your values are like a compass. The goal is to make sure you have accurate information before deciding which direction to go."
      },
      {
        id: "foundation",
        text:
          "Building any important decision starts with a solid understanding of the facts."
      }
    ],

    rebuttals: [
      {
        id: "favorite",
        favorite: true,
        text:
          "I completely respect your values. My role isn't to change your beliefs—it's simply to answer your questions so you can make the decision that's right for you.",
        note:
          "Always acknowledge the customer's perspective."
      },
      {
        id: "education",
        text:
          "The more information you have, the more confident you can be that your decision reflects your personal values."
      },
      {
        id: "clarify",
        text:
          "If there's anything about the program you're uncertain about, I'd be happy to clarify it."
      }
    ],

    situationCoaching: [
      {
        id: "religious",
        title: "Religious Beliefs",

        whenToUse:
          "Customer mentions faith or religious guidance.",

        recommendations: [
          "Listen respectfully.",
          "Ask clarifying questions.",
          "Provide factual information only."
        ],

        avoid: [
          "Never debate or interpret religious beliefs."
        ]
      },

      {
        id: "integrity",
        title: "Personal Integrity",

        whenToUse:
          "Customer feels the program conflicts with their personal values.",

        recommendations: [
          "Understand the concern.",
          "Clarify misunderstandings.",
          "Allow the customer to decide."
        ],

        avoid: [
          "Never challenge their integrity."
        ]
      },

      {
        id: "familyValues",
        title: "Family Values",

        whenToUse:
          "Customer references family expectations or upbringing.",

        recommendations: [
          "Respect those values.",
          "Answer questions objectively.",
          "Focus on informed decision-making."
        ],

        avoid: [
          "Never criticize family beliefs."
        ]
      },

      {
        id: "guilt",
        title: "Guilt or Shame",

        whenToUse:
          "Customer expresses guilt about debt resolution.",

        recommendations: [
          "Acknowledge the emotion.",
          "Avoid minimizing their feelings.",
          "Provide clear education."
        ],

        avoid: [
          "Don't tell the customer how they should feel."
        ]
      }
    ]
  },

  stages: {
    discovery: {
      question:
        "Can you tell me more about what's making you feel uncomfortable with the program?",

      why:
        "Understand the customer's values before trying to educate.",

      coachTip:
        "Never argue with a customer's beliefs. Listen first and acknowledge their perspective.",

      tieDown:
        "Would you agree it's important that any decision you make aligns with your values?",

      transition:
        "I appreciate you sharing that with me.",

      analogy:
        "Just like any important life decision, it's important to understand what matters most to you.",

      listenFor: [
        "Pastor advice",
        "Religious beliefs",
        "Promise to repay",
        "Feeling dishonest",
        "Family values",
        "Personal integrity"
      ],

      branches: [
        {
          id: "religion",
          label: "Religious Beliefs",
          nextStage: "diagnosis"
        },
        {
          id: "integrity",
          label: "Personal Integrity",
          nextStage: "diagnosis"
        },
        {
          id: "family",
          label: "Family Values",
          nextStage: "diagnosis"
        }
      ]
    },

    diagnosis: {
      question:
        "Can you help me understand what concerns you most about debt resolution?",

      why:
        "Identify the specific belief that's creating hesitation.",

      coachTip:
        "Avoid assumptions. Every customer's values are different.",

      tieDown:
        "Would you say that's your biggest concern?",

      transition:
        "Thank you for helping me understand.",

      analogy:
        "Like any important decision, understanding your concerns comes before discussing options.",

      listenFor: [
        "Feels wrong",
        "Wants to repay everyone",
        "Fear of consequences",
        "Guilt",
        "Shame"
      ],

      branches: [
        {
          id: "understanding",
          label: "Needs More Understanding",
          nextStage: "education"
        },
        {
          id: "stillConcerned",
          label: "Still Concerned",
          nextStage: "education"
        }
      ]
    },

    education: {
      question:
        "Would it be okay if I explained how the program works so you can decide whether it aligns with your personal values?",

      why:
        "Provide information without challenging the customer's beliefs.",

      coachTip:
        "Educate respectfully. Let the customer decide what's right for them.",

      tieDown:
        "Would hearing that information be helpful?",

      transition:
        "Let's walk through it together.",

      analogy:
        "Like reading the full contract before making an important decision.",

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
        "Now that we've discussed how the program works, how are you feeling about your decision?",

      why:
        "Determine whether the customer's concerns have been addressed.",

      coachTip:
        "Respect whatever decision they make. Don't pressure them.",

      tieDown:
        "Do you feel you've been able to make a fully informed decision?",

      transition:
        "I'm glad we were able to talk through your concerns.",

      analogy:
        "The best decisions are made with complete information and confidence.",

      listenFor: [
        "Ready to Continue",
        "Still Uncomfortable"
      ],

      branches: [
        {
          id: "continueProgram",
          label: "Continue Program",
          nextStage: "resolution"
        }
      ]
    },

    resolution: {
      question:
        "Summarize the discussion and confirm the customer's decision.",

      why:
        "End the conversation respectfully, regardless of the outcome.",

      coachTip:
        "Thank the customer for sharing something personal and acknowledge their thoughtful approach.",

      tieDown:
        "Do you feel comfortable with your decision today?",

      transition:
        "Thank you for taking the time to discuss your concerns with me.",

      analogy:
        "Like any important life decision, taking time to understand your options leads to greater confidence.",

      listenFor: [],

      branches: []
    }
  }
};

export default moralEthical;
const moralEthical = {
  title: "Moral & Ethical Concerns",

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
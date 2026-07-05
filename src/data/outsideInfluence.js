const outsideInfluence = {
  title: "Outside Influence",

  coaching: {
    tieDowns: [
      {
        id: "favorite",
        favorite: true,
        text:
          "Would it be okay if we addressed the specific concern together so you can make the most informed decision possible?",
        note:
          "Use after identifying what influenced the customer's decision."
      },
      {
        id: "clarify",
        text:
          "Would you agree it's important to base your decision on complete information rather than assumptions?"
      },
      {
        id: "understand",
        text:
          "If we can answer that concern today, would that help you feel more confident about your decision?"
      },
      {
        id: "confidence",
        text:
          "Do you feel it's worth taking a few minutes to make sure every question has been answered?"
      }
    ],

    analogies: [
      {
        id: "favorite",
        favorite: true,
        text:
          "It's like getting a second opinion before making an important decision. Gathering more information helps you make the best choice.",
        note:
          "Excellent when someone else has influenced the customer's thinking."
      },
      {
        id: "reviews",
        text:
          "Reading one review is rarely enough to understand the whole picture. Looking at all the information leads to a better decision."
      },
      {
        id: "map",
        text:
          "Before changing directions on a trip, it's worth checking the entire map instead of one turn."
      }
    ],

    rebuttals: [
      {
        id: "favorite",
        favorite: true,
        text:
          "I completely respect getting advice from people you trust. My goal is simply to make sure you have all the information you need before making your final decision.",
        note:
          "Respect the outside influence. Never argue against it."
      },
      {
        id: "questions",
        text:
          "Let's make sure we've answered the concern that was raised so you can make the decision that's best for you."
      },
      {
        id: "education",
        text:
          "The more complete the information, the easier it is to make a confident decision."
      }
    ],

    situationCoaching: [
      {
        id: "spouse",
        title: "Spouse or Family Member",

        whenToUse:
          "The customer wants to discuss the decision with a spouse or family member.",

        recommendations: [
          "Ask what concerns were raised.",
          "Offer to answer those concerns.",
          "Respect their desire to involve family."
        ],

        avoid: [
          "Never criticize family members or encourage the customer to ignore them."
        ]
      },

      {
        id: "reviews",
        title: "Online Reviews",

        whenToUse:
          "Customer read reviews that created concern.",

        recommendations: [
          "Ask what specifically concerned them.",
          "Address only that concern.",
          "Provide factual information."
        ],

        avoid: [
          "Do not argue about reviews."
        ]
      },

      {
        id: "friend",
        title: "Friend or Coworker",

        whenToUse:
          "Customer changed their mind after talking to someone they know.",

        recommendations: [
          "Discover exactly what was said.",
          "Clarify misunderstandings.",
          "Keep the conversation educational."
        ],

        avoid: [
          "Never criticize the other person's advice."
        ]
      },

      {
        id: "buyersRemorse",
        title: "Second Thoughts",

        whenToUse:
          "Customer is simply reconsidering their decision.",

        recommendations: [
          "Slow the conversation down.",
          "Identify the real concern.",
          "Answer questions one at a time."
        ],

        avoid: [
          "Don't assume they want to cancel."
        ]
      }
    ]
  },

  stages: {
    discovery: {
      question:
        "Can you tell me what happened between when you enrolled and today?",

      why:
        "Discover who or what influenced the customer's decision before responding.",

      coachTip:
        "Stay neutral. Never criticize the person giving the advice.",

      tieDown:
        "Would you mind sharing what led you to reconsider your decision?",

      transition:
        "I appreciate you sharing that with me.",

      analogy:
        "Before changing directions, it's helpful to understand what caused the change.",

      listenFor: [
        "Spouse",
        "Parent",
        "Pastor",
        "Friend",
        "Coworker",
        "Attorney",
        "Online Reviews",
        "Social Media",
        "Moral Concerns",
        "Signed Up Too Fast"
      ],

      branches: [
        {
          id: "person",
          label: "Someone Influenced Me",
          nextStage: "diagnosis"
        },
        {
          id: "reviews",
          label: "Read Reviews",
          nextStage: "diagnosis"
        },
        {
          id: "secondThoughts",
          label: "Having Second Thoughts",
          nextStage: "diagnosis"
        }
      ]
    },

    diagnosis: {
      question:
        "What was it about that conversation or information that concerned you the most?",

      why:
        "Identify the actual concern instead of addressing assumptions.",

      coachTip:
        "People rarely change their minds without a specific concern driving the decision.",

      tieDown:
        "Would you say that's your biggest concern today?",

      transition:
        "That helps me understand where you're coming from.",

      analogy:
        "It's like reading only one review before buying a car—you want the complete picture.",

      listenFor: [
        "Credit Score",
        "Scam Concerns",
        "Fees",
        "Morally Wrong",
        "Fear",
        "Trust",
        "Buyer Remorse"
      ],

      branches: [
        {
          id: "credit",
          label: "Credit Concern",
          nextStage: "education"
        },
        {
          id: "trust",
          label: "Trust Concern",
          nextStage: "education"
        },
        {
          id: "ethics",
          label: "Moral Concern",
          nextStage: "education"
        }
      ]
    },

    education: {
      question:
        "Would it be okay if I addressed that concern so you can make the most informed decision possible?",

      why:
        "Ask permission before educating the customer.",

      coachTip:
        "Address only the concern the customer identified.",

      tieDown:
        "Would that be helpful?",

      transition:
        "Let's look at that together.",

      analogy:
        "It's like getting a second opinion before making an important decision.",

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
        "Now that we've talked through your concern, how are you feeling about moving forward?",

      why:
        "Confirm whether the customer's concern has been resolved.",

      coachTip:
        "Ask for commitment naturally. Don't pressure.",

      tieDown:
        "Do you feel more comfortable now that we've discussed it?",

      transition:
        "I'm glad we had the opportunity to talk through everything.",

      analogy:
        "Sometimes one conversation can completely change your perspective.",

      listenFor: [
        "Ready to Continue",
        "Still Unsure"
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
        "Summarize the agreed plan and confirm the customer's next steps.",

      why:
        "End the conversation with confidence and clarity.",

      coachTip:
        "Thank the customer for giving you the opportunity to answer their concerns.",

      tieDown:
        "Does moving forward feel like the right decision for you?",

      transition:
        "Excellent. Let's review what happens next.",

      analogy:
        "Like making any important decision, having complete information builds confidence.",

      listenFor: [],

      branches: []
    }
  }
};

export default outsideInfluence;
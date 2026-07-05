const outsideInfluence = {
  title: "Outside Influence",

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
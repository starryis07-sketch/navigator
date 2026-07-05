const noreasongiven = {
  title: "No Reason Given",

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

export default noreasongiven;
const creditScore = {
  title: "Credit Score",

  stages: {
    discovery: {
      question:
        "Can you tell me more about your concerns regarding your credit score?",

      why:
        "Identify the customer's specific concern before providing education.",

      coachTip:
        "Don't assume they're trying to buy a home or car. Discover the reason first.",

      tieDown:
        "Would you agree it's important we understand your goal before discussing options?",

      transition:
        "Thanks for explaining that.",

      analogy:
        "Like checking your destination before choosing the best route.",

      listenFor: [
        "Buying a home",
        "Buying a vehicle",
        "Employment",
        "General concern",
        "Family advice"
      ],

      branches: [
        {
          id: "majorPurchase",
          label: "Major Purchase",
          nextStage: "diagnosis"
        },
        {
          id: "generalConcern",
          label: "General Concern",
          nextStage: "diagnosis"
        },
        {
          id: "Employment",
          label: "Employment",
          nextStage: "diagnosis"
        }
      ]
    },

    diagnosis: {
      question:
        "When are you planning to make that purchase or need your credit?",

      why:
        "Determine the timeline and urgency of the customer's concern.",

      coachTip:
        "The timeline often determines the best conversation.",

      tieDown:
        "Would you say that's your biggest priority right now?",

      transition:
        "That helps me understand your timeline.",

      analogy:
        "Like planning a vacation, timing changes the best route.",

      listenFor: [
        "Within 6 months",
        "Within a year",
        "No specific timeline"
      ],

      branches: [
        {
          id: "soon",
          label: "Soon",
          nextStage: "education"
        },
        {
          id: "later",
          label: "Later",
          nextStage: "education"
        }
      ]
    },

    education: {
      question:
        "Would it be okay if I explained how debt settlement and credit recovery typically work over time?",

      why:
        "Ensure the customer understands the long-term picture before making a decision.",

      coachTip:
        "Focus on education rather than trying to 'win' the argument.",

      tieDown:
        "Would that information help you make the best decision?",

      transition:
        "Let me explain what we typically see.",

      analogy:
        "Think of rebuilding credit like recovering from an injury—it takes time, but progress happens with the right plan.",

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
        "Knowing that, do you feel comfortable continuing toward your long-term financial goals?",

      why:
        "Determine whether the customer is ready to move forward.",

      coachTip:
        "Connect today's decision with tomorrow's financial goals.",

      tieDown:
        "Does that make sense based on what we've discussed?",

      transition:
        "I'm glad we had the opportunity to review that together.",

      analogy:
        "Like planting a tree, the best results come from staying committed over time.",

      listenFor: [
        "Ready to Continue",
        "Still Hesitant"
      ],

      branches: [
        {
          id: "agree",
          label: "Continue Program",
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
        "Confirm expectations and thank the customer.",

      tieDown:
        "Are you comfortable moving forward?",

      transition:
        "Excellent. Let's review our plan together.",

      analogy:
        "Like finishing a journey, it's important everyone knows the next step.",

      listenFor: [],

      branches: []
    }
  }
};

export default creditScore;
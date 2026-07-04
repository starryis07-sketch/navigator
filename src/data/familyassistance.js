const familyAssistance = {
  title: "Family Assistance",

  stages: {
    discovery: {
      question:
        "Can you tell me more about how your family plans to help?",

      why:
        "Understand whether the customer has a confirmed plan or is still exploring options.",

      coachTip:
        "Stay curious. Don't assume the family can solve the entire debt problem.",

      tieDown:
        "Would you agree it's important to make sure the plan covers everything you're hoping to accomplish?",

      transition:
        "I appreciate you sharing that with me.",

      analogy:
        "Just like planning a road trip, it's important to know the destination before choosing the route.",

      listenFor: [
        "Loan from family",
        "Gift from family",
        "Borrowing temporarily",
        "Waiting for tax refund",
        "Not enough to cover all debt"
      ],

      branches: [
        {
          id: "loan",
          label: "Borrowing Money",
          nextStage: "diagnosis"
        },
        {
          id: "gift",
          label: "Family Gift",
          nextStage: "diagnosis"
        },
        {
          id: "partial",
          label: "Partial Help",
          nextStage: "diagnosis"
        }
      ]
    },

    diagnosis: {
      question:
        "Will the assistance cover all of your enrolled debt, or only part of it?",

      why:
        "Determine whether the family assistance fully resolves the customer's financial goals.",

      coachTip:
        "Understand whether this is a complete solution or a temporary one.",

      tieDown:
        "Would you say your biggest goal is becoming debt free without creating new financial strain?",

      transition:
        "That helps me understand your plan better.",

      analogy:
        "It's like patching one leak while another is still dripping.",

      listenFor: [
        "Enough to settle everything",
        "Only helps temporarily",
        "Still has outside debt"
      ],

      branches: [
        {
          id: "complete",
          label: "Complete Solution",
          nextStage: "education"
        },
        {
          id: "partial",
          label: "Partial Solution",
          nextStage: "education"
        }
      ]
    },

    education: {
      question:
        "Would it be okay if we compared your family assistance plan with the progress you've already made in the program?",

      why:
        "Help the customer make an informed comparison before deciding.",

      coachTip:
        "Focus on education, not persuasion.",

      tieDown:
        "Would it be helpful to compare both options together?",

      transition:
        "Let's take a look at what you've already accomplished.",

      analogy:
        "It's like comparing two maps before choosing the best route.",

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
        "If continuing with the program still helps you reach your goal while avoiding unnecessary financial strain on your family, would you be open to exploring that?",

      why:
        "Determine whether the customer is willing to consider staying in the program.",

      coachTip:
        "Respect the family's willingness to help while exploring the customer's long-term goals.",

      tieDown:
        "Would that be worth considering?",

      transition:
        "Let's review the best path forward together.",

      analogy:
        "Sometimes the shortest path isn't the easiest, but it's the one that gets you there with the least stress.",

      listenFor: [
        "Open to Staying",
        "Still Wants Family Help"
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
        "Summarize the agreed plan and confirm the customer's next steps.",

      why:
        "End the conversation with clear expectations.",

      coachTip:
        "Recap the plan and reinforce the customer's decision.",

      tieDown:
        "Does that sound like the best next step for you?",

      transition:
        "I'm glad we could review your options together.",

      analogy:
        "Like reaching the end of a roadmap, everyone should know the next destination.",

      listenFor: [],

      branches: []
    }
  }
};

export default familyAssistance;
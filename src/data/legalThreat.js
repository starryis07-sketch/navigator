const legalThreat = {
  title: "Legal Threat",

  coaching: {
    tieDowns: [
      {
        id: "favorite",
        favorite: true,
        text:
          "Would it be okay if we reviewed where you are in the legal process before discussing your options?",
        note:
          "Gather the facts before discussing possible solutions."
      },
      {
        id: "understand",
        text:
          "Would you agree it's important to understand exactly where things stand before deciding what to do next?"
      },
      {
        id: "options",
        text:
          "If there are still options available, would you like to review them together?"
      },
      {
        id: "clarify",
        text:
          "Can we take a couple of minutes to make sure you have the complete picture before making your decision?"
      }
    ],

    analogies: [
      {
        id: "favorite",
        favorite: true,
        text:
          "It's like using a GPS. Before deciding which way to go, you first need to know exactly where you are.",
        note:
          "Great for explaining why discovery comes first."
      },
      {
        id: "doctor",
        text:
          "Just like a doctor gathers information before recommending treatment, it's important to understand your legal situation before reviewing options."
      },
      {
        id: "roadmap",
        text:
          "Before taking the next exit, it's important to know where you are on the map."
      }
    ],

    rebuttals: [
      {
        id: "favorite",
        favorite: true,
        text:
          "I understand this situation can feel overwhelming. My goal is simply to understand where things stand so we can review the options that may still be available.",
        note:
          "Remain calm and never provide legal advice."
      },
      {
        id: "education",
        text:
          "The more we understand about your situation, the better we can discuss what options may still exist."
      },
      {
        id: "facts",
        text:
          "Let's focus on the facts first so you can make an informed decision."
      }
    ],

    situationCoaching: [
      {
        id: "served",
        title: "Served With Legal Papers",

        whenToUse:
          "Customer has already been served.",

        recommendations: [
          "Determine dates.",
          "Ask whether an attorney is involved.",
          "Review available program options."
        ],

        avoid: [
          "Never provide legal advice."
        ]
      },

      {
        id: "garnishment",
        title: "Wage Garnishment",

        whenToUse:
          "Customer mentions garnishment.",

        recommendations: [
          "Gather facts.",
          "Review account status.",
          "Discuss available program options."
        ],

        avoid: [
          "Don't speculate about legal outcomes."
        ]
      },

      {
        id: "attorney",
        title: "Attorney Involved",

        whenToUse:
          "Customer already has legal counsel.",

        recommendations: [
          "Respect legal representation.",
          "Answer program questions only."
        ],

        avoid: [
          "Never contradict legal counsel."
        ]
      },

      {
        id: "lawsuit",
        title: "Pending Lawsuit",

        whenToUse:
          "Customer is concerned about an active lawsuit.",

        recommendations: [
          "Stay calm.",
          "Gather information.",
          "Focus on available program options."
        ],

        avoid: [
          "Don't predict legal outcomes."
        ]
      }
    ]
  },

  stages: {
    discovery: {
      question:
        "Can you tell me what's happening with the legal situation?",

      why:
        "Understand the current legal status before discussing options.",

      coachTip:
        "Don't panic with the customer. Stay calm and gather facts first.",

      tieDown:
        "Would you agree it's important we understand exactly where things stand?",

      transition:
        "Thank you for explaining that.",

      analogy:
        "Like going to the doctor, the diagnosis comes before the treatment.",

      listenFor: [
        "Summons received",
        "Court date",
        "Attorney",
        "Wage garnishment",
        "Judgment",
        "Collection lawsuit"
      ],

      branches: [
        {
          id: "served",
          label: "Served Papers",
          nextStage: "diagnosis"
        },
        {
          id: "garnishment",
          label: "Garnishment",
          nextStage: "diagnosis"
        },
        {
          id: "threat",
          label: "Legal Threat Only",
          nextStage: "diagnosis"
        }
      ]
    },

    diagnosis: {
      question:
        "Have you already responded or spoken with an attorney regarding this matter?",

      why:
        "Determine where the customer is in the legal process.",

      coachTip:
        "The customer's next steps depend on where they are legally.",

      tieDown:
        "Would you agree knowing where you are in the process helps determine your options?",

      transition:
        "That gives me a better picture of your situation.",

      analogy:
        "Like checking where you are on a map before choosing the next turn.",

      listenFor: [
        "Attorney retained",
        "Court scheduled",
        "No response yet",
        "Unsure"
      ],

      branches: [
        {
          id: "attorney",
          label: "Attorney Involved",
          nextStage: "education"
        },
        {
          id: "noAttorney",
          label: "No Attorney",
          nextStage: "education"
        }
      ]
    },

    education: {
      question:
        "Would it be okay if we reviewed what options may still be available based on where you are today?",

      why:
        "Help the customer understand available options without giving legal advice.",

      coachTip:
        "Provide program information only. Avoid legal advice.",

      tieDown:
        "Would reviewing those options together be helpful?",

      transition:
        "Let's look at what may still be available.",

      analogy:
        "Like reviewing all available exits before leaving the highway.",

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
        "Based on everything we've reviewed, what do you feel is the best next step for you?",

      why:
        "Allow the customer to make an informed decision.",

      coachTip:
        "Avoid pressure. Let the customer own the decision.",

      tieDown:
        "Does that seem like the right path for you?",

      transition:
        "I'm glad we reviewed everything together.",

      analogy:
        "Like choosing the safest route after seeing every option.",

      listenFor: [
        "Continue Program",
        "Needs More Information"
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
        "Summarize the plan, review next steps, and thank the customer for their time.",

      why:
        "End the conversation with clarity.",

      coachTip:
        "Ensure the customer knows exactly what happens next.",

      tieDown:
        "Does that sound like the best next step?",

      transition:
        "Thank you for taking the time to review your options today.",

      analogy:
        "Every roadmap ends with knowing your next destination.",

      listenFor: [],

      branches: []
    }
  }
};

export default legalThreat;
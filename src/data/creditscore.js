const creditScore = {
  title: "Credit Score",

  coaching: {
    tieDowns: [
      {
        id: "favorite",
        favorite: true,
        text:
          "Does that help put the temporary score impact into perspective?",
        note:
          "Use after educating the customer about the difference between temporary credit impact and long-term financial health.",
        whenToUse:
          "Customer is focused on today's score rather than becoming debt free."
      },
      {
        id: "foundation",
        text:
          "Would you agree becoming debt free is the first step toward rebuilding your credit?",
        whenToUse:
          "Customer believes protecting today's score is more important than resolving debt."
      },
      {
        id: "longterm",
        text:
          "Can you see how resolving the debt creates a stronger financial foundation?",
        whenToUse:
          "Customer is thinking about future financial goals."
      },
      {
        id: "betterPath",
        text:
          "Would you agree that's the better long-term solution?",
        whenToUse:
          "Customer understands the education but is still hesitant."
      }
    ],

    analogies: [
      {
        id: "favorite",
        favorite: true,
        text:
          "Building credit is like building a house. A strong foundation comes before everything else.",
        note:
          "Foundation first, then growth."
      },
      {
        id: "reportCard",
        text:
          "Think of your credit score like a report card. One bad grade doesn't determine your future. Consistent improvement changes the overall result."
      },
      {
        id: "twoSteps",
        text:
          "Sometimes you take one step back so you can take two steps forward."
      }
    ],

    rebuttals: [
      {
        id: "favorite",
        favorite: true,
        text:
          "I completely understand why your credit score is important. My concern is that protecting today's score while remaining buried in debt often creates a much bigger financial challenge over time.",
        note:
          "Lead with empathy before educating."
      },
      {
        id: "longTerm",
        text:
          "Our goal isn't simply improving a credit score. It's helping you build long-term financial stability."
      },
      {
        id: "education",
        text:
          "Credit can recover over time. Eliminating overwhelming debt often creates a much stronger financial future."
      }
    ],

    situationCoaching: [
      {
        id: "home",
        title: "Buying a Home",

        whenToUse:
          "Customer is concerned about qualifying for a mortgage.",

        recommendations: [
          "Determine purchase timeline.",
          "Discuss long-term financial health.",
          "Educate without making promises."
        ],

        avoid: [
          "Do not guarantee mortgage qualification."
        ]
      },

      {
        id: "vehicle",
        title: "Buying a Vehicle",

        whenToUse:
          "Customer needs financing for transportation.",

        recommendations: [
          "Determine urgency.",
          "Discuss available options.",
          "Keep focus on overall financial improvement."
        ],

        avoid: [
          "Avoid making lending predictions."
        ]
      },

      {
        id: "employment",
        title: "Employment Concern",

        whenToUse:
          "Customer is worried about employment or background checks.",

        recommendations: [
          "Ask questions before assuming.",
          "Determine whether credit is actually part of the hiring process."
        ],

        avoid: [
          "Do not assume every employer checks credit."
        ]
      },

      {
        id: "general",
        title: "General Credit Concern",

        whenToUse:
          "Customer simply wants to protect their credit score.",

        recommendations: [
          "Educate on temporary versus long-term impact.",
          "Refocus on becoming debt free.",
          "Use the Foundation analogy."
        ],

        avoid: [
          "Avoid arguing about credit scores."
        ]
      }
    ]
  },

  stages: {
    discovery: {
      question:
        "Can you tell me more about your concerns regarding your credit score?",

      why:
        "Identify the customer's specific concern before providing education.",

      coachTip:
        "Don't assume they're buying a home or car. Discover the reason first.",

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
          id: "employment",
          label: "Employment",
          nextStage: "diagnosis"
        }
      ]
    },

    diagnosis: {
      question:
        "When are you planning to make that purchase or need your credit?",

      why:
        "Determine the timeline and urgency.",

      coachTip:
        "The timeline often changes the conversation.",

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
        "Educate before asking for commitment.",

      coachTip:
        "Keep the focus on long-term financial health.",

      tieDown:
        "Would that information help you make the best decision?",

      transition:
        "Let me explain what we typically see.",

      analogy:
        "Rebuilding credit is like recovering from an injury. It takes time, but consistent progress leads to recovery.",

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
        "Gain commitment after education.",

      coachTip:
        "Connect today's decision with tomorrow's goals.",

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
        "End with clarity and confidence.",

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
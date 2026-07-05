const affordability = {
  title: "Affordability",

  coaching: {
    tieDowns: [
      {
        id: "favorite",
        favorite: true,
        text:
          "If we can provide some temporary relief without losing the progress you've already made, would you be open to exploring that option?",
        note:
          "Great after identifying a temporary hardship or when the customer is worried about affordability."
      },
      {
        id: "options",
        text:
          "Would you agree it's important to look at every available option before making a final decision?"
      },
      {
        id: "perspective",
        text:
          "Does that help put the temporary score impact into perspective?"
      },
      {
        id: "longterm",
        text:
          "Would you agree that's a better long-term solution?"
      },
      {
        id: "firststep",
        text:
          "Can you see how that's the necessary first step toward reaching your goal?"
      },
      {
        id: "betteroption",
        text:
          "Does that seem like the better option?"
      },
      {
        id: "sound",
        text:
          "How does that sound to you?"
      },
      {
        id: "debtfree",
        text:
          "Can you see how staying the course gets you closer to becoming debt free?"
      }
    ],

  analogies: [
      {
       id: "favorite",
       favorite: true,
       text:
       "Life happens. It's a little like hitting a detour on a road trip. The destination hasn't changed—we just need to find the best way through this stretch.",
       note:
       "Excellent for temporary financial hardships. Reinforces that the goal remains the same."
     },
     {
      id: "flat-tire",
      text:
      "Think of it like getting a flat tire. You wouldn't abandon the trip—you'd fix the tire and keep moving toward your destination."
    },
    {
      id: "mountain",
      text:
      "You've already climbed a large part of the mountain. This challenge doesn't erase the progress you've made; it just means we need to help you over the next section."
    }
    ],

    rebuttals: [
    {
    id: "favorite",
    favorite: true,
    text:
      "I understand things are difficult right now, but let's consider your long-term financial goals. The debt isn't going anywhere, and our program was designed around helping people through financial hardships.",
    note:
      "Lead with empathy, then redirect the conversation toward the customer's long-term objective."
    },
    {
    id: "hardship",
    text:
      "We're not the creditors—we're a hardship-based program built to help make resolving debt more affordable."
    },
    {
    id: "alternatives",
    text:
      "Let's look at the alternatives. Bankruptcy isn't the right fit for everyone, especially if rebuilding credit is important. Working directly with creditors can also be challenging because they represent their own interests."
    },
    {
    id: "help",
    text:
      "If you're having a hard time right now, let me see what options may be available. I'm confident we can explore a solution that helps you through this difficult period."
    }
    ],

    situationCoaching: [
    {
    id: "temporary-hardship",
    title: "Temporary Hardship",

    whenToUse:
      "The customer expects their financial situation to improve.",

    recommendations: [
      "Explore temporary deposit adjustments.",
      "Reinforce the progress already made.",
      "Focus on preserving momentum toward becoming debt free.",
      "Ask whether temporary relief would help them stay enrolled."
    ],

    avoid: [
      "Assuming they want to cancel immediately.",
      "Jumping into rebuttals before diagnosing the hardship."
    ]
    },

    {
    id: "progress-exists",
    title: "Customer Has Progress",

    whenToUse:
      "The customer has already invested time or money into the program.",

    recommendations: [
      "Acknowledge the progress they've already made.",
      "Remind them they have momentum worth protecting.",
      "Position temporary relief before cancellation."
    ],

    avoid: [
      "Ignoring the work they've already invested."
    ]
    },

    {
    id: "offers-exist",
    title: "Settlement Offers Exist",

    whenToUse:
      "There are active settlement offers on the account.",

    recommendations: [
      "Review how changes could affect current offers.",
      "Help the customer understand what may happen if they leave now."
    ],

    avoid: [
      "Guaranteeing offers will remain available."
    ]
    },

    {
    id: "no-offers",

    title: "No Offers Yet",

    whenToUse:
      "The customer is still accumulating funds before negotiations begin.",

    recommendations: [
      "Explain that building savings is what allows negotiations later.",
      "Reinforce that today's deposits create tomorrow's opportunities."
    ],

    avoid: [
      "Making it sound like no progress has been made."
    ]
    }
    ],
    },
   stages: {
    discovery: {
  goal:
    "Understand what changed financially before discussing solutions.",

  openingQuestion:
    "What changed financially?",

  probingQuestions: [
    "What changed in your finances?",
    "Have your hours been reduced?",
    "Are you on a fixed income?",
    "Are you still paying your creditors directly?",
    "Have you stopped paying your creditors?",
    "What changed between when you enrolled and today?",
    "What do you plan on doing with your debt if you do not move forward with the program?"
  ],

  listenFor: [
    "Job loss",
    "Reduced hours",
    "Medical hardship",
    "Fixed income",
    "Car repairs",
    "Unexpected expenses",
    "Temporary hardship",
    "Permanent hardship"
  ],

  coachNotes: [
    "Ask one question at a time.",
    "Do not educate yet.",
    "Allow the customer time to answer.",
    "Determine whether the hardship is temporary or permanent."
  ],

  bestPractices: [
    "Build rapport first.",
    "Diagnose before recommending.",
    "Mirror the customer's language."
  ],

  redFlags: [
    "Already stopped paying creditors",
    "Active lawsuit",
    "Considering bankruptcy"
  ],

  branches: [
    {
      id: "temporary",
      label: "Temporary Hardship",
      nextStage: "diagnosis"
    },
    {
      id: "permanent",
      label: "Permanent Hardship",
      nextStage: "diagnosis"
    }
  ]
},

    diagnosis: {
      question: "How long has your income been affected?",

      why:
        "Determine whether the hardship is temporary or long-term.",

      coachTip:
        "Understand the timeline before discussing solutions.",

      tieDown:
        "Would you agree the length of the hardship helps determine the best option?",

      transition:
        "That helps me understand your situation.",

      analogy:
        "Like checking whether a flat tire needs air or replacing.",

      listenFor: [
        "Temporary",
        "Permanent",
        "Looking for Work"
      ],

      branches: [
        {
          id: "temporary",
          label: "Temporary",
          nextStage: "education"
        },
        {
          id: "permanent",
          label: "Permanent",
          nextStage: "education"
        }
      ]
    },

    education: {
      question:
        "Would it be okay if I shared an option that may help?",

      why:
        "Gain permission before presenting recommendations.",

      coachTip:
        "People are more receptive when they choose to listen.",

      tieDown:
        "Would you be open to hearing one possibility?",

      transition:
        "Based on what you've shared...",

      analogy:
        "Like looking at every route before starting a trip.",

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
        "If we can help address your biggest concern, would you be willing to continue working toward your financial goals with us?",

      why:
        "Gain commitment before completing the save.",

      coachTip:
        "Ask confidently. Don't assume the answer is no.",

      tieDown:
        "Does that sound fair?",

      transition:
        "Let's put that plan into action.",

      analogy:
        "You've already climbed most of the mountain—let's finish the last stretch.",

      listenFor: [
        "Agreement",
        "Remaining Concern",
        "Need More Information"
      ],

      branches: [
        {
          id: "accept",
          label: "Customer Agrees",
          nextStage: "resolution"
        }
      ]
    },

    resolution: {
      question:
        "Summarize the agreed plan and confirm the customer's next steps.",

      why:
        "End the call with clarity and confidence.",

      coachTip:
        "Recap everything and thank the customer.",

      tieDown:
        "Are you comfortable moving forward with this plan?",

      transition:
        "Excellent. Let's review what we've accomplished today.",

      analogy:
        "Like crossing the finish line after a long race.",

      listenFor: [],

      branches: []
    }
  }
};

export default affordability;
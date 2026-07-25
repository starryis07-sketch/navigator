const slowProgress = {
  title: "Slow Progress",

  coaching: {
    tieDowns: [
      {
        id: "favorite",
        favorite: true,
        text:
          "Would it be helpful if we reviewed the progress you've already made so you have the complete picture before making a decision?",
        note:
          "Use after the customer explains why they feel the program isn't progressing."
      },
      {
        id: "expectations",
        text:
          "Would you agree it's important to compare where you expected to be with where you actually are today?"
      },
      {
        id: "milestones",
        text:
          "If we can identify the progress that's already been made, would that help you decide on the best next step?"
      },
      {
        id: "finish",
        text:
          "Can you see why it's important to look at the entire journey instead of only today's snapshot?"
      }
    ],

    analogies: [
      {
        id: "favorite",
        favorite: true,
        text:
          "Running a marathon doesn't always feel rewarding mile by mile, but every mile brings you closer to the finish line.",
        note:
          "Excellent when the customer feels they're not progressing fast enough."
      },
      {
        id: "tree",
        text:
          "Watching a tree grow can feel slow until you compare it to where it started."
      },
      {
        id: "roadTrip",
        text:
          "On a long road trip it can feel like you're not getting anywhere until you look back at how many miles you've already traveled."
      }
    ],

    rebuttals: [
      {
        id: "favorite",
        favorite: true,
        text:
          "I understand why it feels frustrating. My goal is to review where you are today so you can decide based on your actual progress rather than how it feels in the moment.",
        note:
          "Acknowledge the frustration before reviewing progress."
      },
      {
        id: "progress",
        text:
          "Many customers feel discouraged until they see everything that's already been accomplished."
      },
      {
        id: "timeline",
        text:
          "Sometimes progress is easier to recognize when we step back and look at the bigger picture."
      }
    ],

    situationCoaching: [
      {
        id: "noSettlements",
        title: "No Settlements Yet",

        whenToUse:
          "Customer believes nothing has happened.",

        recommendations: [
          "Review account milestones.",
          "Discuss the normal settlement timeline.",
          "Focus on measurable progress."
        ],

        avoid: [
          "Don't promise settlement dates."
        ]
      },

      {
        id: "timeline",
        title: "Taking Longer Than Expected",

        whenToUse:
          "Customer expected faster results.",

        recommendations: [
          "Review expectations.",
          "Explain where they are in the process.",
          "Discuss next milestones."
        ],

        avoid: [
          "Don't minimize their frustration."
        ]
      },

      {
        id: "collections",
        title: "Still Receiving Collection Calls",

        whenToUse:
          "Customer believes calls should have stopped.",

        recommendations: [
          "Explain what is normal.",
          "Review available resources.",
          "Answer specific concerns."
        ],

        avoid: [
          "Don't guarantee collection activity will stop immediately."
        ]
      },

      {
        id: "fatigue",
        title: "Program Fatigue",

        whenToUse:
          "Customer is tired of making payments or waiting.",

        recommendations: [
          "Acknowledge the emotional fatigue.",
          "Review progress already made.",
          "Reconnect them with their original goal."
        ],

        avoid: [
          "Don't dismiss their frustration."
        ]
      }
    ]
  },

  stages: {
    discovery: {
      question:
        "Can you tell me what has you feeling like the program isn't working?",

      why:
        "Identify the specific source of the customer's frustration instead of assuming.",

      coachTip:
        "Let the customer vent before trying to explain the program.",

      tieDown:
        "Would you agree understanding what's frustrating you most is the best place to start?",

      transition:
        "I appreciate you sharing that with me.",

      analogy:
        "Before fixing a problem, it's important to identify exactly what's causing it.",

      listenFor: [
        "No settlements",
        "Taking too long",
        "Payment fatigue",
        "Collection calls",
        "Lawsuits",
        "Didn't understand timeline"
      ],

      branches: [
        {
          id: "timeline",
          label: "Taking Too Long",
          nextStage: "diagnosis"
        },
        {
          id: "settlements",
          label: "No Settlements Yet",
          nextStage: "diagnosis"
        },
        {
          id: "collections",
          label: "Still Getting Calls",
          nextStage: "diagnosis"
        }
      ]
    },

    diagnosis: {
      question:
        "When you enrolled, what were you expecting the process would look like?",

      why:
        "Compare the customer's expectations with reality to identify misunderstandings.",

      coachTip:
        "Many frustrations come from unmet expectations rather than poor progress.",

      tieDown:
        "Would you agree it's helpful to compare your expectations with where you are today?",

      transition:
        "That helps me understand what you were expecting.",

      analogy:
        "Like taking a road trip, progress can feel slow until you look at how far you've already traveled.",

      listenFor: [
        "Expected faster settlements",
        "Expected calls to stop",
        "Didn't understand process"
      ],

      branches: [
        {
          id: "expectations",
          label: "Expectation Gap",
          nextStage: "education"
        },
        {
          id: "actualIssue",
          label: "Actual Delay",
          nextStage: "education"
        }
      ]
    },

    education: {
      question:
        "Would it be okay if we reviewed the progress you've already made and what typically happens during this stage of the program?",

      why:
        "Reconnect the customer with the progress they've already achieved.",

      coachTip:
        "Use facts from their account whenever possible.",

      tieDown:
        "Would reviewing your progress together be helpful?",

      transition:
        "Let's take a look at everything you've accomplished so far.",

      analogy:
        "It's like watching a tree grow—you may not notice daily changes until you step back and look at the bigger picture.",

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
        "Knowing where you are today, do you feel continuing the program still gives you the best opportunity to reach your financial goals?",

      why:
        "Help the customer recommit after reviewing their progress.",

      coachTip:
        "Celebrate progress before asking for commitment.",

      tieDown:
        "Would you agree you've already invested a lot toward your goal?",

      transition:
        "Let's keep building on the progress you've already made.",

      analogy:
        "It's like running a marathon—you don't quit at mile 20 because the finish line is still ahead.",

      listenFor: [
        "Ready to Continue",
        "Still Unsure"
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
        "Summarize the customer's progress, confirm the plan, and reinforce the next milestone.",

      why:
        "Leave the customer confident about what happens next.",

      coachTip:
        "Finish with confidence and appreciation.",

      tieDown:
        "Does that plan sound good to you?",

      transition:
        "I'm glad we had the opportunity to review everything together.",

      analogy:
        "Every long journey has milestones—today we made sure you're still headed toward your destination.",

      listenFor: [],

      branches: []
    }
  }
};

export default slowProgress;
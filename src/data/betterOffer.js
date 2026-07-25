const betterOffer = {
  title: "Better Offer",

  coaching: {
    tieDowns: [
      {
        id: "favorite",
        favorite: true,
        text:
          "Would you agree it's important to compare the complete solution rather than just one number?",
        note:
          "Use after discovering the customer is focused on payment or fees."
      },
      {
        id: "value",
        text:
          "If we can compare both options side by side, would that help you make the best decision?"
      },
      {
        id: "longTerm",
        text:
          "Can you see why looking beyond the monthly payment is important?"
      },
      {
        id: "goals",
        text:
          "Would you agree the best program should help you reach your long-term financial goals, not just lower today's payment?"
      }
    ],

    analogies: [
      {
        id: "favorite",
        favorite: true,
        text:
          "It's like buying a car. The monthly payment matters, but so do reliability, warranty, and total cost of ownership.",
        note:
          "Excellent when the customer is focused only on payment."
      },
      {
        id: "insurance",
        text:
          "Choosing a debt resolution program is like comparing insurance policies. The cheapest option isn't always the one with the best coverage."
      },
      {
        id: "cellphone",
        text:
          "It's like comparing cell phone plans. You want to know exactly what's included before deciding."
      },
      {
        id: "airline",
        text:
          "It's like booking a flight. A cheaper ticket isn't always the better value once you consider baggage fees, seat selection, and flexibility."
      }
    ],

    rebuttals: [
      {
        id: "favorite",
        favorite: true,
        text:
          "A lower payment doesn't always mean a better outcome. Let's compare the complete picture so you can make the best decision.",
        note:
          "Stay educational. Never criticize the competitor."
      },
      {
        id: "facts",
        text:
          "My goal isn't to convince you that we're better. It's to make sure you're comparing the same services so you can make an informed decision."
      },
      {
        id: "questions",
        text:
          "Before making your decision, let's make sure we've answered every question about both options."
      }
    ],

    situationCoaching: [
      {
        id: "lowerPayment",
        title: "Lower Monthly Payment",

        whenToUse:
          "Customer is comparing payment amounts.",

        recommendations: [
          "Discover whether affordability or total value is driving the decision.",
          "Compare the complete solution.",
          "Explain differences objectively."
        ],

        avoid: [
          "Do not assume lower payment means better value."
        ]
      },

      {
        id: "lowerFees",
        title: "Lower Fees",

        whenToUse:
          "Customer is focused on program fees.",

        recommendations: [
          "Compare overall program value.",
          "Explain services included.",
          "Help the customer compare apples to apples."
        ],

        avoid: [
          "Do not criticize competitor pricing."
        ]
      },

      {
        id: "competitor",
        title: "Competitor Offer",

        whenToUse:
          "Customer has received another offer.",

        recommendations: [
          "Ask what stood out.",
          "Compare features objectively.",
          "Clarify misunderstandings if they exist."
        ],

        avoid: [
          "Avoid speaking negatively about another company."
        ]
      },

      {
        id: "misunderstanding",
        title: "Possible Misunderstanding",

        whenToUse:
          "Customer may have misunderstood the competing offer.",

        recommendations: [
          "Ask clarifying questions.",
          "Verify what was actually offered.",
          "Educate without arguing."
        ],

        avoid: [
          "Never tell the customer another company is lying."
        ]
      }
    ]
  },

  stages: {
    discovery: {
      question:
        "Can you tell me what specifically about the other offer stood out to you?",

      why:
        "Understand whether the customer is comparing payment, fees, timeline, or expectations.",

      coachTip:
        "Stay curious. Don't criticize the competitor or assume the offer is better.",

      tieDown:
        "Would you agree it's important to compare the full picture before making a decision?",

      transition:
        "Thanks for sharing that with me.",

      analogy:
        "It's like comparing two vehicles—you want to compare more than just the monthly payment.",

      listenFor: [
        "Lower payment",
        "Lower fees",
        "Faster settlement",
        "Guarantees",
        "Misunderstanding"
      ],

      branches: [
        {
          id: "payment",
          label: "Lower Payment",
          nextStage: "diagnosis"
        },
        {
          id: "fees",
          label: "Lower Fees",
          nextStage: "diagnosis"
        },
        {
          id: "timeline",
          label: "Faster Results",
          nextStage: "diagnosis"
        }
      ]
    },

    diagnosis: {
      question:
        "Besides the payment, what else is important to you when choosing a debt resolution program?",

      why:
        "Discover the customer's priorities before comparing options.",

      coachTip:
        "Customers often focus on one number instead of the overall value.",

      tieDown:
        "Would you agree the best solution should meet all of your goals, not just one?",

      transition:
        "That gives me a better understanding of what's most important to you.",

      analogy:
        "Choosing a program is like choosing insurance—you compare coverage, not just price.",

      listenFor: [
        "Trust",
        "Results",
        "Customer Service",
        "Payment"
      ],

      branches: [
        {
          id: "value",
          label: "Overall Value",
          nextStage: "education"
        },
        {
          id: "price",
          label: "Focused on Price",
          nextStage: "education"
        }
      ]
    },

    education: {
      question:
        "Would it be okay if we compared the two offers side by side so you can make the best decision?",

      why:
        "Help the customer make an informed decision based on facts rather than assumptions.",

      coachTip:
        "Educate objectively. Avoid arguing with the competitor.",

      tieDown:
        "Would reviewing both options together be helpful?",

      transition:
        "Let's compare what each option offers.",

      analogy:
        "It's like comparing two cell phone plans—you want to know exactly what's included.",

      listenFor: [],

      branches: [
        {
          id: "continue",
          label: "Compare Offers",
          nextStage: "commitment"
        }
      ]
    },

    commitment: {
      question:
        "If we can address the concerns that led you to consider another company, would you feel comfortable staying with us?",

      why:
        "Determine whether the customer's concerns have been resolved.",

      coachTip:
        "Ask for the customer's commitment confidently after addressing their concerns.",

      tieDown:
        "Does staying with us sound like the best decision based on everything we've reviewed?",

      transition:
        "I'm glad we were able to compare your options.",

      analogy:
        "Like making any major purchase, having all the facts leads to better decisions.",

      listenFor: [
        "Ready to Stay",
        "Still Comparing"
      ],

      branches: [
        {
          id: "stay",
          label: "Stay with Program",
          nextStage: "resolution"
        }
      ]
    },

    resolution: {
      question:
        "Summarize the agreed plan, confirm the customer's decision, and outline the next steps.",

      why:
        "Leave the customer feeling confident in their decision.",

      coachTip:
        "Thank the customer for giving you the opportunity to review their options.",

      tieDown:
        "Are you comfortable moving forward with this plan?",

      transition:
        "Excellent. Let's review what we've accomplished today.",

      analogy:
        "Like choosing the right path after comparing every route.",

      listenFor: [],

      branches: []
    }
  }
};

export default betterOffer;
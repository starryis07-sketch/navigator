const betterOffer = {
  title: "Better Offer",

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
export const business = {
  name: "Adam Lab Orthotic",
  siteUrl: "https://www.adamlaborthotic.ca",
  tagline: "Custom orthotics and expert shoe repair in Hamilton.",
  description:
    "Adam Lab Orthotic helps people in Hamilton move comfortably with custom-made orthotics, orthopedic footwear support, and careful shoe repair services.",
  phone: "1-905-296-1017",
  phoneHref: "tel:+19052961017",
  email: "adamlo2013@gmail.com",
  emailHref: "mailto:adamlo2013@gmail.com",
  address: "450 Main St W, Hamilton ON",
  streetAddress: "450 Main St W",
  city: "Hamilton",
  region: "ON",
  postalCode: "L8P 1K7",
  country: "CA",
  latitude: 43.259807,
  longitude: -79.888135,
  mapHref:
    "https://www.google.com/maps?ll=43.259807,-79.888135&z=16&t=m&hl=en&gl=CA&mapclient=embed&q=450+Main+St+W+Hamilton,+ON+L8P+1K7",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.5998814716622!2d-79.89071022328694!3d43.259806871123594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9b64fa018b43%3A0x80aeb2a1710b789b!2s450%20Main%20St%20W%2C%20Hamilton%2C%20ON%20L8P%201K7!5e0!3m2!1sen!2sca!4v1725313157895!5m2!1sen!2sca",
  formspreeEndpoint: "https://formspree.io/f/xwpezpkn",
  hours: [
    { label: "Mon - Fri", value: "9AM - 6PM" },
    { label: "Sat - Sun", value: "11AM - 5PM" },
  ],
};

export const serviceArea = ["Hamilton", "Dundas", "Burlington", "Stoney Creek", "Ancaster"];

export const sitePages = [
  {
    path: "/",
    title: "Custom Orthotics & Shoe Repair in Hamilton",
    description:
      "Adam Lab Orthotic provides custom-made orthotics, orthopedic shoe support, and professional shoe repair in Hamilton, Ontario.",
  },
  {
    path: "/services",
    title: "Orthotics, Orthopedic Shoes & Shoe Repair Services",
    description:
      "Explore custom orthotics, orthopedic footwear support, direct billing help, and professional shoe repair services at Adam Lab Orthotic.",
  },
  {
    path: "/services/orthotics",
    title: "Custom Orthotics in Hamilton",
    description:
      "Custom-made orthotics in Hamilton for foot pain, plantar fasciitis, heel pain, alignment support, and daily comfort.",
  },
  {
    path: "/services/shoe-repair",
    title: "Shoe Repair in Hamilton",
    description:
      "Professional shoe repair in Hamilton, including heel replacement, sole repair, sewing, zipper repair, and practical footwear restoration.",
  },
  {
    path: "/about",
    title: "About Adam Lab Orthotic",
    description:
      "Learn about Adam Lab Orthotic, a Hamilton custom orthotics and shoe repair business focused on comfort, craft, and practical care.",
  },
  {
    path: "/blog",
    title: "Foot Comfort & Shoe Repair Blog",
    description:
      "Helpful articles about custom orthotics, foot comfort, shoe repair, insurance questions, and footwear care from Adam Lab Orthotic in Hamilton.",
  },
  {
    path: "/faq",
    title: "Custom Orthotics & Shoe Repair FAQ",
    description:
      "Answers about custom orthotics, insurance coverage, prescriptions, fitting, durability, and shoe repair at Adam Lab Orthotic.",
  },
  {
    path: "/contact",
    title: "Contact Adam Lab Orthotic",
    description:
      "Contact Adam Lab Orthotic in Hamilton for custom orthotics, shoe repair, orthopedic shoe support, hours, directions, and inquiries.",
  },
];

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Orthotics", href: "/services/orthotics" },
  { label: "Shoe Repair", href: "/services/shoe-repair" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export const services = [
  {
    title: "Custom-Made Orthotics",
    href: "/services/orthotics",
    eyebrow: "Foot support built around you",
    description:
      "Personalized insoles designed around your foot shape, gait, footwear, and daily routine to improve comfort and support.",
    highlights: ["Assessment and fitting", "Pain relief support", "Durable materials", "Insurance guidance"],
  },
  {
    title: "Shoe Repair",
    href: "/services/shoe-repair",
    eyebrow: "Repair before replacing",
    description:
      "Professional repair for favorite shoes, including heel work, sole repair, stitching, sewing, and zipper repairs.",
    highlights: ["Heel replacement", "Sole repair", "Sewing and zipper work", "Drop-off service"],
  },
  {
    title: "Orthopedic Shoes",
    href: "/services",
    eyebrow: "Comfortable supportive footwear",
    description:
      "Guidance on orthopedic shoes and comfort-focused footwear, including options from trusted brands such as Orthofeet.",
    highlights: ["Comfort fit", "Supportive styles", "Orthotic-friendly options", "Everyday wear"],
  },
];

export const conditions = [
  "Plantar Fasciitis",
  "Heel Spurs",
  "Achilles Tendinitis",
  "Morton's Neuroma",
  "Bunions",
  "Hammer Toe",
  "Pes Planus",
  "Pes Cavus",
  "Metatarsalgia",
  "Leg Length Discrepancy",
];

export const trustPoints = [
  {
    title: "Fast Turnaround",
    description: "Efficient service for orthotics and repairs without cutting corners on fit or finish.",
  },
  {
    title: "Direct Billing",
    description: "Insurance direct billing support helps make the paperwork and payment process easier.",
  },
  {
    title: "1-Year Guarantee",
    description: "Custom products are backed by a 1-year guarantee for added confidence.",
  },
  {
    title: "Quality Materials",
    description: "Orthotics and repairs are made with durable materials chosen for comfort and longevity.",
  },
];

export const orthoticsProcess = [
  {
    step: "01",
    title: "Assessment",
    description: "Discuss pain points, activity level, footwear, work demands, and health requirements.",
  },
  {
    step: "02",
    title: "Impression or Scan",
    description: "Capture the shape and support needs of your feet using a mold, foam impression, or scan.",
  },
  {
    step: "03",
    title: "Fabrication",
    description: "Build the orthotic with materials selected for your foot structure and daily use.",
  },
  {
    step: "04",
    title: "Fitting",
    description: "Fit the orthotics into your shoes and make sure the support feels right.",
  },
  {
    step: "05",
    title: "Follow-Up",
    description: "Fine-tune comfort and answer questions as your body adjusts to the new support.",
  },
];

export const repairProcess = [
  "Bring in the shoes or boots you want assessed.",
  "Get a practical recommendation and quote for the repair.",
  "Repairs are completed with attention to durability and appearance.",
  "Pick up footwear ready for more wear.",
];

export const faqs = [
  {
    question: "What are custom-made orthotics?",
    answer:
      "Custom-made orthotics are specially designed insoles shaped around your feet to provide comfort, support, and alignment tailored to your needs.",
  },
  {
    question: "How do I know if I need orthotics?",
    answer:
      "If you experience foot, heel, knee, hip, or lower back discomfort, orthotics may help. A healthcare professional can confirm whether they are appropriate for your condition.",
  },
  {
    question: "How long do custom-made orthotics last?",
    answer:
      "Custom orthotics typically last 2 to 3 years depending on use, materials, footwear, and how well they are maintained.",
  },
  {
    question: "Do I need a prescription to get custom-made orthotics?",
    answer:
      "Many insurance plans require a prescription or referral from a healthcare provider. It is best to check your policy before your visit.",
  },
  {
    question: "Can I wear custom-made orthotics with any shoes?",
    answer:
      "Orthotics can be made for many types of shoes, including athletic shoes, dress shoes, and boots. Some styles may need a specialized design.",
  },
  {
    question: "How are custom-made orthotics made?",
    answer:
      "They are made from a detailed impression, mold, or scan of your feet, then fabricated to match your foot structure, gait, and footwear.",
  },
  {
    question: "Are custom-made orthotics covered by insurance?",
    answer:
      "Many plans include orthotic coverage, but requirements vary. Adam Lab Orthotic can help with direct billing and documentation guidance.",
  },
  {
    question: "Do I need an appointment for shoe repair?",
    answer:
      "No appointment is usually necessary. Bring your shoes during business hours for an assessment and repair recommendation.",
  },
];

export const blogPosts = [
  {
    slug: "custom-orthotics-plantar-fasciitis-hamilton",
    title: "How Custom Orthotics Can Support Plantar Fasciitis",
    description:
      "Learn how custom orthotics may help support plantar fasciitis, heel pain, and daily comfort, plus when to ask a healthcare professional for advice.",
    date: "2026-04-25",
    readingTime: "4 min read",
    category: "Custom Orthotics",
    keywords: ["custom orthotics Hamilton", "plantar fasciitis orthotics", "heel pain support"],
    sections: [
      {
        heading: "Why plantar fasciitis hurts",
        body: [
          "Plantar fasciitis is commonly associated with irritation around the band of tissue that supports the arch of the foot. Many people notice pain near the heel, especially during the first steps in the morning or after long periods of standing.",
          "Footwear, activity level, work demands, arch shape, and walking pattern can all influence how much strain the foot experiences through the day.",
        ],
      },
      {
        heading: "Where custom orthotics may help",
        body: [
          "Custom-made orthotics are designed around the shape and support needs of your feet. The goal is to improve how pressure is distributed, support the arch, and make daily walking more comfortable inside the shoes you actually wear.",
          "Orthotics are not a one-size-fits-all cure, but they can be a practical part of a care plan when recommended by a qualified healthcare professional.",
        ],
      },
      {
        heading: "What to ask before getting orthotics",
        body: [
          "Ask whether your symptoms require a prescription, what documentation your insurance plan needs, and which shoes are best for your new orthotics.",
          "Adam Lab Orthotic can help with fitting questions and direct billing guidance, while medical diagnosis and treatment decisions should come from your healthcare provider.",
        ],
      },
    ],
  },
  {
    slug: "repair-shoes-or-replace-them",
    title: "Should You Repair Your Shoes or Replace Them?",
    description:
      "A practical guide to deciding when shoe repair makes sense for worn heels, soles, stitching, zippers, and comfort footwear.",
    date: "2026-04-25",
    readingTime: "3 min read",
    category: "Shoe Repair",
    keywords: ["shoe repair Hamilton", "heel repair Hamilton", "sole repair"],
    sections: [
      {
        heading: "Repair makes sense when the upper is still strong",
        body: [
          "If the leather, fabric, or main structure of the shoe is still in good condition, repairs can often extend the life of the footwear. This is especially true for comfortable shoes, boots, dress shoes, and footwear that already fits well.",
          "Heel replacement, sole work, stitching, and zipper repair can be more practical than replacing shoes that are already broken in.",
        ],
      },
      {
        heading: "Replacement may be better when support is gone",
        body: [
          "If the shoe is twisted, badly cracked, unstable, or no longer supports your foot, replacement may be the better choice. Shoes that have lost their shape can affect comfort even after cosmetic repairs.",
          "A repair assessment can help you understand whether the shoe is worth saving before you spend money on replacement.",
        ],
      },
      {
        heading: "Bring both shoes for an assessment",
        body: [
          "Even if only one shoe looks damaged, bringing the pair helps compare wear patterns and decide what work is needed.",
          "Adam Lab Orthotic offers shoe repair assessments during business hours at the Hamilton location.",
        ],
      },
    ],
  },
  {
    slug: "what-to-bring-custom-orthotics-appointment",
    title: "What to Bring When Asking About Custom Orthotics",
    description:
      "Prepare for a custom orthotics visit with the right shoes, prescription details, insurance information, and questions.",
    date: "2026-04-25",
    readingTime: "4 min read",
    category: "Custom Orthotics",
    keywords: ["custom orthotics appointment", "orthotics insurance Hamilton", "direct billing orthotics"],
    sections: [
      {
        heading: "Bring the shoes you wear most",
        body: [
          "Custom orthotics need to work inside real footwear. Bring the shoes you use for work, walking, exercise, or long days on your feet so fit and volume can be considered.",
          "If you wear different shoes for different activities, bring more than one pair. Athletic shoes, work shoes, boots, and dress shoes may require different fit considerations.",
        ],
      },
      {
        heading: "Bring medical and insurance documents",
        body: [
          "Many insurance plans require a prescription or referral for custom-made orthotics. Bring any documents from your healthcare provider, plus your insurance details if you want help understanding direct billing.",
          "Coverage rules vary by plan, so it is always worth checking your policy before starting the process.",
        ],
      },
      {
        heading: "Prepare your questions",
        body: [
          "Think about where you feel pain, when symptoms are worse, what kind of work you do, and how active you are. These details help guide a more practical orthotic recommendation.",
          "You can also ask about break-in time, shoe compatibility, expected lifespan, and follow-up adjustments.",
        ],
      },
    ],
  },
  {
    slug: "common-shoe-repairs-heels-soles-zippers",
    title: "Common Shoe Repairs: Heels, Soles, Stitching, and Zippers",
    description:
      "Understand common shoe repair services and how heel, sole, stitching, and zipper work can extend the life of your footwear.",
    date: "2026-04-25",
    readingTime: "3 min read",
    category: "Shoe Repair",
    keywords: ["shoe repair Hamilton", "zipper repair boots", "shoe stitching repair"],
    sections: [
      {
        heading: "Heel repairs",
        body: [
          "Heels often wear unevenly, especially when shoes are used daily. Replacing or rebuilding worn heel areas can improve stability and make shoes feel more secure again.",
          "Addressing heel wear early can prevent damage from spreading into the rest of the shoe.",
        ],
      },
      {
        heading: "Sole repairs",
        body: [
          "Soles protect the structure of the shoe and affect grip, comfort, and durability. Depending on the shoe, repair may involve patching, sole work, or advice about whether replacement is worthwhile.",
          "A repair assessment is the best way to know what is realistic for a specific pair.",
        ],
      },
      {
        heading: "Stitching and zipper work",
        body: [
          "Loose seams, split stitching, and damaged zippers can make footwear difficult or impossible to use even when the rest of the shoe is still in good condition.",
          "Sewing and zipper repairs are especially useful for boots and specialty footwear that would be expensive to replace.",
        ],
      },
    ],
  },
  {
    slug: "direct-billing-insurance-custom-orthotics",
    title: "Direct Billing and Insurance for Custom Orthotics",
    description:
      "Learn what to check with your insurance provider before getting custom orthotics and how direct billing support can help.",
    date: "2026-04-25",
    readingTime: "4 min read",
    category: "Insurance",
    keywords: ["direct billing orthotics", "orthotics insurance Hamilton", "custom orthotics coverage"],
    sections: [
      {
        heading: "Coverage depends on your plan",
        body: [
          "Many insurance plans include some coverage for custom-made orthotics, but requirements vary. Some plans require a prescription, diagnosis, biomechanical assessment, or specific provider documentation.",
          "Before starting, contact your insurer and ask what documents are required, how often orthotics are covered, and whether direct billing is available under your plan.",
        ],
      },
      {
        heading: "Direct billing can simplify payment",
        body: [
          "Direct billing may reduce the amount of paperwork you need to handle yourself. When available, the claim can be submitted directly to the insurance provider.",
          "Eligibility is not guaranteed for every plan, so bring your insurance details and any required prescription or referral information.",
        ],
      },
      {
        heading: "Keep copies of your paperwork",
        body: [
          "Keep your prescription, receipts, assessment documents, and insurer correspondence. These can be useful if your provider asks for additional information.",
          "Adam Lab Orthotic can help with practical documentation questions, but your insurance provider makes the final coverage decision.",
        ],
      },
    ],
  },
  {
    slug: "orthopedic-shoes-vs-regular-shoes",
    title: "Orthopedic Shoes vs. Regular Shoes: What Is the Difference?",
    description:
      "Learn how orthopedic shoes differ from regular footwear and when supportive, orthotic-friendly shoes may be worth considering.",
    date: "2026-04-25",
    readingTime: "4 min read",
    category: "Orthopedic Shoes",
    keywords: ["orthopedic shoes Hamilton", "orthotic friendly shoes", "supportive footwear"],
    sections: [
      {
        heading: "Support is the main difference",
        body: [
          "Orthopedic shoes are designed with comfort, stability, and foot support in mind. They often offer more room, better cushioning, and features that make them easier to pair with custom orthotics.",
          "Regular shoes may look good but still create pressure points, crowd the toes, or lack the depth needed for supportive insoles.",
        ],
      },
      {
        heading: "Fit matters more than the label",
        body: [
          "Not every supportive shoe is right for every foot. Width, toe box shape, heel counter strength, and removable insoles all affect how well a shoe works for daily wear.",
          "If you use custom orthotics, bringing your orthotics when shopping or asking for footwear guidance can help avoid shoes that are too shallow or unstable.",
        ],
      },
      {
        heading: "When to ask for guidance",
        body: [
          "Consider asking about orthopedic or orthotic-friendly shoes if you have recurring foot pain, diabetes-related footwear needs, bunions, arch issues, or trouble finding shoes that fit comfortably.",
          "Adam Lab Orthotic can help customers think through shoe fit and support needs alongside custom orthotics.",
        ],
      },
    ],
  },
  {
    slug: "how-long-do-custom-orthotics-last",
    title: "How Long Do Custom Orthotics Last?",
    description:
      "Understand how long custom orthotics usually last, what affects wear, and signs it may be time for an adjustment or replacement.",
    date: "2026-04-25",
    readingTime: "3 min read",
    category: "Custom Orthotics",
    keywords: ["how long do orthotics last", "custom orthotics Hamilton", "orthotic replacement"],
    sections: [
      {
        heading: "Most custom orthotics last several years",
        body: [
          "Custom orthotics commonly last around two to three years, but lifespan depends on use, body mechanics, materials, footwear, and activity level.",
          "Someone who wears orthotics all day for standing work may wear them differently than someone who only uses them for walking or exercise.",
        ],
      },
      {
        heading: "Signs your orthotics need attention",
        body: [
          "Flattened support, cracking materials, new discomfort, uneven wear, or orthotics that no longer sit properly in your shoes can all be signs that an assessment is needed.",
          "Changes in weight, activity, work demands, or foot symptoms can also change what kind of support feels best.",
        ],
      },
      {
        heading: "Maintenance helps",
        body: [
          "Let orthotics air out, avoid excessive heat, and use them in shoes that fit properly. Keeping them clean and dry can help materials last longer.",
          "If you are unsure whether your current pair is still doing its job, bring them in and ask about fit, condition, and next steps.",
        ],
      },
    ],
  },
  {
    slug: "signs-you-may-need-custom-orthotics",
    title: "Signs You May Need Custom Orthotics",
    description:
      "Common signs that custom orthotics may be worth discussing, including heel pain, arch strain, uneven shoe wear, and long days on your feet.",
    date: "2026-04-25",
    readingTime: "4 min read",
    category: "Custom Orthotics",
    keywords: ["signs you need orthotics", "custom orthotics Hamilton", "foot pain relief"],
    sections: [
      {
        heading: "Recurring pain is a common signal",
        body: [
          "Foot pain, heel pain, arch discomfort, knee strain, hip discomfort, or lower back pain can sometimes be connected to how the feet absorb pressure and support the body.",
          "Custom orthotics may be worth discussing if symptoms return often, especially after standing, walking, work shifts, or exercise.",
        ],
      },
      {
        heading: "Look at your shoe wear",
        body: [
          "Shoes that wear heavily on one side, collapse inward, or feel unstable may point to uneven pressure or gait patterns.",
          "Wear patterns do not diagnose a problem on their own, but they can provide helpful clues during an orthotic assessment.",
        ],
      },
      {
        heading: "Ask a healthcare professional",
        body: [
          "Custom orthotics should be considered alongside medical advice, especially if symptoms are severe, sudden, or linked to injury or health conditions.",
          "Adam Lab Orthotic can help with fitting, footwear, and direct billing guidance once you know custom orthotics are appropriate for your needs.",
        ],
      },
    ],
  },
  {
    slug: "boot-zipper-repair-hamilton",
    title: "Boot Zipper Repair: When a Broken Zipper Does Not Mean Broken Boots",
    description:
      "Learn when boot zipper repair may save a favorite pair and what to check before replacing comfortable boots.",
    date: "2026-04-25",
    readingTime: "3 min read",
    category: "Shoe Repair",
    keywords: ["boot zipper repair Hamilton", "zipper repair boots", "shoe repair Hamilton"],
    sections: [
      {
        heading: "A zipper can fail before the boot does",
        body: [
          "Boots often have plenty of life left even after a zipper stops working. A damaged slider, separated teeth, torn stitching, or worn zipper tape can make boots hard to use while the rest of the boot remains comfortable.",
          "Before replacing a good pair, it may be worth asking whether zipper repair is realistic.",
        ],
      },
      {
        heading: "Bring both boots",
        body: [
          "Bringing the pair helps compare zipper function, boot shape, and wear. It also helps determine whether the repair should focus only on the zipper or include stitching around the zipper area.",
          "Photos can help for early questions, but an in-person assessment is usually best for repair decisions.",
        ],
      },
      {
        heading: "Repair can protect a comfortable fit",
        body: [
          "Replacing comfortable boots can be expensive and frustrating, especially when they are already broken in. A zipper repair may keep footwear usable while preserving the fit you already like.",
          "Adam Lab Orthotic offers shoe and boot repair assessments at the Hamilton location.",
        ],
      },
    ],
  },
  {
    slug: "shoe-care-tips-between-repairs",
    title: "Shoe Care Tips to Help Footwear Last Longer Between Repairs",
    description:
      "Simple shoe care habits that can help extend footwear life, reduce wear, and make future shoe repairs easier.",
    date: "2026-04-25",
    readingTime: "3 min read",
    category: "Shoe Care",
    keywords: ["shoe care tips", "shoe repair Hamilton", "make shoes last longer"],
    sections: [
      {
        heading: "Rotate your shoes when possible",
        body: [
          "Wearing the same pair every day gives moisture and pressure less time to recover. Rotating shoes can help materials dry, maintain shape, and reduce concentrated wear.",
          "This is especially helpful for work shoes, walking shoes, and boots used in changing weather.",
        ],
      },
      {
        heading: "Address small problems early",
        body: [
          "Loose stitching, worn heel corners, lifting soles, and stiff zippers often get worse with continued use. Early repair can prevent a small issue from becoming a more expensive one.",
          "If you notice uneven wear or a change in comfort, bring the pair in before the damage spreads.",
        ],
      },
      {
        heading: "Keep shoes clean and dry",
        body: [
          "Mud, salt, moisture, and heat can shorten the life of footwear. Let shoes dry naturally, avoid placing them directly near high heat, and clean salt or dirt before it settles into the material.",
          "Good care does not replace repair, but it can make repairs easier and help footwear last longer.",
        ],
      },
    ],
  },
];

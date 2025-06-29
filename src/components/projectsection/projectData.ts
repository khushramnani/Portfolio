// src/data/projectData.ts
export const projects = [
    {
    id: 1,
    name: "anonova",
    title: "Anonova – Send Anonymous Messages",
    image: "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751125147/1_wnn7r6.png",
    category: "Web App , Ai",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Gemini API" , "Framer Motion"],
    liveLink: "https://anonova.vercel.app",
    githubLink:"https://github.com/khushramnani/anonova",
    otherimages: [
      "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190154/anonova2_yxnpos.jpg",
      "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190159/anonova4_rp0y5n.jpg",
      "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190156/anonova3_bpes0y.jpg"
    ],
    desc:"Anonova lets users send anonymous messages in real-time with a touch of AI.",
    about:"Anonova is a sleek and interactive web app for creators, developers, and professionals to collect honest feedback anonymously. Users receive a unique link they can share with others to gather input. To make it easier for the sender, the app uses AI to suggest message ideas based on the context. It's a simple and secure tool to understand your audience better—without knowing who said what.",
    challenges: "The biggest challenge was maintaining user anonymity while preventing misuse. Ensuring a smooth UX when the AI suggested messages required thoughtful prompt engineering. Additionally, managing dynamic links, responses, and real-time AI suggestions across devices needed a well-structured backend with proper validation and rate-limiting.",
  },
  {
    id: 2,
    name: "zuno",
    title: "Zuno – AI Web App Builder",
    image: "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751125146/2_utr74q.png",
    category: "AI, SaaS",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Convex", "Gemini API"],
    liveLink: "https://zuno.ai",
    githubLink:"https://github.com/khushramnani/zuno",
    otherimages: [
      "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751189958/zuno2_jewcyh.jpg",
      "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751189958/zuno3_zq0x8e.jpg",
      "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751189961/zuno4_ai8gbx.jpg",
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751189963/zuno5_c3znbc.jpg'
    ],
    desc:"Zuno is an AI-powered web app builder that simplifies the process of creating web applications with advanced AI features.",
    about:"Zuno is an AI-driven web app builder where users can describe the app they want to create through chat. The AI interprets the prompt and generates a full-stack application in real time. Users can chat with the AI to refine their app, explore changes, and even export the complete codebase. It integrates Sandpack for live preview and deployment, making the whole experience seamless from idea to launch. Since its launch, Anonova has attracted over 30,000 + users, handling the traffic with a robust and scalable backend architecture.",
    challenges: "A major challenge was building a reliable multi-turn AI chat that feels natural and guides the user toward building their project. The integration with Sandpack required real-time code generation and syncing output. Ensuring consistent code quality while supporting user iterations and handling multiple state updates made both frontend and backend logic complex and performance-sensitive.",
  },

  {
    id: 3,
    name: "pagecrafter",
    title: "PageCrafter – Drag & Drop Web Page Generator",
    image: "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190123/pagecrafter1_lhrutw.jpg",
    category: "Food, UI/UX",
    techStack: ["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB", "GSAP","ScrollTrigger"],
    // liveLink: "https://pagecrafter.vercel.app",
    githubLink:"https://github.com/khushramnani/pagecrafter",
    otherimages: [
      // "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190123/pagecrafter1_lhrutw.jpg",
      "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190116/pagecrafter2_h2nnjg.jpg",
      "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190121/pagecrafter4_kuqlsr.jpg",
      'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190118/pagecrafter3_n99c8y.jpg'
    ],
    desc:"PageCrafter lets users design pages visually with no code.",
    about:"PageCrafter is a user-friendly web page generator that enables users to design and customize web pages effortlessly. With its intuitive drag-and-drop interface, users can easily add and arrange elements to create visually appealing layouts.",
    challenges: "Making the editor both powerful and beginner-friendly was tough. Managing component state dynamically, optimizing the drag performance, and syncing visual changes to a JSON backend model was a huge architectural challenge.",
  },
  {
    id: 4,
    name: "garvopanoptic",
    title: "Static Website for Garvo Panoptic",
    image: "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751125147/4_aubc9c.png",
    category: "Static Website",
    techStack: ["HTML", "CSS", "JavaScript" , "GSAP"],
    liveLink: "https://garvopanoptic.com",
    githubLink:"https://github.com/khushramnani/garvo-panoptic",
    // otherimages: [
    //   "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190123/pagecrafter1_lhrutw.jpg",
    //   "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190116/pagecrafter2_h2nnjg.jpg",
    //   "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190121/pagecrafter4_kuqlsr.jpg",
    //   'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190118/pagecrafter3_n99c8y.jpg'
    // ],
    desc:"Garvo Panoptic is a static website designed to showcase the Garvo Panoptic products",
    about:"Garvo Panoptic is a responsive business website built to showcase an Ayurvedic export company's vision and product line. It focuses on fast load time, GSAP animations, and traditional aesthetics blended with modern structure.",
    // challenges: "Crafting a layout that feels alive without JavaScript frameworks was tough. Managing scroll-based animation with GSAP on a purely static site while keeping it blazing fast was the biggest constraint.",
  },
  {
    id: 5,
    name: "28-media",
    title: "Website for 28-Media",
    image: "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190196/28-media_x28d0l.jpg",
    category: "Website",
    techStack: ["Tailwind CSS", "React" , "GSAP" , "JavaScript" , "Locomotive js"],
    liveLink: "https://28-media.com",
    githubLink:"https://github.com/khushramnani",
    // otherimages: [
    //   "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190123/pagecrafter1_lhrutw.jpg",
    //   "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190116/pagecrafter2_h2nnjg.jpg",
    //   "https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190121/pagecrafter4_kuqlsr.jpg",
    //   'https://res.cloudinary.com/dql9uwmjx/image/upload/v1751190118/pagecrafter3_n99c8y.jpg'
    // ],
    desc:"lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    about:"lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    challenges: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
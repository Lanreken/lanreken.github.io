export const portfolioData = {
  profile: {
    fullName: "Olanrewaju Adeniji Adelugba",
    shortName: "Olanrewaju",
    monogram: "OA",
    role: "Backend Developer",
    email: "adelugbaolanrewaju@gmail.com",
    phone: "+234 906 979 9697",
    location: "Gbagada, Lagos, Nigeria",
    resumeFile: "/Lanre-Adelugba-CV.pdf",
    heroTitle: "I build secure backend systems for modern products.",
    heroDescription:
      "I'm a backend developer focused on REST APIs, authentication, backend architecture, and clean engineering workflows. Right now, I'm sharpening production-ready Node.js and TypeScript skills while building meaningful products for real users.",
    aboutIntro:
      "Result-focused backend developer with practical experience building RESTful APIs, authentication systems, and scalable backend logic using Node.js, Express.js, TypeScript, MongoDB, and MySQL.",
    aboutBody:
      "I've contributed to real-world projects, led small engineering teams, and collaborated with product designers and frontend developers to ship secure, well-documented backend features. I enjoy building backend systems that are clean, maintainable, and useful to the people relying on them.",
    aboutGoal:
      "I'm currently seeking a junior backend developer role where I can contribute to meaningful products, learn from experienced engineers, and continue growing my technical problem-solving skills.",
    education:
      "B.Sc. in Educational Management, Lagos State University (October 2018 - April 2023)",
    image: "/DP.png",
    availability: "Open to junior backend roles and project collaborations",
  },
  socials: [
    { name: "GitHub", url: "https://github.com/Lanreken" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/adelugba-olanrewaju-109669121/" },
  ],
  tech: [
    { name: "Node.js", icon: "ND" },
    { name: "Express.js", icon: "EX" },
    { name: "TypeScript", icon: "TS" },
    { name: "JavaScript", icon: "JS" },
    { name: "MongoDB", icon: "MG" },
    { name: "MySQL", icon: "MY" },
    { name: "Redis", icon: "RD" },
    { name: "GitHub Actions", icon: "GA" },
    { name: "Postman", icon: "PM" },
    { name: "JWT Auth", icon: "JW" },
  ],
  experience: [
    {
      company: "Vendsr",
      role: "Backend Intern / Team Lead",
      location: "Remote, Lagos, Nigeria",
      period: "May 2025 - Nov 2025",
      achievements: [
        "Led a backend team of four on an e-commerce platform focused on seller verification, product management, and secure transactions.",
        "Set up the GitHub repository workflow and coordinated Trello sprint planning for feature delivery and branch management.",
        "Built backend features including user registration, login, product APIs, and CAC verification using the Dojah API.",
        "Conducted code reviews and helped maintain clean backend architecture and documentation.",
      ],
    },
    {
      company: "The Curve Africa by Kora",
      role: "Backend Trainee",
      location: "On-site, Lagos, Nigeria",
      period: "May 2025 - Nov 2025",
      achievements: [
        "Built RESTful APIs and authentication flows with Node.js and Express.js while improving backend logic-building skills.",
        "Collaborated on team projects, participated in daily standups, and reviewed code during sprint reviews.",
        "Improved backend architecture knowledge and clean coding habits through hands-on tasks and peer feedback.",
        "Worked with UI/UX designers and prepared Swagger API documentation to support frontend teams.",
      ],
    },
  ],
  projects: [
    {
      id: 1,
      title: "TraceAid",
      description:
        "A milestone-based crowdfunding and accountability platform with secure onboarding, KYC verification, campaign workflows, donation management, proof-of-impact uploads, and milestone-based disbursement logic.",
      detail:
        "Integrated KoraPay test payments, webhook verification, role-based access control, Cloudinary uploads, and MongoDB aggregation pipelines for donor, fundraiser, and admin analytics dashboards.",
      technologies: ["Node.js", "Express.js", "MongoDB", "KoraPay", "Cloudinary", "JWT", "Swagger"],
      githubUrl: "https://github.com/codeconnoisseur-channels/TraceAid-Hackathon-Backend.git",
      liveUrl: "",
      image: "/project-traceaid.svg",
      browserUrl: "traceaid.dev",
      note: "Screenshots: add your own TraceAid dashboard, donation flow, and milestone review screens.",
    },
    {
      id: 2,
      title: "Vendsr Backend",
      description:
        "Backend work for an SME-focused commerce platform with seller verification, product management, and secure transaction workflows shaped by your internship leadership experience.",
      detail:
        "Highlights include backend team coordination, clean repo workflow, sprint delivery, product APIs, authentication flows, and CAC verification with Dojah.",
      technologies: ["Node.js", "Express.js", "TypeScript", "JWT", "Dojah API", "Agile Workflow"],
      githubUrl: "https://github.com/Lanreken/vendsr-backend.git",
      liveUrl: "",
      image: "/project-vendsr.svg",
      browserUrl: "vendsr.app",
      note: "Screenshots: add seller verification, product dashboard, or admin review views if you can share them publicly.",
    },
    {
      id: 3,
      title: "Easy-Tranz",
      description:
        "A backend-focused product repository from your GitHub profile that helps show your ability to build transaction-oriented application logic and maintain real project structure.",
      detail:
        "Manual insert: replace this with the final product-specific summary from the repository README or your own description of the core transaction workflow.",
      technologies: ["Node.js", "Express.js", "JavaScript", "REST APIs"],
      githubUrl: "https://github.com/Lanreken/Easy-Tranz.git",
      liveUrl: "",
      image: "/project-easytranz.svg",
      browserUrl: "easytranz.dev",
    },
    {
      id: 4,
      title: "Blog Platform Project",
      description:
        "A publishing-focused backend project that broadens your portfolio beyond commerce and fundraising by showing content workflows, account management, and practical CRUD system design.",
      detail:
        "Manual insert: add the exact features here, such as author roles, post management, comments, moderation, or media handling, based on the repository implementation.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Authentication"],
      githubUrl: "https://github.com/Lanreken/Blog-Platform-Project.git",
      liveUrl: "",
      image: "/project-blog.svg",
      browserUrl: "blog-api.dev",
    },
    {
      id: 5,
      title: "Go Meal",
      description:
        "A collaborative group project that shows your ability to contribute in team settings while building practical product features around food ordering or service workflows.",
      detail:
        "Manual insert: add your exact contribution area so visitors can clearly see which backend responsibilities you owned in the group project.",
      technologies: ["JavaScript", "Team Collaboration", "Product APIs"],
      githubUrl: "https://github.com/Tonyfash/Go-meal_Group3_ProjectWork.git",
      liveUrl: "",
      image: "/project-gomeal.svg",
      browserUrl: "gomeal.app",
    },
  ],
  certifications: [
    "Backend Development Certification - Axia Africa",
    "Certified JavaScript Developer - Cisco NetAcad",
    "TypeScript - Mimo",
    "Full Stack Development - Mimo",
    "Introduction to Google SEO - Coursera",
    "Introduction to FinTech - CFI",
  ],
};

export type PortfolioData = typeof portfolioData;

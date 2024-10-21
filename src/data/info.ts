import { monthsSinceMarch2024 } from "src/utils/get-experience-month";

export const info = {
  baseUrl: "https://mh-portfolio-eight.vercel.app",
  name: "Mahadi Hasan",
  jobDescription: "Web Developer",
  about: `A web developer with ${monthsSinceMarch2024()} months of practical experience and over 3 years of educational background in
  NodeJS for both frontend and backend technologies.`,

  education: [
    {
      name: "Daffodil International University",
      location: "Ashulia, Savar, Bangladesh",
      startDate: "2019",
      endDate: "2023",
      description: ["Bachelor of Science in Computer Science and Engineering"],
    },
  ],

  skills: ["OOP Knowledge", "Clean Coding", "Design Patterns", "Fast Learning"],
  technologies: [
    {
      languages: ["HTML", "CSS", "JS", "TS", "Java"],
      frameworks: [
        "ReactJs",
        "NextJs",
        "ExpressJs",
        "Tailwind CSS",
        "Bootstarp",
      ],
      database: ["Mongodb","Postgresql", "Prisma", "Drizzle ORM"],
      other: ["Docker", "Git", "Github"],
    },
  ],

  experience: [
    {
      name: "Skyland Web",
      technologies: "React | Express | Mongodb | Typescript | JWT | REST",
      startDate: "March 24",
      endDate: "August 24",
      description: [
        "- REST API with ExpressJs following the MVC pattern and latest ES module.",
        "- Using MongoDB as a primary database and postgres as secondary.",
        "- JWT authentication.",
        "- Middleware authorization.",
        "- Role based security system.",
        "- Deployment on Vercel. Render & Docker host.",
        "- Input validation with Zod and Typescript",
      ],
    },
    {
      name: "Texbazar Ltd.",
      technologies: "React | NextJs | Typescript | Redux | Zod | TailwindCSS",
      startDate: "September 24",
      endDate: "Present",
      description: [
        "- Building Responsive designs with React & NextJS.",
        "- Utilizing Nextjs lastest features for performance and code quality.",
        "- Managing complex and deep layout tree.",
        "- Form submission and mutation with react-form-hook, zod & server actions.",
        "- Realtime chat system.",
        "- Global state management with Zustand.",
      ],
    },
  ],

  socialMedia: {
    facebook: "https://www.facebook.com/me.mahadi/",
    github: "https://github.com/mahadi-init",
    email: "mailto:mahadi.dev@outlook.com",
    linkedin: "https://www.linkedin.com/in/dev-mahadi-hasan",
  },

  projects: [
    {
      title: "Ladies Sign",
      desc: "Admin panel for ladies sign online shop",
      isFeatured: true,
      thumbnail: "/assets/projects/ladies-sign.png",
      liveUrl: "https://ladies-sign-client.vercel.app/",
    },
    {
      title: "China Goods",
      desc: "China Goods Admin Panel",
      isFeatured: true,
      thumbnail: "/assets/projects/china-goods.png",
      githubUrl: "https://github.com/mahadi-init/chinagoods",
    },
    {
      title: "Wallpaper Changer",
      desc: "A desktop software to change wallpaper",
      isFeatured: true,
      thumbnail: "/assets/projects/wallpaper-changer.png",
      githubUrl: "https://github.com/mahadi-init/wallpaper-changer",
    },
    {
      title: "Batch-54",
      desc: "Android app to manage an entire batch of students",
      isFeatured: true,
      thumbnail: "/assets/projects/batch54.png",
      githubUrl: "https://github.com/mahadi-init/Batch54",
    },
    {
      title: "Optimizing Vitamin Detection",
      desc: "Classify Vitamin of Fruits and Vegetables by images",
      isFeatured: true,
      thumbnail: "/assets/projects/vitamin.png",
      githubUrl: "https://github.com/mahadi-init/OPTIMIZING-VITAMIN-DETECTION",
    },
    {
      title: "Daraz Sentiment Analysis",
      desc: "Sentiment Analysis of Daraz marketplace Public Reviews",
      isFeatured: true,
      thumbnail: "/assets/projects/sentiment.png",
      githubUrl: "https://github.com/mahadi-init/Daraz-Sentiment-Analysis",
    },
  ],
};

export const info = {
  baseUrl: "https://mh-portfolio-eight.vercel.app",
  name: "Mahadi Hasan",
  jobDescription: "Web Developer",
  about: `A developer specializing in front-end and back-end knowledge. Passionate about new
          programming ideas. Efficient in a number of programming languages and design patterns.`,

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
      database: ["Mongodb", "Prisma"],
      other: ["Docker", "Git", "Github"],
    },
  ],

  experience: [
    {
      name: "Skyland Web",
      location: "Mirpur, Dhaka, Bangladesh",
      startDate: "March 2024",
      endDate: "Present",
      description: [
        "- Building REST API with ExpressJs following the MVC model and latest ES module",
        "- Using mostly MongoDB as a database and sometimes Postgres with Prisma.",
        "- API documentation with the postman and team collaboration.",
      ],
    },
  ],

  socialMedia: {
    facebook: "https://www.facebook.com/me.mahadi/",
    github: "https://github.com/mahadi-init",
    email: "mailto:mahadi.dev@outlook.com",
    linkedin: "https://www.linkedin.com/in/mahadi-hasan-637a87240/",
  },

  projects: [
    {
      title: "Ladies Sign Admin Panel",
      desc: "Admin panel for ladies sign online shop(private codebase)",
      isFeatured: true,
      thumbnail: "/assets/projects/ladies-sign.png",
      liveUrl: "https://ladies-sign-admin.vercel.app/",
    },
    {
      title: "mh-blogs",
      desc: "Personal blogging site",
      isFeatured: true,
      thumbnail: "/assets/projects/mh-blogs.png",
      githubUrl: "https://github.com/mahadi-init/mh-blog",
      liveUrl: "https://mh-blog-three.vercel.app/",
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
      thumbnail: "/assets/projects/batch-54.png",
      githubUrl: "https://github.com/mahadi-init/Batch54",
    },
  ],
};

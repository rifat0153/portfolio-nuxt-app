export type Experience = {
  id: string;
  title: string;
  company: {
    name: string;
    url: string;
  };
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  bulletPoints: string[];
  skills: string[];
};

export const experiences: Experience[] = [
  {
    id: "1",
    title: "Software Engineer",
    company: {
      name: "Senceive",
      url: "https://www.senceive.com",
    },
    location: "Milton Keynes, United Kingdom",
    startDate: "May 2022",
    endDate: "Present",
    description:
      "Architected and delivered critical applications for Network Rail UK while modernizing legacy systems and driving significant performance improvements.",
    bulletPoints: [
      'Architected, designed, and delivered "Signalbox" web application/SPA for Network Rail UK, taking full ownership of both backend (.NET Core) and frontend (Vue.js) development',
      'Spearheaded the modernization of the flagship "Webmonitor" product, migrating legacy .NET Framework code to high-performance .NET Core API',
      "Implemented Clean Architecture and SOLID principles to address maintainability issues",
      "Drove 1-20x latency reduction by optimizing data access layer (replacing EF Core with Dapper), tuning SQL queries, and implementing parallel processing",
      "Developed a comprehensive production analysis application using Vue.js/Nuxt.js and .NET Core with interactive graphs/tables",
      "Championed the adoption of TypeScript and Functional Programming concepts while mentoring team members",
      "Leveraged Azure cloud services and established robust CI/CD pipelines for automated testing and deployments",
    ],
    skills: [
      "C#",
      ".NET Core",
      ".NET",
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "SQL Server",
      "Azure",
      "Clean Architecture",
      "SOLID Principles",
    ],
  },
  {
    id: "2",
    title: "Flutter Developer",
    company: {
      name: "RSI LAB",
      url: "https://www.rsi-lab.com/",
    },
    location: "Dhaka, Bangladesh",
    startDate: "Nov 2021",
    endDate: "Dec 2022",
    description:
      'Led end-to-end development of "The Daily Star" mobile application with significant performance enhancements and robust offline functionality.',
    bulletPoints: [
      'Led the end-to-end development of "The Daily Star" mobile application using Flutter 3 with real-time news feeds and push notifications',
      "Enhanced application performance 3x in UI responsiveness and reduced app crashes by 95%",
      "Implemented a dynamic, server-configurable UI with admin control capabilities",
      "Designed and implemented robust local database solution for full offline-first functionality",
      "Conducted proactive debugging and analysis of crash reports using Firebase Crashlytics",
      "Collaborated closely with backend teams for seamless API integration",
    ],
    skills: [
      "Flutter",
      "Dart",
      "Rest APIs",
      "Firebase",
      "Android",
      "iOS",
      "Node.js",
      "Postman",
      "Figma",
    ],
  },
  {
    id: "3",
    title: "Junior Software Developer",
    company: {
      name: "Plan B Insights",
      url: "https://www.linkedin.com/company/planbinsights/posts/?feedView=all",
    },
    location: "Dhaka, Bangladesh",
    startDate: "Dec 2020",
    endDate: "Sep 2021",
    description:
      "Developed a charity mobile application facilitating location-based donation matching with secure authentication and real-time features.",
    bulletPoints: [
      "Developed a Flutter and Node.js-based charity mobile application for location-based donation matching",
      "Implemented secure user authentication and authorization using Firebase Auth",
      "Designed and integrated RESTful APIs using Node.js (Express.js) and MongoDB for backend data management",
      "Developed intuitive and responsive UI components in Flutter according to design specifications",
      "Integrated real-time push notifications via Firebase Cloud Messaging for user engagement",
      "Utilized Docker and Google Cloud Run to containerize the application and streamline deployment",
    ],
    skills: [
      "Flutter",
      "Firebase",
      "Express.js",
      "MongoDB",
      "Docker Compose",
      "REST APIs",
    ],
  },
  {
    id: "4",
    title: "Software Developer Intern",
    company: {
      name: "Bengal Software",
      url: "https://www.bengalsoftware.com",
    },
    location: "Dhaka, Bangladesh",
    startDate: "Sep 2020",
    endDate: "Dec 2020",
    description:
      "Developed reusable web components using React.js, contributing to improved UI functionality and user experience.",
    bulletPoints: [
      "Developed reusable web components using React.js for improved UI functionality",
      "Assisted senior developers in frontend development for pixel-perfect implementation of UI designs",
      "Gained hands-on experience in React.js, Node.js, and REST API integration",
      "Collaborated with designers and developers to implement frontend features according to specifications",
    ],
    skills: ["React", "Node.js", "CSS", "HTML", "RESTful APIs", "Git"],
  },
];

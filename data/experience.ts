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
    description: `
    * Led the development of "Signal Box", a mission-critical monitoring system for Network Rail UK, automating rail issue detection and improving UK railway safety.
    * Led migration from .NET Framework to .NET Core, modernizing system architecture, improving coding standards, and achieving significant performance enhancements.
    * Built complex frontend dashboards for real-time data visualization, sensor monitoring, and node control via UI, significantly enhancing operational efficiency.
    * Designed and implemented high-level features from scratch, handling architecture, coding, and performance optimizations.
    * Developed and maintained critical backend services, ensuring high availability and system reliability.
    * Tackled critical performance issues, leveraging custom SQL optimizations, caching strategies, and parallel processing techniques, reducing system latency by 50–90%.
    * Implemented robust logging and monitoring, improving system observability and reducing debugging time.
    * Extensive Azure & DevOps experience, utilizing Azure resources, CI/CD pipelines, and Infrastructure as Code for scalable and reliable deployments.
    * Collaborated cross-functionally with hardware and data teams to integrate sensor data processing and ensure seamless system operations.
    * Exceeded expectations beyond role level, consistently taking ownership of complex, high-impact projects and mentoring team members in .NET and frontend best practices.
    `,
    skills: [
      "C#",
      ".NET Core 8",
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "Tailwind",
      "REST APIs",
      "SQL Server",
      "Azure",
      "Tensorflow",
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
    description: `
    * Developed "The Daily Star" news app, improving UI performance by 2.5X, reducing crashes by 95%, improving loading time and enhancing user experience.
    * Implemented offline first mode, allowing users to access news articles without an internet connection.
    * Integrated push notifications, enabling real-time news updates and personalized alerts.
    * Led debugging and crash analytics efforts, identifying root causes and implementing fixes to minimize app crashes.
    * Collaborated with backend teams, ensuring smooth API integrations and real-time content updates.
    `,
    skills: [
      "Flutter",
      "Rest APIs",
      "Firebase",
      "Android",
      "iOS",
      "Node.js",
      "Postman",
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
    description: `
    * Developed a Flutter and Node.js-based charity mobile app for location-based donation matching, featuring Firebase authentication and robust REST API integrations.
    * Designed an intuitive and responsive UI, ensuring a seamless user experience for donors and recipients.
    * Implemented secure authentication and authorization using Firebase Auth, improving app security and reliability.
    * Integrated real-time notifications, enhancing user engagement and donation tracking.
    * Improved deployment efficiency using Docker and Google Cloud Run, enabling scalable and automated deployments.
    `,
    skills: ["Flutter", "Firebase", "Express.js", "MongoDB", "Docker Compose"],
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
    description: `
    * Built React.js web components to improve UI functionality and user experience.
    * Quickly gained expertise in React, Node.js, and REST API development.
    * Assisted in frontend development, ensuring pixel-perfect implementation of UI designs.
    `,
    skills: ["React", "Node.js", "CSS", "HTML", "Restful APIs", "Git"],
  },
];

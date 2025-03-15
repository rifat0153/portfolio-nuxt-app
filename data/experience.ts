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
    * Led development of "Signal Box" for Network Rail UK automating rail issue detection.
    * Migrated from .NET Framework to .NET Core, enhancing performance.
    * Built frontend dashboards for real-time data visualization.
    * Designed and implemented high-level features.
    * Maintained backend services for high availability.
    * Reduced system latency by 50–90% with optimizations.
    * Improved system observability with robust logging.
    * Extensive Azure & DevOps experience for scalable deployments.
    * Integrated sensor data processing with hardware and data teams.
    * Mentored team members in .NET and frontend best practices.
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
    * Developed "The Daily Star" news app, improving UI performance and reducing crashes.
    * Implemented offline mode for article access without internet.
    * Integrated push notifications for real-time updates.
    * Led debugging efforts to minimize app crashes.
    * Ensured smooth API integrations with backend teams.
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
    * Developed a charity app with Flutter and Node.js, featuring Firebase authentication and REST API integrations.
    * Designed a responsive UI for donors and recipients.
    * Implemented secure authentication with Firebase Auth.
    * Integrated real-time notifications for user engagement.
    * Improved deployment with Docker and Google Cloud Run.
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
    * Built React.js components to enhance UI functionality.
    * Gained expertise in React, Node.js, and REST API development.
    * Assisted in frontend development for pixel-perfect UI designs.
    `,
    skills: ["React", "Node.js", "CSS", "HTML", "Restful APIs", "Git"],
  },
];

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
    * • <b>Led development</b> of "Signal Box" for Network Rail UK, automating rail issue detection.
    * • <b>Migrated</b> from .NET Framework to .NET Core, enhancing performance.
    * • <b>Built</b> frontend dashboards for real-time data visualization.
    * • <b>Designed and implemented</b> high-level features.
    * • <b>Maintained</b> backend services for high availability.
    * • <b>Reduced</b> system latency by 50–90% with optimizations.
    * • <b>Improved</b> system observability with robust logging.
    * • <b>Extensive</b> Azure & DevOps experience for scalable deployments.
    * • <b>Integrated</b> sensor data processing with hardware and data teams.
    * • <b>Mentored</b> team members in .NET and frontend best practices.
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
    * • <b>Developed</b> "The Daily Star" news app, improving UI performance and reducing crashes.
    * • <b>Implemented</b> offline mode for article access without internet.
    * • <b>Integrated</b> push notifications for real-time updates.
    * • <b>Led</b> debugging efforts to minimize app crashes.
    * • <b>Ensured</b> smooth API integrations with backend teams.
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
    * • <b>Developed</b> a charity app with Flutter and Node.js, featuring Firebase authentication and REST API integrations.
    * • <b>Designed</b> a responsive UI for donors and recipients.
    * • <b>Implemented</b> secure authentication with Firebase Auth.
    * • <b>Integrated</b> real-time notifications for user engagement.
    * • <b>Improved</b> deployment with Docker and Google Cloud Run.
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
    * • <b>Built</b> React.js components to enhance UI functionality.
    * • <b>Gained</b> expertise in React, Node.js, and REST API development.
    * • <b>Assisted</b> in frontend development for pixel-perfect UI designs.
    `,
    skills: ["React", "Node.js", "CSS", "HTML", "Restful APIs", "Git"],
  },
];

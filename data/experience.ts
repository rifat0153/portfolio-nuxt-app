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
    description: `Enhanced UK rail system monitoring by modernizing the tech stack and leading key initiatives. Developed SignalBox for Network Rail UK, migrated backend to .NET 8, and created SPAs with Vue.js and Nuxt.js. Built internal dashboards and mentored team members.`,
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
      url: "https://www.rsilab.com",
    },
    location: "Dhaka, Bangladesh",
    startDate: "Nov 2021",
    endDate: "Dec 2022",
    description: `Led the development of "The Daily Star - Bangladesh" app, achieving over 100k downloads and 10,000 daily active users. Optimized app performance and ensured UI consistency with a Figma design system.`,
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
      url: "https://www.planbinsights.com",
    },
    location: "Dhaka, Bangladesh",
    startDate: "Dec 2020",
    endDate: "Sep 2021",
    description: `Developed "Aalokito," a location-based charity app using Flutter and Firebase. Streamlined deployment with Docker, improving efficiency and consistency.`,
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
    description: `Developed and maintained web components using React.js and CSS. Gained proficiency in full-stack development and industry best practices.`,
    skills: ["React", "Node.js", "CSS", "HTML", "Restful APIs", "Git"],
  },
];

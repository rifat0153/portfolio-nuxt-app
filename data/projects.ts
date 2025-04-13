export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights?: string[];
  role?: string;
  period?: string;
}

export const projects: Project[] = [
  {
    id: "signalbox",
    title: "Signalbox Web Application",
    description:
      "A critical sandboxed web application/SPA for Network Rail UK to enhance railway safety.",
    technologies: [
      ".NET Core",
      "Vue.js",
      "TypeScript",
      "Clean Architecture",
      "REST APIs",
    ],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/senceive-1.png?alt=media&token=aec7c648-318c-4757-8275-6266b7cfeff7",
    highlights: [
      "Architected and delivered full-stack application with complete ownership",
      "Designed both backend (.NET Core) and frontend (Vue.js) components",
      "Implemented secure authentication and authorization",
      "Currently involved in developing the next version",
    ],
    role: "Software Engineer",
    period: "2022-Present",
  },
  {
    id: "webmonitor-modernization",
    title: "Webmonitor Modernization",
    description:
      "Migration and modernization of flagship product from legacy .NET Framework to high-performance .NET Core API.",
    technologies: [
      ".NET Core",
      ".NET Framework",
      "Clean Architecture",
      "SOLID",
      "SQL Server",
      "Dapper",
    ],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/portfolio-app-images%2Fwebmonitor.jpg?alt=media&token=0083a8a9-fdb8-42e7-afc2-c377184e5d8b",
    highlights: [
      "Achieved 1-20x latency reduction by optimizing data access layer",
      "Replaced EF Core with Dapper for improved performance",
      "Implemented Clean Architecture and SOLID principles",
      "Reduced CPU/memory usage and improved maintainability",
    ],
    role: "Software Engineer",
    period: "2022-2023",
  },
  {
    id: "production-analysis",
    title: "Production Analysis Application",
    description:
      "Comprehensive production analysis tool with interactive graphs and tables for monitoring sensor/model performance.",
    technologies: [
      "Vue.js",
      "Nuxt.js",
      ".NET Core",
      "TypeScript",
      "Tailwind CSS",
      "Azure",
    ],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/portfolio-app-images%2FSenceive-Logo-Strap-REV-WHITE-WEB-L.jpg?alt=media&token=cf90111e-1949-4e96-8f48-a0a96cb761ae",
    highlights: [
      "Developed interactive graphs/tables for detailed analysis",
      "Implemented yield tracking and production trend identification",
      "Created real-time data visualization capabilities",
      "Built operational control features for various monitoring systems",
    ],
    role: "Software Engineer",
    period: "2022-2023",
  },
  {
    id: "daily-star-app",
    title: "The Daily Star Mobile Application",
    description:
      "End-to-end development of a new mobile application for a major news outlet using Flutter 3.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "REST APIs",
      "Android",
      "iOS",
    ],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/portfolio-app-images%2Fdaily_start_1.webp?alt=media&token=81298ae9-6c64-4862-84f5-b46a36a17839 ",
    highlights: [
      "Achieved 3x improvement in UI responsiveness",
      "Reduced app crashes by 95% through optimization",
      "Implemented offline-first functionality with local database",
      "Developed server-configurable UI with admin control capabilities",
    ],
    role: "Flutter Developer",
    period: "2021-2022",
  },
  {
    id: "charity-app",
    title: "Location-based Charity Application",
    description:
      "Mobile application facilitating location-based donation matching with secure user authentication.",
    technologies: [
      "Flutter",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Docker",
    ],
    imageUrl:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/app1_1.png?alt=media&token=937c37c9-4259-4c1f-b7ab-cd03375e7aa4",
    highlights: [
      "Implemented secure authentication using Firebase Auth",
      "Designed RESTful APIs with Node.js and MongoDB",
      "Integrated real-time push notifications",
      "Containerized application using Docker and Google Cloud Run",
    ],
    role: "Junior Software Developer",
    period: "2020-2021",
  },
];

<script setup lang="ts">
import { Technology } from "core/types/technology";

const techList: Technology[] = [
  {
    id: 1,
    name: "Flutter",
    image: {
      assetPath: "img/flutter",
      fileType: "svg",
    },
    description:
      "Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    experience: "2.5+ years",
    tags: ["Riverpod", "Firebase", "Freezed", "Local Packages"],
  },
  {
    id: 2,
    name: "VueJS",
    image: {
      assetPath: "img/vue",
      fileType: "svg",
    },
    description:
      "Vue.js is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.",
    experience: "1+ years",
    tags: ["Composable", "Tailwind", "Pinia", "Vitest"],
  },
  {
    id: 3,
    name: ".Net Core",
    image: {
      assetPath: "img/dotnet",
      fileType: "png",
    },
    description:
      ".NET is a free, cross-platform, open-source developer platform for building many different types of applications. With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop, games, and IoT.",
    experience: "1+ years",
    tags: ["Web API", "EF Core", "xUnit", "Moq"],
  },
];
</script>

<template>
  <div className="pb-20 dark:text-gray-200 lg:pb-40">
    <p className="pb-4 text-2xl font-medium">Technologies</p>

    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <TechnologyCard v-for="tech in techList" :key="tech.id" :tech="tech" />
    </div>
  </div>
</template>

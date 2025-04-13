<template>
  <div>
    <ProjectDetail :project="project" />
  </div>
</template>

<script lang="ts" setup>
import { projects } from "~/data/projects";

const route = useRoute();
const projectId = route.params.id as string;

// Find the project matching the ID from the route parameter
const project = projects.find((p) => p.id === projectId);

// Set the page title based on the project
useHead(() => ({
  title: project
    ? `${project.title} | My Portfolio`
    : "Project Not Found | My Portfolio",
  meta: [
    {
      name: "description",
      content: project?.description || "Project details not found",
    },
  ],
}));
</script>

<style>
/* Project specific styles can be added here if needed */
</style>

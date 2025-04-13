<template>
  <section class="py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center text-gray-900">
        My Projects
      </h2>
      <p
        class="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto"
      >
        Here are some of the notable projects I've worked on. Each project
        demonstrates my skills in different technologies and domains.
      </p>

      <div class="grid grid-cols-1 gap-8">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { projects } from "~/data/projects";
</script>

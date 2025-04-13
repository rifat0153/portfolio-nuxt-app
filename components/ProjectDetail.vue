<template>
  <div v-if="project" class="container mx-auto py-12 px-4">
    <div class="max-w-4xl mx-auto">
      <div class="mb-8">
        <NuxtLink
          to="/#projects"
          class="flex items-center text-blue-600 hover:underline mb-4"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
          Back to home
        </NuxtLink>

        <h1 class="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          {{ project.title }}
        </h1>

        <div class="flex flex-wrap gap-2 mb-6">
          <span
            v-for="(tech, index) in project.technologies"
            :key="index"
            class="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full"
          >
            {{ tech }}
          </span>
        </div>

        <div
          v-if="project.role || project.period"
          class="flex flex-wrap gap-x-6 mb-6 text-sm text-gray-600"
        >
          <div v-if="project.role" class="flex items-center">
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            {{ project.role }}
          </div>
          <div v-if="project.period" class="flex items-center">
            <svg
              class="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            {{ project.period }}
          </div>
        </div>
      </div>

      <div class="bg-white rounded-lg overflow-hidden shadow-lg mb-10">
        <img
          v-if="project.imageUrl"
          :src="project.imageUrl"
          :alt="project.title"
          class="w-full h-80 object-cover"
          onerror="this.src='/images/projects/default-project.png'"
        />
        <div
          v-else
          class="w-full h-80 bg-gray-200 flex items-center justify-center"
        >
          <span class="text-5xl text-gray-400">{{
            project.title.charAt(0)
          }}</span>
        </div>
      </div>

      <div class="prose prose-lg max-w-none mb-12">
        <p class="text-lg text-gray-700">
          {{ project.description }}
        </p>

        <div
          v-if="project.highlights && project.highlights.length > 0"
          class="mt-8"
        >
          <h2 class="text-2xl font-bold mb-4 text-gray-900">Key Features</h2>
          <ul class="list-disc pl-5 space-y-2">
            <li
              v-for="(highlight, index) in project.highlights"
              :key="index"
              class="text-gray-700"
            >
              {{ highlight }}
            </li>
          </ul>
        </div>
      </div>

      <div class="flex flex-wrap gap-4 mt-6">
        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-white hover:bg-gray-700 transition-colors"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clip-rule="evenodd"
            ></path>
          </svg>
          View on GitHub
        </a>
        <a
          v-if="project.liveUrl"
          :href="project.liveUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-white hover:bg-blue-700 transition-colors"
        >
          <svg
            class="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            ></path>
          </svg>
          Live Demo
        </a>
      </div>
    </div>
  </div>
  <div v-else class="container mx-auto py-12 px-4 text-center">
    <p class="text-lg text-gray-600">Project not found</p>
    <NuxtLink
      to="/#projects"
      class="mt-4 inline-block text-blue-600 hover:underline"
    >
      Back to Projects
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/data/projects";

defineProps<{
  project?: Project;
}>();
</script>

<template>
  <div
    class="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02] duration-300"
  >
    <div class="h-48 overflow-hidden">
      <NuxtImg
        v-if="project.cardImageUrl"
        :src="project.cardImageUrl"
        :alt="project.title"
        class="w-full h-full object-contain"
        :fallbackSrc="'/images/default-project.png'"
      />
      <div
        v-else
        class="w-full h-full bg-gray-200 flex items-center justify-center"
      >
        <span class="text-2xl text-gray-400">{{
          project.title.charAt(0)
        }}</span>
      </div>
    </div>
    <div class="p-5">
      <h3 class="text-xl font-semibold mb-2 text-gray-900">
        {{ project.title }}
      </h3>
      <p class="text-gray-600 mb-4 line-clamp-2">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="(tech, index) in project.technologies.slice(0, 3)"
          :key="index"
          class="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
        >
          {{ tech }}
        </span>
        <span
          v-if="project.technologies.length > 3"
          class="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded"
        >
          +{{ project.technologies.length - 3 }} more
        </span>
      </div>
      <div class="flex justify-between items-center">
        <NuxtLink
          :to="`/projects/${project.id}`"
          class="text-blue-600 hover:underline"
        >
          View Details
        </NuxtLink>
        <div class="flex space-x-2">
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-700 hover:text-gray-900"
          >
            <svg
              class="w-5 h-5"
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
          </a>
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-700 hover:text-gray-900"
          >
            <svg
              class="w-5 h-5"
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
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/data/projects";

defineProps<{
  project: Project;
}>();
</script>

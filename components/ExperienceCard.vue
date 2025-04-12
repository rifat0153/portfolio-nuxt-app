<template>
  <div
    class="bg-white shadow-lg rounded-lg p-6 mb-6 transform transition duration-500 hover:scale-105 hover:shadow-xl"
  >
    <h2 class="text-xl font-bold text-gray-800">{{ prop.title }}</h2>
    <a
      :href="prop.company.url"
      target="_blank"
      class="text-blue-500 hover:underline"
    >
      {{ prop.company.name }}
    </a>
    <p class="text-sm text-gray-600">{{ prop.location }}</p>
    <p class="text-sm text-gray-600">
      {{ prop.startDate }} - {{ prop.endDate || "Present" }}
    </p>
    <p class="mt-4 text-gray-700">{{ prop.description }}</p>

    <ul class="mt-3 list-disc ml-5 text-gray-700 text-sm">
      <li v-for="(point, index) in prop.bulletPoints" :key="index" class="mb-1">
        {{ point }}
      </li>
    </ul>

    <div class="mt-4 flex flex-wrap gap-2">
      <span
        v-for="skill in prop.skills"
        :key="skill"
        class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded"
      >
        {{ skill }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Experience } from "~/data/experience";

const prop = defineProps<Experience>();
</script>

<style>
/* Add any additional custom styles here if needed */
</style>

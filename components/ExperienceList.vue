<template>
  <p class="font-semibold pb-5">Work Experince</p>

  <template v-for="e in experiences" :key="e.id">
    <div class="@container grid grid-cols-[auto,1fr] gap-6 pb-10">
      <!-- First col: start date - end date -->
      <p class="text-nowrap text-sm pt-1 font-semibold text-gray-500">
        {{ e.startDate }} - {{ e.endDate }}
      </p>

      <!-- Second col -->
      <div>
        <NuxtLink :to="e.company.url" class="font-semibold text-gray-800">
          <p>{{ e.title }} - {{ e.company.name }}</p>
        </NuxtLink>

        <p class="text-gray-700 text-sm">{{ e.location }}</p>

        <p
          class="text-gray-700 text-sm mt-2 text-balance w-full leading-5 py-1 lg:py-2"
        >
          {{ e.description }}
        </p>

        <!-- Skills separated by a dot -->
        <div
          class="flex flex-wrap gap-1 mt-2 text-nowrap text-[12px] text-gray-500 font-semibold"
        >
          <template v-for="(skill, index) in e.skills" :key="index">
            <p class="text-nowrap">
              <span v-if="index !== 0" class="text-gray-500">•</span>
              {{ skill }}
            </p>
          </template>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { experiences } from "~/data/experience";
</script>

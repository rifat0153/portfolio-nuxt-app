<template>
  <p class="font-semibold pb-5">Work Experience</p>

  <template v-for="e in experiences" :key="e.id">
    <div class="pb-10">
      <div>
        <NuxtLink
          :to="e.company.url"
          target="_blank"
          external
          class="flex items-center font-semibold text-gray-800"
        >
          <p>
            {{ e.title }} - {{ e.company.name }}
            <Icon name="mdi:external-link" class="w-3 h-3 inline-block" />
          </p>
        </NuxtLink>

        <p class="text-sm pt-1 font-semibold text-gray-500 md:text-nowrap">
          {{ e.startDate }} - {{ e.endDate }}
        </p>

        <p class="text-gray-700 text-sm">{{ e.location }}</p>

        <ul
          class="text-gray-700 text-sm mt-2 text-balance w-full leading-5 py-1 lg:py-2"
        >
          <li
            v-for="(item, index) in e.description.split('* ').slice(1)"
            :key="index"
            class="mb-2 text-pretty"
            v-html="item.trim()"
          ></li>
        </ul>

        <!-- Skills separated by a dot -->
        <div
          class="flex flex-wrap gap-1 mt-2 text-sm text-gray-500 font-semibold"
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

<template>
  <div class="tracking-tight leading-normal">
    <div class="flex gap-6 justify-start items-center">
      <NuxtImg
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-6b79f.appspot.com/o/portfolio-app-images%2Fmy-passport-photo.jpg?alt=media&token=d80dd533-e2dc-4c3f-ae0d-af10be75b074"
        alt="Mahbubur Rahman"
        class="w-28 h-28 rounded-full object-cover"
      />

      <div class="space-y-0.5 font-semibold">
        <p class="text-xl lg:text-2xl">Mahbubur Rahman</p>

        <p class="text-gray-500">Software Engineer | Luton, UK</p>

        <NuxtLink
          href="mailto:rifat0153@gmail.com"
          class="text-gray-400 text-sm"
        >
          rifat0153@gmail.com
        </NuxtLink>

        <div class="flex gap-4 pt-2">
          <template v-for="(social, index) in socials" :key="index">
            <NuxtLink
              :href="social.url"
              target="_blank"
              class="text-gray-500 hover:text-gray-800"
              :title="social.name"
            >
              <Icon :name="social.icon" class="w-6 h-6" />
            </NuxtLink>
          </template>
        </div>
      </div>
    </div>

    <p class="mt-10 text-gray-700 text-[15px] text-base leading-6">
      Results-driven software engineer with 5+ years of experience building and
      optimizing scalable systems. Specializing in .NET, cloud technologies, and
      full-stack development, I transform complex challenges into
      high-performance solutions.
    </p>
  </div>
</template>

<script setup lang="ts">
import { NuxtImg } from "#components";

const socials = [
  {
    name: "LinkedIn",
    url: "http://linkedin.com/in/mahbubur2",
    icon: "mdi:linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/rifat0153",
    icon: "mdi:github",
  },
  {
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/10734390/mahbuburrahman-rifat",
    icon: "mdi:stackoverflow",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/rifat0153/",
    icon: "simple-icons:leetcode",
  },
] as const;
</script>

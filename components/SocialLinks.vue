<script setup lang="ts">
const linkedInPrfoileUrl = "https://www.linkedin.com/in/mahbubur2/";
const githubProfileUrl = "https://github.com/rifat0153";

const links = [
  {
    name: "Github",
    icon: "mdi:github",
    url: githubProfileUrl,
  },
  {
    name: "Linkedin",
    icon: "mdi:linkedin",
    url: linkedInPrfoileUrl,
  },
];
</script>

<template>
  <div
    class="mb-20 mt-10 flex items-center justify-center gap-10 dark:text-gray-200"
  >
    <NuxtLink
      v-for="item in links"
      :key="item.name"
      :to="item.url"
      external
      target="_blank"
    >
      <Icon :name="item.icon" class="h-10 w-10" />
    </NuxtLink>
  </div>
</template>

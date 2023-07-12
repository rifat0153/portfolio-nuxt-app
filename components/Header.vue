<script setup lang="ts">
const config = useRuntimeConfig();
const cvLink = config.public.cvLink;
</script>

<template>
  <div
    class="border-b-[1px] bg-purple-700 px-10 py-4 font-mono leading-none text-white transition-colors duration-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
  >
    <div class="mx-auto flex w-full max-w-5xl items-center justify-between">
      <div>
        <NuxtLink to="/" class="text-2xl font-bold"> mahbubur.dev </NuxtLink>
      </div>

      <div class="flex items-center gap-4 text-md lg:gap-8">
        <NuxtLink to="/projects">Projects</NuxtLink>

        <NuxtLink to="/contacts">Contact</NuxtLink>

        <ColorModeToggle />

        <NuxtLink
          class="rounded-sm bg-pink-500 bg-gradient-to-r px-2 py-1"
          :to="cvLink"
          target="_blank"
        >
          Resume
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

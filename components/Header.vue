<script setup lang="ts">
const config = useRuntimeConfig();
const cvLink = config.public.cvLink;
</script>

<template>
  <div
    class="border-b-[1px] border-appbar bg-appbar px-10 py-3 font-sans font-medium leading-4 text-white duration-500 dark:border-appbar dark:bg-appbar dark:text-gray-200"
  >
    <div class="mx-auto flex w-full max-w-5xl items-center justify-between">
      <div>
        <NuxtLink to="/" class="text-2xl font-bold"> mahbubur.dev </NuxtLink>
      </div>

      <div class="flex items-center gap-6 text-md lg:gap-10">
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

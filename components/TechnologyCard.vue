<script setup lang="ts">
import { Technology } from "core/types/technology";

const props = defineProps<{
  tech: Technology;
}>();

const imageSrc = useAsset(
  props.tech.image.assetPath + "." + props.tech.image.fileType
);
</script>

<template>
  <div
    class="rounded-md py-4 text-center font-medium text-black shadow-lg dark:bg-slate-700 dark:text-gray-200 dark:shadow-slate-800"
  >
    <img
      :src="imageSrc"
      width="300"
      height="300"
      :alt="props.tech.name"
      style="object-fit: contain"
      class="mx-auto my-2 rounded-full p-10"
    />

    <p class="pb-2 text-lg font-medium lg:text-2xl">
      {{ props.tech.name }}
    </p>
    <p class="pb-4 text-sm text-gray-500 dark:text-gray-400 lg:pb-8 lg:text-md">
      {{ props.tech.experience }}
    </p>

    <p class="text-cyan-600">{{ props.tech.name }} Techs I Use</p>

    <div
      v-for="tech in props.tech.tags"
      :key="tech"
      class="font-medium lg:text-lg"
    >
      {{ tech }}
    </div>
  </div>
</template>

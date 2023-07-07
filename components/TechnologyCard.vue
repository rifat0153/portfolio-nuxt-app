<script setup lang="ts">
import { Technology } from "core/types/technology";

const props = defineProps<{
  tech: Technology;
}>();
</script>

<template>
  <div
    className="rounded-md py-4 text-center font-medium text-black shadow-lg dark:bg-slate-700
                    dark:text-gray-200 dark:shadow-slate-800"
  >
    <img
      :src="
        useAsset(props.tech.image.assetPath + '.' + props.tech.image.fileType)
      "
      width="{300}"
      height="{300}"
      :alt="props.tech.name"
      style="object-fit: contain; width: 80%"
      className="mx-auto my-2 rounded-full p-10"
    />

    <p className="text-lg lg:text-2xl pb-2 font-medium">
      {{ props.tech.name }}
    </p>
    <p
      className="text-sm lg:text-md text-gray-500 dark:text-gray-400 pb-4 lg:pb-8"
    >
      {{ props.tech.experience }}
    </p>

    <p className="text-cyan-600">{{ props.tech.name }} Techs I Use</p>

    <div
      v-for="tech in props.tech.tags"
      :key="tech"
      className="lg:text-lg font-medium"
    >
      {{ tech }}
    </div>
  </div>
</template>

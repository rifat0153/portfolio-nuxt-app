<template>
  <div class="experience-list">
    <ExperienceCard
      v-for="experience in experienceList"
      :key="experience.id"
      v-bind="experience"
    />
  </div>
</template>

<script lang="ts" setup>
import { experiences } from "~/data/experience";

const experienceList = experiences;
</script>

<style>
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}
</style>

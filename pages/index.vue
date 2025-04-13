<template>
  <div class="max-w-xl mx-auto p-4 lg:p-0">
    <div class="pt-40 font-inter">
      <AboutSection />

      <div class="mt-5 pb-10">
        <SkillList />
      </div>

      <div class="mt-10 pb-10">
        <ExperinceCardList />
      </div>
    </div>
  </div>

  <div id="projects" class="mt-10 pb-10">
    <ProjectList />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Mahbubur Rahman Portfolio | .NET, Typescript and Vue.js Expert",
  meta: [
    {
      name: "description",
      content:
        "Full-Stack Software Engineer | .NET, Typescript and Vue.js Expert",
    },
  ],
});
</script>

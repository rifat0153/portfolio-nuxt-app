<template>
  <div class="grid grid-cols-4 skew-y-2">
    <div
      v-for="skill in skills"
      :key="skill.name"
      class="flex flex-col items-center text-center p-4 shadow-[0_0_2px_rgba(0,0,0,0.2)] rounded-lg"
    >
      <div class="w-24 h-24 flex items-center justify-center mb-2">
        <Icon :name="skill.icon" class="w-full h-full" />
      </div>
      <span>{{ skill.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
export type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: "C#", icon: "devicon:csharp" },
  { name: ".NET Core 8", icon: "devicon:dot-net" },
  { name: "JavaScript", icon: "devicon:javascript" },
  { name: "Vue.js", icon: "devicon:vuejs" },
  { name: "Nuxt.js", icon: "devicon:nuxtjs" },
  { name: "TypeScript", icon: "devicon:typescript" },
  { name: "Tailwind", icon: "devicon:tailwindcss" },
  { name: "REST APIs", icon: "devicon:rest" }, // Note::Devicons not have a specific icon for REST APIs
  { name: "SQL Server", icon: "devicon:microsoftsqlserver" },
  { name: "Azure", icon: "devicon:azure" },
  { name: "Tensorflow", icon: "devicon:tensorflow" },
  { name: "Flutter", icon: "devicon:flutter" },
  { name: "Firebase", icon: "devicon:firebase" },
  { name: "Android", icon: "devicon:android" },
  { name: "Node.js", icon: "devicon:nodejs" },
  { name: "Postman", icon: "devicon:postman" },
  { name: "Express.js", icon: "devicon:express" },
  { name: "MongoDB", icon: "devicon:mongodb" },
  { name: "Docker Compose", icon: "devicon:docker" }, // Note::Devicons not have a specific icon for Docker Compose
  { name: "React", icon: "devicon:react" },
  { name: "CSS", icon: "devicon:css3" },
  { name: "HTML", icon: "devicon:html5" },
  { name: "Git", icon: "devicon:git" },
];
</script>

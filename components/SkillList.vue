<template>
  <div class="grid grid-cols-4 md:grid-cols-5 gap-2 skew-y-2">
    <div
      v-for="(skill, index) in skills"
      ref="card"
      :key="index"
      class="col-span-1 transition-all duration-300 flex flex-col items-center text-center p-4 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-lg"
    >
      <Icon :name="skill.icon" class="w-6 h-6 lg:w-12 lg:h-12" />
      <p class="pt-2 text-xs lg:text-sm font-semibold text-gray-500">
        {{ skill.name }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useMouseInElement } from "@vueuse/core";

export type Skill = {
  name: string;
  icon: string;
};

const card = ref<HTMLElement[]>([]);

const calculateGridSize = () => {
  if (window.innerWidth >= 768) {
    return 5; // 5 columns for medium and larger screens
  } else {
    return 4; // 4 columns for smaller screens
  }
};

onMounted(() => {
  _addRemoveHoverClass();

  const gridSize = calculateGridSize();

  window.addEventListener("resize", () => {
    const newGridSize = calculateGridSize();
    if (newGridSize !== gridSize) {
      // Recalculate the adjacent cards if the grid size changes
      _addRemoveHoverClass();
    }
  });
});

let watchHandlers: (() => void)[] = [];

function _addRemoveHoverClass() {
  // remove all the existing watch handlers
  watchHandlers.forEach((stopWatch) => stopWatch());
  // remove all the existing hover classes
  card.value?.forEach((el) => {
    el.classList.remove("card-hover");
    el.classList.remove("adjacent-card");
  });

  const gridSize = calculateGridSize();

  card.value?.forEach((el, index) => {
    const { isOutside } = useMouseInElement(el);

    // Calculate the row and column of the current card
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;

    // Filter out the current card from the adjacent cards
    const adjacentCards = card.value?.filter((_, i) => {
      // Calculate the row and column of the adjacent card
      const adjRow = Math.floor(i / gridSize);
      const adjCol = i % gridSize;

      // Check if the adjacent card is in the top, bottom, left, or right position
      return (
        (adjRow === row - 1 && adjCol === col) || // Top
        (adjRow === row + 1 && adjCol === col) || // Bottom
        (adjRow === row && adjCol === col - 1) || // Left
        (adjRow === row && adjCol === col + 1) // Right
      );
    });

    const handle = watch(isOutside, (value) => {
      if (!value) {
        el.classList.add("card-hover");
        adjacentCards?.forEach((card) => card.classList.add("adjacent-card"));
      } else {
        el.classList.remove("card-hover");
        adjacentCards?.forEach((card) =>
          card.classList.remove("adjacent-card")
        );
      }
    });

    watchHandlers.push(handle);
  });
}

const skills: Skill[] = [
  { name: "C#", icon: "devicon:csharp" },
  { name: ".NET Core", icon: "devicon:dot-net" },
  { name: "JavaScript", icon: "devicon:javascript" },
  { name: "Vue.js", icon: "devicon:vuejs" },
  { name: "Nuxt.js", icon: "devicon:nuxtjs" },
  { name: "TypeScript", icon: "devicon:typescript" },
  { name: "Tailwind", icon: "devicon:tailwindcss" },
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
  { name: "Git", icon: "devicon:git" },
];
</script>

<style scoped>
.card-hover {
  background-color: #ffffff;
  z-index: 50;
  transform: scale(115%) translateX(-30px) translateY(-20px);
  box-shadow: 0 0 20px #15ca82;
}

.adjacent-card {
  background-color: #ffffff;
  z-index: 10;
  transform: scale(104%) translateX(-10px) translateY(-10px);
  box-shadow: 0 0 20px #15ca8255;
}
</style>

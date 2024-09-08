<template>
  <p class="mb-4 font-semibold">Core Skills</p>

  <div class="flex flex-wrap gap-2 mb-5">
    <span
      v-for="type in types"
      :key="type"
      @click="toggleType(type)"
      :class="[
        'cursor-pointer px-3 py-1 rounded-full text-sm font-semibold',
        selectedType.includes(type)
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-700',
      ]"
    >
      {{ type }}
    </span>
  </div>

  <button
    @click="shuffleSkills"
    class="mb-5 px-4 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
  >
    Shuffle Skills
  </button>

  <div
    v-auto-animate="{ duration: 500 }"
    class="grid grid-cols-4 md:grid-cols-5 gap-2"
  >
    <div
      v-for="(skill, index) in filteredSkills"
      ref="card"
      :key="skill.name"
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

const types = ["Frontend", "Backend", "Database", "Cloud", "Mobile"] as const;

export type Skill = {
  name: string;
  icon: string;
  type: (typeof types)[number];
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

const skills = ref<Skill[]>([
  { name: "C#", icon: "devicon:csharp", type: "Backend" },
  { name: ".NET Core", icon: "devicon:dot-net", type: "Backend" },
  { name: "JavaScript", icon: "devicon:javascript", type: "Frontend" },
  { name: "Vue.js", icon: "devicon:vuejs", type: "Frontend" },
  { name: "Nuxt.js", icon: "devicon:nuxtjs", type: "Frontend" },
  { name: "TypeScript", icon: "devicon:typescript", type: "Frontend" },
  { name: "Tailwind", icon: "devicon:tailwindcss", type: "Frontend" },
  { name: "SQL Server", icon: "devicon:microsoftsqlserver", type: "Database" },
  { name: "Azure", icon: "devicon:azure", type: "Cloud" },
  { name: "Tensorflow", icon: "devicon:tensorflow", type: "Backend" },
  { name: "Flutter", icon: "devicon:flutter", type: "Mobile" },
  { name: "Firebase", icon: "devicon:firebase", type: "Cloud" },
  { name: "Android", icon: "devicon:android", type: "Mobile" },
  { name: "Node.js", icon: "devicon:nodejs", type: "Backend" },
  { name: "Postman", icon: "devicon:postman", type: "Backend" },
  { name: "Express.js", icon: "devicon:express", type: "Backend" },
  { name: "MongoDB", icon: "devicon:mongodb", type: "Database" },
  { name: "Docker Compose", icon: "devicon:docker", type: "Cloud" },
  { name: "React", icon: "devicon:react", type: "Frontend" },
  { name: "Git", icon: "devicon:git", type: "Backend" },
]);

const toggleType = (type: (typeof types)[number]) => {
  if (selectedType.value.includes(type)) {
    selectedType.value = selectedType.value.filter((t) => t !== type);
  } else {
    selectedType.value.push(type);
  }
};

const selectedType = ref<(typeof types)[number][]>([]);

const filteredSkills = computed<Skill[]>(() => {
  if (selectedType.value.length === 0) return skills.value;

  return skills.value.filter((skill) =>
    selectedType.value.includes(skill.type)
  );
});

// Watch the filtered skills and add/remove hover classes
watch(
  () => filteredSkills.value,
  () => {
    console.log("filteredSkills changed");
    _addRemoveHoverClass();
  },
  { flush: "post" }
);

function shuffleSkills() {
  skills.value = skills.value
    .map((skill) => ({ skill, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ skill }) => skill);
}

function _addRemoveHoverClass() {
  console.log("Adding hover class" + card.value.length);

  // remove all the existing watch handlers
  watchHandlers.forEach((stopWatch) => stopWatch());

  // Sort the cards by the index of the skill in the skills array. This will ensure after shuffling the cards, the hover effect will still work correctly.
  const cards = card.value.toSorted((a, b) => {
    const aIndex = skills.value.findIndex(
      (skill) => skill.name === a.innerText
    );
    const bIndex = skills.value.findIndex(
      (skill) => skill.name === b.innerText
    );

    return aIndex - bIndex;
  });

  // remove all the existing hover classes
  cards?.forEach((el) => {
    console.log("Card is: " + el.innerText);

    el.classList.remove("card-hover");
    el.classList.remove("adjacent-card");
  });

  const gridSize = calculateGridSize();

  cards?.forEach((el, index) => {
    const { isOutside } = useMouseInElement(el);

    // Calculate the row and column of the current card
    const row = Math.floor(index / gridSize);
    const col = index % gridSize;

    // Filter out the current card from the adjacent cards
    const adjacentCards = cards?.filter((_, i) => {
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

    const handle = watch(
      isOutside,
      (value) => {
        if (!value) {
          el.classList.add("card-hover");
          adjacentCards?.forEach((card) => card.classList.add("adjacent-card"));
        } else {
          el.classList.remove("card-hover");
          adjacentCards?.forEach((card) =>
            card.classList.remove("adjacent-card")
          );
        }
      },
      { flush: "post" }
    );

    watchHandlers.push(handle);
  });
}
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

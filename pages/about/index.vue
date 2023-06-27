<script setup lang="ts">
definePageMeta({
  layout: "default",
  title: "About",
  description: "About page description",
  image: "https://nuxtjs.org/nuxt-card.png",
});

const counterStore = useCounterStore();
</script>

<template>
  <div class="text-center font-bold">
    lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos
    <NuxtLink to="/">Home</NuxtLink>
  </div>

  <p>
    {{ counterStore.count }}
  </p>

  <button
    class="bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-600 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
    @click="counterStore.increment"
  >
    Increment
  </button>

  <hr />

  <Counter />
</template>

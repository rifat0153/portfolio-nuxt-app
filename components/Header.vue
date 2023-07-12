<script setup lang="ts">
const config = useRuntimeConfig();
const cvLink = config.public.cvLink;

const toggleDarkMode = () => {
  const html = document.querySelector("html")!;
  const isDarkMode = html.classList.contains("dark");

  if (isDarkMode) {
    html.classList.remove("dark");
  } else {
    html.classList.add("dark");
  }
};
</script>

<template>
  <div
    class="dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 flex w-full items-center justify-between gap-4 border-b-[1px] px-10 py-4 font-mono transition-colors duration-500"
  >
    <NuxtLink to="/" class="text-2xl font-bold leading-none"
      >Dev Portfolio</NuxtLink
    >

    <div
      class="text-gray-700 flex items-center justify-center gap-8 text-2xl font-semibold"
    >
      <NuxtLink to="/projects">Projects</NuxtLink>

      <NuxtLink>Contact</NuxtLink>
    </div>

    <div class="flex items-center gap-8">
      <button @click="toggleDarkMode">
        <svg
          class="fill-black dark:fill-white h-5 w-5"
          viewBox="0 0 35 35"
          data-name="Layer 2"
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"
            ></path>
          </g>
        </svg>
      </button>

      <NuxtLink
        class="from-cyan-500 to-teal-500 rounded-sm bg-gradient-to-r px-2 py-1 leading-none"
        :to="cvLink"
        target="_blank"
      >
        Resume
      </NuxtLink>
    </div>
  </div>
</template>

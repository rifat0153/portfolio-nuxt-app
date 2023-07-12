<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed(() => colorMode.value === "dark");

const toggleDarkMode = () => {
  if (colorMode.value === "dark") {
    colorMode.preference = "light";
  } else {
    colorMode.preference = "dark";
  }
};

const iconName = computed(() => {
  if (isDark.value) {
    return "mdi:weather-night";
  } else {
    return "mdi:white-balance-sunny";
  }
});
</script>

<template>
  <button @click="toggleDarkMode">
    <Icon :name="iconName" size="1.5em" />
  </button>
</template>

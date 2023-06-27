<script setup lang="ts">
const counterStore = useCounterStore();
</script>

<template>
  <div>
    {{ counterStore.count }}
  </div>

  <button @click="counterStore.increment">Increment</button>
</template>
